/**
 * Script v2 : nettoyage complet data.ts
 * Supprime :
 * - Les lignes orphelines { label: "...", range: "...€..." }
 * - Les lignes orphelines     ],  qui ferment des items supprimés
 * - L'interface priceRange dans ServiceData
 * - Les FAQ items avec € dans la réponse (format multilignes aussi)
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "../src/lib/data.ts");

let lines = readFileSync(filePath, "utf8").split("\n");

const result = [];
let i = 0;

while (i < lines.length) {
  const line = lines[i];
  const trimmed = line.trim();

  // 1. Supprimer les lignes orphelines { label: "...", range: "..." }
  if (/^\{\s*label:\s*"[^"]*",\s*range:\s*"[^"]*"\s*\},?$/.test(trimmed)) {
    i++;
    continue;
  }

  // 2. Supprimer la ligne de fermeture orpheline "      ]," qui suit ces items
  //    On détecte : ligne = "      ]," ou "    ]," ET ligne précédente résultat vide (on vient de sauter)
  //    Plus sûr : on détecte les blocs process/signs/... qui NE sont pas cassés
  //    On va simplement supprimer les lignes qui ne sont que "]," et qui sont orphelines.
  //    Pour être sûr, on regarde si c'est une ligne ]  suivie de "    }," suivie de "    signs:"
  //    plutôt, on repère le pattern "    ],\n    },\n    signs:" dans la sortie courante.

  // 3. Supprimer les blocs de FAQ item avec € dans la réponse
  //    Pattern mono-ligne : { question: "...", answer: "...€..." },
  if (/^\{\s*question:\s*"[^"]*",\s*answer:\s*"[^"]*€[^"]*"\s*\},?$/.test(trimmed)) {
    i++;
    continue;
  }

  // 4. Supprimer les blocs de FAQ item sur 2 lignes
  //    ligne i : { question: "..."
  //    ligne i+1 :   answer: "...€..." },
  if (/^\{\s*question:\s*"[^"]*",?$/.test(trimmed) && i + 1 < lines.length) {
    const next = lines[i + 1].trim();
    if (/^answer:\s*"[^"]*€[^"]*"\s*\},?$/.test(next)) {
      i += 2;
      continue;
    }
  }

  // 5. Supprimer le bloc priceRange dans l'interface ServiceData
  //    (lignes 56-59 environ)
  if (/^priceRange:\s*\{$/.test(trimmed)) {
    // Skip jusqu'à la ligne de fermeture };
    while (i < lines.length && !/^\};?$/.test(lines[i].trim()) && !lines[i].trim().startsWith("signs:")) {
      i++;
    }
    // skip la ligne "  };" ou "  }," de fermeture de priceRange
    if (i < lines.length && /^\};?$/.test(lines[i].trim())) {
      i++;
    }
    continue;
  }

  result.push(line);
  i++;
}

// Post-traitement : nettoyer les séquences de lignes vides multiples
let src = result.join("\n");

// Supprimer les blocs orphelins qui restent: une ligne "    ]," seule
// juste avant "    }," puis "    signs:" — cela correspond aux fermetures des items[] et priceRange{}
// Pattern dans le fichier après nettoyage :
//   ...process items...
//   ],           <- fermeture du process array (valide)
//        { label: ... } SUPPRIMÉ
//      ],         <- orphan fermeture items[]
//    },           <- orphan fermeture priceRange{}
//    signs: [
// On les supprime:
src = src.replace(/(\n\s*\],\n\s*\},)(\n\s*signs:)/g, "$2");

// Nettoyer doubles lignes vides
src = src.replace(/\n{3,}/g, "\n\n");

writeFileSync(filePath, src, "utf8");
console.log("✅ Nettoyage v2 terminé.");
