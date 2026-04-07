export const siteConfig = {
  name: "DT Couverture",
  legalName: "DOMINIQUE TEDDY",
  siren: "814 058 277",
  siret: "814 058 277 00033",
  tva: "FR23814058277",
  ape: "43.91B",
  activity: "Travaux de couverture par éléments",
  founder: "Teddy Dominique",
  foundedYear: 2015,
  phone: "06 00 00 00 00",
  phoneHref: "tel:+33600000000",
  email: "contact@dt-couverture.fr",
  address: {
    street: "27 T Route des Artigues",
    city: "Saint-Denis-de-Pile",
    zip: "33910",
    full: "27 T Route des Artigues, 33910 Saint-Denis-de-Pile",
  },
  hours: "Lun - Sam : 7h00 - 19h00",
  url: "https://dt-couverture.fr",
  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },
};

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  sections: {
    title: string;
    content: string;
  }[];
  process: {
    step: string;
    description: string;
  }[];
  priceRange: {
    note: string;
    items: { label: string; range: string }[];
  };
  signs: string[];
  benefits: string[];
  faq: { question: string; answer: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "couverture-toiture",
    title: "Couverture & Toiture",
    shortTitle: "Couverture",
    icon: "fa-home",
    description: "Pose et rénovation de toiture en tuiles, ardoises ou zinc. Couverture neuve et réfection complète pour tous types de bâtiments.",
    metaTitle: "Couvreur Toiture Gironde | Rénovation & Pose Neuve | Devis Gratuit",
    metaDescription: "Couvreur spécialiste toiture en Gironde (33). Pose neuve, rénovation, réfection complète. Tuiles, ardoises, zinc. Garantie décennale. Devis gratuit sous 24h à Saint-Denis-de-Pile et environs.",
    h1: "Couvreur toiture en Gironde : pose, rénovation et réfection",
    heroText: "Vous cherchez un couvreur pour votre toiture en Gironde ? DT Couverture intervient pour la pose neuve, la rénovation et la réfection complète de tous types de toitures. Artisan qualifié, assurance décennale, devis gratuit sous 24h.",
    sections: [
      {
        title: "Pose de toiture neuve : construction et extension",
        content: "Que vous construisiez une maison individuelle, un garage, une dépendance ou un bâtiment professionnel, DT Couverture prend en charge la pose complète de votre toiture neuve. Nous travaillons en étroite collaboration avec votre maître d'œuvre ou votre constructeur pour garantir une couverture parfaitement adaptée à votre projet. Nous maîtrisons la pose de tous types de couvertures : tuiles mécaniques (type Romane, Marseillaise ou Double Romane), tuiles plates, tuiles canal traditionnelles de la région bordelaise, ardoises naturelles d'Angers ou d'Espagne, ardoises synthétiques, zinc à joint debout, et bac acier pour les bâtiments agricoles ou commerciaux. Chaque chantier inclut la vérification de la charpente, la pose de l'écran sous-toiture HPV (Haute Perméabilité à la Vapeur d'eau), le lattage ou le voligeage, et la mise en place de la couverture avec tous les accessoires : faîtières, rives, chatières de ventilation et solins.",
      },
      {
        title: "Rénovation de toiture : quand et pourquoi refaire sa couverture ?",
        content: "La rénovation de toiture devient nécessaire lorsque votre couverture montre des signes d'usure avancés : tuiles poreuses, mousses envahissantes malgré les traitements, fuites récurrentes, ou charpente affaiblie. En Gironde, le climat océanique — pluies fréquentes, humidité, vents d'ouest — accélère le vieillissement des toitures, surtout celles de plus de 30 ans. DT Couverture réalise la réfection partielle ou complète de votre couverture. Notre intervention commence toujours par un diagnostic gratuit sur place : nous montons sur le toit, vérifions l'état de chaque élément (couverture, zinguerie, charpente, isolation, ventilation) et vous remettons un compte-rendu détaillé avec photos. Selon le diagnostic, nous vous proposons la solution la plus adaptée : réparation ponctuelle, réfection partielle d'un versant, ou rénovation complète avec remplacement de l'écran sous-toiture et de la couverture.",
      },
      {
        title: "Remplacement de tuiles cassées et réparations ponctuelles",
        content: "Tuiles cassées par la grêle, ardoises fissurées par le gel, éléments déplacés par le vent ? Ces désordres, même ponctuels, compromettent l'étanchéité de votre toiture et peuvent provoquer des infiltrations d'eau dans vos combles, voire dans vos pièces de vie. Nous intervenons rapidement — souvent sous 48h — pour le remplacement des éléments endommagés. Notre stock de tuiles et ardoises courantes nous permet de trouver le matériau correspondant à votre couverture existante, même sur les toitures anciennes. Nous vérifions systématiquement les éléments de zinguerie environnants (noues, solins, abergements) pour vous garantir une étanchéité durable.",
      },
      {
        title: "Quel type de couverture choisir en Gironde ?",
        content: "Le choix du matériau de couverture dépend de plusieurs facteurs : la pente de votre toit, le PLU (Plan Local d'Urbanisme) de votre commune, votre budget et vos préférences esthétiques. En Gironde, les tuiles en terre cuite restent le matériau dominant : tuiles canal dans le Libournais et le Saint-Émilionnais, tuiles mécaniques dans les zones périurbaines. À Bordeaux et dans le centre historique, l'ardoise naturelle est imposée par les règlements d'urbanisme. Le zinc à joint debout est utilisé en complément pour les ouvrages de faible pente (vérandas, extensions, lucarnes). Le bac acier, économique et rapide à poser, convient aux bâtiments agricoles, hangars et ateliers. Nous vous conseillons le matériau idéal en fonction de votre projet et des contraintes locales.",
      },
    ],
    process: [
      { step: "Prise de contact et visite gratuite", description: "Nous nous déplaçons chez vous pour évaluer l'état de votre toiture et comprendre votre projet. Diagnostic complet avec photos." },
      { step: "Devis détaillé sous 48h", description: "Vous recevez un devis clair, ligne par ligne, sans surprise. Nous expliquons chaque poste de travaux." },
      { step: "Préparation du chantier", description: "Installation de l'échafaudage, protection de vos extérieurs, approvisionnement des matériaux." },
      { step: "Travaux de couverture", description: "Dépose de l'ancienne couverture si nécessaire, vérification de la charpente, pose de l'écran sous-toiture et de la nouvelle couverture." },
      { step: "Finitions et nettoyage", description: "Pose des faîtières, rives, solins. Nettoyage complet du chantier. Visite de réception avec vous." },
      { step: "Garantie décennale", description: "Attestation de garantie décennale remise. Nous restons disponibles pour le suivi de votre toiture." },
    ],
    priceRange: {
      note: "Prix indicatifs TTC, variable selon la complexité du chantier, l'accessibilité et les matériaux choisis. Devis gratuit sur place.",
      items: [
        { label: "Remplacement de tuiles (ponctuel)", range: "150 € - 500 €" },
        { label: "Réfection toiture tuiles (au m²)", range: "80 € - 160 €/m²" },
        { label: "Réfection toiture ardoises (au m²)", range: "120 € - 250 €/m²" },
        { label: "Couverture zinc joint debout (au m²)", range: "100 € - 200 €/m²" },
        { label: "Toiture neuve complète (100 m²)", range: "10 000 € - 25 000 €" },
      ],
    },
    signs: [
      "Tuiles cassées, déplacées ou manquantes visibles depuis le sol",
      "Taches d'humidité au plafond ou dans les combles",
      "Mousse épaisse et verdâtre recouvrant la couverture",
      "Toiture de plus de 30 ans n'ayant jamais été rénovée",
      "Augmentation inexpliquée de vos factures de chauffage",
      "Traces de rouille ou éléments de zinguerie percés",
      "Gouttières qui débordent régulièrement malgré le nettoyage",
    ],
    benefits: [
      "Artisan couvreur qualifié avec plus de 10 ans d'expérience",
      "Tous types de couverture : tuiles, ardoises, zinc, bac acier",
      "Diagnostic complet et gratuit avant intervention",
      "Matériaux de qualité sélectionnés auprès de fournisseurs locaux",
      "Garantie décennale sur tous les travaux de couverture",
      "Intervention rapide sur toute la Gironde et Dordogne",
      "Devis détaillé, transparent et sans engagement",
      "Respect strict des normes DTU de couverture",
      "Chantier propre : protection et nettoyage systématiques",
    ],
    faq: [
      { question: "Combien coûte une rénovation de toiture au m² en Gironde ?", answer: "Le prix d'une rénovation de toiture en Gironde varie entre 80 € et 250 €/m² selon le matériau (tuiles, ardoises, zinc), l'état de la charpente et la complexité du toit (pente, accessibilité, nombre de pénétrations). Pour une maison de 100 m² de toiture en tuiles mécaniques, comptez entre 10 000 € et 16 000 € tout compris. Nous réalisons un devis gratuit sur place pour vous donner un prix précis adapté à votre situation." },
      { question: "Quelle est la durée de vie d'une toiture en tuiles ?", answer: "Une toiture en tuiles terre cuite bien entretenue dure entre 50 et 100 ans. Les tuiles mécaniques modernes ont une durée de vie de 50 à 70 ans. Les ardoises naturelles durent 75 à 100 ans. Le zinc a une durée de vie de 30 à 80 ans selon la qualité. L'entretien régulier (démoussage, vérification de la zinguerie) est la clé pour atteindre ces durées." },
      { question: "Faut-il un permis de construire pour refaire sa toiture ?", answer: "Pour une réfection à l'identique (même matériau, même couleur), une simple déclaration préalable de travaux suffit. Si vous changez de matériau (par exemple tuiles vers ardoises), modifiez la couleur ou la pente, un permis de construire peut être exigé. En zone protégée (ABF, patrimoine), l'accord de l'Architecte des Bâtiments de France est nécessaire. Nous vous accompagnons dans toutes les démarches administratives." },
      { question: "Combien de temps durent les travaux de rénovation de toiture ?", answer: "Pour une maison individuelle classique (80 à 120 m² de toiture), comptez 1 à 2 semaines de travaux pour une réfection complète, selon la météo et la complexité du chantier. Un simple remplacement de tuiles peut être réalisé en une demi-journée. Nous vous communiquons un planning précis avant le démarrage des travaux." },
      { question: "Refaire sa toiture permet-il de faire des économies d'énergie ?", answer: "Oui, profiter d'une rénovation de toiture pour améliorer l'isolation est une excellente idée. En ajoutant un isolant performant sous la couverture neuve (sarking ou isolation sous rampants), vous pouvez réduire vos factures de chauffage de 25 à 30 %. De plus, ces travaux peuvent être éligibles aux aides MaPrimeRénov' et CEE." },
      { question: "Comment choisir un bon couvreur en Gironde ?", answer: "Vérifiez que le couvreur possède une assurance décennale valide, qu'il est inscrit au Répertoire des Métiers, et demandez des références de chantiers récents. Méfiez-vous des devis anormalement bas. Un bon couvreur se déplace gratuitement, vous remet un devis détaillé et vous explique les travaux. DT Couverture remplit tous ces critères et intervient avec transparence depuis 2015." },
    ],
  },
  {
    slug: "zinguerie",
    title: "Zinguerie",
    shortTitle: "Zinguerie",
    icon: "fa-tint",
    description: "Installation et réparation de gouttières, descentes d'eau, chéneaux et noues. Travaux de zinguerie en zinc, cuivre ou aluminium.",
    metaTitle: "Zinguerie Gironde | Gouttières, Chéneaux, Noues | Devis Gratuit",
    metaDescription: "Travaux de zinguerie en Gironde (33) : pose gouttières zinc, cuivre, alu. Chéneaux, descentes d'eau, abergements, noues. Artisan zingueur, devis gratuit.",
    h1: "Zinguerie en Gironde : gouttières, chéneaux et évacuation des eaux",
    heroText: "La zinguerie protège votre maison des dégâts des eaux. DT Couverture, artisan zingueur en Gironde, pose et répare vos gouttières, chéneaux, descentes d'eau et tous les ouvrages de zinguerie de toiture.",
    sections: [
      {
        title: "Pose et remplacement de gouttières en Gironde",
        content: "Les gouttières sont la première ligne de défense de votre maison contre les eaux de pluie. Une gouttière en mauvais état — percée, rouillée, déformée ou mal dimensionnée — entraîne des ruissellements le long des murs, des infiltrations dans les fondations, et à terme des problèmes d'humidité structurelle. DT Couverture pose tous les types de gouttières : gouttières demi-rondes (les plus courantes en Gironde), gouttières carrées ou moulurées pour un rendu esthétique, gouttières pendantes ou gouttières rampantes selon la configuration de votre toit. Nous travaillons avec les matériaux les plus durables : zinc naturel (durée de vie 30 à 50 ans), cuivre (50 à 100 ans, patine verte naturelle du plus bel effet), aluminium laqué (large choix de coloris, sans entretien), et PVC pour les budgets serrés. Chaque installation est précisément dimensionnée : nous calculons le débit d'eau à évacuer selon la surface de votre toiture, la pluviométrie locale et la pente du toit, pour vous garantir un système performant y compris lors des fortes pluies.",
      },
      {
        title: "Chéneaux encaissés et apparents : fabrication sur-mesure",
        content: "Le chéneau est un ouvrage de zinguerie plus imposant que la gouttière, utilisé pour collecter les eaux de pluie sur les grandes longueurs de toiture, entre deux bâtiments mitoyens, ou au pied des toitures à faible pente. DT Couverture maîtrise la fabrication sur-mesure et la pose de chéneaux encaissés (intégrés dans la maçonnerie) et de chéneaux apparents. Nos chéneaux sont réalisés en zinc-titane de qualité VMZinc ou en cuivre, façonnés en atelier aux dimensions exactes de votre bâtiment. Nous réalisons également les descentes d'eau pluviale, les dauphins, les coudes et les raccordements au réseau d'évacuation. Un chéneau mal conçu ou mal entretenu est la première cause de dégât des eaux en toiture : faites appel à un professionnel.",
      },
      {
        title: "Noues, abergements de cheminée et solins",
        content: "Les points singuliers de votre toiture — noues (jonction entre deux pans de toit), abergements de cheminée, solins au pied des murs, raccords de Velux — sont les zones les plus vulnérables aux infiltrations. DT Couverture réalise tous ces ouvrages de zinguerie avec un savoir-faire artisanal qui garantit une étanchéité parfaite dans le temps. Nous utilisons des bandes de zinc pliées sur-mesure, du mastic d'étanchéité professionnel et des techniques de recouvrement conformes aux DTU pour assurer une protection durable. La reprise de solins et d'abergements est souvent la solution définitive aux fuites récurrentes au niveau des cheminées ou des murs de rehausse.",
      },
      {
        title: "Entretien et réparation de zinguerie existante",
        content: "Gouttières qui débordent, descentes bouchées, zinc percé par la corrosion ? L'entretien régulier de vos ouvrages de zinguerie est indispensable pour prévenir les dégâts des eaux. DT Couverture assure le nettoyage de vos gouttières (retrait des feuilles, débouchage), la réparation des fuites par soudure à l'étain, le remplacement des tronçons endommagés, et le recollage des descentes d'eau. Nous recommandons un contrôle de votre zinguerie au moins une fois par an, idéalement à l'automne après la chute des feuilles.",
      },
    ],
    process: [
      { step: "Visite et diagnostic gratuit", description: "Inspection complète de votre zinguerie existante. Identification des points faibles et des éléments à remplacer." },
      { step: "Devis détaillé sur-mesure", description: "Choix du matériau, prise de cotes précises, chiffrage transparent poste par poste." },
      { step: "Fabrication en atelier", description: "Découpe et façonnage de vos pièces de zinguerie aux dimensions exactes." },
      { step: "Pose et raccordement", description: "Dépose de l'ancienne zinguerie, pose des nouveaux éléments, soudure, raccordement aux descentes." },
      { step: "Test d'écoulement et nettoyage", description: "Vérification du bon écoulement des eaux. Nettoyage complet du chantier." },
    ],
    priceRange: {
      note: "Prix indicatifs TTC pose comprise. Tarifs variables selon la longueur, la hauteur et le matériau choisi.",
      items: [
        { label: "Gouttière zinc (au ml posé)", range: "40 € - 80 €/ml" },
        { label: "Gouttière cuivre (au ml posé)", range: "80 € - 150 €/ml" },
        { label: "Gouttière aluminium laqué (au ml posé)", range: "35 € - 70 €/ml" },
        { label: "Descente d'eau (pièce posée)", range: "150 € - 400 €" },
        { label: "Abergement de cheminée complet", range: "400 € - 1 200 €" },
        { label: "Nettoyage gouttières (maison)", range: "150 € - 350 €" },
      ],
    },
    signs: [
      "Gouttières qui débordent lors des pluies, même légères",
      "Traces de ruissellement sur les murs extérieurs",
      "Zinc percé, rouillé ou déformé visible depuis le sol",
      "Descentes d'eau décollées du mur ou bouchées",
      "Traces d'humidité dans la cave ou au pied des murs",
      "Bruit de gouttement permanent quand il pleut",
      "Mousse ou végétation poussant dans les gouttières",
    ],
    benefits: [
      "Artisan zingueur qualifié et expérimenté",
      "Fabrication sur-mesure en atelier",
      "Zinc, cuivre et aluminium laqué de qualité professionnelle",
      "Étanchéité garantie sur tous les points singuliers",
      "Soudure à l'étain traditionnelle pour une durabilité maximale",
      "Entretien et nettoyage de gouttières toute l'année",
      "Remplacement rapide des éléments endommagés",
      "Garantie décennale sur la pose complète",
    ],
    faq: [
      { question: "Quel matériau choisir pour mes gouttières ?", answer: "En Gironde, le zinc naturel est le meilleur choix pour la plupart des maisons : durable (30-50 ans), esthétique et résistant à la corrosion. Le cuivre est idéal pour les belles demeures et bâtiments patrimoniaux (durée de vie 50-100 ans, belle patine verte avec le temps). L'aluminium laqué est un excellent compromis pour les budgets modérés, avec un large choix de coloris assortis à vos menuiseries. Le PVC est le moins cher mais aussi le moins durable (15-25 ans). Nous vous conseillons le matériau le plus adapté à votre maison et à votre budget." },
      { question: "Combien coûte le remplacement de gouttières ?", answer: "Le remplacement complet des gouttières d'une maison standard (périmètre de 40 à 60 ml) coûte entre 2 000 € et 5 000 € en zinc, et entre 4 000 € et 9 000 € en cuivre, pose comprise. Un devis précis sera établi après notre visite gratuite." },
      { question: "À quelle fréquence nettoyer les gouttières ?", answer: "Au minimum deux fois par an : à l'automne après la chute des feuilles, et au printemps pour vérifier l'état après l'hiver. Si vous avez des arbres à proximité, un troisième nettoyage en été est recommandé. Nous proposons des contrats d'entretien annuel pour vous simplifier la vie." },
      { question: "Gouttière zinc ou PVC : quel choix ?", answer: "Le zinc est nettement supérieur au PVC en termes de durabilité (30-50 ans contre 15-25 ans pour le PVC), de résistance au gel et aux UV, et d'esthétique. Le PVC est moins cher à l'achat mais se déforme avec le temps, jaunit au soleil et devient cassant avec le gel. Sur le long terme, le zinc est plus économique car il ne nécessite pas de remplacement prématuré." },
      { question: "Ma gouttière fuit à un raccord, faut-il tout changer ?", answer: "Pas nécessairement. Si le reste de la gouttière est en bon état, une réparation ponctuelle par soudure à l'étain ou remplacement d'un tronçon suffit. Nous diagnostiquons l'état global de votre installation et vous conseillons honnêtement : réparation si c'est suffisant, remplacement si le zinc est trop corrodé." },
    ],
  },
  {
    slug: "charpente",
    title: "Charpente",
    shortTitle: "Charpente",
    icon: "fa-tools",
    description: "Réparation, renforcement et traitement de charpente bois. Remplacement de pièces endommagées et mise aux normes.",
    metaTitle: "Charpente Gironde | Réparation, Traitement, Renforcement | Devis Gratuit",
    metaDescription: "Charpentier couvreur en Gironde (33). Réparation, renforcement, traitement anti-insectes charpente bois. Capricornes, termites, mérule. Devis gratuit.",
    h1: "Réparation et traitement de charpente en Gironde",
    heroText: "Votre charpente craque, plie ou montre des signes d'infestation ? DT Couverture diagnostique, répare, renforce et traite votre charpente bois en Gironde. Intervention rapide, garantie décennale.",
    sections: [
      {
        title: "Diagnostic et réparation de charpente bois",
        content: "La charpente est la colonne vertébrale de votre toiture. Lorsqu'elle est endommagée — bois pourri par l'humidité, pièces fissurées par le poids, éléments attaqués par les insectes —, c'est toute la stabilité de votre toit qui est menacée. DT Couverture intervient pour le remplacement des éléments structurels défaillants : pannes (poutres horizontales supportant les chevrons), chevrons (pièces inclinées formant la pente du toit), liteaux (supports de tuiles), arbalétriers, entraits et contrefiches. Chaque pièce remplacée est dimensionnée selon les calculs de charges en vigueur, en bois traité classe 2 minimum, et assemblée selon les techniques traditionnelles (tenon-mortaise, boulonnage, connecteurs métalliques) ou modernes selon les cas. Nous intervenons autant que possible sans déposer la couverture complète, ce qui réduit le coût et la durée des travaux.",
      },
      {
        title: "Traitement préventif et curatif contre les insectes xylophages",
        content: "La Gironde est particulièrement touchée par les insectes xylophages : capricornes des maisons, petites et grosses vrillettes, lyctus, et surtout les termites, présents dans de nombreuses communes du département (Bordeaux, Libourne, Saint-Denis-de-Pile sont en zone termitée). DT Couverture réalise le traitement curatif de votre charpente par injection sous pression : nous perçons des trous d'injection tous les 30 cm dans les bois porteurs, puis injectons un produit insecticide-fongicide certifié CTB-P+ sous pression. Ce traitement élimine les insectes présents et protège le bois pendant 10 ans minimum. Pour les charpentes saines, nous appliquons un traitement préventif par pulvérisation ou badigeonnage, qui protège le bois avant toute attaque. Un certificat de traitement vous est systématiquement remis.",
      },
      {
        title: "Renforcement de charpente : panneaux solaires, changement de couverture",
        content: "Vous souhaitez poser des panneaux solaires, changer vos tuiles légères par des ardoises plus lourdes, ou aménager vos combles en pièce de vie ? Ces modifications augmentent les charges sur votre charpente et peuvent nécessiter un renforcement structurel. DT Couverture réalise les études de charge et pose les renforts nécessaires : doublement de pannes, ajout de jambes de force, pose de contrefiches, remplacement de connecteurs, mise en place de poutres métalliques (IPN) en complément du bois. Nous travaillons en coordination avec les bureaux d'études structure lorsque les modifications sont importantes.",
      },
      {
        title: "Traitement de la mérule et des champignons lignivores",
        content: "La mérule (Serpula lacrymans) est le champignon le plus destructeur des bois de construction. Elle prospère dans les ambiances humides et mal ventilées — exactement les conditions que l'on trouve dans les combles et sous-toitures mal entretenus. La mérule détruit le bois en profondeur et peut compromettre la solidité de votre charpente en quelques mois. DT Couverture assure le diagnostic, le traitement et la réparation des charpentes attaquées par la mérule et les autres champignons lignivores (coniophore, lenzite). Le traitement inclut : suppression de la source d'humidité, retrait des bois contaminés, traitement fongicide des bois et maçonneries adjacentes, remplacement des pièces détruites, et amélioration de la ventilation des combles pour éviter toute récidive.",
      },
    ],
    process: [
      { step: "Diagnostic charpente gratuit", description: "Inspection visuelle et sondage des bois. Identification des pathologies : insectes, champignons, défauts structurels." },
      { step: "Rapport et devis détaillé", description: "Compte-rendu avec photos, identification des pièces à traiter ou remplacer, chiffrage précis." },
      { step: "Préparation et sécurisation", description: "Étaiement temporaire si nécessaire. Mise en sécurité de la structure avant intervention." },
      { step: "Traitement ou remplacement", description: "Injection insecticide-fongicide et/ou remplacement des pièces de bois défectueuses." },
      { step: "Certificat et garantie", description: "Remise du certificat de traitement. Garantie décennale sur les travaux de charpente." },
    ],
    priceRange: {
      note: "Prix indicatifs TTC. Le coût dépend de la surface de charpente, de l'accessibilité et de l'étendue des dégâts.",
      items: [
        { label: "Traitement préventif (au m²)", range: "15 € - 30 €/m²" },
        { label: "Traitement curatif par injection (au m²)", range: "25 € - 50 €/m²" },
        { label: "Remplacement d'un chevron", range: "200 € - 600 €" },
        { label: "Remplacement d'une panne", range: "500 € - 1 500 €" },
        { label: "Traitement mérule (selon surface)", range: "3 000 € - 15 000 €" },
      ],
    },
    signs: [
      "Petits trous ronds (1-2 mm) dans les poutres et chevrons",
      "Sciure ou vermoulure fine au sol sous la charpente",
      "Bruit de grignotement dans les combles (surtout la nuit)",
      "Bois qui sonne creux quand on le tape",
      "Affaissement visible du toit vu de l'extérieur",
      "Odeur de champignon ou de moisi dans les combles",
      "Traces de filaments blancs ou bruns sur le bois (mérule)",
      "Fissures dans les poutres porteuses",
    ],
    benefits: [
      "Diagnostic gratuit par un professionnel expérimenté",
      "Traitement certifié CTB-P+ avec certificat de garantie",
      "Remplacement des pièces à l'identique en bois traité",
      "Intervention possible sans déposer toute la couverture",
      "Connaissance des pathologies spécifiques à la Gironde (termites)",
      "Renforcement structurel pour surcharge (panneaux solaires, aménagement combles)",
      "Coordination avec bureaux d'études si nécessaire",
      "Garantie décennale sur tous les travaux",
    ],
    faq: [
      { question: "Comment savoir si ma charpente est attaquée par des insectes ?", answer: "Les principaux signes sont : de petits trous ronds (1-4 mm) à la surface du bois, de la sciure fine (vermoulure) au sol sous les poutres, un bruit de grignotement audible la nuit dans les combles, et du bois qui sonne creux quand on le frappe. Les capricornes creusent des galeries ovales de 6-10 mm visibles en surface. En cas de doute, DT Couverture réalise un diagnostic gratuit de votre charpente." },
      { question: "Ma maison est en zone termitée, que faire ?", answer: "Si votre commune est classée en zone termitée (c'est le cas de la plupart des communes de Gironde), un diagnostic termites est obligatoire avant toute vente immobilière. Pour votre charpente, un traitement préventif est fortement recommandé même en l'absence de signes visibles. Nous appliquons des traitements certifiés qui protègent votre bois pendant 10 ans minimum." },
      { question: "Combien coûte un traitement de charpente ?", answer: "Le prix d'un traitement curatif par injection varie entre 25 € et 50 €/m² de charpente, soit entre 2 500 € et 5 000 € pour une maison de 100 m² au sol. Un traitement préventif coûte entre 15 € et 30 €/m². Le remplacement de pièces endommagées s'ajoute au coût du traitement. Devis gratuit sur place." },
      { question: "Le traitement de charpente est-il dangereux pour la santé ?", answer: "Les produits que nous utilisons sont certifiés CTB-P+ (conformes aux normes européennes de sécurité). Ils ne présentent aucun danger une fois secs (24-48h après application). Pendant le traitement et les 48h suivantes, nous recommandons de ne pas séjourner dans les combles et de ventiler. Les produits sont sans odeur une fois secs." },
      { question: "Quelle est la différence entre capricornes et vrillettes ?", answer: "Le capricorne des maisons est un gros insecte (1-2 cm) dont les larves creusent des galeries ovales de 6-10 mm dans les résineux (pin, sapin, épicéa). La vrillette (petite ou grosse) est plus petite et s'attaque à tous les bois, créant des trous ronds de 1-4 mm. Les deux sont destructeurs mais le capricorne cause des dégâts structurels plus rapides. Le traitement par injection est efficace contre les deux." },
      { question: "Peut-on aménager des combles sans renforcer la charpente ?", answer: "Cela dépend du type de charpente. Les charpentes traditionnelles (avec pannes et chevrons) sont souvent aménageables sans renforcement majeur. Les charpentes industrielles (fermettes) nécessitent presque toujours un renforcement : remplacement des fermettes par une charpente traditionnelle ou pose de renforts métalliques. Nous réalisons une étude de faisabilité gratuite." },
    ],
  },
  {
    slug: "recherche-de-fuites",
    title: "Recherche de fuites",
    shortTitle: "Fuites",
    icon: "fa-search",
    description: "Diagnostic et localisation précise des infiltrations. Réparation rapide et durable pour stopper les dégâts des eaux.",
    metaTitle: "Fuite Toiture Gironde | Recherche d'Infiltration | Réparation Rapide",
    metaDescription: "Fuite de toiture en Gironde ? Diagnostic et réparation rapide des infiltrations par un couvreur professionnel. Intervention sous 24h, devis gratuit. Bâchage d'urgence.",
    h1: "Fuite de toiture en Gironde : recherche et réparation d'infiltrations",
    heroText: "Tache au plafond, moisissure, eau qui coule quand il pleut ? DT Couverture recherche et répare toutes les fuites de toiture en Gironde. Intervention rapide, diagnostic précis, réparation durable.",
    sections: [
      {
        title: "Comment détecter une fuite de toiture ? Les signes qui ne trompent pas",
        content: "Une fuite de toiture ne se manifeste pas toujours par un écoulement d'eau visible. Souvent, l'eau s'infiltre lentement et les premiers signes sont discrets : une tache jaunâtre ou brunâtre au plafond, un papier peint qui se décolle, de la peinture qui cloque, une odeur de moisi dans une pièce, des traces de moisissure noire dans les coins, ou un taux d'humidité anormalement élevé. Dans les combles, les signes sont plus évidents : bois humide, taches d'eau sur la sous-toiture, flaques sur le plancher. Le piège des fuites de toiture est que l'eau ne coule pas forcément à la verticale : elle peut cheminer le long des chevrons, des pannes ou de l'écran sous-toiture sur plusieurs mètres avant de se manifester, rendant la localisation de l'origine de la fuite complexe. C'est pourquoi le diagnostic par un couvreur professionnel est indispensable.",
      },
      {
        title: "Diagnostic professionnel : localiser l'origine de la fuite",
        content: "DT Couverture réalise un diagnostic complet de votre toiture pour identifier l'origine exacte de l'infiltration. Notre méthode combine l'inspection visuelle depuis les combles (traces d'humidité, cheminement de l'eau) et l'inspection de la couverture depuis l'extérieur (tuiles cassées ou déplacées, solins décollés, zinguerie percée, mousse soulevant les tuiles). Nous vérifions systématiquement tous les points singuliers de la toiture — les zones les plus vulnérables aux infiltrations : abergements de cheminée, raccords de Velux, noues, rives, faîtage, solins au pied des murs, pénétrations (antenne, VMC, conduit). Ces points singuliers sont responsables de plus de 70 % des fuites de toiture.",
      },
      {
        title: "Réparation définitive des fuites : les solutions durables",
        content: "Une fois la source identifiée, DT Couverture met en œuvre la réparation adaptée au problème constaté. Nos interventions les plus courantes comprennent : le remplacement de tuiles cassées ou poreuses, la réfection de solins au mortier ou en bande de zinc, la reprise d'abergements de cheminée (zinc + étanchéité), le remplacement de noues en zinc, la vérification et le resserrage des raccords de Velux, la réparation de faîtières descellées, et le traitement des remontées capillaires. Chaque réparation vise une solution définitive : nous ne nous contentons pas de colmater, nous traitons la cause de la fuite pour éviter toute récidive.",
      },
      {
        title: "Bâchage d'urgence et mise hors d'eau rapide",
        content: "En cas de fuite importante ou de sinistre (tempête, grêle), DT Couverture peut intervenir en urgence pour poser une bâche de protection sur la zone endommagée. Ce bâchage temporaire mais efficace protège votre habitation des intempéries en attendant la réparation définitive. Nous fournissons un constat détaillé avec photos pour votre déclaration de sinistre auprès de votre assurance habitation.",
      },
    ],
    process: [
      { step: "Appel et prise en charge rapide", description: "Décrivez-nous votre problème par téléphone. En cas d'urgence, intervention possible dans la journée." },
      { step: "Diagnostic sur place", description: "Inspection des combles et de la couverture. Identification précise de l'origine de la fuite." },
      { step: "Devis et explication", description: "Devis gratuit sur place. Nous vous montrons le problème et vous expliquons la réparation envisagée." },
      { step: "Réparation définitive", description: "Intervention ciblée : remplacement de tuiles, reprise de zinguerie, réfection de solins." },
      { step: "Vérification et garantie", description: "Test d'étanchéité. Garantie décennale sur la réparation. Conseils d'entretien préventif." },
    ],
    priceRange: {
      note: "Prix indicatifs TTC. Le coût dépend de la nature du problème, de l'accessibilité et de l'étendue des réparations.",
      items: [
        { label: "Diagnostic de fuite (seul)", range: "Gratuit" },
        { label: "Remplacement tuiles (ponctuel)", range: "150 € - 500 €" },
        { label: "Réfection solin cheminée", range: "300 € - 800 €" },
        { label: "Reprise abergement complet", range: "500 € - 1 500 €" },
        { label: "Bâchage d'urgence", range: "200 € - 600 €" },
        { label: "Réfection noue zinc", range: "400 € - 1 200 €" },
      ],
    },
    signs: [
      "Taches jaunes ou brunes au plafond, qui s'agrandissent quand il pleut",
      "Peinture qui cloque ou papier peint qui se décolle",
      "Moisissure noire dans les coins ou sur les murs",
      "Odeur de moisi ou de renfermé persistante",
      "Gouttes d'eau visibles quand il pleut fort",
      "Bois humide ou flaques d'eau dans les combles",
      "Taux d'humidité élevé mesuré dans une pièce",
      "Tuiles visiblement cassées ou déplacées vues depuis le sol",
    ],
    benefits: [
      "Diagnostic gratuit et précis par un couvreur expérimenté",
      "Intervention d'urgence sous 24h en Gironde",
      "Bâchage temporaire en cas de sinistre grave",
      "Réparation définitive, pas de simple colmatage",
      "Vérification de tous les points singuliers de la toiture",
      "Aide à la constitution du dossier d'assurance",
      "Conseils de prévention pour éviter les récidives",
      "Garantie décennale sur toutes les réparations",
    ],
    faq: [
      { question: "Ma toiture fuit, que faire en urgence ?", answer: "En premier lieu, protégez vos biens : déplacez les meubles, posez des récipients sous la fuite, coupez l'électricité si l'eau coule près d'un appareil électrique. Puis appelez-nous immédiatement au téléphone. Nous pouvons intervenir le jour même pour un bâchage d'urgence si nécessaire, puis planifier la réparation définitive." },
      { question: "L'assurance habitation couvre-t-elle les fuites de toiture ?", answer: "Cela dépend de la cause de la fuite. Les dégâts causés par une tempête (vents > 100 km/h), la grêle ou la neige sont généralement couverts par la garantie tempête de votre assurance. Les fuites dues au vieillissement ou au défaut d'entretien ne sont pas couvertes. Nous vous aidons à constituer votre dossier avec un rapport détaillé et des photos." },
      { question: "Pourquoi la fuite n'est-elle pas juste au-dessus de la tache au plafond ?", answer: "L'eau suit le chemin de moindre résistance : elle peut couler le long d'un chevron, d'une panne ou d'un écran sous-toiture sur plusieurs mètres avant de tomber verticalement. C'est pourquoi une tache au plafond du salon peut être causée par une tuile cassée à l'autre bout du toit. Le diagnostic par un professionnel est la seule façon de trouver l'origine réelle." },
      { question: "Combien coûte la réparation d'une fuite de toiture ?", answer: "Le coût varie énormément selon la cause. Un simple remplacement de tuiles coûte 150 à 500 €. Une reprise de solin de cheminée coûte 300 à 800 €. Une réfection de noue en zinc coûte 400 à 1 200 €. Le diagnostic est gratuit : nous identifions le problème et vous chiffrons la réparation avant toute intervention." },
      { question: "Comment prévenir les fuites de toiture ?", answer: "Un entretien régulier est la meilleure prévention : démoussage tous les 3-5 ans, nettoyage des gouttières 2 fois par an, vérification annuelle de la zinguerie et des points singuliers (cheminée, Velux, faîtage). Après chaque tempête, inspectez visuellement votre toit depuis le sol. Et n'attendez pas pour intervenir au moindre signe suspect." },
      { question: "Fuite au niveau de la cheminée : que faire ?", answer: "Les fuites au niveau de la cheminée sont très fréquentes. Elles proviennent le plus souvent d'un solin (jonction zinc/maçonnerie) vieilli, fissuré ou décollé, ou d'un abergement en zinc percé. La réparation consiste à refaire le solin et/ou l'abergement en zinc neuf avec une étanchéité soignée. C'est une intervention courante que nous maîtrisons parfaitement." },
    ],
  },
  {
    slug: "isolation-toiture",
    title: "Isolation Toiture",
    shortTitle: "Isolation",
    icon: "fa-wind",
    description: "Isolation thermique par l'intérieur ou l'extérieur (sarking). Amélioration des performances énergétiques de votre habitat.",
    metaTitle: "Isolation Toiture Gironde | Sarking, Combles Perdus, Rampants | Devis Gratuit",
    metaDescription: "Isolation toiture en Gironde : combles perdus, rampants, sarking. Jusqu'à 30% d'économies. Éligible MaPrimeRénov'. Artisan RGE, devis gratuit sous 24h.",
    h1: "Isolation de toiture en Gironde : combles, sarking et économies d'énergie",
    heroText: "30 % de la chaleur de votre maison s'échappe par le toit. DT Couverture isole votre toiture par l'intérieur ou l'extérieur (sarking) pour réduire vos factures et améliorer votre confort. Éligible aux aides financières.",
    sections: [
      {
        title: "Pourquoi isoler sa toiture ? L'investissement le plus rentable",
        content: "La toiture est le premier poste de déperditions thermiques d'une maison : jusqu'à 30 % de la chaleur s'échappe par un toit mal isolé. En Gironde, malgré un climat océanique relativement doux, les hivers humides et les étés de plus en plus chauds rendent l'isolation de toiture indispensable pour le confort et les économies d'énergie. Une bonne isolation réduit votre facture de chauffage de 25 à 30 %, améliore le confort d'été (la chaleur ne pénètre plus par le toit), supprime les sensations de parois froides, et valorise votre bien immobilier en améliorant son DPE (Diagnostic de Performance Énergétique). C'est le premier geste de rénovation énergétique à réaliser, et le plus rentable : le retour sur investissement se fait en 5 à 8 ans.",
      },
      {
        title: "Isolation des combles perdus par soufflage : rapide et économique",
        content: "Si vos combles ne sont pas aménagés et ne sont pas aménageables (hauteur sous faîtage insuffisante, charpente fermettes), l'isolation par soufflage est la solution la plus rapide et économique. DT Couverture projette un isolant en vrac — ouate de cellulose, laine de roche ou laine de verre — sur le plancher de vos combles à l'aide d'une souffleuse professionnelle. L'isolant remplit tous les recoins, même les plus difficiles d'accès (derrière les solives, autour des gaines). Nous posons une épaisseur de 30 à 40 cm pour atteindre une résistance thermique R=7, conformément aux recommandations de la RE2020. L'opération est réalisée en une demi-journée pour une maison de 100 m², sans aucune nuisance pour les occupants.",
      },
      {
        title: "Isolation sous rampants : pour des combles aménagés ou aménageables",
        content: "Si vous souhaitez aménager vos combles en pièce de vie ou si vos combles sont déjà habités mais mal isolés, l'isolation sous rampants est la solution. DT Couverture pose des panneaux isolants rigides ou semi-rigides (laine de bois, laine de verre haute densité, ouate de cellulose en panneaux) entre et sous les chevrons de votre charpente. Nous assurons une isolation continue, sans pont thermique, avec la pose soignée d'un pare-vapeur côté intérieur et d'une lame d'air ventilée côté couverture. L'épaisseur d'isolant varie de 20 à 30 cm selon le matériau et la performance visée (R=6 minimum recommandé).",
      },
      {
        title: "Isolation par l'extérieur (sarking) : la technique haut de gamme",
        content: "Le sarking est la Rolls-Royce de l'isolation de toiture. Cette technique consiste à poser des panneaux isolants rigides (polyuréthane, fibre de bois, polystyrène extrudé) par-dessus les chevrons, entre la charpente et la couverture. Avantages : isolation continue sans aucun pont thermique, préservation du volume habitable sous les combles, charpente apparente en décoration intérieure, et performances thermiques exceptionnelles. Le sarking est idéal lors d'une réfection complète de toiture : on en profite pour isoler en même temps, ce qui mutualise les coûts d'échafaudage et de main-d'œuvre. DT Couverture maîtrise cette technique exigeante et la propose systématiquement à ses clients lors d'une rénovation de couverture.",
      },
      {
        title: "Les aides financières pour l'isolation de toiture en 2026",
        content: "L'isolation de toiture est l'un des travaux les mieux subventionnés en France. En 2026, vous pouvez bénéficier de plusieurs aides cumulables : MaPrimeRénov' (jusqu'à 75 €/m² pour un ménage aux revenus modestes), les Certificats d'Économies d'Énergie (CEE, prime de 10 à 20 €/m²), l'éco-PTZ (prêt à taux zéro jusqu'à 30 000 €), et la TVA réduite à 5,5 % au lieu de 20 %. Pour une maison de 100 m² au sol, ces aides combinées peuvent couvrir 40 à 70 % du coût total de l'isolation. DT Couverture vous aide à monter vos dossiers de demande d'aides et travaille avec les organismes agréés pour simplifier vos démarches.",
      },
    ],
    process: [
      { step: "Audit énergétique gratuit", description: "Évaluation de l'isolation existante, mesure des déperditions, recommandation de la technique la plus adaptée." },
      { step: "Choix de la solution et devis", description: "Comparatif des solutions (soufflage, rampants, sarking), simulation des aides financières, devis détaillé." },
      { step: "Montage des dossiers d'aides", description: "Nous vous accompagnons pour MaPrimeRénov', CEE, éco-PTZ. Pré-validation avant travaux." },
      { step: "Travaux d'isolation", description: "Intervention rapide (1/2 journée à 1 semaine selon la technique). Chantier propre et respectueux." },
      { step: "Contrôle qualité et attestation", description: "Vérification de l'épaisseur et de la continuité de l'isolant. Remise de l'attestation pour les aides." },
    ],
    priceRange: {
      note: "Prix indicatifs TTC avant aides. Les aides (MaPrimeRénov', CEE) peuvent couvrir 40 à 70 % du coût.",
      items: [
        { label: "Soufflage combles perdus (au m²)", range: "20 € - 35 €/m²" },
        { label: "Isolation sous rampants (au m²)", range: "40 € - 80 €/m²" },
        { label: "Sarking — isolation par l'extérieur (au m²)", range: "100 € - 200 €/m²" },
        { label: "Maison 100 m² combles perdus (total)", range: "2 000 € - 3 500 €" },
        { label: "Maison 100 m² sarking (total)", range: "10 000 € - 20 000 €" },
      ],
    },
    signs: [
      "Factures de chauffage élevées malgré un système performant",
      "Sensation de froid près du plafond ou sous les rampants",
      "Chaleur étouffante dans les combles ou les chambres sous toit en été",
      "Condensation sur les fenêtres en hiver",
      "Courants d'air perceptibles venant du plafond",
      "DPE (Diagnostic de Performance Énergétique) classé E, F ou G",
      "Isolation existante de moins de 10 cm d'épaisseur",
      "Isolation en laine de verre tassée, humide ou rongée",
    ],
    benefits: [
      "Jusqu'à 30 % d'économies sur vos factures de chauffage",
      "Confort thermique amélioré été comme hiver",
      "Valorisation immobilière : meilleur DPE",
      "Éligible MaPrimeRénov', CEE, éco-PTZ, TVA 5,5 %",
      "Matériaux isolants certifiés ACERMI",
      "Isolation acoustique renforcée en prime",
      "Accompagnement complet pour les dossiers d'aides",
      "Chantier rapide et sans nuisance pour les occupants",
      "Garantie décennale sur tous les travaux d'isolation",
    ],
    faq: [
      { question: "Quelles aides financières pour isoler sa toiture en 2026 ?", answer: "Vous pouvez cumuler MaPrimeRénov' (jusqu'à 75 €/m² selon vos revenus), les primes CEE (10 à 20 €/m²), l'éco-PTZ (prêt à taux zéro jusqu'à 30 000 €), et la TVA réduite à 5,5 %. Pour une isolation de combles perdus de 100 m², les aides peuvent couvrir 60 à 70 % du coût total. Nous vous aidons à monter tous les dossiers." },
      { question: "Quelle épaisseur d'isolant pour ma toiture ?", answer: "Pour les combles perdus, la recommandation actuelle est R=7, soit 30 à 40 cm de laine soufflée. Pour les rampants (combles aménagés), R=6 minimum, soit 20 à 30 cm de panneaux selon le matériau. Pour le sarking, 12 à 18 cm de panneaux rigides de polyuréthane permettent d'atteindre R=6." },
      { question: "Isolation par l'intérieur ou par l'extérieur : que choisir ?", answer: "L'isolation par l'intérieur (sous rampants) est moins chère mais réduit le volume habitable et ne supprime pas tous les ponts thermiques. Le sarking (par l'extérieur) offre les meilleures performances, préserve le volume intérieur et la charpente apparente, mais coûte plus cher. Si vous devez refaire votre couverture, le sarking est le choix idéal : vous mutualisez les coûts. Pour un budget limité, le soufflage en combles perdus est le meilleur rapport performance/prix." },
      { question: "L'isolation par soufflage est-elle efficace ?", answer: "Oui, c'est la technique la plus efficace en rapport qualité-prix pour les combles perdus. L'isolant en vrac remplit parfaitement tous les recoins, ne laisse aucun pont thermique, et atteint facilement l'épaisseur recommandée. En une demi-journée, votre maison gagne 2 à 3 classes de DPE." },
      { question: "Combien de temps pour rentabiliser l'isolation de toiture ?", answer: "L'isolation de combles perdus par soufflage se rentabilise en 3 à 5 ans grâce aux économies d'énergie et aux aides. L'isolation sous rampants se rentabilise en 5 à 8 ans. Le sarking, plus coûteux, se rentabilise en 8 à 12 ans. Mais au-delà de l'aspect financier, le confort immédiat (plus de froid, plus de chaleur excessive) est le premier bénéfice ressenti." },
      { question: "Faut-il ventiler les combles après isolation ?", answer: "Absolument. Une bonne ventilation des combles est indispensable pour éviter la condensation et la dégradation de la charpente. Nous vérifions et installons si nécessaire des chatières de ventilation dans la couverture, un pare-vapeur côté intérieur, et une lame d'air entre l'isolant et la couverture (sauf en sarking où le panneau assure cette fonction)." },
    ],
  },
  {
    slug: "reparation-urgence",
    title: "Réparation & Urgence Toiture",
    shortTitle: "Urgence",
    icon: "fa-hard-hat",
    description: "Intervention rapide pour bâchage, réparation de tuiles cassées, dégâts de tempête. Dépannage toiture en urgence.",
    metaTitle: "Urgence Toiture Gironde | Dépannage Couvreur Rapide 24h | DT Couverture",
    metaDescription: "Urgence toiture Gironde : couvreur dépannage rapide sous 24h. Bâchage tempête, tuiles cassées, fuite urgente. Disponible 7j/7. Devis gratuit sur place.",
    h1: "Urgence toiture en Gironde : dépannage couvreur sous 24h",
    heroText: "Tempête, grêle, chute d'arbre, fuite soudaine ? DT Couverture intervient en urgence en Gironde pour sécuriser et réparer votre toiture. Disponible 7j/7, intervention sous 24h, bâchage d'urgence.",
    sections: [
      {
        title: "Bâchage d'urgence : protéger votre maison en attendant les réparations",
        content: "Lorsqu'une tempête arrache des tuiles, qu'un arbre tombe sur votre toit ou que la grêle perfore votre couverture, chaque heure compte. L'eau qui s'infiltre peut causer des dégâts considérables en quelques heures : plafonds effondrés, murs imbibés, installations électriques endommagées, mobilier détruit. DT Couverture intervient en urgence — souvent le jour même de votre appel — pour poser une bâche de protection professionnelle sur la zone endommagée. Notre bâchage est réalisé avec des bâches résistantes aux UV et au vent, fixées solidement sur la charpente, et dimensionnées pour couvrir largement la zone sinistrée. Cette protection temporaire mais efficace préserve votre habitation des intempéries pendant plusieurs semaines si nécessaire, le temps de planifier et réaliser la réparation définitive.",
      },
      {
        title: "Réparation rapide après tempête, grêle et sinistres",
        content: "Après un épisode climatique violent — les tempêtes hivernales sont fréquentes en Gironde avec des vents d'ouest pouvant dépasser 120 km/h —, votre toiture peut subir des dommages importants : tuiles arrachées ou brisées, faîtières déscellées, zinguerie arrachée, cheminée endommagée, charpente touchée par une chute d'arbre. DT Couverture assure la réparation complète de tous ces dégâts, de la simple tuile à remplacer jusqu'à la réfection d'une partie entière de la toiture. Nous intervenons dès que les conditions de sécurité le permettent, souvent dans les 24 à 48h suivant votre appel. Notre connaissance approfondie des toitures girondines nous permet de trouver rapidement les matériaux de remplacement adaptés, même pour les couvertures anciennes.",
      },
      {
        title: "Fuite soudaine : intervention express",
        content: "Une fuite de toiture qui apparaît brutalement — souvent lors d'une forte pluie — nécessite une intervention rapide pour limiter les dégâts dans votre habitation. DT Couverture se déplace en urgence pour localiser et colmater la fuite temporairement, puis planifie la réparation définitive dans les jours qui suivent. Les causes les plus fréquentes de fuites soudaines sont : une tuile déplacée par le vent, un solin de cheminée qui se décolle, une gouttière bouchée provoquant un débordement, ou un raccord de Velux qui lâche. Dans tous les cas, une intervention rapide évite que les dégâts ne s'aggravent.",
      },
      {
        title: "Dossier assurance : nous vous accompagnons de A à Z",
        content: "Après un sinistre toiture, les démarches administratives avec votre assurance peuvent être fastidieuses. DT Couverture vous simplifie la vie : nous réalisons un constat détaillé des dégâts avec reportage photo, nous vous fournissons un rapport circonstancié utilisable pour votre déclaration de sinistre, et nous établissons un devis conforme aux exigences des assureurs. Rappel important : vous devez déclarer le sinistre à votre assurance dans les 5 jours ouvrés (2 jours pour une catastrophe naturelle). N'attendez pas pour nous appeler, nous pouvons intervenir pour le bâchage en même temps que vous faites votre déclaration.",
      },
    ],
    process: [
      { step: "Appel d'urgence", description: "Décrivez-nous la situation. Nous évaluons la gravité et planifions l'intervention au plus vite." },
      { step: "Intervention rapide", description: "Déplacement sur site sous 24h. Bâchage d'urgence si nécessaire pour stopper les infiltrations." },
      { step: "Constat et photos", description: "Documentation complète des dégâts pour votre dossier d'assurance." },
      { step: "Devis de réparation", description: "Chiffrage précis des travaux de remise en état. Devis conforme aux exigences des assureurs." },
      { step: "Réparation définitive", description: "Travaux de réparation dès validation. Remise en état complète de votre toiture." },
    ],
    priceRange: {
      note: "Prix indicatifs TTC. Les sinistres couverts par l'assurance sont pris en charge selon votre contrat.",
      items: [
        { label: "Bâchage d'urgence (déplacement inclus)", range: "200 € - 600 €" },
        { label: "Remplacement tuiles (ponctuel)", range: "150 € - 500 €" },
        { label: "Réparation faîtage (au ml)", range: "40 € - 80 €/ml" },
        { label: "Remplacement de rives (au ml)", range: "30 € - 60 €/ml" },
        { label: "Réfection partielle après tempête", range: "1 000 € - 5 000 €" },
      ],
    },
    signs: [
      "Tuiles visiblement manquantes ou brisées après une tempête",
      "Eau qui coule dans la maison pendant ou après la pluie",
      "Arbre ou branche tombé sur le toit",
      "Bruit anormal sur le toit pendant le vent (tuiles qui claquent)",
      "Gouttières arrachées ou tordues",
      "Faîtières ou rives déplacées visibles depuis le sol",
      "Cheminée fissurée ou penchée",
      "Isolant ou écran sous-toiture visible depuis l'extérieur",
    ],
    benefits: [
      "Intervention sous 24h en Gironde, 7j/7 pour les urgences",
      "Bâchage professionnel résistant aux intempéries",
      "Couvreur réactif disponible par téléphone",
      "Constat détaillé et photos pour votre assurance",
      "Devis conforme aux exigences des assureurs",
      "Stock de tuiles et ardoises courantes pour remplacement rapide",
      "Réparations définitives et garanties (décennale)",
      "Expérience des sinistres climatiques de Gironde",
    ],
    faq: [
      { question: "Sous quel délai intervenez-vous en urgence ?", answer: "Nous nous engageons à intervenir sous 24h pour toute urgence toiture en Gironde. Pour les sinistres graves (trou dans le toit, eau qui coule abondamment), nous faisons notre maximum pour intervenir le jour même de votre appel. Appelez-nous directement par téléphone pour une prise en charge immédiate." },
      { question: "Comment déclarer un sinistre toiture à mon assurance ?", answer: "Contactez votre assurance par téléphone ou en ligne dans les 5 jours ouvrés suivant le sinistre (2 jours pour catastrophe naturelle). Décrivez les dégâts, prenez des photos avant toute intervention, et conservez les éléments endommagés si possible. Nous vous fournissons un rapport détaillé avec photos et un devis de remise en état pour compléter votre dossier." },
      { question: "L'assurance prend-elle en charge le bâchage d'urgence ?", answer: "Oui, dans la plupart des contrats d'assurance habitation, le bâchage d'urgence (mise hors d'eau) fait partie des frais de sauvegarde pris en charge. Conservez notre facture de bâchage pour la joindre à votre dossier de sinistre." },
      { question: "Combien coûte une réparation de toiture après tempête ?", answer: "Le coût dépend de l'étendue des dégâts. Un remplacement ponctuel de quelques tuiles coûte 150 à 500 €. Une réfection partielle d'un versant après une grosse tempête peut atteindre 1 000 à 5 000 €. Une toiture entièrement ravagée nécessite une réfection complète (10 000 à 25 000 €). Le bâchage initial coûte 200 à 600 €." },
      { question: "Que faire en attendant l'intervention du couvreur ?", answer: "Si de l'eau rentre, placez des récipients, protégez vos meubles avec des bâches plastique, coupez l'électricité dans les zones touchées. Ne montez pas sur le toit vous-même, c'est dangereux surtout par temps de vent ou de pluie. Si possible, accédez aux combles pour constater l'étendue des dégâts et prenez des photos pour votre assurance." },
    ],
  },
  {
    slug: "velux-fenetres-de-toit",
    title: "Velux & Fenêtres de toit",
    shortTitle: "Velux",
    icon: "fa-window-maximize",
    description: "Pose, remplacement et entretien de fenêtres de toit. Installation de Velux pour apporter lumière et ventilation à vos combles.",
    metaTitle: "Pose Velux Gironde | Installation Fenêtre de Toit | Prix & Devis Gratuit",
    metaDescription: "Pose et remplacement de Velux en Gironde (33). Fenêtre de toit, création d'ouverture, volet roulant. Artisan couvreur qualifié. Devis gratuit, prix clairs.",
    h1: "Pose de Velux et fenêtres de toit en Gironde : prix, étapes et conseils",
    heroText: "Vous aménagez vos combles ou souhaitez plus de lumière ? DT Couverture installe et remplace vos Velux et fenêtres de toit en Gironde. Création d'ouverture, étanchéité parfaite, volets roulants. Devis gratuit.",
    sections: [
      {
        title: "Pose de Velux : transformer vos combles en espace de vie",
        content: "La fenêtre de toit est l'élément qui transforme des combles sombres en un véritable espace de vie lumineux et agréable. Que vous aménagez vos combles en chambre, bureau, salle de jeux ou salle de bains, la pose de Velux est une étape incontournable. DT Couverture réalise la création complète d'ouvertures de toit, de A à Z : repérage de l'emplacement optimal (en fonction de l'orientation, de la vue et de la structure de la charpente), découpe de la couverture et des liteaux, adaptation ou création du chevêtre (cadre porteur en bois qui entoure la fenêtre), pose de la fenêtre Velux avec son raccord d'étanchéité adapté à votre type de couverture (tuiles, ardoises, zinc), et réalisation de l'habillage intérieur (placo, bois). Nous posons toutes les tailles de Velux, du format standard 78×98 cm au grand format 134×140 cm, en ouverture par rotation (pour les pentes de 15° à 90°) ou par projection (pour les pentes de 15° à 55°).",
      },
      {
        title: "Remplacement de Velux ancien : performance et étanchéité retrouvées",
        content: "Votre Velux a plus de 20 ans ? Il fuit, condense, s'ouvre mal ou laisse passer le froid ? Les fenêtres de toit ont une durée de vie de 20 à 25 ans. Au-delà, le joint d'étanchéité se dégrade, le vitrage perd ses performances d'isolation, et le mécanisme d'ouverture s'use. Le remplacement par un Velux nouvelle génération est une opération rentable : les modèles actuels offrent un double vitrage à isolation renforcée (Uw = 1,1 W/m².K), une étanchéité parfaite, et un confort acoustique nettement supérieur. Le remplacement se fait en quelques heures seulement, sans modification de la charpente ni de l'habillage intérieur (les dimensions sont standardisées). DT Couverture remplace tous les modèles de Velux, même les plus anciens.",
      },
      {
        title: "Volets roulants Velux : confort été/hiver et économies",
        content: "Le volet roulant extérieur est le complément indispensable de votre fenêtre de toit. En été, il bloque jusqu'à 93 % de la chaleur solaire — vos combles restent frais même en pleine canicule. En hiver, il ajoute une couche d'isolation thermique supplémentaire qui réduit les déperditions de 27 %. Et toute l'année, il offre une occultation totale pour un sommeil de qualité dans les chambres sous toit. DT Couverture installe les volets roulants Velux électriques (filaires ou solaires). Le modèle solaire est particulièrement pratique : aucun câblage électrique à tirer, le panneau photovoltaïque intégré au volet alimente la batterie. La pose se fait en moins d'une heure par fenêtre, sans travaux intérieurs.",
      },
      {
        title: "Quelle taille et quel modèle de Velux choisir ?",
        content: "Le choix de la taille dépend de la surface de la pièce à éclairer : la règle est que la surface vitrée doit représenter au moins 1/6 de la surface au sol (soit 1 m² de Velux pour 6 m² de plancher). Pour une chambre de 12 m², deux Velux de 78×98 cm (soit 2×0,76 m² = 1,52 m² de vitrage) sont recommandés. Le type d'ouverture dépend de la pente de votre toit et de l'usage : la rotation est la plus polyvalente (accessibilité du vitrage pour le nettoyage), la projection offre une vue dégagée et un passage de tête plus important. Pour les salles de bains, choisissez un modèle à vitrage sécurit. DT Couverture vous conseille sur le modèle optimal lors de la visite gratuite.",
      },
    ],
    process: [
      { step: "Visite conseil gratuite", description: "Étude de la charpente, de la pente et de l'orientation. Recommandation sur la taille, le nombre et le positionnement des Velux." },
      { step: "Déclaration préalable de travaux", description: "Nous préparons votre dossier de déclaration préalable pour la mairie (obligatoire)." },
      { step: "Devis détaillé", description: "Chiffrage précis : Velux, raccord d'étanchéité, chevêtre, habillage, volet roulant si souhaité." },
      { step: "Pose en 1 à 2 jours", description: "Découpe de la couverture, création du chevêtre, pose du Velux, raccord d'étanchéité, habillage intérieur." },
      { step: "Accessoires et finitions", description: "Pose du volet roulant, du store intérieur. Vérification de l'étanchéité. Nettoyage du chantier." },
    ],
    priceRange: {
      note: "Prix indicatifs TTC fourniture et pose comprises. Varient selon la taille, le modèle et la complexité de la pose.",
      items: [
        { label: "Velux standard (78×98) posé", range: "700 € - 1 200 €" },
        { label: "Velux grand format (114×118) posé", range: "1 000 € - 1 800 €" },
        { label: "Remplacement Velux existant", range: "600 € - 1 200 €" },
        { label: "Volet roulant solaire Velux posé", range: "400 € - 700 €" },
        { label: "Création d'ouverture + chevêtre + Velux", range: "1 500 € - 2 500 €" },
        { label: "Store intérieur occultant posé", range: "100 € - 250 €" },
      ],
    },
    signs: [
      "Combles sombres que vous aimeriez transformer en pièce de vie",
      "Velux ancien qui fuit ou qui condense à l'intérieur",
      "Fenêtre de toit qui s'ouvre difficilement ou ne ferme plus bien",
      "Chaleur excessive dans les combles en été (pas de volet)",
      "Vitrage de Velux embrumé entre les deux couches (joint HS)",
      "Cadre de Velux en bois pourri ou gonflé par l'humidité",
    ],
    benefits: [
      "Lumière naturelle abondante dans vos combles",
      "Ventilation et renouvellement d'air améliorés",
      "Isolation thermique et acoustique performante (double vitrage renforcé)",
      "Large gamme de tailles et d'ouvertures",
      "Volets roulants solaires sans câblage",
      "Pose soignée avec étanchéité garantie décennale",
      "Accompagnement pour la déclaration préalable de travaux",
      "Remplacement de tous les anciens modèles Velux",
    ],
    faq: [
      { question: "Faut-il une autorisation pour poser un Velux ?", answer: "Oui, une déclaration préalable de travaux est obligatoire pour créer une fenêtre de toit. Le formulaire Cerfa se dépose en mairie et le délai d'instruction est d'1 mois en général. En zone protégée (secteur sauvegardé, périmètre d'un monument historique), l'avis de l'Architecte des Bâtiments de France est également requis. DT Couverture prépare votre dossier complet." },
      { question: "Combien coûte la pose d'un Velux ?", answer: "Le coût total (fourniture + pose) d'un Velux standard 78×98 cm est de 700 à 1 200 € pour un remplacement, et de 1 500 à 2 500 € pour une création d'ouverture (avec découpe de couverture et création de chevêtre). Un volet roulant solaire ajoute 400 à 700 €. Devis gratuit sur place." },
      { question: "Quelle taille de Velux pour ma pièce ?", answer: "La règle d'or est 1/6 de la surface au sol en surface vitrée. Pour une chambre de 12 m², il faut environ 2 m² de vitrage, soit deux Velux de 78×98 cm ou un grand format 114×118 cm. Nous vous conseillons le nombre et la taille optimaux lors de notre visite." },
      { question: "Combien de temps dure la pose d'un Velux ?", answer: "Le remplacement d'un Velux existant prend une demi-journée. La création d'une ouverture (avec découpe, chevêtre et habillage) prend 1 à 2 jours par fenêtre. Pour un chantier de 3 Velux avec création d'ouverture, comptez 3 à 5 jours." },
      { question: "Velux ou puits de lumière : quelle différence ?", answer: "Le Velux (fenêtre de toit ouvrante) apporte lumière ET ventilation, et offre une vue sur l'extérieur. Le puits de lumière (conduit de lumière ou Solatube) est un tube réfléchissant qui amène la lumière dans les pièces sans vue ni ventilation, idéal pour les couloirs ou salles de bains. Pour une pièce de vie, le Velux est nettement préférable." },
      { question: "Peut-on poser un Velux sur tous les toits ?", answer: "Oui, à condition que la pente soit comprise entre 15° et 90° pour les modèles à rotation. En dessous de 15°, des modèles spécifiques (Velux pour toit plat) existent. Nous vérifions la compatibilité de votre charpente et de votre couverture lors de la visite gratuite." },
    ],
  },
  {
    slug: "nettoyage-demoussage",
    title: "Nettoyage & Démoussage Toiture",
    shortTitle: "Démoussage",
    icon: "fa-brush",
    description: "Nettoyage, traitement anti-mousse et hydrofuge de toiture. Prolongez la durée de vie de votre couverture.",
    metaTitle: "Démoussage Toiture Gironde | Nettoyage, Anti-Mousse, Hydrofuge | Prix",
    metaDescription: "Démoussage et nettoyage toiture en Gironde (33). Traitement anti-mousse professionnel, hydrofuge longue durée. Prix clairs, devis gratuit. Prolongez la vie de votre toit.",
    h1: "Démoussage et nettoyage de toiture en Gironde : prix, méthodes et conseils",
    heroText: "Mousse, lichens, algues sur votre toiture ? Le climat océanique de la Gironde favorise leur développement. DT Couverture nettoie et traite votre toit pour lui redonner son aspect neuf et prévenir les infiltrations.",
    sections: [
      {
        title: "Pourquoi démousser sa toiture ? Les risques d'une couverture envahie",
        content: "La mousse n'est pas qu'un problème esthétique : c'est une menace concrète pour l'intégrité de votre toiture. En Gironde, le climat océanique (pluies fréquentes, douceur hivernale, humidité élevée) crée des conditions idéales pour le développement des mousses, lichens et algues sur les toitures. Lorsque la mousse s'installe, elle retient l'eau de pluie comme une éponge, maintenant une humidité permanente sur vos tuiles. Avec le temps, cette humidité fragilise les tuiles (qui deviennent poreuses et gélives), s'infiltre sous les éléments de couverture par capillarité, et peut provoquer des infiltrations d'eau. De plus, les racines de la mousse se glissent sous les tuiles et les soulèvent, créant des passages pour l'eau et le vent. Un démoussage régulier est donc un investissement qui protège votre toiture et vous évite des réparations coûteuses.",
      },
      {
        title: "Nettoyage de toiture : basse pression ou brossage manuel ?",
        content: "DT Couverture privilégie le nettoyage basse pression et le brossage manuel pour préserver l'intégrité de vos tuiles. Contrairement au nettoyage haute pression (type Kärcher), qui arrache la couche protectrice des tuiles en terre cuite et les rend poreuses, nos méthodes respectent le matériau tout en éliminant efficacement les mousses, lichens et salissures. Pour les tuiles en terre cuite (canal, mécanique, plate), nous procédons par brossage à la brosse dure puis rinçage à basse pression. Pour les ardoises et le bac acier, plus résistants, un nettoyage basse pression suffit. Le nettoyage inclut systématiquement les rives, faîtières, et gouttières. Nous vérifions en même temps l'état général de la couverture et vous signalons tout élément nécessitant une attention particulière.",
      },
      {
        title: "Traitement anti-mousse professionnel : une protection de longue durée",
        content: "Après le nettoyage, l'application d'un traitement anti-mousse professionnel est indispensable pour ralentir la réapparition des mousses et lichens. DT Couverture applique un produit algicide et anti-mousse certifié, biodégradable et sans danger pour l'environnement, par pulvérisation sur l'ensemble de la couverture. Ce produit pénètre dans les pores de la tuile et agit en profondeur pendant plusieurs mois : les résidus de mousse brunissent et se décomposent naturellement sous l'action de la pluie. L'effet protecteur dure de 3 à 5 ans selon l'exposition et l'environnement de votre maison (proximité d'arbres, orientation nord/sud, zone ombragée).",
      },
      {
        title: "Hydrofuge de toiture : le traitement premium pour des tuiles comme neuves",
        content: "L'hydrofuge est le traitement haut de gamme qui complète le démoussage. Appliqué après le nettoyage et le traitement anti-mousse, l'hydrofuge crée une barrière imperméable à la surface de vos tuiles : l'eau de pluie perle et glisse au lieu de s'infiltrer dans le matériau. Résultat : les tuiles retrouvent leur couleur d'origine (l'hydrofuge est disponible en version incolore ou colorée), l'eau s'écoule plus vite, les mousses mettent beaucoup plus de temps à se réinstaller, et les tuiles sont protégées contre le gel (l'eau ne pénètre plus). La protection dure 8 à 12 ans pour un hydrofuge professionnel de qualité. C'est un investissement judicieux, surtout si vos tuiles sont anciennes et commencent à devenir poreuses.",
      },
    ],
    process: [
      { step: "Inspection et devis gratuit", description: "Évaluation de l'état de votre toiture, du type de mousse et du matériau. Devis détaillé avec options." },
      { step: "Nettoyage", description: "Brossage manuel ou nettoyage basse pression selon le matériau. Nettoyage des rives, faîtières et gouttières." },
      { step: "Traitement anti-mousse", description: "Pulvérisation d'un produit algicide professionnel sur toute la surface de la couverture." },
      { step: "Hydrofuge (en option)", description: "Application d'un hydrofuge incolore ou coloré pour une protection longue durée et un aspect neuf." },
      { step: "Vérification et nettoyage final", description: "Contrôle de la couverture, signalement d'éventuels points faibles, nettoyage du chantier et des gouttières." },
    ],
    priceRange: {
      note: "Prix indicatifs TTC pour une maison individuelle. Tarifs variables selon la surface, la pente et l'accessibilité.",
      items: [
        { label: "Démoussage seul (au m²)", range: "10 € - 20 €/m²" },
        { label: "Démoussage + anti-mousse (au m²)", range: "15 € - 25 €/m²" },
        { label: "Démoussage + anti-mousse + hydrofuge (au m²)", range: "25 € - 40 €/m²" },
        { label: "Maison 100 m² — démoussage complet", range: "1 000 € - 2 000 €" },
        { label: "Maison 100 m² — démoussage + hydrofuge", range: "2 500 € - 4 000 €" },
        { label: "Nettoyage gouttières (inclus ou en supplément)", range: "150 € - 350 €" },
      ],
    },
    signs: [
      "Mousse épaisse et verdâtre visible sur toute la couverture",
      "Lichens gris ou blancs incrustés sur les tuiles",
      "Tuiles qui changent de couleur (noircissement, verdissement)",
      "Algues vertes ou noires sur le versant nord",
      "Tuiles qui se soulèvent sous la pression de la mousse",
      "Gouttières constamment bouchées par des débris végétaux",
      "Dernier démoussage datant de plus de 5 ans",
      "Toiture en zone ombragée, proche d'arbres ou exposée nord",
    ],
    benefits: [
      "Prolonge la durée de vie de votre toiture de 10 à 15 ans",
      "Prévient les infiltrations d'eau dues à la mousse",
      "Redonne un aspect neuf et valorise votre maison",
      "Produits professionnels certifiés et biodégradables",
      "Méthodes douces (pas de haute pression sur tuiles)",
      "Protection longue durée : anti-mousse (3-5 ans) + hydrofuge (8-12 ans)",
      "Nettoyage des gouttières et vérification de la couverture inclus",
      "Signalement gratuit de tout problème détecté sur votre toiture",
    ],
    faq: [
      { question: "À quelle fréquence faut-il démousser sa toiture ?", answer: "En Gironde, avec le climat océanique, nous recommandons un démoussage tous les 3 à 5 ans. Les toitures orientées au nord, proches d'arbres ou en zone ombragée peuvent nécessiter un traitement plus fréquent (tous les 2-3 ans). Un bon hydrofuge peut espacer les démoussages à tous les 8-10 ans." },
      { question: "Le nettoyage haute pression (Kärcher) abîme-t-il les tuiles ?", answer: "Oui, le nettoyage haute pression est déconseillé sur les tuiles en terre cuite : il arrache la couche protectrice de la tuile (le « glaçage »), rendant le matériau poreux et vulnérable au gel et à l'humidité. C'est pourquoi DT Couverture privilégie le brossage manuel et le nettoyage basse pression, qui éliminent la mousse sans endommager les tuiles." },
      { question: "Combien coûte un démoussage de toiture ?", answer: "Pour une maison standard (80 à 120 m² de toiture), comptez 1 000 à 2 000 € pour un démoussage + traitement anti-mousse, et 2 500 à 4 000 € avec l'application d'un hydrofuge en plus. Ces prix incluent le nettoyage des gouttières. L'hydrofuge, bien que plus cher, est un investissement rentable car il protège vos tuiles pendant 8-12 ans." },
      { question: "Quelle est la différence entre anti-mousse et hydrofuge ?", answer: "L'anti-mousse est un produit algicide qui tue les mousses, lichens et algues et retarde leur réapparition (3-5 ans). L'hydrofuge est un traitement imperméabilisant qui empêche l'eau de pénétrer dans la tuile : il protège contre les infiltrations, le gel, et ralentit encore davantage l'apparition de mousse (8-12 ans). Les deux sont complémentaires : l'anti-mousse traite le problème actuel, l'hydrofuge prévient son retour." },
      { question: "Peut-on démousser sa toiture soi-même ?", answer: "C'est techniquement possible mais fortement déconseillé pour des raisons de sécurité (risque de chute, tuiles glissantes) et d'efficacité (produits grand public moins performants, risque d'endommager les tuiles avec un nettoyeur haute pression mal utilisé). Un professionnel équipé de harnais de sécurité et de produits certifiés garantit un résultat durable et sans risque." },
      { question: "Le démoussage peut-il se faire en hiver ?", answer: "Le démoussage peut se réaliser toute l'année, sauf par temps de gel (le produit ne pénètre pas correctement) ou de forte pluie (le produit est lessivé avant d'agir). En Gironde, la période idéale est le printemps (mars-mai) ou l'automne (septembre-novembre). L'hydrofuge nécessite un temps sec pendant 24h après l'application." },
    ],
  },
];

