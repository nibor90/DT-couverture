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
  phone: "07 77 30 47 20",
  phoneHref: "tel:+33777304720",
  email: "contact@dt-couverture.fr",
  address: {
    street: "27 T Route des Artigues",
    city: "Saint-Denis-de-Pile",
    zip: "33910",
    full: "27 T Route des Artigues, 33910 Saint-Denis-de-Pile",
  },
  hours: "Tous les jours 24/24",
  url: "https://dt-couverture.fr",
  social: {
    facebook: "#",
    instagram: "#",
    /** Fiche / partage Google (avis, établissement). */
    google: "https://share.google/oIhxbdDb7rw3tTpFv",
  },
  /**
   * Carte Google Maps intégrée : lieu « Gironde, France » (département), cadrage proche du partage officiel.
   */
  mapsEmbedGirondeUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230656!2d-1.1336173!3d44.8882919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552e4eb6f605f3%3A0x306651748112790!2sGironde%2C%20France!5e0!3m2!1sfr!2sfr!4v1700000000000",
  /** Lien vers la fiche Google Maps (Gironde). */
  mapsGirondeExternalUrl:
    "https://www.google.com/maps/place/Gironde,+France/",
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
        { label: "Remplacement de tuiles (ponctuel)", range: "120 € - 380 €" },
        { label: "Réfection toiture tuiles (au m²)", range: "55 € - 110 €/m²" },
        { label: "Réfection toiture ardoises (au m²)", range: "85 € - 175 €/m²" },
        { label: "Couverture zinc joint debout (au m²)", range: "72 € - 135 €/m²" },
        { label: "Toiture neuve complète (100 m²)", range: "7 500 € - 18 000 €" },
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
      { question: "Combien coûte une rénovation de toiture au m² en Gironde ?", answer: "Le prix d'une rénovation de toiture en Gironde varie en pratique entre environ 55 € et 175 €/m² selon le matériau (tuiles, ardoises, zinc), l'état de la charpente et la complexité du toit (pente, accessibilité, pénétrations). Pour une maison d'environ 100 m² de toiture en tuiles mécaniques, beaucoup de chantiers se situent entre 7 000 € et 13 000 € tout compris selon l'état réel. Nous réalisons un devis gratuit sur place pour un chiffrage précis." },
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
        { label: "Gouttière zinc (au ml posé)", range: "28 € - 55 €/ml" },
        { label: "Gouttière cuivre (au ml posé)", range: "55 € - 105 €/ml" },
        { label: "Gouttière aluminium laqué (au ml posé)", range: "25 € - 50 €/ml" },
        { label: "Descente d'eau (pièce posée)", range: "110 € - 280 €" },
        { label: "Abergement de cheminée complet", range: "300 € - 880 €" },
        { label: "Nettoyage gouttières (maison)", range: "95 € - 240 €" },
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
      { question: "Combien coûte le remplacement de gouttières ?", answer: "Le remplacement complet des gouttières d'une maison standard (périmètre d'environ 40 à 60 ml) se situe souvent entre 1 400 € et 3 800 € en zinc, et entre 3 000 € et 7 000 € en cuivre, pose comprise, selon la configuration. Un devis précis sera établi après notre visite gratuite." },
      { question: "À quelle fréquence nettoyer les gouttières ?", answer: "Au minimum deux fois par an : à l'automne après la chute des feuilles, et au printemps pour vérifier l'état après l'hiver. Si vous avez des arbres à proximité, un troisième nettoyage en été est recommandé. Nous proposons des contrats d'entretien annuel pour vous simplifier la vie." },
      { question: "Gouttière zinc ou PVC : quel choix ?", answer: "Le zinc est nettement supérieur au PVC en termes de durabilité (30-50 ans contre 15-25 ans pour le PVC), de résistance au gel et aux UV, et d'esthétique. Le PVC est moins cher à l'achat mais se déforme avec le temps, jaunit au soleil et devient cassant avec le gel. Sur le long terme, le zinc est plus économique car il ne nécessite pas de remplacement prématuré." },
      { question: "Ma gouttière fuit à un raccord, faut-il tout changer ?", answer: "Pas nécessairement. Si le reste de la gouttière est en bon état, une réparation ponctuelle par soudure à l'étain ou remplacement d'un tronçon suffit. Nous diagnostiquons l'état global de votre installation et vous conseillons honnêtement : réparation si c'est suffisant, remplacement si le zinc est trop corrodé." },
    ],
  },
  {
    slug: "charpente",
    title: "Charpente",
    shortTitle: "Charpente",
    icon: "fa-hammer",
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
        { label: "Traitement préventif (au m²)", range: "12 € - 22 €/m²" },
        { label: "Traitement curatif par injection (au m²)", range: "18 € - 38 €/m²" },
        { label: "Remplacement d'un chevron", range: "150 € - 450 €" },
        { label: "Remplacement d'une panne", range: "380 € - 1 100 €" },
        { label: "Traitement mérule (selon surface)", range: "2 200 € - 11 000 €" },
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
      { question: "Combien coûte un traitement de charpente ?", answer: "Le prix d'un traitement curatif par injection se situe souvent entre 18 € et 38 €/m² de surface traitée, soit typiquement 1 800 € à 3 800 € pour une maison d'environ 100 m² au sol selon l'emprise réelle. Un traitement préventif coûte en général entre 12 € et 22 €/m². Le remplacement de pièces endommagées s'ajoute. Devis gratuit sur place." },
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
        { label: "Remplacement tuiles (ponctuel)", range: "120 € - 380 €" },
        { label: "Réfection solin cheminée", range: "220 € - 620 €" },
        { label: "Reprise abergement complet", range: "380 € - 1 100 €" },
        { label: "Bâchage d'urgence", range: "150 € - 450 €" },
        { label: "Réfection noue zinc", range: "300 € - 880 €" },
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
      { question: "Combien coûte la réparation d'une fuite de toiture ?", answer: "Le coût varie selon la cause. Un remplacement ponctuel de tuiles se situe souvent entre 120 € et 380 €. Une reprise de solin de cheminée entre 220 € et 620 €. Une réfection de noue en zinc entre 300 € et 880 €. Le diagnostic est gratuit : nous identifions le problème et vous chiffrons la réparation avant toute intervention." },
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
        { label: "Soufflage combles perdus (au m²)", range: "15 € - 28 €/m²" },
        { label: "Isolation sous rampants (au m²)", range: "30 € - 62 €/m²" },
        { label: "Sarking — isolation par l'extérieur (au m²)", range: "75 € - 155 €/m²" },
        { label: "Maison 100 m² combles perdus (total)", range: "1 600 € - 2 800 €" },
        { label: "Maison 100 m² sarking (total)", range: "7 500 € - 15 000 €" },
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
        { label: "Bâchage d'urgence (déplacement inclus)", range: "150 € - 450 €" },
        { label: "Remplacement tuiles (ponctuel)", range: "120 € - 380 €" },
        { label: "Réparation faîtage (au ml)", range: "30 € - 60 €/ml" },
        { label: "Remplacement de rives (au ml)", range: "22 € - 45 €/ml" },
        { label: "Réfection partielle après tempête", range: "750 € - 3 800 €" },
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
      { question: "Combien coûte une réparation de toiture après tempête ?", answer: "Le coût dépend de l'étendue des dégâts. Un remplacement ponctuel de quelques tuiles se situe souvent entre 120 € et 380 €. Une réfection partielle d'un versant après une grosse tempête peut aller d'environ 750 € à 3 800 €. Une toiture très endommagée peut nécessiter une réfection plus lourde (souvent 7 500 € à 18 000 € selon surface et matériaux). Le bâchage initial coûte en général 150 à 450 €." },
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
        { label: "Velux standard (78×98) posé", range: "550 € - 950 €" },
        { label: "Velux grand format (114×118) posé", range: "780 € - 1 350 €" },
        { label: "Remplacement Velux existant", range: "450 € - 950 €" },
        { label: "Volet roulant solaire Velux posé", range: "280 € - 520 €" },
        { label: "Création d'ouverture + chevêtre + Velux", range: "1 150 € - 1 950 €" },
        { label: "Store intérieur occultant posé", range: "75 € - 195 €" },
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
      { question: "Combien coûte la pose d'un Velux ?", answer: "Le coût total (fourniture + pose) d'un Velux standard 78×98 cm se situe souvent entre 550 € et 950 € pour un remplacement, et entre 1 150 € et 1 950 € pour une création d'ouverture (découpe, chevêtre). Un volet roulant solaire ajoute en général 280 à 520 €. Devis gratuit sur place." },
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
    icon: "fa-spray-can",
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
        { label: "Démoussage seul (au m²)", range: "6 € - 14 €/m²" },
        { label: "Démoussage + anti-mousse (au m²)", range: "10 € - 18 €/m²" },
        { label: "Démoussage + anti-mousse + hydrofuge (au m²)", range: "18 € - 30 €/m²" },
        { label: "Maison 100 m² — démoussage complet", range: "650 € - 1 500 €" },
        { label: "Maison 100 m² — démoussage + hydrofuge", range: "1 800 € - 3 200 €" },
        { label: "Nettoyage gouttières (inclus ou en supplément)", range: "95 € - 240 €" },
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
      { question: "Quel est le prix d'un couvreur à Libourne ?", answer: "Les tarifs varient selon la prestation : en pratique, rénovation de toiture en tuiles souvent 55 à 110 €/m², gouttières zinc posées environ 28 à 55 €/ml, démoussage 10 à 18 €/m² avec traitement, remplacement ponctuel de tuiles 120 à 380 €. DT Couverture réalise un devis gratuit et détaillé sur place à Libourne et ses environs." },
      { question: "DT Couverture intervient-il en urgence à Libourne ?", answer: "Oui, nous intervenons sous 24h à Libourne pour toute urgence toiture : fuite, bâchage après tempête, tuiles cassées. À seulement 10 km de notre siège, nous pouvons souvent être sur place dans l'heure." },
      { question: "Faut-il un permis pour refaire sa toiture à Libourne ?", answer: "Pour une réfection à l'identique, une déclaration préalable suffit. En centre-ville de Libourne (secteur sauvegardé), l'avis de l'ABF est nécessaire et peut imposer des matériaux spécifiques (tuiles canal, coloris). Nous vous accompagnons dans les démarches." },
      { question: "Ma maison à Libourne est-elle en zone termites ?", answer: "Oui, Libourne fait partie des communes de Gironde classées en zone à risque termites. Un diagnostic termites est obligatoire en cas de vente. Nous recommandons un traitement préventif de la charpente pour les maisons non traitées." },
      { question: "Combien coûte l'isolation de toiture à Libourne ?", answer: "L'isolation de combles perdus par soufflage se situe en général entre 15 et 28 €/m² avant aides. Avec MaPrimeRénov' et les CEE, le reste à charge peut être nettement réduit selon vos revenus. Pour une maison d'environ 100 m² au sol, le reste à charge après aides est souvent de l'ordre de 400 à 1 200 € selon les dossiers." },
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
      { question: "Combien coûte un démoussage de toiture à Coutras ?", answer: "Pour une maison standard (environ 80 à 120 m² de toiture), le démoussage + traitement anti-mousse se situe souvent entre 650 € et 1 500 €, et entre 1 800 € et 3 200 € avec hydrofuge selon la surface et l'accès. Devis gratuit sur place." },
      { question: "DT Couverture est-il proche de Coutras ?", answer: "Oui, notre siège est à Saint-Denis-de-Pile, à seulement 12 km de Coutras. Nous pouvons être sur place en 15-20 minutes pour un devis ou une intervention d'urgence." },
      { question: "Rénovation toiture à Coutras : quel budget prévoir ?", answer: "Pour une rénovation en tuiles mécaniques, beaucoup de chantiers se situent entre 55 et 110 €/m². Pour environ 100 m² de toiture, comptez souvent 7 000 à 13 000 € selon l'état de la charpente, le type de tuiles et l'accessibilité." },
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
      { question: "Combien coûte une rénovation de toiture patrimoine à Saint-Émilion ?", answer: "Les toitures patrimoine sont plus coûteuses que les toitures standard : en pratique, souvent 85 à 175 €/m² en tuiles canal traditionnelles, contre 55 à 110 €/m² en tuiles mécaniques classiques. Les matériaux nobles et les techniques traditionnelles expliquent ce surcoût." },
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
      { question: "Combien coûte un couvreur à Bordeaux ?", answer: "Les tarifs varient selon la prestation : remplacement ponctuel d'ardoises souvent 120-450 €, rénovation toiture ardoises en pratique 85-175 €/m², réfection zinc mansarde environ 72-135 €/m², démoussage avec traitement 10-18 €/m². Le coût est souvent un peu plus élevé qu'en zone rurale (complexité des toits, accès centre-ville)." },
      { question: "Travaillez-vous sur les immeubles bordelais ?", answer: "Oui, nous intervenons sur les immeubles de rapport, les hôtels particuliers et les copropriétés de Bordeaux. Nous gérons les contraintes d'échafaudage en centre-ville, les autorisations de voirie, et les exigences architecturales (ABF en secteur sauvegardé)." },
      { question: "Bordeaux est-il en zone termites ?", answer: "Oui, Bordeaux et la plupart des communes de la métropole sont classées en zone à risque termites. Un diagnostic termites est obligatoire en cas de vente, et le traitement préventif de la charpente est fortement recommandé." },
      { question: "Quelle ardoise pour une toiture à Bordeaux ?", answer: "L'ardoise naturelle est le matériau de référence à Bordeaux, imposé en centre-ville et secteur sauvegardé. Les ardoises d'Angers (française, haut de gamme) et d'Espagne (bon rapport qualité-prix) sont les plus utilisées. En pratique, comptez souvent 85 à 175 €/m² posé selon la qualité et la complexité." },
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
      { question: "Combien coûte un démoussage à Saint-André-de-Cubzac ?", answer: "Pour une toiture d'environ 80 à 120 m², le nettoyage + anti-mousse se situe souvent entre 650 € et 1 500 €, et entre 1 800 € et 3 200 € avec hydrofuge. Devis gratuit sur place." },
      { question: "Peut-on poser des panneaux solaires à Saint-André-de-Cubzac ?", answer: "Oui, la pose de panneaux solaires est possible sur la plupart des toitures du Cubzaguais. Nous pouvons vérifier et renforcer votre charpente si nécessaire pour supporter le poids des panneaux. Une déclaration préalable de travaux est requise." },
      { question: "Intervenez-vous aussi à Cubzac-les-Ponts et dans les communes voisines ?", answer: "Oui, nous couvrons tout le Cubzaguais : Saint-André-de-Cubzac, Cubzac-les-Ponts, Gauriaguet, Peujard, Val-de-Virvée, Saint-Gervais, Berson, Prignac-et-Marcamps et toutes les communes alentour." },
    ],
  },
  // ── LOT 1 ─────────────────────────────────────────────────────────────────
  {
    slug: "couvreur-saint-denis-de-pile",
    name: "Saint-Denis-de-Pile",
    department: "Gironde",
    departmentCode: "33",
    postalCode: "33910",
    population: "3 500",
    distance: "0 km",
    metaTitle: "Couvreur Saint-Denis-de-Pile (33910) | DT Couverture – Artisan Local | Devis Gratuit",
    metaDescription: "Couvreur basé à Saint-Denis-de-Pile (33910) : rénovation toiture, tuiles canal, zinguerie, charpente, isolation, démoussage, Velux, urgence 24h. Devis gratuit sur place.",
    h1: "Couvreur à Saint-Denis-de-Pile : votre artisan toiture à domicile",
    heroText: "DT Couverture est basé à Saint-Denis-de-Pile. Ici même, dans votre commune, notre atelier et notre stock sont à 0 km de votre toiture. Réactivité maximale, connaissance parfaite du bâti local, intervention en moins d'une heure pour les urgences. Devis gratuit sur place.",
    sections: [
      {
        title: "Le bâti de Saint-Denis-de-Pile : toitures en pierre et tuiles canal",
        content: "Saint-Denis-de-Pile, blottie dans le méandre de l'Isle à l'entrée du Libournais, présente un tissu bâti caractéristique du vignoble girondin : maisons de bourg en pierre calcaire du Fronsadais, toitures en tuiles canal à faible pente (30 à 35 %), corps de ferme réhabilités sur la périphérie agricole, et pavillons des années 80-2000 en tuiles mécaniques dans les lotissements récents. Chaque type de couverture répond à des contraintes et à des techniques différentes. Les toitures en tuiles canal des maisons anciennes exigent une pose au mortier de chaux plutôt qu'en sec, et un choix rigoureux des tuiles de remplacement pour assurer la cohérence chromatique de la couverture. DT Couverture stocke en permanence les tuiles les plus courantes à Saint-Denis-de-Pile et dans le Libournais, ce qui permet de réaliser les remplacements ponctuels sans délai d'approvisionnement. Chaque intervention commence par une inspection minutieuse en toiture — nous montons sur votre toit, nous vérifions l'état de chaque ligne de tuiles, des noues, des faîtières, des chatières et de la zinguerie, et nous vous remettons un compte-rendu illustré de photos.",
      },
      {
        title: "Réactivité et stock local : l'avantage de l'artisan de proximité",
        content: "Être basé dans votre commune change tout. Chez DT Couverture, notre siège, nos véhicules et notre matériel se trouvent à Saint-Denis-de-Pile. Cela signifie qu'en cas de fuite soudaine, de tuile arrachée par le vent ou de dégâts après une grêle, nous pouvons être chez vous en moins d'une heure — sans les délais de déplacement qu'implique un artisan venant de Libourne ou de Bordeaux. Notre connaissance du territoire local va bien au-delà de la simple géographie : nous connaissons les entreprises de maçonnerie et de charpente avec lesquelles coordonner un chantier de rénovation globale, nous savons quels secteurs de la commune sont exposés aux vents dominants de nord-ouest, et nous connaissons les habitudes de construction des décennies passées dans la vallée de l'Isle. Cette connaissance de terrain se traduit concrètement sur chaque chantier : moins de surprises, moins d'allers-retours inutiles, et un devis qui reflète fidèlement la réalité du travail à effectuer.",
      },
      {
        title: "Microclimat de la vallée de l'Isle : mousses, lichens et entretien préventif",
        content: "La vallée de l'Isle, en fond de cuvette entre les coteaux du Fronsadais et les terrasses de la Dordogne, concentre l'humidité atmosphérique et les brouillards d'automne et d'hiver plus longtemps que les plateaux alentour. Ce microclimat favorise la colonisation précoce et intense des toitures par les mousses, lichens et algues — qui, si l'on n'intervient pas, dégradent la surface poreuse des tuiles en moins de dix ans. DT Couverture propose un programme d'entretien complet : démoussage basse pression au printemps, traitement anti-mousse fongicide et algicide homologué, application d'un hydrofuge penetrant qui imperméabilise les tuiles et ralentit la recolonisation pendant 8 à 12 ans. Pour les propriétaires qui souhaitent anticiper, nous proposons également un contrat de visite annuelle de toiture : inspection complète en hauteur, petit entretien préventif (remise en place de tuiles légèrement décalées, nettoyage des gouttières, resserrage de solins) et compte-rendu écrit avec recommandations. C'est le meilleur moyen d'éviter les dépenses imprévues.",
      },
      {
        title: "Isolation, Velux et zinguerie à Saint-Denis-de-Pile et dans l'Isle-et-Fronsadais",
        content: "Au-delà des réparations et de l'entretien, DT Couverture accompagne les habitants de Saint-Denis-de-Pile dans leurs projets de valorisation de toiture. L'isolation de combles perdus par soufflage de ouate de cellulose ou de laine minérale est le geste thermique le plus rentable pour les maisons de bourg et les pavillons du secteur : un investissement récupéré en 3 à 7 ans selon les dossiers, amplifié par les aides MaPrimeRénov' et les certificats d'économie d'énergie (CEE). La pose de fenêtres de toit (Velux, Fakro) transforme des combles sombres en espaces lumineux habitables — DT Couverture gère l'ensemble du chantier, de l'ouverture en toiture à la pose du cadre intérieur. Côté zinguerie, nous réalisons la pose de gouttières en zinc ou aluminium laqué, les chéneaux sur-mesure, les descentes d'eaux pluviales et tous les raccords d'étanchéité pour les parties ouvragées.",
      },
    ],
    localSpecificities: "Saint-Denis-de-Pile est le siège de DT Couverture : réactivité maximale (intervention en moins d'une heure), stock de tuiles locales, connaissance intime du bâti. Le microclimat de la vallée de l'Isle (brouillards, humidité élevée) accélère la croissance des mousses et justifie un entretien préventif régulier.",
    nearbyCommunes: ["Les Billaux", "Fronsac", "La Rivière", "Lalande-de-Pomerol", "Néac", "Arveyres", "Izon", "Galgon"],
    faq: [
      { question: "DT Couverture est-il vraiment basé à Saint-Denis-de-Pile ?", answer: "Oui, notre siège social et notre atelier sont implantés à Saint-Denis-de-Pile (27 T Route des Artigues, 33910). Vous pouvez nous appeler directement pour un devis ou une urgence : nous pouvons être chez vous en moins d'une heure." },
      { question: "Quel est le prix d'une rénovation de toiture à Saint-Denis-de-Pile ?", answer: "Pour une maison standard en tuiles mécaniques (environ 80 à 120 m² de toiture), beaucoup de chantiers se situent entre 7 000 et 14 000 € en rénovation complète (tuiles + écran sous-toiture + zinguerie). En réparation ponctuelle, comptez 150 à 500 € selon l'étendue des dégâts. Devis gratuit et détaillé sur place." },
      { question: "Comment fonctionne le contrat d'entretien de toiture ?", answer: "Nous proposons une visite annuelle de toiture : inspection complète, nettoyage des gouttières, vérification des solins, rapport écrit avec photos. C'est un forfait annuel qui vous protège contre les dépenses imprévues. Contactez-nous pour un devis adapté à la taille de votre toiture." },
      { question: "Peut-on obtenir des aides pour l'isolation des combles à Saint-Denis-de-Pile ?", answer: "Oui. L'isolation de combles perdus est éligible à MaPrimeRénov' (montant selon revenus du foyer) et aux CEE (certificats d'économie d'énergie). Nous réalisons le chantier clé en main et vous aidons à monter les dossiers d'aide. Le reste à charge est souvent très faible voire nul pour les ménages modestes." },
      { question: "Combien de temps dure un chantier de démoussage à Saint-Denis-de-Pile ?", answer: "Un démoussage complet (nettoyage basse pression + traitement anti-mousse + hydrofuge) d'une maison standard prend généralement 1 journée. Le produit hydrofuge nécessite un temps de séchage de 24 à 48h avant une pluie. Prix indicatif : 700 à 1 600 € pour 80 à 120 m² de toiture, devis gratuit sur place." },
    ],
  },
  {
    slug: "couvreur-fronsac",
    name: "Fronsac",
    department: "Gironde",
    departmentCode: "33",
    postalCode: "33126",
    population: "1 200",
    distance: "5 km",
    metaTitle: "Couvreur Fronsac (33126) | Toiture Vignoble, Chais, Rénovation | Devis Gratuit",
    metaDescription: "Couvreur à Fronsac (33126) : rénovation toiture sur coteaux viticoles, tuiles canal, chais Canon-Fronsac, zinguerie, charpente ancienne, contraintes site inscrit. Devis gratuit.",
    h1: "Couvreur à Fronsac : toiture sur coteaux viticoles et bâtiments du vignoble",
    heroText: "Couvreur local à Fronsac, à 5 km de notre siège. DT Couverture intervient sur les maisons de coteaux, les châteaux viticoles, les chais de l'appellation Fronsac et Canon-Fronsac. Savoir-faire adapté aux contraintes du site inscrit et aux matériaux traditionnels du vignoble. Devis gratuit.",
    sections: [
      {
        title: "Couverture sur les coteaux de Fronsac : pentes, expositions et tuiles canal",
        content: "Fronsac occupe un promontoire calcaire dominant le confluent de l'Isle et de la Dordogne, avec des pentes de terrain accentuées qui donnent aux toitures locales des caractéristiques singulières. Les maisons de coteaux, construites sur des terrasses qui étagent le village depuis le bas de l'Isle jusqu'au plateau, présentent des toitures en tuiles canal à pente douce (28 à 38 %) orientées majoritairement sud pour profiter du soleil et de l'évaporation naturelle. Sur les versants exposés aux vents dominants de nord-ouest, les faîtières et les rives de rive sont particulièrement sollicitées et constituent les premiers points d'usure. DT Couverture connaît cette géographie précise et anticipe ces contraintes lors de ses interventions : consolidation systématique des faîtières au mortier de chaux, vérification des épingles de rive et remplacement des tuiles de rive branlantes. Les toitures en tuiles canal de Fronsac exigent une pose au mortier traditionnel (chaux hydraulique naturelle NHL) — pas de lit de sable-ciment qui crée un effet de serre et accélère la dégradation des tuiles.",
      },
      {
        title: "Chais, celliers et bâtiments viticoles de l'appellation Fronsac et Canon-Fronsac",
        content: "Le vignoble de Fronsac et Canon-Fronsac concentre une densité remarquable de propriétés viticoles — châteaux, domaines, petits exploitants — avec une architecture technique spécifique : chais d'élevage dont la toiture doit maintenir une fraîcheur et une hygrométrie stables, cuviers aux pentes parfois asymétriques, hangars agricoles de grande portée, et bâtiments d'accueil récents aux toitures contemporaines. DT Couverture intervient sur l'ensemble de ces bâtiments avec une approche adaptée à chaque usage. Pour les chais d'élevage, nous proposons des solutions d'isolation thermique réfléchissante sous les tuiles — légères et sans impact sur la pente — qui réduisent les variations de température et préservent les conditions d'élevage. Sur les hangars à portée importante, nous réalisons la réparation et le remplacement de bacs acier ondulés ou nervurés, avec traitement anti-rouille et reprise des fixations. Pour les bâtiments d'accueil, toiture ardoise, zinc ou tuile selon les choix architecturaux du propriétaire.",
      },
      {
        title: "Site inscrit et contraintes patrimoniales à Fronsac",
        content: "Le site de Fronsac est partiellement inscrit au titre des sites pittoresques, en raison de la qualité exceptionnelle de ses panoramas sur la Dordogne et la plaine du Libournais. Si votre propriété se situe dans le périmètre inscrit, toute modification d'aspect extérieur — y compris une réfection de toiture — est soumise à déclaration préalable auprès de la mairie, avec avis possible de l'Architecte des Bâtiments de France. DT Couverture vous accompagne dans ces démarches administratives : nous vous indiquons si votre bien est concerné, nous préparons le dossier de déclaration avec les photos, les plans et les descriptifs de matériaux requis, et nous choisissons avec vous des matériaux conformes aux attentes de l'ABF. Pour les toitures visibles depuis la Dordogne ou les points de vue répertoriés, les tuiles canal en terre cuite aux teintes vieillis sont généralement imposées.",
      },
      {
        title: "Gouttières, zinguerie et gestion des eaux pluviales en terrain en pente",
        content: "Les propriétés en pente de Fronsac posent des problèmes spécifiques de gestion des eaux de ruissellement. Les pluies intenses (fréquentes en automne dans le Libournais) génèrent des débits importants qui peuvent saturer des gouttières sous-dimensionnées et provoquer des débordements dans les murs. DT Couverture dimensionne rigoureusement chaque réseau de collecte en fonction de la surface de toiture et de la pluviométrie locale (norme EN 12056-3) : gouttières à section large (demi-ronde 150 mm ou carrée 125×125 mm), descentes en zinc ou aluminium, gardes-gravier en sortie de gouttière. Sur les propriétés en terrasses, nous installons des chéneaux sur-mesure qui collectent les eaux de plusieurs niveaux de toiture et les évacuent en un seul point. Les platebandes et les toits-terrasses, plus sensibles aux infiltrations, bénéficient d'une étanchéité renforcée par membrane EPDM ou bitumineuse sous protection.",
      },
    ],
    localSpecificities: "Fronsac est un promontoire viticole classé site inscrit (vues sur la Dordogne). Le bâti mêle maisons de coteaux en pierre calcaire, châteaux viticoles et chais. Les pentes de terrain accentuées imposent une gestion particulière des eaux pluviales. Les contraintes ABF peuvent s'appliquer dans le périmètre inscrit.",
    nearbyCommunes: ["La Rivière", "Saint-Germain-de-la-Rivière", "Saint-Michel-de-Fronsac", "Saillans", "Galgon", "Les Billaux", "Saint-Denis-de-Pile"],
    faq: [
      { question: "Faut-il une autorisation pour refaire sa toiture à Fronsac ?", answer: "Fronsac est partiellement classé site inscrit pittoresque. Si votre bien se situe dans le périmètre, une déclaration préalable est nécessaire et l'ABF peut être consulté. Nous vérifions votre situation avant de démarrer les travaux et préparons le dossier administratif avec vous." },
      { question: "Quelles tuiles utiliser à Fronsac ?", answer: "Les tuiles canal en terre cuite (nuances rouge vieilli, brun) sont le matériau de référence sur le bâti ancien de Fronsac. Elles sont généralement exigées dans le périmètre du site inscrit. Nous travaillons avec des fournisseurs qui proposent des tuiles de pays aux coloris conformes." },
      { question: "Intervenez-vous sur les châteaux viticoles de l'appellation ?", answer: "Oui, nous intervenons régulièrement sur les propriétés de l'appellation Fronsac et Canon-Fronsac : chais, cuviers, bâtiments d'accueil, logements de château. Nous planifions les chantiers en dehors des périodes de vendanges (septembre-octobre) pour éviter toute perturbation." },
      { question: "Comment gérer les eaux de ruissellement sur une propriété en pente à Fronsac ?", answer: "Les propriétés en pente nécessitent un réseau d'évacuation des eaux pluviales bien dimensionné. Nous réalisons le calcul hydraulique, posons des gouttières à section adaptée et des chéneaux sur-mesure pour les terrasses multiples. Un réseau correctement dimensionné évite les débordements et les dommages aux murs." },
      { question: "Quel est le tarif pour un démoussage à Fronsac ?", answer: "Pour une maison de coteaux d'environ 80 à 100 m² de toiture, le démoussage + traitement anti-mousse se situe généralement entre 700 et 1 400 €. L'accès en pente peut légèrement augmenter le coût si un échafaudage spécifique est nécessaire. Devis gratuit sur place." },
    ],
  },
  {
    slug: "couvreur-guitres",
    name: "Guitres",
    department: "Gironde",
    departmentCode: "33",
    postalCode: "33230",
    population: "3 000",
    distance: "15 km",
    metaTitle: "Couvreur Guitres (33230) | Toiture Rurale, Corps de Ferme, Rénovation | Devis Gratuit",
    metaDescription: "Couvreur à Guitres (33230) : rénovation toiture pavillonnaire et corps de ferme, bac acier, tuiles, isolation combles, démoussage, urgence. Artisan Nord-Gironde. Devis gratuit.",
    h1: "Couvreur à Guitres : toiture rurale, corps de ferme et rénovation pavillonnaire",
    heroText: "Vous cherchez un couvreur à Guitres et dans le nord de la Gironde ? DT Couverture intervient sur les maisons de bourg, les pavillons résidentiels et les corps de ferme de la région de Guitres. Artisan de proximité à 15 km, devis gratuit.",
    sections: [
      {
        title: "Diversité du bâti de Guitres : corps de ferme, maisons de bourg et pavillons",
        content: "Guitres, commune rurale du nord de la Gironde traversée par la Dronne, combine des morphologies bâties très diverses qui reflètent les différentes périodes de développement du secteur. Le centre-bourg historique rassemble des maisons en pierre calcaire du Blayais-Libourne avec des toitures en tuiles canal, souvent vieilles de plusieurs générations et nécessitant un entretien régulier ou une rénovation complète. En périphérie, les lotissements résidentiels des années 1975-1995 concentrent une grande partie du parc de pavillons en tuiles mécaniques creuses ou plates qui ont aujourd'hui 30 à 50 ans — un âge charnière où la toiture commence à montrer des signes sérieux d'usure : mousses épaisses, tuiles poreuses, écrans sous-toiture dégradés, solins décollés. Sur la commune et dans les hameaux alentour, les corps de ferme en activité ou réhabilités en résidences principales représentent un troisième type de bâti, avec des bâtiments agricoles couverts en fibrociment ondulé (amiante sur les plus anciens), en tôle galvanisée ou en bac acier, qui nécessitent des savoir-faire spécifiques. DT Couverture maîtrise l'ensemble de ces configurations.",
      },
      {
        title: "Rénovation énergétique des pavillons de Guitres : isolation et performance thermique",
        content: "Le parc pavillonnaire des années 70-90 de Guitres représente un gisement d'économie d'énergie considérable. Ces maisons individuelles, construites sans isolation (ou avec une isolation minimale) dans les combles, affichent des consommations en chauffage élevées et des DPE souvent classés D, E ou F. L'isolation des combles perdus par soufflage est l'intervention la plus simple et la plus rentable : un couvreur accède en toiture pour vérifier l'état de la couverture et de la ventilation des combles, puis l'isolant est soufflé depuis l'intérieur sur le plancher des combles. DT Couverture gère l'intégralité du chantier — inspection préalable de la toiture et de la charpente, mise en place d'une ventilation correcte si nécessaire, réalisation de l'isolation et production des justificatifs pour vos dossiers MaPrimeRénov' et CEE. Pour les combles aménageables, nous réalisons l'isolation sous rampants ou le sarking selon la configuration. Les aides disponibles en 2025-2026 permettent souvent de financer la totalité de l'isolation des combles perdus pour les ménages aux revenus modestes et intermédiaires.",
      },
      {
        title: "Couverture des bâtiments agricoles et corps de ferme à Guitres",
        content: "Les corps de ferme et les bâtiments agricoles du secteur de Guitres présentent des couvertures spécifiques qui nécessitent des compétences distinctes des couvertures de maison. Les hangar en bac acier ou tôle ondulée galvanisée se dégradent sous l'effet de la corrosion, du vent et des chocs : DT Couverture réalise le remplacement des bacs percés, la reprise des fixations, l'application de revêtements anti-corrosion et l'installation de lanterneaux de ventilation. Attention particulière pour les bâtiments anciens couverts en fibrociment ondulé contenant de l'amiante (fréquent avant 1997) : nous réalisons un diagnostic amiante préalable et, si l'amiante est présent, nous faisons appel à un désamianteur agréé avant toute intervention. Les grandes portées (15 à 30 m) des hangars imposent des techniques de levage adaptées — nous disposons de l'équipement nécessaire pour travailler en sécurité sur ces ouvrages.",
      },
      {
        title: "Urgences toiture dans les communes rurales du nord Gironde",
        content: "Dans les zones rurales comme Guitres, la disponibilité des couvreurs locaux est un enjeu réel : les artisans éloignés de plusieurs dizaines de kilomètres ne peuvent pas toujours intervenir rapidement. DT Couverture, basé à 15 km à Saint-Denis-de-Pile, garantit une réponse rapide pour les urgences dans la commune de Guitres et dans toutes les communes voisines : Coutras, Abzac, Saint-Seurin-sur-l'Isle, Saint-Médard-de-Guizières, Les Peintures, Le Fieu. En cas de tempête, de grêle ou de fuite soudaine, nous intervenons sous 24h pour sécuriser votre toiture par un bâchage professionnel, limiter les dégâts des eaux et rétablir l'étanchéité provisoire dans les meilleurs délais. Notre véhicule d'urgence est équipé en permanence de bâches, de cordes, d'échelles et de matériaux courants pour les premières réparations.",
      },
    ],
    localSpecificities: "Guitres et le nord-Gironde combinent bâti rural ancien (corps de ferme, maisons de bourg) et pavillonnaire des années 70-90. Les bâtiments agricoles couverts en fibrociment anciens nécessitent un diagnostic amiante préalable. Le climat humide de la vallée de la Dronne favorise les mousses. DT Couverture est à 15 km, seul artisan réactif sur le secteur.",
    nearbyCommunes: ["Abzac", "Saint-Seurin-sur-l'Isle", "Saint-Médard-de-Guizières", "Les Peintures", "Le Fieu", "Coutras", "Lapouyade"],
    faq: [
      { question: "Y a-t-il de l'amiante dans les vieilles toitures à Guitres ?", answer: "Les bâtiments agricoles et les maisons construits avant 1997 peuvent contenir de l'amiante dans les plaques de fibrociment de toiture. Un diagnostic amiante par un opérateur certifié est obligatoire avant tout retrait. Nous vous orientons vers un diagnostiqueur agréé et prenons en charge les travaux après désamiantage." },
      { question: "Combien coûte la rénovation d'une toiture de pavillon à Guitres ?", answer: "Pour un pavillon des années 70-90 d'environ 100 m² de toiture en tuiles mécaniques, une rénovation complète se situe souvent entre 8 000 et 15 000 € (couverture + écran sous-toiture + zinguerie). Une réparation partielle ou un démoussage coûte beaucoup moins. Devis gratuit sur place à Guitres." },
      { question: "Puis-je obtenir des aides pour isoler ma maison à Guitres ?", answer: "Oui. MaPrimeRénov' finance l'isolation des combles selon vos revenus. Les CEE (certificats d'économie d'énergie) complètent cette aide. Pour une maison de 100 m² classée E ou F, le reste à charge après aides peut être quasi nul pour les ménages modestes. Nous vous accompagnons dans les démarches." },
      { question: "Intervenez-vous sur les hangars agricoles autour de Guitres ?", answer: "Oui, nous intervenons sur les bâtiments agricoles de toute nature : hangars en bac acier, tôle galvanisée, tuile. Remplacement de bacs percés, reprise de fixations, peinture anti-corrosion, pose de lanterneaux. Nous réalisons les diagnostics amiante préalables pour les bâtiments anciens." },
      { question: "Quel est votre délai d'intervention pour une urgence à Guitres ?", answer: "Pour une urgence (fuite, dégâts de tempête), nous intervenons sous 24h à Guitres depuis notre siège de Saint-Denis-de-Pile (15 km). Nous bâchons votre toiture en urgence pour limiter les dégâts des eaux, puis réalisons la réparation définitive dans les jours suivants." },
    ],
  },
  {
    slug: "couvreur-pomerol",
    name: "Pomerol",
    department: "Gironde",
    departmentCode: "33",
    postalCode: "33500",
    population: "800",
    distance: "12 km",
    metaTitle: "Couvreur Pomerol (33500) | Toiture Châteaux Viticoles, Zinc, Ardoise | Devis Gratuit",
    metaDescription: "Couvreur à Pomerol (33500) : toiture de prestige pour châteaux viticoles, zinc, ardoise, cuivre, charpente noble, zinguerie haut de gamme. Artisan Libournais. Devis gratuit.",
    h1: "Couvreur à Pomerol : toiture de prestige pour châteaux viticoles et propriétés",
    heroText: "Pomerol, l'un des vignobles les plus prestigieux du monde, mérite un couvreur à la hauteur de ses propriétés. DT Couverture intervient sur les châteaux viticoles, les maisons de maître et les bâtiments techniques du plateau pomérolo-néacais. Matériaux nobles, finitions soignées, respect des architectures. Devis gratuit.",
    sections: [
      {
        title: "L'architecture singulière du plateau de Pomerol : pas de village, des châteaux dispersés",
        content: "Pomerol n'a pas de village au sens traditionnel du terme : il n'existe pas de centre-bourg groupé. Les propriétés viticoles — châteaux, domaines, maisons de maître — sont dispersées sur le plateau argileux à croûte de crasse de fer, entourées de leurs vignes dans un paysage ouvert et légèrement vallonné. Cette organisation du territoire se reflète directement dans la nature des toitures : pas d'alignement de maisons mitoyennes aux toitures homogènes, mais des bâtiments isolés avec des architectures très variées, allant de la maison bourgeoise simple du XIXe siècle à des propriétés plus ambitieuses dotées de toitures en ardoises ou en zinc, de lucarnes ornementales et d'ouvrages de zinguerie soignés. Chaque propriété est un cas particulier qui requiert une étude spécifique avant toute intervention. DT Couverture réalise une inspection complète en toiture avant chaque devis : relevé des dimensions, identification des matériaux, état de la charpente, état de la zinguerie, nature du sous-toit. Ce diagnostic préalable est gratuit et vous permet d'avoir une vision claire et budgétisée de l'ensemble des travaux à prévoir.",
      },
      {
        title: "Toiture de prestige : ardoise, zinc et cuivre sur les propriétés de Pomerol",
        content: "Les propriétés viticoles les plus renommées de Pomerol — Pétrus, Lafleur, Vieux Château Certan, Le Pin — disposent de bâtiments dont la toiture participe à l'image et à la valeur du domaine. Une ardoise naturelle en parfait état, une mansarde zinc impeccable ou une couverture en cuivre patiné contribuent à l'excellence visuelle de la propriété autant qu'aux photographies de prestige utilisées dans les communications des châteaux. DT Couverture travaille avec les matériaux nobles que méritent ces propriétés : ardoises naturelles d'Angers (Ardoise d'Anjou NF) posées au double chevron, zinc prépatiné VMZINC en couverture ou en habillage de façade, cuivre naturel pour les gouttières et les faîtières des toitures de standing, tuiles plates grand moule pour les propriétés à l'architecture néogothique ou neo-Renaissance. Chaque matériau est sélectionné en cohérence avec l'architecture existante et avec les recommandations des Architectes des Bâtiments de France lorsque la propriété est protégée.",
      },
      {
        title: "Gestion des eaux pluviales sur le plateau argileux : un enjeu technique spécifique",
        content: "Le plateau de Pomerol repose sur une argile lourde à faible perméabilité qui retient l'eau en surface lors des épisodes pluvieux. Cette caractéristique pédologique, qui est à l'origine de la réputation du terroir pomerolais pour la viticulture, crée des conditions de drainage particulières pour les bâtiments : les eaux pluviales de toiture doivent être évacuées loin des fondations pour éviter le gonflement-retrait argileux qui fragilise les maçonneries. DT Couverture porte une attention particulière au dimensionnement des réseaux d'évacuation des eaux de toit sur Pomerol : gouttières de grand gabarit, descentes d'eaux pluviales raccordées à des puisards ou à des réseaux drainants, raccordement des chéneaux sur les bâtiments complexes. Sur les propriétés où le drainage est insuffisant, nous travaillons en coordination avec les maçons et les terrassiers pour orienter les eaux loin des ouvrages.",
      },
      {
        title: "Charpente, isolation et entretien des bâtiments techniques de Pomerol",
        content: "Au-delà des bâtiments résidentiels et de prestige, les propriétés viticoles de Pomerol comprennent des chais, des cuviers et des bâtiments de stockage dont la toiture doit être fonctionnelle et bien isolée. La stabilité thermique des chais d'élevage est un facteur clé de la qualité des vins : DT Couverture propose des solutions d'isolation réfléchissante légère sous les couvertures existantes qui réduisent les écarts de température journaliers sans nécessiter de travaux lourds. Les charpentes des bâtiments anciens du plateau sont souvent en chêne massif avec des assemblages traditionnels ; nous assurons leur diagnostic, leur traitement contre les insectes xylophages et les champignons lignivores, et le remplacement des pièces dégradées. Pour les bâtiments techniques plus récents (hangars, remises), nous réalisons la maintenance et le remplacement des couvertures en bac acier.",
      },
    ],
    localSpecificities: "Pomerol est l'un des vignobles les plus prestigieux du monde (Pétrus). Pas de centre-bourg : propriétés viticoles dispersées sur le plateau argileux. La toiture participe à l'image des domaines. Le sol argileux impose une gestion rigoureuse des eaux pluviales. Matériaux nobles (ardoise, zinc, cuivre) souvent en adéquation avec le standing des propriétés.",
    nearbyCommunes: ["Lalande-de-Pomerol", "Néac", "Saint-Émilion", "Libourne", "Montagne", "Saint-Denis-de-Pile", "Arveyres"],
    faq: [
      { question: "Intervenez-vous sur les châteaux viticoles de Pomerol ?", answer: "Oui, nous intervenons régulièrement sur des propriétés viticoles du plateau de Pomerol : toitures en ardoises, mansardes zinc, couvertures de chais et de bâtiments techniques. Nous planifions toujours les chantiers hors périodes de vendanges et de réception." },
      { question: "Quels matériaux pour une toiture de château viticole à Pomerol ?", answer: "Tout dépend de l'architecture du bâtiment. Pour une propriété néoclassique, l'ardoise naturelle d'Angers ou les tuiles plates sont le choix traditionnel. Pour des habillages de mansardes ou de décrochements, le zinc prépatiné s'impose. Nous vous conseillons en cohérence avec l'existant et le standing souhaité." },
      { question: "Combien coûte une toiture en ardoise sur Pomerol ?", answer: "La rénovation en ardoises naturelles d'Angers posées au double chevron se situe souvent entre 120 et 200 €/m² (matériaux + main-d'œuvre). Le zinc prépatiné pour une mansarde ou un coyau est également dans cette fourchette haute selon la complexité. Devis personnalisé gratuit sur place." },
      { question: "Comment protéger les fondations d'une maison sur le plateau argileux de Pomerol ?", answer: "Les argiles gonflantes du plateau pomerolais peuvent fragiliser les fondations si les eaux de toiture ne sont pas évacuées loin des maçonneries. Nous raccordons systématiquement les descentes à des puisards ou à des drains périphériques. En cas de doute sur le drainage existant, nous travaillons avec des terrassiers pour sécuriser les fondations." },
      { question: "Réalisez-vous aussi la zinguerie cuivre à Pomerol ?", answer: "Oui. Nous façonnons et posons des gouttières, des faîtières et des ornements en cuivre naturel, qui développent avec le temps une patine verte caractéristique des toitures de prestige. Le cuivre est le matériau de longévité maximale (80 à 100 ans) pour la zinguerie des bâtiments de qualité." },
    ],
  },
  {
    slug: "couvreur-montpon-menesterol",
    name: "Montpon-Ménestérol",
    department: "Dordogne",
    departmentCode: "24",
    postalCode: "24700",
    population: "4 500",
    distance: "35 km",
    metaTitle: "Couvreur Montpon-Ménestérol (24700) | Toiture, Corps de Ferme, Rénovation | Devis Gratuit",
    metaDescription: "Couvreur à Montpon-Ménestérol (24700) : rénovation toiture, corps de ferme périgourdin, tuiles, isolation, charpente, démoussage. Artisan Gironde-Dordogne, devis gratuit.",
    h1: "Couvreur à Montpon-Ménestérol : toiture et rénovation en Dordogne-Gironde",
    heroText: "DT Couverture étend son intervention jusqu'à Montpon-Ménestérol en Dordogne. Corps de ferme périgourdins, maisons de bourg, pavillons résidentiels : nous intervenons sur tous types de toitures avec les matériaux traditionnels du Périgord. Devis gratuit, déplacement depuis Saint-Denis-de-Pile (35 km).",
    sections: [
      {
        title: "Le bâti de Montpon-Ménestérol : traditions périgordines et habitat contemporain",
        content: "Montpon-Ménestérol, ville de l'Isle en Périgord entre Bordeaux et Bergerac, présente une architecture typiquement périgourdine : maisons en pierre calcaire jaune ou dorée avec des toitures en tuiles rondes (canal) ou en tuiles plates à double recouvrement, corps de ferme à hangar ouvert caractéristiques du Périgord non fortifié, fermes en pisé ou en galets sur les communes environnantes. Le bâti plus récent — pavillons des années 1970-2000 des quartiers résidentiels de Montpon et de Ménestérol — présente les couvertures en tuiles mécaniques à relief, fréquentes dans tout le sud-ouest. DT Couverture maîtrise les spécificités de la construction périgourdine : pose en chevron des tuiles rondes à la mode locale, utilisation de la chaux de Saint-Astier (production locale) pour les travaux de maçonnerie de toiture, connaissance des essences de bois locales (chêne pédonculé, châtaignier) pour les travaux de charpente. La frontière Gironde-Dordogne n'est pas une frontière de savoir-faire : nous apportons à Montpon la même qualité de réalisation qu'à Saint-Denis-de-Pile ou Libourne.",
      },
      {
        title: "Rénovation des corps de ferme et des bâtiments agricoles du secteur de Montpon",
        content: "Le secteur de Montpon-Ménestérol est marqué par une tradition agricole forte — polyculture élevage sur les coteaux, peupliers dans la plaine de l'Isle — qui a légué un patrimoine bâti agricole important : granges à tabac, séchoirs, hangars à foin, étables. Une grande partie de ces bâtiments ont été réhabilités en habitations ou en gîtes ruraux depuis les années 1990, ce qui a généré une forte demande en rénovation de toiture. Ces chantiers de rénovation de corps de ferme présentent des défis particuliers : charpentes souvent dimensionnées pour des portées importantes (12 à 20 m) sans appui central, couvertures en tuiles canal sur liteaux dont l'état peut varier considérablement, présence fréquente de fibrociment ancien (amiante) sur les bâtiments d'exploitation érigés entre 1950 et 1995. DT Couverture réalise l'évaluation complète de la charpente (portance, déformation, attaque biologique), l'isolation thermique adaptée (fibre de bois soufflée pour les combles, laine de chanvre sous rampants pour les combles aménagés en gîte), et la couverture finale en tuiles de pays ou en bac acier selon l'usage du bâtiment.",
      },
      {
        title: "Spécificités climatiques de la vallée de l'Isle et impact sur les toitures",
        content: "La vallée de l'Isle à Montpon cumule les caractéristiques climatiques du Périgord : brouillards matinaux persistants d'automne et d'hiver (dus à la rivière), pluies de printemps abondantes et orages violents d'été, avec des épisodes de grêle qui surviennent en moyenne une à deux fois par an dans le secteur. Ces conditions climatiques ont plusieurs implications directes pour les toitures : le gel hivernal (quelques nuits par an) fragilise les tuiles déjà poreuses — les cycles gel-dégel accélèrent la fissuration des tuiles en terre cuite — ; les orages de grêle cassent les ardoises et les tuiles plates de façon soudaine, générant des besoins d'urgence ; les brouillards et l'humidité favorisent les mousses, en particulier sur les versants nord et les abris d'arbres. DT Couverture s'adapte à ces conditions en proposant des matériaux résistants au gel (tuiles avec indice de gel G4, ardoises d'Angers ou d'Espagne), des démoussages préventifs, et une intervention d'urgence sous 24-48h pour les dégâts de grêle.",
      },
      {
        title: "Démarches administratives, aides et financement à Montpon-Ménestérol",
        content: "Montpon-Ménestérol appartient au département de la Dordogne (24), ce qui ne change pas l'accès aux dispositifs nationaux d'aide à la rénovation. MaPrimeRénov' finance l'isolation des combles et, dans certains cas, la rénovation globale incluant la toiture. L'Agence Nationale de l'Habitat (ANAH) propose des aides spécifiques pour la rénovation de logements anciens très dégradés — nombreux dans le parc ancien de Montpon. La déclaration préalable de travaux est requise pour tout remplacement de couverture visible depuis la voie publique ; en zone ABF (périmètre d'un monument historique), l'accord de l'Architecte des Bâtiments de France peut être nécessaire. DT Couverture vous accompagne dans ces démarches : vérification de votre éligibilité, constitution du dossier ANAH ou MaPrimeRénov', dépôt de la déclaration préalable. Nous gérons la partie administrative pour que vous puissiez vous concentrer sur les décisions techniques et esthétiques.",
      },
    ],
    localSpecificities: "Montpon-Ménestérol est en Dordogne (24), à 35 km du siège de DT Couverture. Architecture périgourdine : pierre calcaire jaune, tuiles rondes (canal), corps de ferme. Brouillards hivernaux, grêle estivale, cycles gel-dégel : conditions exigeantes pour les toitures. DT Couverture intervient dans ce secteur pour les travaux importants et les urgences.",
    nearbyCommunes: ["Saint-Médard-de-Mussidan", "Villefranche-de-Lonchat", "Saint-Seurin-de-Prats", "Échourgnac", "Coutras", "Saint-Seurin-sur-l'Isle"],
    faq: [
      { question: "DT Couverture intervient-il en Dordogne ?", answer: "Oui, nous intervenons dans les communes proches de la frontière Gironde-Dordogne, dont Montpon-Ménestérol. Notre déplacement depuis Saint-Denis-de-Pile (35 km) est inclus dans le devis. Pour les chantiers importants (rénovation complète, corps de ferme), la distance ne constitue pas un obstacle." },
      { question: "Quel est le coût d'une rénovation de corps de ferme périgordin à Montpon ?", answer: "La rénovation d'un corps de ferme avec grande portée (15 à 20 m) est plus coûteuse qu'un pavillon standard : la charpente, les volumes importants et les accès difficiles influencent le prix. Beaucoup de projets se situent entre 20 000 et 60 000 € selon l'étendue des travaux. Devis gratuit après visite sur place." },
      { question: "Les tuiles rondes périgourdines sont-elles difficiles à trouver ?", answer: "Les tuiles canal en terre cuite de couleur ocre-rouge du Périgord sont produites par plusieurs tuileries du sud-ouest (Terreal, Edilians). Nous pouvons approvisionner les nuances les plus proches de vos tuiles existantes pour les réparations et les rénovations partielles, ou proposer des tuiles neuves de pays pour les réfections complètes." },
      { question: "Y a-t-il des aides pour rénover une toiture à Montpon-Ménestérol ?", answer: "Oui. En Dordogne comme en Gironde, MaPrimeRénov' finance l'isolation, et l'ANAH peut aider pour la rénovation globale de logements dégradés. La Communauté de communes Isle Double Landais peut avoir des dispositifs complémentaires. Nous vous aidons à identifier et à mobiliser toutes les aides disponibles." },
      { question: "Intervenez-vous en urgence à Montpon-Ménestérol ?", answer: "Oui, pour les urgences (fuite soudaine, dégâts de grêle ou de tempête), nous intervenons sous 24 à 48h à Montpon-Ménestérol. Le trajet de 35 km depuis Saint-Denis-de-Pile ne représente que 30 à 35 minutes. Nous bâchons votre toiture en urgence puis planifions la réparation définitive." },
    ],
  },

  // ── LOT 2 ─────────────────────────────────────────────────────────────────
  {
    slug: "couvreur-lalande-de-pomerol",
    name: "Lalande-de-Pomerol",
    department: "Gironde",
    departmentCode: "33",
    postalCode: "33500",
    population: "1 500",
    distance: "13 km",
    metaTitle: "Couvreur Lalande-de-Pomerol (33500) | Toiture Vignoble, Rénovation | Devis Gratuit",
    metaDescription: "Couvreur à Lalande-de-Pomerol (33500) : rénovation toiture, tuiles, zinguerie, charpente, démoussage pour propriétés viticoles et maisons. Artisan Libournais. Devis gratuit.",
    h1: "Couvreur à Lalande-de-Pomerol : toiture pour propriétés viticoles et maisons",
    heroText: "Vous cherchez un couvreur à Lalande-de-Pomerol ? DT Couverture intervient sur les propriétés viticoles, maisons de maître et pavillons de cette appellation du Libournais. Artisan à 13 km, devis gratuit.",
    sections: [
      {
        title: "Le bâti de Lalande-de-Pomerol : entre vignoble et habitat résidentiel",
        content: "Lalande-de-Pomerol regroupe les communes de Lalande-de-Pomerol et de Néac, sur le plateau argileux qui jouxte l'appellation Pomerol au nord. Le paysage bâti mêle des propriétés viticoles — châteaux, domaines, maisons de maître — éparpillées entre les parcelles de vignes, et des maisons individuelles plus récentes le long des routes de desserte. Le bâti ancien se caractérise par des murs en pierre calcaire et des toitures en tuiles canal à pente modérée (28 à 36 %), typiques du vignoble libournais. Les châteaux viticoles de l'appellation — Château Annereaux, Château Belles-Graves, Château de Musset — disposent de bâtiments techniques (chais, cuviers) et d'habitats de maître dont la toiture doit être à la hauteur de leur rang. DT Couverture intervient sur tous ces bâtiments avec la rigueur et le souci du détail qu'ils méritent : diagnostic préalable en toiture, choix de matériaux cohérents avec l'existant, réalisation soignée et nettoyage complet de chantier.",
      },
      {
        title: "Démoussage et entretien préventif sur le plateau argileux",
        content: "Le plateau argileux de Lalande-de-Pomerol partage avec son voisin pomerolais un microclimat particulier : l'argile retient l'humidité en surface longtemps après les pluies, et les brouillards matinaux stagnent dans les zones basses entre les coteaux. Ces conditions favorisent une colonisation active des toitures par les mousses, lichens et algues — parfois dès 5 à 7 ans sur les tuiles les plus poreuses. Un entretien préventif régulier est le meilleur moyen d'éviter une dégradation prématurée de la couverture. DT Couverture propose un démoussage complet en deux étapes : nettoyage basse pression pour décoller les dépôts organiques (sans endommager les tuiles), suivi d'un traitement fongicide et algicide laissé agir 3 à 6 mois, et application optionnelle d'un hydrofuge pénétrant qui imperméabilise les tuiles pendant 8 à 12 ans. Pour les propriétés viticoles qui souhaitent présenter leurs bâtiments en parfait état pour les photos de catalogues et les visites d'acheteurs, un démoussage bien conduit redonne immédiatement une apparence impeccable.",
      },
      {
        title: "Charpente et isolation des propriétés de Lalande-de-Pomerol",
        content: "Les bâtiments anciens du vignoble de Lalande-de-Pomerol présentent souvent des charpentes traditionnelles en chêne massif qui ont traversé le siècle sans entretien sérieux. Un diagnostic complet de charpente permet d'identifier les zones fragilisées par les insectes xylophages (vrillettes, capricornes, anobies) ou les champignons lignivores (mérule, coniophore) avant qu'elles ne compromettent la stabilité de la toiture. DT Couverture réalise ce diagnostic accompagné de photos et d'un rapport écrit, puis le traitement correspondant : injection sous pression pour les insectes, traitement curatif et assèchement pour les champignons. L'isolation de ces combles est un investissement rentable : les propriétés viticoles résidentielles de Lalande-de-Pomerol, souvent classées D ou E au DPE, bénéficient des aides MaPrimeRénov' pour l'isolation des combles perdus ou aménagés.",
      },
      {
        title: "Urgences, zinguerie et petites réparations à Lalande-de-Pomerol et Néac",
        content: "Les appels d'urgence pour tuile cassée, fuite en toiture ou gouttière arrachée sont fréquents après les orages d'été et les coups de vent d'automne dans le secteur libournais. DT Couverture, basé à 13 km à Saint-Denis-de-Pile, assure une réponse rapide sur Lalande-de-Pomerol et Néac : intervention sous 24h pour sécuriser, bâchage professionnel si nécessaire, réparation définitive planifiée dans les meilleurs délais. Pour la zinguerie, nous assurons la pose et le remplacement de gouttières en zinc ou aluminium, les chéneaux sur-mesure pour les bâtiments de grand gabarit, et les solins d'étanchéité autour des cheminées et des lucarnes.",
      },
    ],
    localSpecificities: "Lalande-de-Pomerol et Néac constituent un plateau argileux humide au nord de Pomerol. Le bâti viticole (châteaux, chais) côtoie des maisons résidentielles. L'humidité du sol argileux accélère la croissance des mousses. Les propriétés viticoles ont des exigences esthétiques élevées pour leurs couvertures.",
    nearbyCommunes: ["Néac", "Pomerol", "Saint-Émilion", "Montagne", "Lussac", "Libourne", "Saint-Denis-de-Pile"],
    faq: [
      { question: "Combien coûte un démoussage à Lalande-de-Pomerol ?", answer: "Pour une maison ou une propriété viticole d'environ 80 à 120 m² de toiture, le nettoyage + traitement anti-mousse coûte souvent entre 700 et 1 500 €. Avec l'hydrofuge protecteur, comptez 1 800 à 3 000 € selon la surface et l'accès. Devis gratuit sur place." },
      { question: "Intervenez-vous sur Néac en plus de Lalande-de-Pomerol ?", answer: "Oui, Néac fait partie de notre zone d'intervention habituelle. Les deux communes sont voisines et nous y intervenons avec les mêmes délais. Devis gratuit, déplacement compris depuis Saint-Denis-de-Pile (13 km)." },
      { question: "Traitez-vous les charpentes contre la mérule ?", answer: "Oui. La mérule (champignon lignivore) nécessite un traitement curatif spécifique et une réduction de l'humidité. Nous identifions la cause de l'humidité (défaut d'étanchéité, manque de ventilation), réalisons le traitement curatif, et renforçons ou remplaçons les pièces de charpente dégradées." },
      { question: "Quelle tuile recommandez-vous pour une propriété viticole à Lalande-de-Pomerol ?", answer: "La tuile canal en terre cuite aux teintes rouge vieilli ou ocre nuancé est le matériau de référence pour les bâtiments anciens du vignoble. Pour les constructions récentes, les tuiles mécaniques à profil vieilli offrent un bon compromis entre esthétique et prix." },
      { question: "Réalisez-vous des devis pour des copropriétés ou des syndicats viticoles ?", answer: "Oui, nous établissons des devis pour tous types de maîtres d'ouvrage : particuliers, SCI, syndicats viticoles, coopératives. Nos devis sont détaillés et signés, avec garantie décennale sur tous les travaux de couverture." },
    ],
  },
  {
    slug: "couvreur-lussac",
    name: "Lussac",
    department: "Gironde",
    departmentCode: "33",
    postalCode: "33570",
    population: "1 400",
    distance: "22 km",
    metaTitle: "Couvreur Lussac (33570) | Toiture, Rénovation, Démoussage | Devis Gratuit",
    metaDescription: "Couvreur à Lussac (33570) : rénovation toiture tuiles canal, zinguerie, charpente, démoussage, isolation. Secteur Saint-Émilion Nord. Artisan Gironde, devis gratuit.",
    h1: "Couvreur à Lussac : toiture en pays de Saint-Émilion Nord",
    heroText: "Besoin d'un couvreur à Lussac-Saint-Émilion ? DT Couverture intervient sur toutes les toitures du secteur : maisons de bourg, propriétés viticoles, pavillons. Artisan à 22 km, devis gratuit sous 48h.",
    sections: [
      {
        title: "Architecture et toitures de Lussac : le pays des appellations satellites",
        content: "Lussac est le chef-lieu des appellations « satellites » de Saint-Émilion — Lussac-Saint-Émilion —, un secteur de coteaux calcaires et de fonds d'argile qui dessine un paysage agricole ponctué de châteaux viticoles, de maisons de bourg et de fermes. L'architecture locale est ancrée dans la tradition girondine : murs en pierre calcaire blanche ou grise, toitures en tuiles canal à faible ou moyenne pente (28 à 40 %), chainages en brique rouge sur les bâtiments du début du XXe siècle. Le centre-bourg de Lussac conserve un tissu ancien compact dont de nombreuses toitures n'ont pas été rénovées depuis les années 1970-80 et montrent les signes caractéristiques de l'usure : tuiles noircies et poreuses, gouttières déformées, solins décollés aux jointures des cheminées. DT Couverture intervient sur ce bâti avec une connaissance précise des tuiles locales : nous stockons les références courantes en tuiles canal et en tuiles mécaniques adaptées au secteur nord-saint-émilionnais.",
      },
      {
        title: "Rénovation complète et réfection partielle à Lussac",
        content: "La rénovation de toiture à Lussac peut aller de la simple réparation ponctuelle — remplacement de quelques tuiles cassées après une tempête ou une grêle — à la réfection totale de l'enveloppe : dépose de la couverture existante, vérification et traitement de la charpente, pose d'un écran sous-toiture HPV (Haute Perméabilité à la Vapeur d'eau), nouveau lattage et nouvelle couverture. Entre ces deux extrêmes, nous proposons la réfection partielle d'un versant particulièrement dégradé, avec raccord chromé soigné aux versants adjacents. Avant toute décision, nous réalisons un diagnostic complet en toiture — inspection depuis le sol à la jumelle et montée en toiture avec relevé photographique — qui vous permet de prioriser les travaux selon leur urgence et votre budget. Ce diagnostic est gratuit et sans engagement.",
      },
      {
        title: "Zinguerie, gouttières et gestion des eaux de coteaux à Lussac",
        content: "Les propriétés de Lussac sont souvent implantées sur des coteaux calcaires avec des dénivelés prononcés qui concentrent les eaux de ruissellement sur certaines façades. Une zinguerie bien dimensionnée et en bon état est essentielle pour collecter et évacuer ces eaux sans débordement. DT Couverture réalise le diagnostic de votre réseau d'évacuation des eaux pluviales et propose les améliorations nécessaires : gouttières de section adaptée (demi-ronde 125 ou 150 mm), descentes en zinc ou aluminium laqué de couleur coordonnée à votre façade, gardes-gravier pour éviter les obstructions par les débris de végétation. Sur les bâtiments agricoles et les chais de l'appellation Lussac-Saint-Émilion, nous installons des chéneaux en zinc de grande portée pour collecter les eaux de grandes surfaces de toiture.",
      },
      {
        title: "Isolation et Velux à Lussac : confort thermique et aménagement des combles",
        content: "Lussac et ses hameaux environnants — Saint-Christophe, Petit-Figeac, Puyblanquet — regroupent de nombreuses maisons de caractère dont les combles non aménagés représentent un potentiel de surface habitable sous-exploité. DT Couverture accompagne les propriétaires dans ces projets : diagnostic de la charpente, isolation sous rampants en laine minérale ou en fibre de bois, pose de Velux pour apporter lumière et ventilation naturelle, et coordination avec les artisans plombiers et électriciens pour les raccordements. L'isolation par sarking (sur-toiture) est une solution pertinente pour les toitures en tuiles canal que l'on souhaite rénover simultanément : elle permet d'isoler efficacement sans toucher à l'intérieur et d'atteindre les niveaux de performance requis par le RE2020.",
      },
    ],
    localSpecificities: "Lussac est au cœur des appellations satellites de Saint-Émilion (Lussac-Saint-Émilion). Coteaux calcaires avec ruissellements importants : zinguerie et dimensionnement des gouttières essentiels. Bâti ancien en pierre calcaire avec tuiles canal. Nombreux combles non aménagés à valoriser.",
    nearbyCommunes: ["Puisseguin", "Montagne", "Saint-Georges-Saint-Émilion", "Saint-Émilion", "Pomerol", "Castillon-la-Bataille"],
    faq: [
      { question: "Intervenez-vous dans tous les hameaux autour de Lussac ?", answer: "Oui, nous couvrons tout le secteur de Lussac : Saint-Christophe, Petit-Figeac, Puyblanquet, et les propriétés viticoles isolées. Pas de surcoût de déplacement dans un rayon de 5 km autour de Lussac." },
      { question: "Ma toiture en tuiles canal a 40 ans — dois-je tout refaire ?", answer: "Pas forcément. Tout dépend de l'état de la charpente, de l'écran sous-toiture et des tuiles elles-mêmes. Beaucoup de toitures de 40 ans ne nécessitent qu'une réfection partielle du versant le plus dégradé, un démoussage et la reprise des solins. Diagnostic gratuit sur place pour évaluer précisément." },
      { question: "Le sarking est-il adapté aux toitures en tuiles canal de Lussac ?", answer: "Oui, le sarking est une solution idéale pour les toitures en tuiles canal que l'on rénove : on pose les panneaux isolants rigides sur la charpente existante, puis on repose les tuiles dessus. L'intérieur des combles reste intact, ce qui est précieux pour les bâtiments anciens aux charpentes décoratives." },
      { question: "Quel est le prix d'une réparation de gouttières à Lussac ?", answer: "Le remplacement d'une descente d'eau pluviale en zinc coûte généralement 80 à 180 € (matériau + pose). Le remplacement complet des gouttières d'une façade (10 à 15 ml) se situe souvent entre 350 et 750 €. Devis gratuit sur place." },
      { question: "Travaillez-vous avec les assurances pour les dégâts de tempête à Lussac ?", answer: "Oui, nous établissons un constat détaillé avec photos après les intempéries, que vous pouvez transmettre à votre assurance. Nous intervenons en urgence pour le bâchage et sécuriser la toiture, ce qui est remboursable par la plupart des contrats multirisques habitation." },
    ],
  },
  {
    slug: "couvreur-castillon-la-bataille",
    name: "Castillon-la-Bataille",
    department: "Gironde",
    departmentCode: "33",
    postalCode: "33350",
    population: "3 200",
    distance: "28 km",
    metaTitle: "Couvreur Castillon-la-Bataille (33350) | Toiture, Rénovation, Urgence | Devis Gratuit",
    metaDescription: "Couvreur à Castillon-la-Bataille (33350) : rénovation toiture, zinguerie, charpente, démoussage, isolation, urgence. Artisan Gironde-Dordogne. Devis gratuit.",
    h1: "Couvreur à Castillon-la-Bataille : toiture et rénovation en vallée de la Dordogne",
    heroText: "Vous cherchez un couvreur à Castillon-la-Bataille ? DT Couverture intervient sur toutes les toitures du Castillonnais : maisons de bourg en pierre, pavillons, propriétés viticoles. Artisan sérieux à 28 km, devis gratuit.",
    sections: [
      {
        title: "Le bâti de Castillon-la-Bataille : ville de caractère en vallée de la Dordogne",
        content: "Castillon-la-Bataille occupe une position stratégique à la limite de la Gironde et de la Dordogne, en bordure de la rivière Dordogne qui marque ici la frontière départementale. La ville est connue pour la bataille de 1453 qui a mis fin à la guerre de Cent Ans et pour son vignoble Castillon-Côtes de Bordeaux. Le tissu urbain de Castillon mêle un centre-bourg ancien en pierre calcaire, des quartiers pavillonnaires résidentiels des années 1960-1990 et des zones d'activités plus récentes. Les toitures du centre-ville en tuiles canal ou en tuiles plates à vieilli, les façades en pierre blonde et les menuiseries peintes constituent un ensemble cohérent qu'il convient de rénover en respectant les matériaux d'origine. En bordure de la Dordogne, le microclimat est plus humide et plus brumeux que sur les coteaux : les toitures des maisons riveraines sont soumises à une colonisation plus rapide par les mousses et les lichens.",
      },
      {
        title: "Réfection de toiture et couverture neuve à Castillon-la-Bataille",
        content: "Le parc immobilier du Castillonnais présente une forte proportion de maisons construites entre 1950 et 1985 dont les toitures arrivent en fin de vie. Les signes à surveiller : tuiles luisantes ou noircies (absorption d'eau excessive), écrans sous-toiture perforés (visibles par les auréoles sur le plafond des combles), gouttières déformées ou décollées, solins fissurés. DT Couverture réalise la réfection complète de votre toiture en une intervention soignée : dépose des tuiles et de l'écran ancien, vérification et traitement de la charpente, pose d'un écran sous-toiture HPV, lattage, couverture neuve en tuiles mécaniques ou canal selon votre choix, et reprise complète de la zinguerie. Pour les constructions neuves sur les lotissements récents de Castillon, nous posons des couvertures en tuiles plates ou mécaniques avec tous les accessoires d'étanchéité.",
      },
      {
        title: "Spécificités du secteur frontalier Gironde-Dordogne : matériaux et réglementation",
        content: "La limite entre la Gironde et la Dordogne crée une intéressante transition architecturale : les tuiles rondes (canal) et les tuiles de pays du Périgord côtoient les tuiles mécaniques à profil méditerranéen du vignoble girondin. Castillon se situe précisément à ce carrefour, et l'on peut observer les deux traditions sur les versants d'une même rue. DT Couverture connaît ces deux traditions et peut s'approvisionner dans les deux filières selon vos besoins et les exigences de votre commune. Sur le plan réglementaire, les permis de construire et déclarations préalables de travaux sont instruits par la mairie de Castillon ; en cas de monument historique dans le voisinage (l'église Saint-Symphorien est classée), la consultation de l'ABF est obligatoire pour les modifications visibles.",
      },
      {
        title: "Urgences, tempêtes et service après-tempête dans le Castillonnais",
        content: "Le secteur de Castillon-la-Bataille est exposé aux orages violents de l'automne et aux coups de vent du couloir Dordogne, qui emportent régulièrement des tuiles, arrachent des gouttières et causent des infiltrations. DT Couverture assure le service d'urgence 24h sur le Castillonnais : intervention rapide pour bâchage de protection, rapport d'expertise pour votre assurance habitation, et réparation définitive planifiée dans les meilleurs délais. Nous connaissons les procédures des principaux assureurs et vous aidons à constituer votre dossier d'indemnisation pour obtenir le remboursement le plus complet possible. Après une intempérie importante, nous pouvons également réaliser un diagnostic préventif de votre toiture pour détecter les fragilités créées par l'épisode météorologique.",
      },
    ],
    localSpecificities: "Castillon-la-Bataille est à la frontière Gironde-Dordogne, en bord de Dordogne. Architecture mixte (pierre calcaire girondine et tuiles de pays périgourdines). Climat de vallée avec humidité et brouillards. Zone exposée aux orages et coups de vent du couloir fluvial. Vignoble Castillon-Côtes de Bordeaux.",
    nearbyCommunes: ["Sainte-Colombe", "Les Salles-de-Castillon", "Saint-Magne-de-Castillon", "Gardegan-et-Tourtirac", "Branne", "Saint-Jean-de-Blaignac", "Lussac"],
    faq: [
      { question: "Combien coûte une rénovation de toiture à Castillon-la-Bataille ?", answer: "Pour un pavillon standard de 100 m² de toiture en tuiles mécaniques, beaucoup de rénovations complètes se situent entre 8 000 et 15 000 €. Pour une maison de bourg en tuiles canal avec réfection de zinguerie, comptez souvent 70 à 130 €/m². Devis gratuit et détaillé sur place." },
      { question: "Mon assurance couvre-t-elle les dégâts de tempête à Castillon ?", answer: "Les dégâts de tempête sont couverts par la garantie « tempête, grêle, neige » de votre multirisques habitation, obligatoire en France. Nous établissons un constat détaillé avec photos pour faciliter votre déclaration de sinistre et estimer le montant des réparations." },
      { question: "Peut-on utiliser des tuiles du Périgord à Castillon ?", answer: "Oui, les tuiles de pays périgourdines (canal, couleur ocre-rouge) sont bien adaptées à l'architecture castillonnaise. Nous pouvons approvisionner ces matériaux depuis les tuileries du sud-ouest et les poser conformément aux règles locales d'urbanisme." },
      { question: "Intervenez-vous dans les communes voisines comme Branne et Saint-Jean-de-Blaignac ?", answer: "Oui, nous couvrons tout le Castillonnais et le secteur de l'Entre-Deux-Mers oriental : Branne, Saint-Jean-de-Blaignac, Sainte-Colombe, Gardegan-et-Tourtirac et les communes environnantes." },
      { question: "Réalisez-vous des diagnostics de toiture après tempête à Castillon ?", answer: "Oui, nous réalisons des inspections de toiture après chaque épisode de tempête ou de grêle significatif. L'inspection comprend une montée en toiture, un relevé photographique de l'ensemble des désordres, et un rapport écrit avec estimation des coûts de réparation. Diagnostic gratuit sur place." },
    ],
  },
  {
    slug: "couvreur-saint-savin",
    name: "Saint-Savin",
    department: "Gironde",
    departmentCode: "33",
    postalCode: "33920",
    population: "3 500",
    distance: "20 km",
    metaTitle: "Couvreur Saint-Savin (33920) | Toiture, Isolation, Rénovation | Devis Gratuit",
    metaDescription: "Couvreur à Saint-Savin (33920) : rénovation toiture, isolation combles, zinguerie, charpente, démoussage, Velux. Entre Libourne et Blaye. Artisan Gironde. Devis gratuit.",
    h1: "Couvreur à Saint-Savin : toiture, isolation et rénovation en Haute-Gironde",
    heroText: "Vous recherchez un couvreur à Saint-Savin ? DT Couverture intervient dans tout le secteur de la Haute-Gironde : rénovation de toiture, isolation, zinguerie, charpente. Artisan à 20 km de Saint-Savin, devis gratuit.",
    sections: [
      {
        title: "Saint-Savin et la Haute-Gironde : un bâti diversifié entre estuaire et vignoble",
        content: "Saint-Savin occupe une position intermédiaire entre le Libournais et la Haute-Gironde, dans un secteur de collines et de vallées douces qui descend vers l'estuaire de la Gironde. La commune présente un tissu bâti typique des bourgs semi-ruraux girondins : maisons de bourg en pierre calcaire avec toitures en tuiles canal, lotissements pavillonnaires des années 1975-2000 en tuiles mécaniques, et quelques corps de ferme réhabilités en résidences. La particularité de Saint-Savin est sa forte croissance démographique depuis les années 2010 — de nombreux ménages bordelais et libournais s'y installent en première ou deuxième couronne — ce qui génère une demande importante en couverture neuve et en rénovation de maisons récemment acquises. DT Couverture répond à ces besoins depuis son siège de Saint-Denis-de-Pile, à 20 km.",
      },
      {
        title: "Isolation thermique et rénovation énergétique à Saint-Savin",
        content: "La forte proportion de pavillons des années 1970-1990 à Saint-Savin représente un gisement de rénovation énergétique considérable. Ces maisons individuelles, souvent peu ou pas isolées dans les combles, présentent des passoires thermiques qui peuvent être corrigées efficacement par l'isolation des combles perdus — le geste énergétique le plus rentable et le plus rapide à mettre en œuvre. DT Couverture réalise l'isolation des combles par soufflage de ouate de cellulose (matériau biosourcé performant) ou de laine de verre, en s'appuyant sur un diagnostic préalable de la toiture et de la ventilation des combles. Un bon niveau de ventilation est indispensable pour éviter la condensation sous la couverture — problème fréquent dans le secteur côtier. Les aides disponibles (MaPrimeRénov', CEE, éco-prêt à taux zéro) permettent de financer la quasi-totalité de cette isolation pour les ménages aux revenus modestes et intermédiaires.",
      },
      {
        title: "Influence du vent d'estuaire sur les toitures de Saint-Savin",
        content: "Saint-Savin, sur les hauteurs dominant la plaine de l'estuaire, est exposée aux vents de sud-ouest qui remontent l'estuaire de la Gironde et s'accélèrent sur les coteaux exposés. Ces vents réguliers et parfois forts (vitesses moyennes plus élevées que dans le Libournais abrité) exercent une contrainte mécanique permanente sur les toitures : ils fragilisent les faîtières, décalent les tuiles de rive et mettent à l'épreuve les assemblages de zinguerie. DT Couverture tient compte de cette exposition dans ses réalisations : mortier de chaux sur les faîtières et les ébouts de rive pour les toitures en tuiles canal, clips de fixation systématiques sur les tuiles mécaniques en versant exposé, gouttières avec fixations renforcées. Nous réalisons également des inspections préventives après les épisodes de vent fort pour détecter et corriger les déplacements avant qu'ils ne causent des infiltrations.",
      },
      {
        title: "Velux, toitures neuves et petites réparations à Saint-Savin et alentours",
        content: "La pose de fenêtres de toit est l'une des demandes les plus fréquentes à Saint-Savin : les maisons récentes avec de grands combles souhaitent aménager ces espaces en chambres, bureaux ou salles de jeux. DT Couverture maîtrise l'ensemble de ce type de chantier : création de l'ouverture en toiture (sciage des chevrons selon les règles de l'art), pose de la fenêtre de toit avec son cadre et son tablier d'étanchéité, habillage intérieur. Nous travaillons avec les marques Velux et Fakro et pouvons installer des modèles électriques avec volets roulants solaires ou à commande manuelle. Pour les petites réparations — remplacement d'une tuile, reprise d'un solin, débouchage de gouttière — nous intervenons avec les mêmes soins que sur les grands chantiers.",
      },
    ],
    localSpecificities: "Saint-Savin est en Haute-Gironde, en pleine croissance démographique (périurbain bordelais-libournais). Exposition aux vents d'estuaire : fixations renforcées sur les versants exposés. Forte demande en isolation et en couverture neuve. À 20 km de Saint-Denis-de-Pile.",
    nearbyCommunes: ["Saint-Martin-du-Bois", "Gours", "Saint-Christophe-de-Double", "Abzac", "Coutras", "Libourne", "Blaye"],
    faq: [
      { question: "Combien coûte la pose d'un Velux à Saint-Savin ?", answer: "La pose d'une fenêtre de toit standard (type Velux GGL 78×98 cm) se situe généralement entre 800 et 1 600 € fourni et posé, selon l'accès, le type de toiture et le modèle. La création d'une nouvelle ouverture (sciage de chevrons) coûte 200 à 400 € de plus. Devis gratuit sur place." },
      { question: "Comment renforcer une toiture exposée aux vents d'estuaire à Saint-Savin ?", answer: "Pour les toitures exposées, nous utilisons des crochets de fixation supplémentaires, du mortier de chaux sur les faîtières et les rives, et des gouttières avec supports renforcés. Pour une toiture existante, une visite préventive permet d'identifier les points faibles et de les consolider avant la saison des vents." },
      { question: "Quelles aides pour l'isolation des combles à Saint-Savin ?", answer: "MaPrimeRénov' et les CEE financent l'isolation des combles perdus. Pour une maison classée E ou F, le reste à charge peut être très faible voire nul pour les ménages modestes. Nous préparons votre dossier de demande d'aide et vous accompagnons jusqu'au versement." },
      { question: "Intervenez-vous sur les nouvelles constructions à Saint-Savin ?", answer: "Oui, nous intervenons sur les couvertures neuves dans les lotissements récents de Saint-Savin. Nous travaillons en coordination avec les maçons et les charpentiers pour assurer la bonne chronologie des interventions." },
      { question: "Quel est le délai pour un devis à Saint-Savin ?", answer: "Nous nous déplaçons généralement sous 48h pour un devis à Saint-Savin. L'intervention suit dans un délai de 1 à 3 semaines selon la nature et l'urgence des travaux, sauf urgence où nous intervenons sous 24h." },
    ],
  },
  {
    slug: "couvreur-branne",
    name: "Branne",
    department: "Gironde",
    departmentCode: "33",
    postalCode: "33420",
    population: "1 200",
    distance: "18 km",
    metaTitle: "Couvreur Branne (33420) | Toiture Entre-Deux-Mers, Rénovation | Devis Gratuit",
    metaDescription: "Couvreur à Branne (33420) : rénovation toiture tuiles, zinguerie, charpente, démoussage, isolation. Secteur Entre-Deux-Mers. Artisan Gironde, devis gratuit.",
    h1: "Couvreur à Branne : toiture et rénovation en Entre-Deux-Mers",
    heroText: "Besoin d'un couvreur à Branne et dans le secteur de l'Entre-Deux-Mers Est ? DT Couverture intervient sur toutes les toitures du territoire : maisons de vignerons, pavillons, bâtiments agricoles. Artisan à 18 km, devis gratuit.",
    sections: [
      {
        title: "Branne et l'Entre-Deux-Mers : un terroir architectural entre collines et vignobles",
        content: "Branne est un bourg typique de l'Entre-Deux-Mers, cette région entre Garonne et Dordogne qui doit son nom aux deux rivières qui l'encadrent. Perché sur une colline dominant la plaine de la Dordogne, Branne offre un panorama sur le vignoble et les coteaux calcaires caractéristiques du sud-est de la Gironde. Le bâti du bourg et de ses hameaux — Daignac, Moulon, Espiet, Tizac-de-Curton — présente les caractères architecturaux de l'Entre-Deux-Mers : maisons de vignerons en pierre calcaire blanche avec toitures en tuiles canal ou tuiles plates, granges à voûte en berceau, châteaux de taille modeste avec leurs bâtiments agricoles attenants. Ce patrimoine bâti est soumis aux mêmes contraintes climatiques que le reste du Libournais : humidité de la vallée, vents de nord-ouest, variations thermiques saisonnières qui fragilisent les mortiers et les enduits.",
      },
      {
        title: "Rénovation de toiture dans le secteur de Branne : diagnostic et intervention",
        content: "Beaucoup de maisons de vigneron et de bâtiments anciens de Branne et de l'Entre-Deux-Mers Est n'ont pas bénéficié de rénovation sérieuse de leur toiture depuis plusieurs décennies. Ces toitures présentent souvent une accumulation de problèmes interconnectés : tuiles canal anciennes dont le mortier de pose s'est désagrégé avec les cycles gel-dégel, laissant les tuiles libres de bouger au vent ; solins de cheminée fissurés laissant entrer l'eau ; charpente tachée par des infiltrations ponctuelles mais encore globalement saine. Avant de préconiser une réfection totale, DT Couverture réalise un diagnostic complet qui distingue ce qui peut être conservé (charpente saine, tuiles en bon état) de ce qui doit être remplacé. Cette approche raisonnée vous évite des dépenses inutiles et vous permet d'investir là où c'est réellement nécessaire.",
      },
      {
        title: "Démoussage et entretien des toitures de l'Entre-Deux-Mers",
        content: "L'Entre-Deux-Mers est une région particulièrement humide : coincée entre deux rivières, elle accumule les brouillards de vallée en automne et en hiver, et reçoit des précipitations supérieures à la moyenne girondine. Les toitures en tuiles canal, avec leur surface poreuse et leurs joints de mortier, sont particulièrement sensibles à la colonisation par les mousses et les lichens dans ce contexte. DT Couverture réalise des démoussages réguliers dans tout le secteur : nettoyage basse pression, traitement biocide homologué, application d'hydrofuge pour protéger durablement vos tuiles. Sur les propriétés viticoles où l'esthétique des bâtiments est un enjeu commercial (oenotourisme, dégustations), un démoussage bien réalisé valorise immédiatement l'image de la propriété.",
      },
      {
        title: "Charpente, isolation et bâtiments agricoles autour de Branne",
        content: "Le secteur de Branne concentre de nombreux corps de ferme viticoles dont les dépendances — pressoirs, hangars à matériel, caves coopératives — ont des toitures en mauvais état. DT Couverture intervient sur ces bâtiments avec les techniques adaptées à leurs spécificités : diagnostic de structure pour les charpentes de grande portée, dépose sélective sur les bacs acier ou les plaques fibrociment à remplacer, pose de bac acier nervuré avec isolation intégrée (complexe bi-couche) pour les hangars utilisés comme lieu de stockage ou de dégust. Pour les granges réhabilitées en gîtes ruraux — nombreux dans le secteur touristique de l'Entre-Deux-Mers — nous réalisons l'isolation complète des combles avec matériaux biosourcés, la pose de fenêtres de toit et la réfection de couverture en tuiles de pays.",
      },
    ],
    localSpecificities: "Branne est un bourg de l'Entre-Deux-Mers Est, sur les coteaux dominant la Dordogne. Architecture de vignerons en pierre calcaire blanche. Humidité de vallée favorisant les mousses. Nombreux corps de ferme viticoles réhabilités. Secteur touristique (oenotourisme) : esthétique des bâtiments importante.",
    nearbyCommunes: ["Daignac", "Moulon", "Espiet", "Tizac-de-Curton", "Génissac", "Izon", "Castillon-la-Bataille"],
    faq: [
      { question: "Combien coûte un démoussage à Branne ?", answer: "Pour une maison de vigneron avec environ 80 à 130 m² de toiture, le démoussage + traitement biocide se situe souvent entre 750 et 1 600 €. Avec hydrofuge protecteur, comptez 2 000 à 3 500 €. Prix proportionnel à la surface et à la complexité d'accès." },
      { question: "Intervenez-vous aussi à Daignac, Moulon et Génissac ?", answer: "Oui, nous couvrons tout le secteur de l'Entre-Deux-Mers Est : Branne, Daignac, Moulon, Espiet, Tizac-de-Curton, Génissac, Izon et les communes voisines. Déplacement inclus dans le devis." },
      { question: "Peut-on isoler une grange réhabilitée en gîte à Branne ?", answer: "Oui, c'est même indispensable pour le confort et la performance énergétique d'un gîte rural. Nous réalisons l'isolation sous rampants (laine de bois ou chanvre pour le confort acoustique et hygrothermique), la pose de Velux et la réfection de couverture en tuiles de pays. Devis sur mesure." },
      { question: "Comment savoir si ma charpente à Branne est encore saine ?", answer: "Un diagnostic visuel en combles permet d'identifier les signes d'attaque biologique (galeries d'insectes, taches de mérule, poutres ramollies) ou de désordre structurel (flèche du faîtage, écartement des murs). Nous réalisons ce diagnostic gratuitement lors de notre visite pour le devis." },
      { question: "Traitez-vous aussi les infiltrations par les cheminées à Branne ?", answer: "Oui. Les solins autour des cheminées sont souvent la première source de fuite dans les maisons anciennes de l'Entre-Deux-Mers. Nous réalisons la reprise complète des solins au mortier de chaux hydraulique, avec pose d'une membrane d'étanchéité sous le solin pour une protection maximale." },
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
