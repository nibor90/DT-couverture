/**
 * Script : supprime toutes les mentions de tarifs dans data.ts
 * - Retire les blocs priceRange (ServiceData)
 * - Retire les items de FAQ dont la réponse contient "€"
 * - Retire les phrases dans les sections "content" contenant "€"
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "../src/lib/data.ts");

let src = readFileSync(filePath, "utf8");

// ─────────────────────────────────────────────────────────
// 1. Supprimer les blocs priceRange dans les services
//    Pattern : "    priceRange: {\n...    },\n"
// ─────────────────────────────────────────────────────────
// On cherche le bloc priceRange complet avec son contenu
src = src.replace(/\s+priceRange:\s*\{[^}]*(?:\{[^}]*\}[^}]*)*\},?\n/g, "\n");

// ─────────────────────────────────────────────────────────
// 2. Supprimer l'interface priceRange dans ServiceData
// ─────────────────────────────────────────────────────────
src = src.replace(/\s+priceRange:\s*\{[\s\S]*?note:\s*string;\s*items:[^;]+;\s*\};\n/g, "\n");

// ─────────────────────────────────────────────────────────
// 3. Supprimer les items de FAQ dont la réponse contient "€"
//    Pattern :  { question: "...", answer: "...€..." },
// ─────────────────────────────────────────────────────────
// Matches a FAQ object on one or two lines containing "€" in answer
src = src.replace(/\s*\{\s*question:\s*"[^"]*",\s*answer:\s*"[^"]*€[^"]*"\s*\},?\n/g, "\n");

// Also handle single-quoted versions (unlikely but safe)
src = src.replace(/\s*\{\s*question:\s*'[^']*',\s*answer:\s*'[^']*€[^']*'\s*\},?\n/g, "\n");

// ─────────────────────────────────────────────────────────
// 4. Supprimer les phrases contenant "€" dans les champs "content"
//    On retire uniquement les phrases (terminées par .) contenant €
//    sans casser les autres phrases du même content.
// ─────────────────────────────────────────────────────────
// Split content strings and remove sentences with €
src = src.replace(/(content:\s*")([\s\S]*?)(")/g, (match, open, content, close) => {
  if (!content.includes("€")) return match;
  // Split on '. ' or '. \n' boundaries
  const sentences = content.split(/(?<=\.)\s+/);
  const filtered = sentences.filter(s => !s.includes("€"));
  if (filtered.length === 0) return match; // keep at least something
  return open + filtered.join(" ") + close;
});

// ─────────────────────────────────────────────────────────
// 5. Nettoyer les doubles lignes vides créées
// ─────────────────────────────────────────────────────────
src = src.replace(/\n{3,}/g, "\n\n");

writeFileSync(filePath, src, "utf8");
console.log("✅ data.ts nettoyé : tarifs supprimés.");