export interface CityData {
  slug: string;
  name: string;
  department: string;
  departmentCode: string;
  postalCode: string;
  population?: string;
  distance: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  sections: { title: string; content: string }[];
  localSpecificities: string;
  nearbyCommunes: string[];
  faq: { question: string; answer: string }[];
}

export const cities: CityData[] = [
  {
    slug: "couvreur-libourne",
    name: "Libourne",
    department: "Gironde",
    departmentCode: "33",
    postalCode: "33500",
    population: "25 000",
    distance: "10 km",
    metaTitle: "Couvreur Libourne (33500) | Toiture, Zinguerie, Charpente | Devis Gratuit",
    metaDescription: "Couvreur à Libourne (33500) : rénovation toiture, pose tuiles, zinguerie, charpente, démoussage, isolation, Velux, urgence fuite. Artisan décennale. Devis gratuit sous 24h.",
    h1: "Couvreur à Libourne : toiture, zinguerie et rénovation",
    heroText: "Vous cherchez un couvreur de confiance à Libourne ? DT Couverture intervient dans toute la commune et ses environs pour la rénovation de toiture, la zinguerie, la charpente, l'isolation, la pose de Velux et le démoussage. Artisan qualifié, garantie décennale, devis gratuit sous 24h.",
    sections: [
      {
        title: "Couvreur toiture à Libourne : rénovation, réparation et pose neuve",
        content: "Libourne, sous-préfecture de la Gironde, abrite un patrimoine bâti diversifié : maisons de ville en pierre du centre historique avec toitures en tuiles canal, immeubles de rapport du XIXe avec couvertures en ardoises, pavillons des années 60-80 couverts en tuiles mécaniques dans les quartiers résidentiels d'Épinette et de Condat, et constructions récentes en périphérie. DT Couverture maîtrise tous ces types de couverture et intervient pour la rénovation complète de toiture, la réfection partielle, le remplacement ponctuel de tuiles cassées, et la pose de couverture neuve. Nous connaissons les contraintes urbanistiques spécifiques à Libourne, notamment en secteur sauvegardé (centre-ville) où l'avis de l'Architecte des Bâtiments de France peut être requis. À seulement 10 km de notre siège à Saint-Denis-de-Pile, Libourne est notre principale zone d'intervention : nous pouvons être sur place en 15 minutes.",
      },
      {
        title: "Zinguerie et gouttières à Libourne : pose, réparation et entretien",
        content: "Le climat de Libourne, au confluent de l'Isle et de la Dordogne, est marqué par des précipitations régulières et une humidité importante. Une zinguerie en bon état est donc essentielle pour protéger votre maison des infiltrations. DT Couverture assure la pose de gouttières en zinc, cuivre ou aluminium laqué, la fabrication sur-mesure de chéneaux, la réalisation d'abergements de cheminée, de noues et de solins. Les maisons du vieux Libourne possèdent souvent des ouvrages de zinguerie complexes (corniches moulurées, chéneaux encaissés) qui nécessitent un savoir-faire artisanal que nous maîtrisons. Nous assurons également l'entretien et le nettoyage de gouttières — indispensable dans un environnement arboré comme les quartiers libournais bordés de platanes et de tilleuls.",
      },
      {
        title: "Charpente, isolation et Velux à Libourne",
        content: "De nombreuses maisons libournaises possèdent des combles non aménagés offrant un potentiel d'agrandissement considérable. DT Couverture vous accompagne dans l'aménagement de vos combles à Libourne : traitement et renforcement de la charpente existante, isolation thermique performante (soufflage, rampants ou sarking), pose de Velux pour apporter lumière et ventilation. L'isolation de toiture est particulièrement rentable sur les maisons anciennes de Libourne, souvent classées E, F ou G au DPE. Nos travaux sont éligibles aux aides MaPrimeRénov' et CEE. Pour les charpentes, nous réalisons le diagnostic et le traitement contre les insectes xylophages (capricornes, vrillettes) et les termites — Libourne fait partie des communes classées en zone à risque termites.",
      },
      {
        title: "Démoussage de toiture et urgence couvreur à Libourne",
        content: "L'humidité du Libournais favorise la prolifération rapide des mousses, lichens et algues sur les toitures. Un démoussage régulier (tous les 3 à 5 ans) est indispensable pour préserver l'étanchéité et l'esthétique de votre couverture. DT Couverture réalise le nettoyage basse pression, le traitement anti-mousse professionnel et l'application d'hydrofuge pour protéger vos tuiles pendant 8 à 12 ans. En cas d'urgence — fuite soudaine, dégâts de tempête, tuiles arrachées par le vent —, nous intervenons sous 24h à Libourne pour sécuriser votre toiture par un bâchage professionnel, puis réaliser la réparation définitive dans les meilleurs délais.",
      },
    ],
    localSpecificities: "Libourne est classée en zone à risque termites. La commune possède un secteur sauvegardé en centre-ville avec des contraintes architecturales ABF. Le climat au confluent de l'Isle et de la Dordogne est plus humide que la moyenne girondine, ce qui accélère le développement des mousses et requiert un entretien plus fréquent des toitures.",
    nearbyCommunes: ["Les Billaux", "Arveyres", "Génissac", "Lalande-de-Pomerol", "Néac", "Cadarsac", "Izon"],
    faq: [
      { question: "Quel est le prix d'un couvreur à Libourne ?", answer: "Les tarifs d'un couvreur à Libourne varient selon la prestation : rénovation de toiture en tuiles de 80 à 160 €/m², pose de gouttières zinc de 40 à 80 €/ml, démoussage de 15 à 25 €/m², remplacement de tuiles cassées de 150 à 500 €. DT Couverture réalise un devis gratuit et détaillé sur place à Libourne et ses environs." },
      { question: "DT Couverture intervient-il en urgence à Libourne ?", answer: "Oui, nous intervenons sous 24h à Libourne pour toute urgence toiture : fuite, bâchage après tempête, tuiles cassées. À seulement 10 km de notre siège, nous pouvons souvent être sur place dans l'heure." },
      { question: "Faut-il un permis pour refaire sa toiture à Libourne ?", answer: "Pour une réfection à l'identique, une déclaration préalable suffit. En centre-ville de Libourne (secteur sauvegardé), l'avis de l'ABF est nécessaire et peut imposer des matériaux spécifiques (tuiles canal, coloris). Nous vous accompagnons dans les démarches." },
      { question: "Ma maison à Libourne est-elle en zone termites ?", answer: "Oui, Libourne fait partie des communes de Gironde classées en zone à risque termites. Un diagnostic termites est obligatoire en cas de vente. Nous recommandons un traitement préventif de la charpente pour les maisons non traitées." },
      { question: "Combien coûte l'isolation de toiture à Libourne ?", answer: "L'isolation de combles perdus par soufflage coûte 20 à 35 €/m² avant aides. Avec MaPrimeRénov' et les CEE, le reste à charge peut descendre à 5-15 €/m² selon vos revenus. Pour une maison libournaise de 100 m², comptez 500 à 1 500 € après aides." },
    ],
  },
  {
    slug: "couvreur-coutras",
    name: "Coutras",
    department: "Gironde",
    departmentCode: "33",
    postalCode: "33230",
    population: "9 000",
    distance: "12 km",
    metaTitle: "Couvreur Coutras (33230) | Toiture, Démoussage, Réparation | Devis Gratuit",
    metaDescription: "Couvreur à Coutras (33230) : rénovation toiture, zinguerie, charpente, démoussage, isolation, Velux, fuite. Artisan local avec décennale. Devis gratuit.",
    h1: "Couvreur à Coutras : rénovation toiture, zinguerie et démoussage",
    heroText: "Besoin d'un couvreur à Coutras et dans le Nord Gironde ? DT Couverture intervient pour tous vos travaux de toiture : rénovation, zinguerie, charpente, démoussage, isolation et pose de Velux. Artisan à 12 km de Coutras, devis gratuit.",
    sections: [
      {
        title: "Rénovation et réparation de toiture à Coutras",
        content: "Coutras, commune dynamique du nord de la Gironde à la croisée des routes vers Libourne, Montpon et Angoulême, présente un bâti varié : maisons de bourg traditionnelles en pierre avec toitures en tuiles canal, pavillons résidentiels des années 70-90 en tuiles mécaniques, et lotissements récents. DT Couverture intervient à Coutras et dans toutes les communes environnantes pour la rénovation complète de toiture, la réfection partielle, le remplacement de tuiles cassées après tempête, et la pose de couverture neuve. À seulement 12 km de notre siège, Coutras fait partie de notre zone d'intervention privilégiée. Nous connaissons parfaitement les types de toitures locaux et stockons les tuiles les plus courantes dans la région pour un remplacement rapide.",
      },
      {
        title: "Zinguerie, gouttières et étanchéité à Coutras",
        content: "Les fortes pluies fréquentes dans le secteur de Coutras rendent indispensable une zinguerie en parfait état. DT Couverture pose et remplace vos gouttières en zinc, cuivre ou aluminium, fabrique vos chéneaux sur-mesure, réalise les abergements de cheminée et les solins d'étanchéité. Nous intervenons également pour le nettoyage et le débouchage de gouttières obstruées par les feuilles — un problème récurrent dans les quartiers arborés de Coutras. Nos réparations de zinguerie sont rapides et durables, avec soudure à l'étain traditionnelle sur le zinc pour une étanchéité garantie.",
      },
      {
        title: "Démoussage, charpente et isolation à Coutras",
        content: "Le climat humide du nord Gironde favorise l'apparition rapide de mousses et lichens sur les toitures coutrasiennes. DT Couverture propose le démoussage professionnel avec traitement anti-mousse et application d'hydrofuge pour protéger votre couverture jusqu'à 12 ans. Côté charpente, nous assurons le diagnostic, le traitement contre les insectes xylophages (capricornes, vrillettes — très présents dans les boiseries du secteur) et le renforcement structural. Pour l'isolation, nous réalisons le soufflage de combles perdus, l'isolation sous rampants et le sarking, avec accompagnement complet pour vos dossiers MaPrimeRénov' et CEE.",
      },
      {
        title: "Pose de Velux et urgence toiture à Coutras",
        content: "Vous souhaitez aménager vos combles à Coutras ? La pose de Velux est la solution pour apporter lumière et ventilation. DT Couverture réalise la création d'ouverture, la pose de fenêtres de toit et l'installation de volets roulants solaires. En cas d'urgence toiture — fuite, tempête, grêle —, nous intervenons sous 24h à Coutras pour le bâchage et la mise hors d'eau de votre habitation, puis nous réalisons la réparation définitive dans les meilleurs délais. Notre proximité (12 km) nous permet d'être très réactifs sur le secteur coutrasien.",
      },
    ],
    localSpecificities: "Le nord de la Gironde est exposé à des vents d'ouest soutenus en hiver et à des orages violents en été, ce qui sollicite fortement les couvertures. Les maisons de bourg coutrasiennes en pierre calcaire possèdent souvent des charpentes anciennes nécessitant un traitement préventif contre les insectes xylophages, très actifs dans le secteur.",
    nearbyCommunes: ["Abzac", "Les Peintures", "Le Fieu", "Les Eglisottes-et-Chalaures", "Saint-Médard-de-Guizières", "Guitres", "Saint-Seurin-sur-l'Isle"],
    faq: [
      { question: "Combien coûte un démoussage de toiture à Coutras ?", answer: "Le démoussage d'une maison standard à Coutras (80-120 m² de toiture) coûte entre 1 000 et 2 000 € pour le nettoyage + traitement anti-mousse, et entre 2 500 et 4 000 € avec hydrofuge. Devis gratuit sur place." },
      { question: "DT Couverture est-il proche de Coutras ?", answer: "Oui, notre siège est à Saint-Denis-de-Pile, à seulement 12 km de Coutras. Nous pouvons être sur place en 15-20 minutes pour un devis ou une intervention d'urgence." },
      { question: "Rénovation toiture à Coutras : quel budget prévoir ?", answer: "La rénovation complète d'une toiture en tuiles mécaniques à Coutras coûte entre 80 et 160 €/m². Pour une maison de 100 m² de toiture, comptez 8 000 à 16 000 €. Le prix varie selon l'état de la charpente, le type de tuiles et l'accessibilité." },
      { question: "Traitez-vous les charpentes contre les termites à Coutras ?", answer: "Oui, nous réalisons le traitement préventif et curatif des charpentes contre tous les insectes xylophages, y compris les termites. Le traitement par injection sous pression est certifié CTB-P+ et garanti 10 ans." },
    ],
  },
  {
    slug: "couvreur-saint-emilion",
    name: "Saint-Émilion",
    department: "Gironde",
    departmentCode: "33",
    postalCode: "33330",
    population: "2 000",
    distance: "20 km",
    metaTitle: "Couvreur Saint-Émilion (33330) | Toiture Patrimoine UNESCO | Devis Gratuit",
    metaDescription: "Couvreur à Saint-Émilion (33330) : rénovation toiture patrimoine, tuiles canal, zinguerie cuivre, charpente ancienne. Respect contraintes ABF. Devis gratuit.",
    h1: "Couvreur à Saint-Émilion : toiture patrimoine et rénovation",
    heroText: "Vous recherchez un couvreur respectueux du patrimoine à Saint-Émilion ? DT Couverture intervient avec un savoir-faire adapté aux bâtiments classés et protégés : tuiles canal traditionnelles, zinguerie cuivre, charpente ancienne. Devis gratuit.",
    sections: [
      {
        title: "Couverture et toiture à Saint-Émilion : l'exigence du patrimoine",
        content: "Saint-Émilion, inscrite au patrimoine mondial de l'UNESCO depuis 1999, impose des contraintes architecturales strictes pour tout travail de couverture. La juridiction de Saint-Émilion est classée en site patrimonial remarquable (SPR), ce qui signifie que l'Architecte des Bâtiments de France (ABF) doit approuver chaque modification de l'aspect extérieur des bâtiments — y compris la réfection de toiture. DT Couverture connaît parfaitement ces contraintes et travaille régulièrement en coordination avec les ABF. Nous utilisons exclusivement les matériaux approuvés : tuiles canal en terre cuite aux teintes traditionnelles (rouge vieilli, nuancé ocre), tuiles plates pour certains édifices, et pierre calcaire pour les éléments de couronnement. Chaque chantier est réalisé dans le respect des techniques traditionnelles, tout en intégrant les solutions modernes d'étanchéité invisibles depuis l'extérieur.",
      },
      {
        title: "Zinguerie de prestige et charpente ancienne à Saint-Émilion",
        content: "Les bâtiments historiques de Saint-Émilion — maisons de négociants, propriétés viticoles, édifices religieux — possèdent souvent des ouvrages de zinguerie en cuivre ou en zinc patiné qui participent à leur cachet architectural. DT Couverture réalise la réparation et le remplacement de ces éléments en respectant les matériaux d'origine : gouttières cuivre, chéneaux moulurés, abergements de cheminée en zinc, dauphins décoratifs. Les charpentes des bâtiments anciens de Saint-Émilion sont souvent des charpentes traditionnelles en chêne massif, parfois vieilles de plusieurs siècles. Nous assurons leur diagnostic, leur traitement contre les insectes et les champignons, et le remplacement des pièces endommagées en utilisant des bois de même essence et des techniques d'assemblage traditionnelles (tenon-mortaise).",
      },
      {
        title: "Isolation, démoussage et Velux à Saint-Émilion",
        content: "L'isolation de toiture des bâtiments anciens de Saint-Émilion nécessite des techniques adaptées au bâti ancien : matériaux perspirants (fibre de bois, chanvre) pour préserver la respiration des murs en pierre, isolation par l'extérieur (sarking) pour ne pas modifier l'intérieur. Le démoussage des toitures en tuiles canal demande un soin particulier : pas de haute pression, brossage délicat, produits compatibles avec les tuiles anciennes. La pose de Velux est soumise à l'accord de l'ABF dans le périmètre protégé — certains emplacements sont interdits (versants visibles depuis la rue). Nous vous accompagnons dans ces démarches spécifiques.",
      },
      {
        title: "Couvreur pour propriétés viticoles et chais à Saint-Émilion",
        content: "Saint-Émilion compte plus de 800 propriétés viticoles avec des bâtiments techniques (chais, cuviers, hangars) et des bâtiments d'accueil dont la toiture doit être impeccable. DT Couverture intervient sur tous ces bâtiments : couverture en tuiles canal pour les chais traditionnels, bac acier pour les bâtiments techniques, zinguerie complète pour l'évacuation des eaux pluviales, isolation thermique des cuviers pour la maîtrise des températures de vinification. Nous planifions nos chantiers en dehors des périodes de vendanges et de réception pour minimiser les perturbations.",
      },
    ],
    localSpecificities: "Saint-Émilion est classée au patrimoine mondial de l'UNESCO. Tout travail de couverture en centre-ville nécessite l'accord de l'ABF. Les tuiles canal en terre cuite aux teintes traditionnelles sont imposées. Les propriétés viticoles ont des besoins spécifiques (chais, bâtiments techniques).",
    nearbyCommunes: ["Montagne", "Lussac", "Puisseguin", "Saint-Georges-Saint-Émilion", "Pomerol", "Lalande-de-Pomerol"],
    faq: [
      { question: "Peut-on refaire sa toiture librement à Saint-Émilion ?", answer: "Non, Saint-Émilion étant classée UNESCO, l'Architecte des Bâtiments de France doit valider tout changement d'aspect extérieur. Même une réfection à l'identique nécessite une déclaration préalable. Nous connaissons ces procédures et vous accompagnons de A à Z." },
      { question: "Quel type de tuiles utiliser à Saint-Émilion ?", answer: "L'ABF impose généralement des tuiles canal en terre cuite aux teintes rouge vieilli ou ocre nuancé, fabriquées dans la tradition locale. Nous travaillons avec des fabricants agréés qui produisent des tuiles conformes aux exigences patrimoniales." },
      { question: "Combien coûte une rénovation de toiture patrimoine à Saint-Émilion ?", answer: "Les toitures patrimoine sont plus coûteuses que les toitures standard : comptez 120 à 250 €/m² en tuiles canal traditionnelles, contre 80 à 160 €/m² en tuiles mécaniques classiques. Les matériaux nobles et les techniques traditionnelles expliquent ce surcoût." },
      { question: "Intervenez-vous sur les propriétés viticoles ?", answer: "Oui, nous travaillons régulièrement sur les propriétés viticoles de la juridiction de Saint-Émilion : toitures de chais, hangars agricoles, bâtiments d'accueil. Nous planifions les chantiers en dehors des périodes critiques (vendanges, vinification)." },
    ],
  },
  {
    slug: "couvreur-bordeaux",
    name: "Bordeaux",
    department: "Gironde",
    departmentCode: "33",
    postalCode: "33000",
    population: "260 000",
    distance: "40 km",
    metaTitle: "Couvreur Bordeaux (33000) | Toiture Ardoises, Zinc, Rénovation | Devis Gratuit",
    metaDescription: "Couvreur à Bordeaux (33) : rénovation toiture ardoises, zinc, zinguerie, charpente, isolation sarking, démoussage, Velux, fuite. Artisan décennale. Devis gratuit.",
    h1: "Couvreur à Bordeaux : toiture ardoises, zinguerie et rénovation",
    heroText: "Vous cherchez un couvreur qualifié à Bordeaux ? DT Couverture intervient sur toute la métropole bordelaise pour la rénovation de toiture en ardoises, la zinguerie complexe, la charpente, l'isolation, le démoussage et les urgences. Devis gratuit.",
    sections: [
      {
        title: "Toiture en ardoises à Bordeaux : rénovation et réparation",
        content: "Le patrimoine architectural bordelais impose l'ardoise naturelle sur la majorité des immeubles du centre-ville — des Chartrons au quartier Saint-Michel, de Saint-Pierre aux Quinconces. Les toitures bordelaises en ardoises sont exigeantes : ardoises naturelles d'Angers ou d'Espagne posées au crochet ou au clou, avec des pentes souvent fortes (45° et plus), des lucarnes, des tourelles et des ouvrages de zinguerie complexes. DT Couverture possède l'expertise nécessaire pour intervenir sur ces toitures techniques : remplacement d'ardoises cassées ou envolées, réfection de versants complets, reprise de lucarnes et de noues. Nous travaillons avec des ardoises naturelles de qualité (épaisseur 3,5 à 5 mm, origine Angers ou Espagne) pour garantir un résultat conforme à l'existant et durable dans le temps.",
      },
      {
        title: "Zinguerie et zinc à joint debout à Bordeaux",
        content: "Bordeaux est une ville de zinguerie par excellence. Les immeubles haussmanniens et les hôtels particuliers bordelais possèdent des ouvrages de zinc sophistiqués : mansardes en zinc à joint debout, dômes, tourelles, lucarnes à joues en zinc, corniches moulurées, chéneaux encaissés. DT Couverture maîtrise le façonnage et la pose du zinc à joint debout, le pliage sur-mesure des éléments d'habillage, et les techniques de soudure à l'étain nécessaires à l'étanchéité de ces ouvrages complexes. Nous intervenons aussi bien sur les réparations ponctuelles (reprise de joint, remplacement de feuille percée) que sur les réfections complètes de mansardes ou de dômes.",
      },
      {
        title: "Charpente, isolation et Velux à Bordeaux et sa métropole",
        content: "La métropole bordelaise, avec ses immeubles anciens et ses maisons bourgeoises, offre d'immenses possibilités d'aménagement de combles. DT Couverture assure le renforcement de charpente, le traitement anti-termites (Bordeaux est en zone termitée), l'isolation performante par sarking ou sous rampants, et la pose de Velux. L'isolation par sarking est particulièrement adaptée aux immeubles bordelais : elle préserve le volume intérieur et les belles charpentes apparentes tout en offrant une performance thermique optimale. Nous intervenons dans tous les quartiers de Bordeaux — Chartrons, Bastide, Saint-Augustin, Caudéran, Nansouty — et dans les communes de la métropole : Mérignac, Pessac, Talence, Bègles, Cenon, Lormont.",
      },
      {
        title: "Démoussage et urgence couvreur à Bordeaux",
        content: "Les toitures bordelaises, notamment celles en tuiles des quartiers périphériques (Caudéran, Bastide, quartiers pavillonnaires de la métropole), sont sujettes au développement de mousses et lichens favorisé par l'humidité océanique. DT Couverture réalise le démoussage professionnel, le traitement anti-mousse et l'application d'hydrofuge. En cas d'urgence — fuite, ardoise arrachée par le vent, dégât de tempête —, nous intervenons sous 24h sur Bordeaux et toute la métropole bordelaise. Notre intervention inclut le bâchage d'urgence, le constat détaillé pour votre assurance, et la planification de la réparation définitive.",
      },
    ],
    localSpecificities: "Bordeaux est classée au patrimoine mondial de l'UNESCO pour son centre historique. L'ardoise naturelle est imposée sur la majorité des immeubles du centre. La ville est en zone termitée. Les ouvrages de zinguerie (mansardes, dômes, lucarnes) sont parmi les plus complexes de France. La métropole bordelaise (800 000 habitants) génère une forte demande en couverture.",
    nearbyCommunes: ["Mérignac", "Pessac", "Talence", "Bègles", "Le Bouscat", "Cenon", "Lormont", "Floirac", "Bruges", "Blanquefort", "Eysines", "Gradignan"],
    faq: [
      { question: "Combien coûte un couvreur à Bordeaux ?", answer: "Les tarifs couvreur à Bordeaux varient selon la prestation : remplacement d'ardoises 150-600 €, rénovation toiture ardoises 120-250 €/m², réfection zinc mansarde 100-200 €/m², démoussage 15-25 €/m². Le coût est souvent plus élevé qu'en zone rurale en raison de la complexité des toitures (hauteur, ardoises, zinguerie) et des contraintes d'accès en centre-ville." },
      { question: "Travaillez-vous sur les immeubles bordelais ?", answer: "Oui, nous intervenons sur les immeubles de rapport, les hôtels particuliers et les copropriétés de Bordeaux. Nous gérons les contraintes d'échafaudage en centre-ville, les autorisations de voirie, et les exigences architecturales (ABF en secteur sauvegardé)." },
      { question: "Bordeaux est-il en zone termites ?", answer: "Oui, Bordeaux et la plupart des communes de la métropole sont classées en zone à risque termites. Un diagnostic termites est obligatoire en cas de vente, et le traitement préventif de la charpente est fortement recommandé." },
      { question: "Quelle ardoise pour une toiture à Bordeaux ?", answer: "L'ardoise naturelle est le matériau de référence à Bordeaux, imposé en centre-ville et secteur sauvegardé. Les ardoises d'Angers (française, haut de gamme) et d'Espagne (bon rapport qualité-prix) sont les plus utilisées. Comptez 120 à 250 €/m² posé selon la qualité." },
      { question: "Intervenez-vous dans toute la métropole bordelaise ?", answer: "Oui, nous intervenons à Bordeaux et dans toutes les communes de la métropole : Mérignac, Pessac, Talence, Bègles, Villenave-d'Ornon, Gradignan, Le Bouscat, Bruges, Cenon, Lormont, Floirac, Blanquefort, etc." },
    ],
  },
  {
    slug: "couvreur-saint-andre-de-cubzac",
    name: "Saint-André-de-Cubzac",
    department: "Gironde",
    departmentCode: "33",
    postalCode: "33240",
    population: "12 000",
    distance: "25 km",
    metaTitle: "Couvreur Saint-André-de-Cubzac (33240) | Toiture, Zinguerie | Devis Gratuit",
    metaDescription: "Couvreur à Saint-André-de-Cubzac (33240) : rénovation toiture, zinguerie, charpente, démoussage, isolation, Velux, urgence. Artisan Gironde, devis gratuit.",
    h1: "Couvreur à Saint-André-de-Cubzac : toiture et couverture en Cubzaguais",
    heroText: "Vous cherchez un couvreur à Saint-André-de-Cubzac ? DT Couverture intervient dans tout le Cubzaguais pour la rénovation de toiture, la zinguerie, la charpente, le démoussage, l'isolation et les urgences. Artisan de proximité, devis gratuit.",
    sections: [
      {
        title: "Rénovation de toiture à Saint-André-de-Cubzac et dans le Cubzaguais",
        content: "Saint-André-de-Cubzac, porte d'entrée du Cubzaguais entre Bordeaux et Libourne, est une ville en pleine croissance où se côtoient un centre-bourg ancien avec des maisons en pierre coiffées de tuiles canal, des quartiers pavillonnaires des années 70-2000 en tuiles mécaniques, et des lotissements récents. DT Couverture intervient sur tous ces types de bâtiments pour la rénovation de toiture, la réfection partielle ou complète, le remplacement de tuiles cassées, et la pose de couverture neuve. Le Cubzaguais, exposé aux vents d'ouest venant de l'estuaire de la Gironde, connaît des épisodes venteux qui sollicitent fortement les couvertures, en particulier les faîtières et les rives. Nous vérifions systématiquement ces points sensibles lors de nos interventions.",
      },
      {
        title: "Zinguerie et gouttières à Saint-André-de-Cubzac",
        content: "La proximité de la Dordogne et le climat humide du Cubzaguais rendent la zinguerie particulièrement importante pour protéger les habitations. DT Couverture assure la pose et le remplacement de gouttières en zinc, cuivre ou aluminium, la fabrication de chéneaux sur-mesure, et la réalisation d'abergements et de solins étanches. Nous intervenons aussi pour l'entretien des gouttières — le nettoyage régulier est indispensable dans un secteur où les arbres à feuilles caduques sont nombreux. Les descentes d'eau sont raccordées aux réseaux pluviaux conformément aux exigences de la commune.",
      },
      {
        title: "Charpente, isolation et Velux à Saint-André-de-Cubzac",
        content: "De nombreuses maisons de Saint-André-de-Cubzac possèdent des combles aménageables offrant un excellent potentiel d'agrandissement. DT Couverture vous accompagne : diagnostic et traitement de charpente (insectes, champignons), renforcement structurel si nécessaire, isolation par soufflage, sous rampants ou sarking, et pose de Velux pour apporter lumière et ventilation. L'isolation est un investissement particulièrement pertinent sur les pavillons des années 70-80 du Cubzaguais, souvent mal isolés d'origine, avec des DPE classés E ou F. Les aides MaPrimeRénov' et CEE permettent de réduire significativement le coût des travaux.",
      },
      {
        title: "Démoussage et urgence couvreur à Saint-André-de-Cubzac",
        content: "Le démoussage de toiture est essentiel dans le Cubzaguais : l'humidité de la basse vallée de la Dordogne favorise la prolifération rapide des mousses et lichens. DT Couverture réalise le nettoyage basse pression, le traitement anti-mousse et l'hydrofuge protecteur. En cas d'urgence — fuite de toiture, dégâts de tempête, tuiles arrachées —, nous intervenons sous 24h à Saint-André-de-Cubzac et dans les communes voisines. Nous sécurisons votre toiture par un bâchage professionnel et réalisons les réparations définitives dans les meilleurs délais.",
      },
    ],
    localSpecificities: "Le Cubzaguais est une zone de transition entre la métropole bordelaise et le Libournais. Les vents d'ouest venant de l'estuaire de la Gironde sont fréquents et soutenus, ce qui sollicite les couvertures. La proximité de la Dordogne crée un microclimat humide favorable aux mousses.",
    nearbyCommunes: ["Cubzac-les-Ponts", "Gauriaguet", "Peujard", "Val-de-Virvée", "Saint-Gervais", "Berson", "Prignac-et-Marcamps"],
    faq: [
      { question: "Quel est le délai d'intervention à Saint-André-de-Cubzac ?", answer: "DT Couverture intervient sous 24-48h à Saint-André-de-Cubzac pour les urgences (fuite, tempête) et sous 1 à 2 semaines pour les travaux planifiés. Pour un devis gratuit, nous nous déplaçons généralement sous 48h." },
      { question: "Combien coûte un démoussage à Saint-André-de-Cubzac ?", answer: "Le démoussage d'une maison du Cubzaguais coûte entre 1 000 et 2 000 € (nettoyage + anti-mousse) et entre 2 500 et 4 000 € avec hydrofuge, pour une toiture de 80 à 120 m². Devis gratuit sur place." },
      { question: "Peut-on poser des panneaux solaires à Saint-André-de-Cubzac ?", answer: "Oui, la pose de panneaux solaires est possible sur la plupart des toitures du Cubzaguais. Nous pouvons vérifier et renforcer votre charpente si nécessaire pour supporter le poids des panneaux. Une déclaration préalable de travaux est requise." },
      { question: "Intervenez-vous aussi à Cubzac-les-Ponts et dans les communes voisines ?", answer: "Oui, nous couvrons tout le Cubzaguais : Saint-André-de-Cubzac, Cubzac-les-Ponts, Gauriaguet, Peujard, Val-de-Virvée, Saint-Gervais, Berson, Prignac-et-Marcamps et toutes les communes alentour." },
    ],
  },
];

