/**
 * Traduction française des pages commerciales /uslugi/*.
 *
 * Le chargeur fusionne par index : l'ordre et le nombre d'éléments
 * doivent correspondre exactement à src/data/UslugiData.js.
 *
 * Règles conservées depuis l'original :
 *  • aucun prix, aucun montant — le devis est envoyé après un brief court ;
 *  • aucune garantie de position dans les moteurs de recherche ni de résultat ;
 *  • aucun client, aucun prix professionnel, aucune référence inventés.
 */

const fr = {
  /* ══════════════════════════════════════════════════════════════
     LOGOTYPE
     ══════════════════════════════════════════════════════════════ */
  logotip: {
    h1: "Création de logo sur mesure",
    lead:
      "Un logo n'est pas une image, c'est un outil de travail. Il doit rester lisible dans une signature de courriel comme sur une enseigne, en une seule couleur comme en broderie. Nous concevons des signes qui tiennent sur tous ces supports et nous les livrons en fichiers sources, accompagnés de leurs règles d'usage.",

    sections: [
      {
        h2: "Ce que comprend la création d'un logo",
        paragraphs: [
          "Créer un logo ne consiste pas à livrer un fichier, mais à construire un système. Nous commençons par un brief et une conversation : de quoi vit l'entreprise, à qui elle vend, avec qui on la confond, et où le signe vivra le plus souvent — dans une application mobile, sur un emballage, sur une façade. La forme découle directement de ces réponses : un signe destiné à une application et un signe destiné à la gravure sur métal ne se construisent pas selon les mêmes règles.",
          "Vient ensuite l'analyse du secteur. Nous regardons à quoi ressemblent les concurrents et cherchons un territoire qui vous distingue au lieu de vous fondre dans le marché. Nous dessinons alors des esquisses et présentons deux ou trois directions abouties. Pas vingt propositions : vingt propositions signifient que la solution n'a pas été trouvée et que la responsabilité du choix est reportée sur le client.",
          "La direction retenue est menée jusqu'au signe définitif : proportions, réglages optiques, comportement en petite taille, zone de protection, versions monochrome et inversée. Vous repartez avec un jeu de fichiers et des règles courtes qui permettent de confier le logo, sans nous, à un imprimeur, à un fabricant d'enseignes ou à un nouveau responsable marketing.",
        ],
      },
      {
        h2: "Notre façon de travailler un signe",
        paragraphs: [
          "La première esquisse se dessine à la main, elle ne se choisit pas dans une banque d'images. Nous écartons délibérément l'évidence — les premières idées sont presque toujours celles qui vous sont venues, à vous comme à vos concurrents — et nous continuons jusqu'à ce qu'apparaisse une forme qui ait une raison d'être exactement celle-là. Cette raison, nous pouvons ensuite l'expliquer avec des mots, et non par un « c'est plus joli ».",
          "Chaque direction est présentée en contexte, pas sur une page blanche : sur une carte de visite, en photo de profil dans une messagerie, sur une enseigne, sur un emballage. Un signe qui paraît excellent dans une présentation s'effondre souvent sur le support réel : il perd sa lisibilité à seize pixels ou s'empâte en une seule couleur. Mieux vaut le découvrir avant la validation qu'au moment de lancer le tirage.",
          "Nous discutons en termes de problème à résoudre, pas de goût personnel. « J'aime » et « je n'aime pas » sont aussi des informations, mais nous demandons de préciser ce qui gêne : le signe paraît lourd, froid, il renvoie à un univers qui n'est pas le vôtre, il ressemble à celui d'une grande chaîne. Avec une formulation de ce type, on peut travailler. Avec un « ce n'est pas ça » abstrait, non, et nous le disons franchement.",
        ],
      },
      {
        h2: "Ce que vous recevez à la fin",
        paragraphs: [
          "Le logo définitif est livré en vectoriel : il ne perd sa qualité ni sur une carte de visite ni sur une bâche de dix mètres. S'y ajoutent des versions matricielles pour les réseaux sociaux et les documents, le favicon du site, une variante pour fond sombre et une version monochrome pour le marquage à chaud, la gravure et la broderie.",
          "Les fichiers sont accompagnés d'un mini-guide : taille minimale, zone de protection, usages autorisés et usages interdits, codes couleur en RGB, CMYK et Pantone. Cela suffit pour qu'un imprimeur ou un nouveau collaborateur n'abîme pas le signe par méconnaissance, en l'étirant à l'horizontale ou en le posant sur un fond chargé.",
          "Les droits exclusifs sur le logo validé vous sont transférés, et cela figure au contrat. Le studio conserve seulement le droit de montrer le travail dans son portfolio. Si le projet est sous accord de confidentialité ou n'est pas encore lancé, nous reportons la publication jusqu'à votre accord, ou nous y renonçons — cela se décide au départ et non après coup.",
        ],
      },
      {
        h2: "Les délais et ce qui les influence",
        paragraphs: [
          "La création d'un signe prend en général de deux à quatre semaines. La principale variable n'est pas notre vitesse de dessin, mais celle de vos retours. Si réunir les remarques de toutes les personnes concernées prend une semaine, le délai se décale exactement d'une semaine, et aucune optimisation interne du processus ne compense cela.",
          "Une mesure concrète accélère le travail : désignez la personne qui prend la décision finale. Un comité à cinq voix ne choisit pas le meilleur signe, il choisit celui qui ne dérange personne, et c'est presque toujours le plus fade de tous. Recueillir les avis est utile ; trancher à la majorité ne l'est pas.",
          "Ce qui ralentit, c'est le changement des données de départ en cours de route. Si, après la validation d'une direction, le nom, le produit ou le public change, nous revenons à l'étape des esquisses. C'est une situation normale, et il est plus honnête de l'appeler par son nom que de la faire passer pour une retouche cosmétique. Le délai exact et le détail des prestations, nous les annonçons après un brief court : avant cela, tout chiffre serait inventé.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Logo en vectoriel",
        note: "SVG, AI et PDF. Passe de l'icône d'application à l'enseigne de façade sans perte de qualité.",
      },
      {
        ru: "Versions matricielles",
        note: "PNG à fond transparent en plusieurs tailles, favicon pour le site, photos de profil pour les réseaux sociaux et les messageries.",
      },
      {
        ru: "Monochrome et inversion",
        note: "Version en une seule couleur et variante pour fond sombre — pour l'impression, le marquage à chaud, la gravure et la broderie.",
      },
      {
        ru: "Mini-guide d'utilisation",
        note: "Zone de protection, taille minimale, codes couleur RGB / CMYK / Pantone et liste de ce qu'il ne faut pas faire avec le signe.",
      },
      {
        ru: "Fichiers de travail sources",
        note: "Maquettes en calques, pour ne dépendre d'aucun prestataire et pouvoir confier le projet à quelqu'un d'autre.",
      },
      {
        ru: "Transfert des droits",
        note: "Les droits exclusifs sur le signe validé sont transférés au client par contrat.",
      },
    ],

    steps: [
      {
        title: "Brief et données de départ",
        text: "Un échange de 40 à 60 minutes et un questionnaire court : objectif, public, supports, ce qui plaît et ce qui est absolument exclu. Le résultat est consigné par écrit, pour ne pas discuter un mois plus tard de ce qui avait été convenu.",
      },
      {
        title: "Analyse et territoire",
        text: "Nous examinons les concurrents et les marchés voisins, puis définissons le territoire visuel à occuper. Nous en présentons une synthèse courte : à ce stade, changer de direction coûte encore peu.",
      },
      {
        title: "Esquisses et directions",
        text: "Nous dessinons des pistes à la main, en retenons deux ou trois viables et les menons jusqu'à une présentation aboutie — d'emblée en contexte, sur des supports réels et non sur une page blanche.",
      },
      {
        title: "Mise au point de la direction retenue",
        text: "Nous réglons les proportions, l'optique, le comportement en petite taille et la couleur. Les corrections se font par itérations, dont le nombre est fixé à l'avance dans le contrat.",
      },
      {
        title: "Livraison et transfert des droits",
        text: "Nous rassemblons les fichiers, rédigeons le mini-guide, remettons les sources et formalisons le transfert des droits. Ensuite, nous restons joignables pour les questions des imprimeurs et des prestataires publicitaires.",
      },
    ],

    faq: [
      {
        q: "Combien coûte la création d'un logo ?",
        a: "Le prix dépend du périmètre : s'agit-il du seul signe ou aussi des supports, combien de directions nous présentons, faut-il une analyse des concurrents et une préparation des fichiers en vue d'un dépôt de marque. C'est pourquoi nous ne publions pas de grille tarifaire : un chiffre annoncé sans connaître le projet induit tout le monde en erreur, vous comme nous. Envoyez-nous un brief court, ou simplement deux paragraphes : ce que fait l'entreprise, où le signe vivra, pour quelle échéance. Nous répondrons par un devis détaillant les prestations et les délais par étape, afin que vous voyiez ce que vous payez et ce à quoi vous pouvez renoncer sans perte de qualité.",
      },
      {
        q: "Combien de temps prend le travail ?",
        a: "En général de deux à quatre semaines, de la signature du contrat à la remise des fichiers. L'écart ne tient pas à la complexité du dessin, mais au nombre de validations de votre côté et à la rapidité de vos réponses. Nous planifions par étapes et annonçons à l'avance les jours où nous attendons vos décisions : si la réponse n'arrive pas ces jours-là, le délai se décale d'autant. Un rythme accéléré est possible s'il est discuté avant le démarrage et si nous pouvons réserver au projet les journées nécessaires. Le calendrier précis vous parvient avec le devis, après le brief ; avant cela, toute date annoncée relèverait de la devinette.",
      },
      {
        q: "Combien de séries de corrections sont comprises ?",
        a: "Le nombre d'itérations est fixé au contrat avant le démarrage, pour que les corrections ne deviennent pas un processus sans fin ni limite. Il s'agit habituellement de quelques tours à l'étape des directions et de quelques autres sur la mise au point du signe retenu, ce qui suffit dans l'immense majorité des projets. Les corrections à l'intérieur de la direction validée sont comprises. Revenir aux esquisses après la validation d'une direction constitue une nouvelle étape, et nous l'appelons honnêtement ainsi plutôt que de la présenter comme une retouche offerte. Pour réduire le nombre d'itérations, il est utile de rassembler d'un coup les remarques de toutes les personnes concernées, plutôt qu'une par jour.",
      },
      {
        q: "À qui appartiennent les droits sur le résultat ?",
        a: "Les droits exclusifs sur le logo validé sont transférés au client : c'est inscrit au contrat, et vous recevez avec les fichiers les documents attestant ce transfert. Vous pouvez utiliser le signe sans limite de territoire ni de durée, changer de prestataire, déposer la marque. Nous conservons uniquement le droit de montrer le travail dans notre portfolio et auprès des communautés professionnelles. Si le projet est confidentiel ou n'est pas encore lancé, nous reportons la publication jusqu'à votre autorisation ou nous y renonçons — cela se fixe au départ et ne se décide pas rétroactivement.",
      },
      {
        q: "De quoi avez-vous besoin de notre part pour commencer ?",
        a: "Au minimum : les réponses au brief et, de votre côté, une personne habilitée à décider. Le brief porte sur le produit, le public, les concurrents, les supports et sur ce qui vous est absolument exclu — la liste des « non » fait gagner plus de temps que celle des « oui ». Il est utile d'envoyer ce qui existe déjà : textes de présentation, photographies, anciennes maquettes, liens vers des concurrents. Si rien de tout cela n'existe, ce n'est pas grave, nous verrons ensemble pendant l'appel. Ensuite, il vous suffit de répondre à temps aux étapes de validation ; nous prenons le reste en charge.",
      },
      {
        q: "Déposez-vous la marque ?",
        a: "Le dépôt relève du conseil en propriété industrielle : c'est un métier juridique à part entière, et nous ne prétendons pas l'exercer. Notre part du travail est technique : nous préparons l'image aux formats requis et formulons avec vous ce qui est précisément soumis au dépôt. Sur demande, nous pouvons consulter les bases ouvertes pour repérer les ressemblances évidentes, mais cette vérification ne constitue pas un avis juridique et ne garantit pas l'enregistrement. Si vous n'avez pas de conseil, nous vous indiquerons vers qui il est raisonnable de vous tourner et remettrons les fichiers sous la forme habituellement demandée.",
      },
      {
        q: "Et si aucune direction ne nous plaît ?",
        a: "Cela arrive, et la cause tient rarement au dessin : le plus souvent, la demande avait été formulée de façon imprécise. C'est pourquoi nous présentons les directions tôt, et non au stade final, quand faire demi-tour coûte encore peu. Si aucune piste ne touche juste, nous revenons au brief et cherchons ce qui a divergé : le public, le ton, les associations d'idées. Nous repartons ensuite pour un nouveau tour d'esquisses ; les conditions de ce retour en arrière sont prévues d'avance au contrat, sans improvisation au fil des courriels. Nous ne promettons pas que la première présentation tombe toujours juste, mais nous promettons de ne pas faire semblant qu'elle est tombée juste.",
      },
      {
        q: "Travaillez-vous avec des entreprises hors de Moscou ?",
        a: "Oui. Le studio est installé à Moscou, mais le processus est entièrement à distance : le brief et les échanges se font en visioconférence, les présentations intermédiaires dans un document partagé, les fichiers se transmettent par lien. La géographie n'a d'incidence ni sur les délais ni sur le contenu des prestations. Avec les clients d'autres fuseaux horaires, nous convenons à l'avance d'un créneau d'appel, pour que les validations ne s'étirent pas d'une journée supplémentaire. Si vous préférez une rencontre à Moscou, c'est possible, mais ce n'est obligatoire à aucune étape.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     BRANDING ET IDENTITÉ VISUELLE
     ══════════════════════════════════════════════════════════════ */
  brending: {
    h1: "Création d'identité visuelle et branding",
    lead:
      "Une identité visuelle est l'ensemble des décisions qui vous rendent reconnaissable avant même qu'on ait lu votre nom. Nous construisons ce système dans son entier : du positionnement et du logo jusqu'aux supports, aux gabarits et aux règles qui permettront à votre équipe de le faire vivre.",

    sections: [
      {
        h2: "Ce qu'est une identité visuelle et à quoi elle sert",
        paragraphs: [
          "Une identité visuelle n'est pas une collection de belles images : c'est une façon d'économiser l'attention du client. Quand le site, l'enseigne, l'emballage, la présentation et le fil des réseaux sociaux forment un seul organisme, personne n'a besoin de comprendre à nouveau qui vous êtes à chaque rencontre avec la marque. La reconnaissance s'accumule, et chaque contact coûte à l'entreprise moins cher que le précédent.",
          "La situation inverse est plus fréquente : le logo a été dessiné par un prestataire, le site par un autre, les présentations sont bricolées par un commercial et les réseaux sociaux tenus par une troisième personne. Tout existe formellement, mais rien n'est reconnaissable, et le budget publicitaire tourne à vide. L'identité visuelle répond exactement à ce problème : elle pose un cadre à l'intérieur duquel tout nouveau support paraît d'emblée « à vous ».",
          "C'est pourquoi nous commençons presque toujours non par le dessin, mais par le positionnement : ce que l'entreprise vend réellement, à qui, en quoi elle diffère de ses voisines de marché et avec quels mots elle en parle. Sans cela, l'identité devient une affaire de goût — et elle s'effondre à la première réunion où chacun a sa propre idée du beau.",
        ],
      },
      {
        h2: "Comment se déroule notre travail sur une marque",
        paragraphs: [
          "La première étape, c'est l'étude et les entretiens. Nous examinons le marché, observons les concurrents directs et les catégories voisines, analysons l'image actuelle de l'entreprise et ce qui y fonctionne. Le plus précieux vient souvent des entretiens avec les collaborateurs : la manière dont l'équipe commerciale explique le produit à un client est en général plus juste que n'importe quel document sur la mission.",
          "Nous formulons ensuite la plateforme de marque en mots simples : essence, différence, ton, promesse. C'est un document court et non un volume de quarante pages — il doit servir pour de vrai. Sur cette base se construit le langage visuel : le signe, la palette, la typographie, les principes de mise en page, les éléments graphiques, l'approche de la photographie et de l'illustration.",
          "Le système est ensuite éprouvé sur les supports. Nous ne fabriquons pas d'exemples abstraits, mais ceux dont vous avez précisément besoin : emballage, enseigne, tenue du personnel, gabarits de présentations et de publications, documents, aménagement du point de vente. C'est exactement là que l'on voit où le système est trop rigide et où il manque de variantes — et nous ajustons les règles avant la livraison, pas après.",
        ],
      },
      {
        h2: "Le rebranding : quand il est vraiment nécessaire",
        paragraphs: [
          "Un rebranding se justifie quand l'image visuelle gêne l'activité : l'entreprise a grandi et s'adresse à un autre client, le prix et le positionnement ont changé, de nouvelles activités ne tiennent plus dans l'ancien système, ou le style est si ancien qu'il se lit comme un manque de soin envers soi-même. Ce sont des raisons de fond, et le design y répond.",
          "En revanche, « on s'en est lassé » et « le concurrent est plus voyant » sont de mauvais motifs. Changer d'identité efface une partie de la reconnaissance accumulée, qu'il faut ensuite reconstituer. Parfois, la réponse honnête à une demande de rebranding est celle-ci : ce n'est pas le logo qu'il faut changer, mais le site, les photographies ou le ton de la communication. Nous le disons franchement, même lorsque cela réduit le volume de la commande.",
          "Si le changement est malgré tout nécessaire, nous en discutons la profondeur à part. La voie évolutive conserve la reconnaissance et modernise l'exécution : les mêmes sens, une présentation d'aujourd'hui. La voie révolutionnaire convient lors d'un changement de modèle économique ou après une rupture de réputation avec le passé. Ce choix influe sur le budget comme sur le plan de transition : les anciens supports ne disparaissent pas en un jour, et l'ordre de leur remplacement se planifie à l'avance.",
        ],
      },
      {
        h2: "Ce que vous recevez et ce qui influence les délais",
        paragraphs: [
          "Vous recevez au final le logo et toutes ses versions, le système chromatique et typographique, les éléments graphiques, les maquettes des supports convenus, des gabarits pour les tâches récurrentes et un brandbook, document de règles et d'exemples. Le tout en fichiers sources : maquettes en calques, polices avec leurs licences ou les liens vers celles-ci, prêtes à être transmises à n'importe quel prestataire.",
          "Nous rédigeons le brandbook comme un mode d'emploi destiné à un être humain, et non comme un album à poser sur une étagère. Il répond aux questions qui se posent réellement : quelle marge autour du logo, quelle police dans les documents Word, que faire si le fond est chargé, comment composer une publication et comment présenter une proposition commerciale. Plus ces règles sont claires, plus le système vit longtemps sans nous.",
          "Le délai dépend du périmètre : l'identité d'une petite entreprise se monte en quelques semaines, un branding complet avec étude et des dizaines de supports demande des mois. Ce qui pèse le plus sur le calendrier, c'est la rapidité des validations et l'exhaustivité des données de départ — si la liste des supports se précise en cours de route, le plan se décale. Le contenu des prestations, les étapes et le délai sont fixés dans le devis, après un brief court.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Plateforme de marque",
        note: "Un document court : l'essence, la différence face aux concurrents, le ton et la promesse — dans une langue réellement utilisable.",
      },
      {
        ru: "Le logo et ses versions",
        note: "Signe principal, compositions horizontale et compacte, monochrome, inversion — en vectoriel et en matriciel.",
      },
      {
        ru: "Système visuel",
        note: "Palette avec ses codes, typographie, grilles, éléments graphiques, principes de photographie et d'illustration.",
      },
      {
        ru: "Maquettes des supports",
        note: "Celles dont vous avez précisément besoin : emballage, imprimés, enseigne, tenue, aménagement du point de vente, documents.",
      },
      {
        ru: "Gabarits pour l'équipe",
        note: "Présentations, publications, propositions commerciales — des modèles à remplir sans designer.",
      },
      {
        ru: "Brandbook et fichiers sources",
        note: "Des règles illustrées d'exemples « à faire » et « à ne pas faire », les fichiers de travail en calques, les polices avec leurs licences ou leurs liens.",
      },
    ],

    steps: [
      {
        title: "Brief et immersion",
        text: "Nous analysons l'activité : produit, public, canaux de vente, projets pour l'année. Nous parlons non seulement au dirigeant, mais aussi à ceux qui vendent et qui suivent les clients.",
      },
      {
        title: "Étude du marché",
        text: "Nous observons les concurrents et les catégories voisines, dressons un panorama visuel du secteur et cherchons un territoire libre. Les conclusions sont présentées avant tout dessin.",
      },
      {
        title: "Plateforme de marque",
        text: "Nous formulons l'essence, la différence et le ton en mots simples, puis les faisons valider. C'est le socle de toutes les décisions visuelles qui suivent.",
      },
      {
        title: "Identité visuelle",
        text: "Nous développons le signe, la palette, la typographie et le langage graphique. Les directions sont présentées en contexte, sur des supports réels et non sur fond blanc.",
      },
      {
        title: "Supports et gabarits",
        text: "Nous déployons le système sur la liste de supports convenue et assemblons les gabarits que votre équipe utilisera seule.",
      },
      {
        title: "Brandbook et transmission",
        text: "Nous rédigeons les règles, rassemblons les sources, remettons les fichiers et organisons une réunion avec l'équipe pour que le système soit adopté et su tenir.",
      },
    ],

    faq: [
      {
        q: "Combien coûte la création d'une identité visuelle ?",
        a: "L'éventail est large, car « identité visuelle » ne recouvre pas la même chose d'une entreprise à l'autre : certaines ont besoin d'un signe et d'un jeu minimal de supports, d'autres d'une étude de marché, d'une plateforme de marque, d'un emballage, de l'aménagement d'un point de vente et d'un brandbook. Publier un chiffre unique pour tous ces cas serait malhonnête. Écrivez-nous ce que fait l'entreprise, ce qui existe déjà et quels supports seront nécessaires dans l'année : nous reviendrons avec un devis découpé par étapes. Un tel devis montre ce qui peut se faire tout de suite et ce qui peut attendre l'étape suivante sans dommage.",
      },
      {
        q: "Combien de temps prend un projet de branding ?",
        a: "Une identité compacte pour une petite entreprise se monte en quelques semaines. Un branding complet, avec étude, plateforme, large éventail de supports et brandbook, demande des mois : c'est un délai normal pour un travail dont le résultat vit des années. Nous découpons le projet en étapes assorties de points de validation clairs, de sorte que vous voyez les avancées en continu au lieu d'attendre à l'aveugle une présentation finale. Le calendrier s'établit après le brief et dépend du nombre de supports ainsi que de la rapidité des validations de votre côté.",
      },
      {
        q: "Combien de séries de corrections sont comprises ?",
        a: "Le nombre d'itérations par étape est fixé au contrat avant le démarrage. À l'intérieur de la direction validée, les corrections sont comprises : cela fait partie d'un processus normal et n'est pas une faveur. Revenir à une étape déjà validée constitue un travail distinct, et nous le disons clairement au lieu de le diluer dans les échanges. L'expérience montre qu'il faut moins d'itérations quand les remarques de toutes les personnes concernées sont rassemblées d'un coup et qu'une seule personne prend la décision finale. Nous demandons qu'elle soit désignée dès le premier appel.",
      },
      {
        q: "À qui appartiennent les droits sur l'identité visuelle ?",
        a: "Les droits exclusifs sur les maquettes et le signe validés sont transférés au client par contrat : vous pouvez les utiliser sans restriction, les faire évoluer et les confier à d'autres prestataires. Le cas des polices fait l'objet d'une clause à part : si le système emploie des caractères commerciaux, la licence est achetée au nom de votre société, et nous précisons à l'avance laquelle est nécessaire. Les illustrations et photographies créées dans le cadre du projet sont remises avec le reste. Le studio conserve le droit de montrer le travail dans son portfolio ; si le projet est confidentiel, la publication est reportée ou n'a pas lieu.",
      },
      {
        q: "De quoi avez-vous besoin de notre part pour commencer ?",
        a: "Les réponses au brief, l'accès à quelques personnes pour des entretiens courts et un interlocuteur habilité à trancher. Il est utile d'envoyer tout ce qui existe : maquettes actuelles, photographies, textes, présentations, données de vente, liste des concurrents que vous jugez solides. Nous vous demanderons par ailleurs d'établir la liste des supports nécessaires dans l'année : le périmètre et le prix en dépendent. Si cette liste reste floue, nous la construirons ensemble lors du premier appel — cela fait partie du travail, ce n'est pas un devoir à la maison.",
      },
      {
        q: "Quelle différence entre un brandbook et une charte graphique ?",
        a: "La charte graphique décrit les règles visuelles : construction du logo, couleurs et polices, marges, usages interdits. C'est un document technique destiné aux designers et aux prestataires. Le brandbook va plus loin : au-delà de la partie visuelle, il explique le sens — qui vous êtes, pour qui, en quoi vous différez, avec quel langage vous parlez. À une petite entreprise, une charte graphique soignée et un jeu de gabarits suffisent généralement ; le brandbook complet s'impose là où beaucoup de personnes travaillent sur la marque et où les décisions se prennent dans plusieurs services. Nous proposons le format qui correspond au besoin, et non celui qui correspond au tarif.",
      },
      {
        q: "Peut-on rafraîchir le style sans changer le logo ?",
        a: "Oui, et c'est même souvent la décision la plus raisonnable. Le logo est la partie la plus inerte du système : il figure déjà sur les enseignes, sur les documents et dans la mémoire des clients. Ce qui vieillit, en revanche, c'est la palette, les polices, la mise en page, les photographies et la présentation sur les réseaux sociaux : ce sont elles qui donnent une impression d'âge. Nous pouvons conserver le signe et reconstruire tout autour, y compris, si nécessaire, une mise au point technique discrète du logo lui-même sans en changer la forme. Lors du brief, nous verrons ce qui fonctionne chez vous et ce qui gêne, et proposerons l'intervention minimale qui produit un effet.",
      },
      {
        q: "Qui fera vivre le style après la livraison ?",
        a: "Nous construisons le système pour que votre équipe puisse le tenir : gabarits, règles claires et réunion de transmission où le document est parcouru avec ceux qui l'utiliseront. Deux scénarios sont ensuite possibles. Le premier : vous travaillez de façon autonome et nous répondons aux questions au fur et à mesure. Le second : nous assurons un accompagnement régulier — nouveaux supports, matériaux saisonniers, aide aux prestataires. Cette seconde option fait l'objet d'un accord distinct et n'a rien d'obligatoire : un système ne doit pas se casser simplement parce que vous avez décidé de vous passer de nous.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     CRÉATION DE SITES WEB
     ══════════════════════════════════════════════════════════════ */
  "sozdanie-saytov": {
    h1: "Création de sites web sur mesure",
    lead:
      "Nous faisons des sites écrits en code, et non assemblés à partir des blocs d'un éditeur en ligne. Design, intégration, animation et optimisation technique se font au sein d'une même équipe : la vitesse de chargement et le comportement sur téléphone relèvent donc de la personne qui a dessiné la maquette.",

    sections: [
      {
        h2: "Les sites que nous réalisons",
        paragraphs: [
          "La landing page, quand il y a une seule prestation, une seule offre et un objectif clair : une demande, une réservation, un appel. Une telle page se construit autour d'une action unique, et tout y mène à cette action ou lève une objection qui l'empêche. Des rubriques supplémentaires n'ajoutent pas de confiance, elles dispersent l'attention.",
          "Le site d'entreprise s'impose quand les prestations sont multiples, les publics différents, et qu'il importe que chacun trouve la sienne par la recherche. Une structure apparaît alors : pages de services distinctes, portfolio, blog, page de présentation. Ces rubriques comptent pour les visiteurs comme pour les moteurs de recherche, qui classent des pages et non des sites entiers : une page « Services » unique perd face à quatre pages précises.",
          "La boutique en ligne et le catalogue forment une classe de projets à part : fiche produit, filtres, disponibilité, panier, paiement, exports. Ici, le design se plie à la logique produit, et non l'inverse. Nous réalisons aussi des écrans internes destinés au personnel — panneaux d'administration, tableaux de bord de cuisine, interfaces de commandes — car le site n'est souvent que la porte d'entrée d'un système utilisé tous les jours.",
        ],
      },
      {
        h2: "Comment se déroule le projet",
        paragraphs: [
          "Nous commençons par l'objectif, pas par l'arborescence. Nous devons comprendre qui arrive sur le site, ce que cette personne doit y faire et ce qui l'en empêche aujourd'hui. À partir des réponses, nous construisons la structure et un prototype : l'agencement des blocs, sans couleur ni esthétique. Valider un prototype est plus rapide et moins coûteux — à ce stade, déplacer une rubrique prend dix minutes et non deux jours.",
          "Vient ensuite le design. Nous dessinons les écrans clés en versions bureau et mobile en même temps : plus de la moitié du trafic vient du téléphone, et le « on adaptera plus tard » est le meilleur moyen d'obtenir un site inconfortable. En parallèle, nous réfléchissons au mouvement : chez nous, l'animation n'est pas un ornement, c'est un moyen de montrer les liens entre les écrans et de retenir l'attention là où c'est utile.",
          "Puis le développement. Nous écrivons le code avec Next.js et React, branchons les formulaires, l'analytique et les intégrations nécessaires, vérifions la vitesse et le comportement sur de vrais appareils. Nous livrons avec tous les accès : dépôt de code, hébergement, domaine, interface d'administration. Le client ne doit pas se retrouver otage de son prestataire — c'est un principe, pas une option.",
        ],
      },
      {
        h2: "Pourquoi nous écrivons du code au lieu d'assembler des blocs",
        paragraphs: [
          "Un éditeur en ligne est un outil tout à fait valable pour tester une hypothèse : en un week-end, vous obtenez une page et vous savez s'il y a une demande. Les problèmes viennent ensuite. Un gabarit traîne derrière lui du code dont vous n'avez pas besoin, ce qui pèse directement sur la vitesse de chargement — or la vitesse entre dans les facteurs de classement de Google et de Yandex et détermine si le visiteur attendra seulement la fin du chargement.",
          "La deuxième limite, c'est le plafond des possibilités. Toute mécanique inhabituelle, animation complexe, fiche produit atypique ou intégration à votre système de gestion se heurte à ce que l'éditeur ne sait pas faire. Le contournement par des widgets tiers fonctionne jusqu'à la première mise à jour de la plateforme. Le code écrit sur mesure ne connaît pas ces frontières : nous faisons exactement ce dont le projet a besoin.",
          "La troisième, c'est le contrôle. Un site bâti sur une plateforme vit selon les règles de celle-ci : tarifs, restrictions, accès au balisage, sort du projet si le service ferme. Un site Next.js, c'est votre dépôt de code, transférable vers n'importe quel hébergeur et confiable à n'importe quel développeur. Nous remettons l'intégralité du code et n'attachons techniquement personne à nous.",
        ],
      },
      {
        h2: "Ce que vous recevez",
        paragraphs: [
          "Un site en état de marche, en intégration responsive, vérifié sur les navigateurs actuels et sur de vrais téléphones. La base technique du SEO est en place : titres et descriptions uniques pour chaque page, adresses canoniques, plan du site, robots.txt, balisage Schema.org, hiérarchie de titres correcte et libellés explicites pour les liens et les images.",
          "Nous remettons tous les accès : code source dans le dépôt, hébergement, domaine, messagerie, interface d'édition du contenu si elle est prévue. Nous montrons en visioconférence comment modifier textes et images, et laissons une notice courte. L'analytique est branchée dès la mise en ligne — Yandex.Metrica et Google Analytics — sans quoi il sera impossible, un mois plus tard, de comprendre ce qui se passe côté trafic.",
          "Disons aussi ce que nous ne promettons pas : ni position précise dans les résultats de recherche, ni nombre précis de demandes. Personne ne peut le garantir honnêtement : les résultats dépendent de la concurrence, de l'ancienneté du domaine, des liens et du comportement des internautes. Nous répondons de ce qui relève de nous : la vitesse, un code propre, une structure pensée pour les requêtes et une page techniquement prête pour le référencement.",
        ],
      },
      {
        h2: "Les délais et ce qui les influence",
        paragraphs: [
          "Une landing page demande d'ordinaire quelques semaines, un site d'entreprise nettement plus, une boutique avec catalogue et intégrations davantage encore. Le délai exact tient non pas au nombre de pages, mais au nombre d'écrans uniques et de mécaniques non standard : vingt fiches produit identiques se font plus vite que trois pages à la logique différente.",
          "Deux choses décalent le plus le calendrier. La première, le contenu. Si les textes, les photographies et les données produit arrivent par morceaux sur un mois, le site ne peut pas être prêt avant. Nous pouvons aider à la rédaction et indiquer quelles prises de vue sont nécessaires, mais les éléments qui parlent de votre activité naissent forcément avec votre participation.",
          "La seconde, les intégrations avec des systèmes tiers : gestion de stock, CRM, service de paiement, transporteur. Là, la vitesse dépend de la documentation et du support technique en face, et cela s'inscrit honnêtement au plan comme une étape distincte, avec de la marge. Le contenu des prestations, les étapes et le délai sont fixés dans le devis, après un brief court : avant le brief, tout chiffre relèverait de la devinette.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Un site en ligne sur votre domaine",
        note: "Un projet déployé et fonctionnel : intégration responsive, contrôles sur les navigateurs actuels et sur de vrais téléphones.",
      },
      {
        ru: "Code source",
        note: "L'intégralité du dépôt, avec les accès sur votre compte. Le projet peut être déplacé et confié à un autre développeur.",
      },
      {
        ru: "Maquettes de design",
        note: "Les fichiers de tous les écrans en versions bureau et mobile, avec calques et composants.",
      },
      {
        ru: "Base technique SEO",
        note: "Balises meta, canonical, sitemap.xml, robots.txt, balisage Schema.org, structure sémantique des titres.",
      },
      {
        ru: "Analytique et formulaires",
        note: "Yandex.Metrica et Google Analytics, demandes envoyées du site vers une adresse e-mail ou une messagerie — configurés et testés.",
      },
      {
        ru: "Accès et notice",
        note: "Hébergement, domaine, interface d'édition et une notice courte pour mettre à jour textes et images.",
      },
    ],

    steps: [
      {
        title: "Brief et objectif",
        text: "Nous établissons qui arrive sur le site, ce que cette personne doit y faire et ce qui l'en empêche aujourd'hui. Nous fixons un objectif mesurable pour le projet.",
      },
      {
        title: "Structure et prototype",
        text: "Nous dressons la carte des pages et l'agencement des blocs, sans couleur. Valider un prototype est plus rapide et moins coûteux que refaire un design terminé.",
      },
      {
        title: "Design des écrans",
        text: "Nous dessinons les écrans clés d'emblée en versions bureau et mobile, et pensons le mouvement ainsi que les états de l'interface.",
      },
      {
        title: "Développement",
        text: "Nous écrivons le code avec Next.js et React, branchons les formulaires, l'analytique et les intégrations, vérifions la vitesse et le comportement sur de vrais appareils.",
      },
      {
        title: "Tests et mise en ligne",
        text: "Nous parcourons navigateurs, téléphones et scénarios, configurons le domaine et l'hébergement, publions et remettons tous les accès.",
      },
      {
        title: "Après la mise en ligne",
        text: "Nous montrons comment mettre à jour le contenu, répondons aux questions et, si besoin, prenons le projet en maintenance régulière.",
      },
    ],

    faq: [
      {
        q: "Combien coûte la création d'un site ?",
        a: "Le prix se détermine par le nombre d'écrans uniques et la complexité des mécaniques, non par le nombre de pages. Une landing page à objectif unique et une boutique avec catalogue, filtres et intégration à la gestion de stock relèvent d'ordres de grandeur différents : un chiffre commun n'aurait aucun sens. Décrivez le projet en deux ou trois paragraphes : quelle activité, ce que le visiteur doit faire, quelles intégrations sont nécessaires, si le design et les textes existent. Nous reviendrons avec un devis par étapes en indiquant ce qui peut sortir en première version et ce qui peut s'ajouter ensuite ; le projet démarre ainsi plus vite et à moindre coût.",
      },
      {
        q: "Combien de temps prend le développement ?",
        a: "Une landing page, quelques semaines ; un site d'entreprise, plus longtemps ; une boutique avec catalogue et intégrations, plus longtemps encore. Le délai se compose du nombre d'écrans uniques, des mécaniques non standard et de la rapidité avec laquelle arrive le contenu. Nous travaillons par étapes assorties de points de validation — structure, design, développement, tests — et vous voyez donc le résultat en continu. Le calendrier est fixé dans le devis après le brief, et il signale à part les jours où nous attendons de vous des éléments ou des décisions : ce sont ces pauses qui déplacent d'habitude la date de mise en ligne.",
      },
      {
        q: "Combien de séries de corrections sont comprises ?",
        a: "Les itérations sont fixées au contrat pour chaque étape : prototype, design et intégration terminée. Les corrections à l'intérieur d'une étape validée sont comprises. Les changements qui annulent une décision déjà prise — par exemple une nouvelle arborescence au stade de l'intégration — font l'objet d'un travail distinct, parce qu'il s'agit d'une refonte et non d'un ajustement. Nous le disons d'emblée, au lieu d'envoyer une facture après coup. Pour limiter les corrections, nous validons le prototype avant le design : déplacer un bloc sur un schéma coûte quelques minutes, dans du code terminé, des jours.",
      },
      {
        q: "À qui appartiennent le site, le code et les accès ?",
        a: "Tout appartient au client. Le code source est remis dans un dépôt sur votre compte, le domaine est enregistré à votre nom, l'hébergement est souscrit avec vos coordonnées. Les maquettes de design vous sont livrées en fichiers sources. Les droits sur le résultat sont transférés par contrat, y compris le droit de faire évoluer le projet avec d'autres développeurs : nous n'intégrons aucune dépendance technique envers nous. Si le projet emploie des polices payantes, des services tiers ou des bibliothèques aux conditions particulières, nous l'annonçons à l'avance et les licences sont prises au nom de votre société, non du studio.",
      },
      {
        q: "De quoi avez-vous besoin de notre part pour commencer ?",
        a: "Une compréhension claire de l'objectif et une personne habilitée à décider. Au départ, il nous faut une description de l'activité et des prestations, une idée du public, des exemples de sites qui vous plaisent et qui vous déplaisent, avec l'explication du pourquoi. Ensuite vient le contenu : textes, photographies, logo et identité visuelle s'ils existent, données produit pour le catalogue. Si le contenu n'existe pas, dites-le tout de suite : nous aiderons à bâtir la structure des textes et indiquerons quelles prises de vue prévoir, mais nous l'inscrirons au planning. Attendre des éléments en silence est la cause la plus fréquente de décalage des délais.",
      },
      {
        q: "Travaillez-vous avec des éditeurs de sites en ligne ?",
        a: "En règle générale, non. Nous écrivons le code avec Next.js et React, parce que cela donne la vitesse de chargement, la liberté dans les mécaniques et le contrôle complet du projet. L'éditeur en ligne se justifie dans un cas : tester en quelques jours la demande pour une nouvelle prestation avec un investissement minimal. Si votre besoin est exactement celui-là, nous vous le dirons franchement et ne vous vendrons pas un développement à partir de zéro. Une fois l'hypothèse confirmée, le prototype assemblé dans l'éditeur fera un excellent cahier des charges pour un vrai site.",
      },
      {
        q: "Garantissez-vous la première place dans les résultats de recherche ?",
        a: "Non, et personne ne peut le garantir honnêtement. Les positions dépendent de la concurrence dans le secteur, de l'ancienneté du domaine, des liens externes, du comportement des visiteurs et d'algorithmes qui changent sans nous. Nous répondons de la partie technique, celle qui est sous notre contrôle : vitesse de chargement, hiérarchie de titres propre, balises meta uniques, plan du site, balisage sémantique, pages distinctes pour des requêtes précises et analytique branchée. C'est le socle sans lequel le référencement ne fonctionne pas du tout. Ensuite, il faut du contenu et du temps, et nous le disons avant la signature du contrat.",
      },
      {
        q: "Assurez-vous la maintenance du site après la mise en ligne ?",
        a: "Oui, mais cela fait l'objet d'un accord distinct et n'est pas une condition automatique. Après la livraison, nous montrons comment modifier vous-même textes et images et laissons une notice courte : cela suffit à beaucoup. Si un travail régulier est nécessaire, nous mettons en place une maintenance : mise à jour des dépendances, petites évolutions, nouvelles rubriques, aide sur l'analytique et le contenu. Les erreurs qui nous sont imputables et découvertes après la mise en ligne sont corrigées dans le cadre de la période de garantie inscrite au contrat. Les conditions et l'étendue de la maintenance se discutent avec le devis, avant le démarrage.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     VISUALISATION 3D ET MOTION DESIGN
     ══════════════════════════════════════════════════════════════ */
  "3d-vizualizaciya": {
    h1: "Visualisation 3D et motion design sur mesure",
    lead:
      "La 3D montre ce qui n'existe pas encore : un produit avant le tirage, un bâtiment avant le chantier, une scène impossible à photographier. Nous fabriquons ces images de bout en bout — du modèle et des matières jusqu'à la lumière et l'animation — et les livrons dans des formats prêts pour l'impression, le site et les réseaux sociaux.",

    sections: [
      {
        h2: "Ce que nous visualisons",
        paragraphs: [
          "Le produit. Rendu d'un emballage, d'un flacon, d'un appareil ou d'un meuble, lorsqu'il n'y a rien à photographier ou que cela coûte trop cher : le tirage n'est pas encore imprimé, l'échantillon n'existe qu'en un exemplaire, et la fiche produit doit sortir maintenant. Un modèle une fois construit donne un nombre illimité d'angles, de fonds et de variantes d'habillage, y compris ceux qu'il faudrait remonter de zéro à chaque prise de vue en studio.",
          "L'architecture, les intérieurs et les aménagements extérieurs. Un bâtiment, une place, un parc, une fontaine, une entrée : tout ce qu'il faut montrer à un client, à un investisseur ou à une commission avant le début des travaux. La lumière et les matières y sont particulièrement décisives, car ce sont elles qui distinguent une visualisation convaincante d'une image soignée mais plastique, à laquelle personne ne croit.",
          "Le motion et les visuels animés pour les réseaux sociaux et le site. Vidéos courtes montrant la rotation d'un produit ou son éclaté en composants, génériques et transitions animés, scènes 3D directement dans le navigateur. Ce type de contenu retient l'attention là où l'image fixe se fait balayer, et il se redécoupe pour différentes plateformes sans nouvelle production.",
        ],
      },
      {
        h2: "Comment se construit une scène",
        paragraphs: [
          "D'abord les références et l'accord sur ce que nous montrons exactement. Il nous faut des plans, des dimensions, des échantillons de matières, des photographies de l'objet ou de l'emballage réels, des spécifications. Plus les données de départ sont précises, moins il faut de tours de correction : une teinte de plastique choisie « à l'œil » devra presque toujours être changée, et régler à nouveau une matière après le rendu final coûte du temps.",
          "Viennent ensuite la modélisation et le calage préliminaire. À cette étape, nous montrons une scène grise, sans matières : géométrie, angle de vue, cadrage. C'est précisément là qu'il faut valider — changer le point de vue sur une scène grise prend quelques minutes, alors qu'après le réglage de la lumière et des matières, cela suppose de recalculer toute la scène.",
          "Puis les matières, la lumière et le rendu. Nous réglons les surfaces, les reflets, les sources lumineuses, la profondeur de champ : c'est cela qui crée le sentiment de réalité. Après le calcul vient la post-production, couleur, contraste, nettoyage des artefacts. Pour une animation, s'ajoute entre ces étapes le travail sur le mouvement de la caméra et des objets, que nous faisons également valider sur un calcul brouillon, avant le rendu final.",
        ],
      },
      {
        h2: "La 3D plutôt qu'une prise de vue : quand cela se justifie",
        paragraphs: [
          "La 3D l'emporte quand il n'y a physiquement rien à photographier. Le produit est encore en fabrication, le bâtiment n'est pas construit, le parc n'existe qu'à l'état de projet. Aucune photographie n'aide ici, alors que la décision — une validation, une vente, un investissement — doit être prise dès maintenant, avant d'engager la production ou le chantier.",
          "Le deuxième cas, c'est le grand nombre d'objets d'un même type. Une scène montée fonctionne comme une chaîne : on change l'étiquette, la couleur, le volume du flacon, le reste demeure. Pour une gamme de vingt références, c'est nettement moins cher et plus prévisible que deux jours de prise de vue avec une reprise de la lumière pour chaque référence, et le résultat est uniforme en lumière comme en cadrage.",
          "Mais la 3D n'est pas une solution universelle, et nous le disons franchement. La nourriture vivante, un tissu en mouvement, les personnes, l'atmosphère d'un lieu : tout cela est le plus souvent moins cher et plus convaincant en photographie. Un objet simple et unique sur fond blanc est lui aussi généralement plus simple à photographier. Si votre besoin appelle plutôt la photographie, nous vous le dirons ainsi, même si cela réduit la commande.",
        ],
      },
      {
        h2: "Formats de livraison et délais",
        paragraphs: [
          "Les images fixes sont livrées en haute résolution, exploitable pour l'impression, et en versions allégées pour le site et les réseaux sociaux — directement aux proportions voulues, sans rogner l'essentiel sur les bords. Sur demande, nous enregistrons à part une image à fond transparent, pour que l'objet puisse être posé sur n'importe quel support sans notre intervention.",
          "L'animation est livrée aux résolutions et proportions convenues : format horizontal pour le site et les présentations, vertical pour les stories et les vidéos courtes. Nous remettons un fichier master de haute qualité et des versions compressées pour la publication. Si des localisations ou des changements de mentions sont prévus, nous les anticipons dès le départ : remettre en page du texte dans une vidéo terminée est plus difficile que de prévoir un calque à l'avance.",
          "Le délai dépend de la complexité de la géométrie, du nombre d'angles de vue et de la qualité des éléments fournis. Une image de produit se fait en quelques jours, une série de scènes ou une animation demande nettement plus. Nous prévoyons à part le temps de calcul : un rendu prend le temps qu'il prend, et l'envie ne l'accélère pas. Le calendrier précis et le contenu des prestations, nous les annonçons après un brief court accompagné de références.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Images en haute résolution",
        note: "Des fichiers exploitables pour l'impression et des versions allégées pour le site — aux proportions attendues par chaque plateforme.",
      },
      {
        ru: "Images à fond transparent",
        note: "PNG avec canal alpha, pour poser l'objet sur n'importe quel support sans avoir à nous solliciter.",
      },
      {
        ru: "Animation et vidéos",
        note: "Un fichier master de haute qualité et des versions compressées aux formats horizontal et vertical.",
      },
      {
        ru: "Angles de vue supplémentaires",
        note: "Une fois la scène montée, de nouveaux points de vue et variantes d'habillage se font plus vite que la première image.",
      },
      {
        ru: "Scène source",
        note: "Modèle, matières et réglages de lumière — transmis selon accord, à discuter avant le démarrage.",
      },
      {
        ru: "Droits d'utilisation",
        note: "Les droits sur les images et les vidéos finales sont transférés au client par contrat.",
      },
    ],

    steps: [
      {
        title: "Brief et références",
        text: "Nous réunissons le besoin et les éléments : plans, dimensions, échantillons, photographies, spécifications. Nous convenons de ce qui est montré et sous quels angles.",
      },
      {
        title: "Modélisation",
        text: "Nous construisons la géométrie de l'objet ou de la scène aux dimensions réelles. C'est cette précision qui décide de la crédibilité de l'image.",
      },
      {
        title: "Calage préliminaire",
        text: "Nous montrons une scène grise, sans matières : angle, cadrage, composition. La validation se fait ici, car changer la caméra plus tard coûte plus cher.",
      },
      {
        title: "Matières et lumière",
        text: "Nous réglons les surfaces, les reflets et l'éclairage — l'étape où l'image cesse d'avoir l'air fabriquée par ordinateur.",
      },
      {
        title: "Rendu et post-production",
        text: "Nous calculons la scène, nettoyons les artefacts, ajustons la couleur et le contraste. Pour une animation s'ajoute le travail sur le mouvement de la caméra et des objets.",
      },
      {
        title: "Livraison des fichiers",
        text: "Nous assemblons les versions pour chaque plateforme, remettons les éléments et formalisons le transfert des droits sur les images et les vidéos finales.",
      },
    ],

    faq: [
      {
        q: "Combien coûte une visualisation 3D ?",
        a: "Le prix se compose de la complexité de la géométrie, du nombre d'angles de vue, des exigences sur les matières et de la présence ou non d'une animation. L'image d'un objet simple et la visualisation d'un aménagement paysager avec relief, végétation et eau représentent des volumes de travail différents : nous ne publions donc pas de chiffre unique. Envoyez-nous la description de l'objet, des références du résultat souhaité et l'usage prévu des images : impression, site, réseaux sociaux ou présentation pour un investisseur. Vous recevrez en retour un devis détaillant les prestations et les délais par étape, temps de calcul de la scène compris.",
      },
      {
        q: "Combien de temps prend le travail ?",
        a: "Une image de produit se fait en général en quelques jours ; une série de scènes ou une animation demande nettement plus. Le délai se compose de la modélisation, du réglage des matières et de la lumière, du calcul lui-même et de la post-production. Le rendu se compte à part : il occupe son temps machine, et la priorité donnée à la tâche ne l'accélère pas. Ce qui accélère réellement le travail, ce sont des éléments de départ précis : plans cotés, codes de couleurs, échantillons de surfaces. Nous annonçons le calendrier exact après un brief accompagné de références ; avant cela, tout délai serait deviné au hasard.",
      },
      {
        q: "Combien de séries de corrections sont comprises ?",
        a: "Le nombre d'itérations est fixé au contrat et réparti par étapes. Les corrections sur le calage préliminaire — angle, cadrage, composition — sont comprises et même bienvenues, car c'est là qu'elles coûtent le moins cher. Des corrections après le rendu final restent possibles, mais chacune suppose de recalculer la scène ; nous demandons donc d'examiner attentivement les étapes intermédiaires. Changer l'objet lui-même, un autre modèle d'emballage ou un autre plan d'aménagement, n'est pas une correction mais un nouveau travail, et nous le disons ainsi d'emblée, avant de commencer.",
      },
      {
        q: "À qui appartiennent les droits sur les images ?",
        a: "Les droits sur les images et les vidéos finales sont transférés au client par contrat : vous pouvez les utiliser en publicité, sur les places de marché, en impression et en présentation, sans limite de durée. La remise de la scène source — modèle, matières et réglages de lumière — fait l'objet d'une clause à part. Elle est possible, mais se discute avant le démarrage, car elle influe sur le contenu des prestations. Le studio conserve le droit de montrer le résultat dans son portfolio ; si l'objet est confidentiel ou n'est pas encore mis sur le marché, nous reportons la publication jusqu'à votre autorisation ou nous y renonçons.",
      },
      {
        q: "De quoi avez-vous besoin de notre part pour commencer ?",
        a: "Des données de départ aussi précises que possible. Pour un produit : dimensions, dépliant de l'emballage en vectoriel, codes de couleurs, échantillons de matières ou leur description détaillée, photographies d'un exemplaire réel sous plusieurs angles. Pour l'architecture et l'aménagement : plans, tracés, coupes, spécification des revêtements et des plantations. Envoyez également des références, c'est-à-dire des images dont la lumière et l'ambiance vous plaisent. Si une partie des données manque, dites-le tout de suite : nous choisirons un équivalent que nous vous ferons valider, ou nous prévoirons du temps pour les préciser, mais nous n'inventerons rien en silence.",
      },
      {
        q: "En quoi la 3D vaut-elle mieux qu'une prise de vue ?",
        a: "Ni mieux ni moins bien : plus adaptée dans certains cas. La 3D est irremplaçable quand il n'y a rien à photographier, parce que le produit n'est pas encore fabriqué, le bâtiment pas construit, le parc seulement à l'état de projet. Elle l'emporte aussi sur les gammes étendues de références similaires : une scène montée permet de changer l'étiquette, la couleur ou le volume sans nouvelle prise de vue, en conservant une lumière et un cadrage identiques. Mais la nourriture vivante, un tissu en mouvement, les personnes et l'atmosphère d'un lieu sont presque toujours plus convaincants et moins chers en photographie. Si votre besoin relève de la seconde catégorie, nous vous le dirons franchement.",
      },
      {
        q: "Faites-vous de l'animation et du motion ?",
        a: "Oui. Cela peut être la rotation d'un produit, l'éclaté d'un objet en composants, le survol d'un bâtiment ou d'un terrain, des génériques et des transitions animés pour le site et les réseaux sociaux. Le travail se déroule comme pour une image fixe, avec une étape de mouvement en plus : les trajectoires de la caméra et des objets se valident sur un calcul brouillon, avant le rendu final. Nous livrons un fichier master et des versions compressées aux formats horizontal et vertical. Si la vidéo est prévue en plusieurs langues ou avec des mentions différentes, dites-le à l'avance : cela s'inscrit dans la structure du projet dès le départ.",
      },
      {
        q: "Peut-on obtenir des angles supplémentaires plus tard ?",
        a: "Oui, et c'est l'un des principaux avantages pratiques de la 3D. Tant que la scène est montée, un nouvel angle, un autre fond ou une autre variante d'habillage se font nettement plus vite et à moindre coût que la première image : il n'y a ni modèle à reconstruire ni matières à régler. Nous conservons les fichiers de travail du projet et pouvons y revenir plus tard, quand de nouveaux formats seront nécessaires pour une place de marché, un affichage extérieur ou une gamme renouvelée. Le coût des images supplémentaires se calcule à part et reste toujours inférieur à celui de la première : le volume de travail y est fondamentalement moindre.",
      },
    ],
  },
};

export default fr;
