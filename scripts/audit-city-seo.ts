/**
 * Audit SEO / contenu des pages ville (CityData).
 * Usage : npx --yes tsx scripts/audit-city-seo.ts
 */
import { cities } from "../src/lib/data";

/** Seuils « qualité SEO » (recommandation éditoriale) */
const Q_META_DESC = 80;
const Q_HERO = 100;
const Q_SECTIONS = 3;
const Q_SECTION_CONTENT = 120;
const Q_LOCAL_SPEC = 60;
const Q_FAQ = 3;
const Q_FAQ_ANSWER = 40;

/** Seuils « page vide / non exploitable » — ce qui manque vraiment de texte ou de SEO */
const C_META_DESC = 40;
const C_HERO = 40;
const C_SECTIONS = 2;
const C_SECTION_CONTENT = 50;
const C_FAQ = 1;

const qualityIssues: { name: string; slug: string; issues: string[] }[] = [];
const criticalIssues: { name: string; slug: string; issues: string[] }[] = [];

for (const c of cities) {
  const q: string[] = [];
  const crit: string[] = [];

  if (!c.metaTitle?.trim()) {
    q.push("metaTitle vide");
    crit.push("metaTitle vide");
  }
  if (!c.metaDescription?.trim() || c.metaDescription.length < C_META_DESC) {
    crit.push(`metaDescription absente ou < ${C_META_DESC} car.`);
  } else if (c.metaDescription.length < Q_META_DESC) {
    q.push(`metaDescription < ${Q_META_DESC} car. (${c.metaDescription.length})`);
  }

  if (!c.h1?.trim()) {
    q.push("h1 vide");
    crit.push("h1 vide");
  }
  if (!c.heroText?.trim() || c.heroText.length < C_HERO) {
    crit.push(`heroText quasi absent (< ${C_HERO} car.)`);
  } else if (c.heroText.length < Q_HERO) {
    q.push(`heroText < ${Q_HERO} car. (${c.heroText.length})`);
  }

  const secCount = c.sections?.length ?? 0;
  if (secCount < C_SECTIONS) crit.push(`moins de ${C_SECTIONS} sections (${secCount})`);
  else if (secCount < Q_SECTIONS) q.push(`sections: ${secCount} (< ${Q_SECTIONS})`);

  c.sections?.forEach((s, i) => {
    const len = s.content?.length ?? 0;
    if (!s.title?.trim()) crit.push(`section ${i + 1} sans titre`);
    if (len < C_SECTION_CONTENT) crit.push(`section «${(s.title ?? "?").slice(0, 35)}…» < ${C_SECTION_CONTENT} car.`);
    else if (len < Q_SECTION_CONTENT) {
      q.push(`section «${(s.title ?? "?").slice(0, 35)}…» < ${Q_SECTION_CONTENT} car.`);
    }
  });

  if (!c.localSpecificities?.trim() || c.localSpecificities.length < 40) {
    crit.push("localSpecificities absent ou très court");
  } else if (c.localSpecificities.length < Q_LOCAL_SPEC) {
    q.push(`localSpecificities < ${Q_LOCAL_SPEC} car.`);
  }

  if (!c.nearbyCommunes?.length) crit.push("nearbyCommunes vide");

  const faqN = c.faq?.length ?? 0;
  if (faqN < C_FAQ) crit.push("aucune FAQ");
  else if (faqN < Q_FAQ) q.push(`faq: ${faqN} (< ${Q_FAQ})`);

  c.faq?.forEach((f, i) => {
    if (!f.question?.trim() || !f.answer?.trim()) crit.push(`faq ${i + 1} incomplète`);
    else if ((f.answer?.length ?? 0) < 25) crit.push(`faq ${i + 1} réponse quasi vide`);
    else if ((f.answer?.length ?? 0) < Q_FAQ_ANSWER) q.push(`faq ${i + 1} réponse courte (${f.answer.length} car.)`);
  });

  if (q.length) qualityIssues.push({ name: c.name, slug: c.slug, issues: q });
  if (crit.length) criticalIssues.push({ name: c.name, slug: c.slug, issues: crit });
}

console.log(`Total villes : ${cities.length}\n`);

console.log("═══ Pages sans texte / SEO exploitable (critique) ═══");
if (criticalIssues.length === 0) {
  console.log("Aucune — toutes les pages ont meta, h1, hero, au moins 2 sections substantielles, FAQ et communes proches.\n");
} else {
  for (const p of criticalIssues) {
    console.log(`— ${p.name} (${p.slug})`);
    for (const i of p.issues) console.log(`    • ${i}`);
    console.log("");
  }
}

console.log(`═══ Pages « à renforcer » (qualité SEO recommandée, ${qualityIssues.length} villes) ═══`);
console.log("(réponses FAQ courtes, sections un peu légères, moins de 3 FAQ, etc.)\n");
for (const p of qualityIssues) {
  console.log(`— ${p.name} (${p.slug})`);
  for (const i of p.issues) console.log(`    • ${i}`);
  console.log("");
}