/** URL pour un tag ville : page locale couvreur si elle existe, sinon zone d'intervention. */
export function getCityInterventionHref(cityName: string): string {
  const page = cities.find((c) => c.name === cityName);
  if (page) return `/${page.slug}`;
  return "/zone-intervention";
}

export const testimonials = [
  {
    text: "Excellent travail pour la rénovation de notre toiture. Teddy est un artisan sérieux, ponctuel et très professionnel. Le chantier a été propre et bien réalisé. Je recommande vivement !",
    author: "Marie P.",
    location: "Saint-Denis-de-Pile",
    initials: "MP",
    rating: 5,
  },
  {
    text: "Intervention rapide suite à une fuite dans notre salle de bains. DT Couverture a identifié et réparé le problème en un temps record. Très bon rapport qualité-prix.",
    author: "Jean-Luc D.",
    location: "Libourne",
    initials: "JL",
    rating: 5,
  },
  {
    text: "Nous avons fait appel à DT Couverture pour l'installation de Velux et le résultat est parfait. Un vrai professionnel à l'écoute qui prend le temps d'expliquer. Merci Teddy !",
    author: "Sophie B.",
    location: "Coutras",
    initials: "SB",
    rating: 5,
  },
  {
    text: "Travail impeccable pour le démoussage et l'hydrofuge de notre toiture. La maison a retrouvé un aspect neuf. Teddy est vraiment compétent et agréable.",
    author: "Pierre M.",
    location: "Saint-Émilion",
    initials: "PM",
    rating: 5,
  },
  {
    text: "Suite à la tempête, DT Couverture est intervenu rapidement pour bâcher notre toit endommagé puis a réalisé les réparations dans les meilleurs délais. Un grand merci !",
    author: "Isabelle R.",
    location: "Bordeaux",
    initials: "IR",
    rating: 5,
  },
  {
    text: "Très satisfait de la pose de nos gouttières en zinc. Travail soigné, propre et dans les délais. Le devis était clair et sans surprise. Je recommande sans hésiter.",
    author: "François G.",
    location: "Saint-André-de-Cubzac",
    initials: "FG",
    rating: 5,
  },
];

export const stats = [
  { value: 10, suffix: "+", label: "Années d'expérience" },
  { value: 500, suffix: "+", label: "Chantiers réalisés" },
  { value: 100, suffix: "%", label: "Clients satisfaits" },
  { value: 30, suffix: "min", label: "Délai de rappel" },
];

export const citiesAroundSaintDenis = [
  "Saint-Denis-de-Pile",
  "Libourne",
  "Coutras",
  "Guitres",
  "Saint-Seurin-sur-l'Isle",
  "Saint-Médard-de-Guizières",
  "Abzac",
  "Camps-sur-l'Isle",
  "Savignac-de-l'Isle",
  "Galgon",
  "Vérac",
  "Lagorce",
  "Bonzac",
  "Les Billaux",
  "Les Peintures",
  "Le Fieu",
  "Les Eglisottes-et-Chalaures",
  "Lapouyade",
  "Saint-Christophe-de-Double",
  "Fronsac",
  "Saint-Émilion",
  "Pomerol",
  "Lalande-de-Pomerol",
  "Néac",
  "Montagne",
  "Lussac",
  "Puisseguin",
  "Saint-Georges-Saint-Émilion",
  "Saint-Sauveur-de-Puynormand",
  "Génissac",
  "Arveyres",
  "Cadarsac",
  "Izon",
  "Branne",
  "Moulon",
  "Castillon-la-Bataille",
  "Saint-André-de-Cubzac",
  "Montpon-Ménestérol",
  "Saint-Savin",
  "Saint-Martin-du-Bois",
  "Chamadelle",
  "Tizac-de-Curton",
  "Daignac",
  "Espiet",
];

export const citiesAroundBordeaux = [
  "Bordeaux",
  "Mérignac",
  "Pessac",
  "Talence",
  "Bègles",
  "Villenave-d'Ornon",
  "Gradignan",
  "Le Bouscat",
  "Bruges",
  "Eysines",
  "Le Haillan",
  "Saint-Médard-en-Jalles",
  "Le Taillan-Médoc",
  "Blanquefort",
  "Parempuyre",
  "Ambès",
  "Bassens",
  "Carbon-Blanc",
  "Lormont",
  "Cenon",
  "Floirac",
  "Artigues-près-Bordeaux",
  "Bouliac",
  "Latresne",
  "Carignan-de-Bordeaux",
  "Fargues-Saint-Hilaire",
  "Créon",
  "Cadaujac",
  "Léognan",
  "Cestas",
  "Canéjan",
  "Martignas-sur-Jalle",
  "Saint-Jean-d'Illac",
  "Saint-Loubès",
  "Ambarès-et-Lagrave",
  "Yvrac",
  "Pompignac",
  "Tresses",
  "Sainte-Eulalie",
  "Saint-Aubin-de-Médoc",
  "Le Pian-Médoc",
  "Ludon-Médoc",
  "Macau",
  "La Brède",
  "Martillac",
  "Beautiran",
  "Camblanes-et-Meynac",
  "Saint-Médard-d'Eyrans",
  "Saucats",
  "Portets",
  "Podensac",
  "Izon",
  "Berson",
  "Saint-Gervais",
];
