/**
 * Traducción al español de las páginas comerciales /uslugi/*.
 *
 * El cargador combina por índice: el orden y la cantidad de elementos
 * deben coincidir exactamente con src/data/UslugiData.js.
 *
 * Reglas mantenidas del original:
 *  • ninguna cifra, ningún precio: el presupuesto se envía después del briefing;
 *  • ninguna garantía de posiciones en buscadores ni de resultados;
 *  • ningún cliente, premio ni caso inventado.
 */

const es = {
  /* ══════════════════════════════════════════════════════════════
     LOGOTIPO
     ══════════════════════════════════════════════════════════════ */
  logotip: {
    h1: "Diseño de logotipos a medida",
    lead:
      "Un logotipo no es una ilustración: es una herramienta de trabajo. Tiene que leerse igual en la firma de un correo que en un rótulo, a una sola tinta o bordado sobre tela. Diseñamos marcas que aguantan todos esos soportes y las entregamos con los archivos originales y sus normas de uso.",

    sections: [
      {
        h2: "Qué incluye el diseño de un logotipo",
        paragraphs: [
          "Diseñar un logotipo no consiste en entregar un archivo, sino en construir un sistema. Empezamos por el briefing y por una conversación: de qué vive la empresa, a quién vende, con quién la confunden y dónde va a vivir la marca la mayor parte del tiempo, ya sea en una aplicación móvil, en un envase o en una fachada. De esas respuestas depende directamente la forma: una marca pensada para una app y otra para grabarse en metal se construyen con reglas distintas.",
          "Después viene el análisis del sector. Observamos cómo se ven los competidores y buscamos un territorio que permita distinguirle en lugar de diluirle en el mercado. A partir de ahí dibujamos bocetos y presentamos dos o tres direcciones ya acabadas. No veinte propuestas: veinte propuestas significan que no se ha encontrado la solución y que la responsabilidad de elegir se traslada al cliente.",
          "La dirección elegida se lleva hasta la marca definitiva: proporciones, ajuste óptico, comportamiento en tamaños pequeños, área de protección, versión monocroma e invertida. Al final recibe un conjunto de archivos y unas normas breves que permiten entregar el logotipo, sin contar con nosotros, a una imprenta, a un proveedor de rotulación o a un nuevo responsable de marketing.",
        ],
      },
      {
        h2: "Cómo trabajamos la marca",
        paragraphs: [
          "El primer boceto se dibuja a mano, no se elige de un banco de imágenes. Descartamos deliberadamente lo obvio (las primeras ideas casi siempre son las mismas que se le ocurrieron a usted y a sus competidores) y seguimos trabajando hasta dar con una forma que tenga un motivo para ser exactamente así. Ese motivo podemos luego explicarlo con palabras, y no con un «queda más bonito».",
          "Cada dirección se presenta en contexto, no sobre un fondo blanco: en una tarjeta, en el avatar de una app de mensajería, en un rótulo, en un envase. Una marca que luce estupenda en una presentación a menudo se desmonta en el soporte real: pierde legibilidad a dieciséis píxeles o se apelmaza a una sola tinta. Es mejor descubrirlo antes de la aprobación que en el momento de imprimir la tirada.",
          "Las revisiones las hablamos en términos del encargo, no de gusto personal. «Me gusta» y «no me gusta» también son información, pero pedimos que se concrete qué es lo que incomoda: la marca parece pesada, fría, remite a un terreno equivocado, se parece a la de una gran cadena. Con una formulación así se puede trabajar. Con un «no es esto» abstracto, no, y lo decimos con franqueza.",
        ],
      },
      {
        h2: "Qué recibe al final",
        paragraphs: [
          "El logotipo definitivo se entrega en vectorial, lo que significa que no pierde calidad ni en una tarjeta de visita ni en una lona de diez metros. Se acompaña de versiones en mapa de bits para redes sociales y documentos, el favicon para la web, una variante para fondo oscuro y una versión monocroma para estampación, grabado y bordado.",
          "Con los archivos va una guía breve: tamaño mínimo, área de protección, usos permitidos y usos prohibidos, y los códigos de color en RGB, CMYK y Pantone. Es suficiente para que una imprenta o un empleado nuevo no estropee la marca por desconocimiento, estirándola en horizontal o colocándola sobre un fondo recargado.",
          "Los derechos exclusivos sobre el logotipo aprobado pasan a usted, y así queda recogido en el contrato. El estudio se reserva únicamente el derecho a mostrar el trabajo en su portafolio. Si el proyecto está sujeto a un acuerdo de confidencialidad o aún no se ha lanzado, aplazamos la publicación hasta que usted lo autorice, o no la hacemos en absoluto; esto se acuerda al principio y no después.",
        ],
      },
      {
        h2: "Plazos y qué influye en ellos",
        paragraphs: [
          "El diseño de una marca suele llevar entre dos y cuatro semanas. La variable principal no es nuestra velocidad de dibujo, sino la rapidez con la que llegan sus comentarios. Si reunir las correcciones de todas las personas implicadas cuesta una semana, el plazo se desplaza exactamente esa semana, y ninguna optimización interna del proceso lo compensa.",
          "Hay una medida concreta que acelera el trabajo: designar a una persona que tome la decisión final. Un comité de cinco votos no elige la mejor marca, elige la que no molesta a nadie, y esa suele ser la más insulsa de todas. Recoger opiniones es útil; decidir por mayoría, no.",
          "Lo que frena el trabajo es cambiar los datos de partida a mitad de camino. Si tras aprobar una dirección cambia el nombre, el producto o el público, volvemos a la fase de bocetos. Es una situación normal, y resulta más honesto llamarla por su nombre que presentarla como un retoque menor. El plazo exacto y el alcance del trabajo los indicamos tras un briefing breve: antes de eso, cualquier cifra sería inventada.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Logotipo en vectorial",
        note: "SVG, AI y PDF. Escala desde el icono de una aplicación hasta un rótulo de fachada sin perder calidad.",
      },
      {
        ru: "Versiones en mapa de bits",
        note: "PNG con fondo transparente en varios tamaños, favicon para la web y avatares para redes sociales y mensajería.",
      },
      {
        ru: "Monocromo e inversión",
        note: "Versión a una tinta y variante para fondo oscuro, pensadas para impresión, estampación, grabado y bordado.",
      },
      {
        ru: "Guía breve de uso",
        note: "Área de protección, tamaño mínimo, códigos de color RGB / CMYK / Pantone y la lista de lo que no debe hacerse con la marca.",
      },
      {
        ru: "Archivos de trabajo originales",
        note: "Documentos con capas, para que no dependa de un único proveedor y pueda ceder el proyecto a quien decida.",
      },
      {
        ru: "Cesión de derechos",
        note: "Los derechos exclusivos sobre la marca aprobada pasan al cliente mediante contrato.",
      },
    ],

    steps: [
      {
        title: "Briefing y datos de partida",
        text: "Una conversación de cuarenta a sesenta minutos y un cuestionario breve: objetivo, público, soportes, qué le gusta y qué descarta por completo. Las conclusiones quedan por escrito, para no discutir un mes después qué habíamos acordado.",
      },
      {
        title: "Análisis y territorio",
        text: "Estudiamos a los competidores y los mercados adyacentes y definimos el territorio visual que se puede ocupar. Presentamos un resumen breve: en esta fase, cambiar de rumbo todavía sale barato.",
      },
      {
        title: "Bocetos y direcciones",
        text: "Dibujamos propuestas a mano, seleccionamos dos o tres viables y las llevamos a un acabado limpio, directamente en el contexto de los soportes reales y no sobre un fondo blanco.",
      },
      {
        title: "Afinado de la propuesta elegida",
        text: "Ajustamos proporciones, óptica, comportamiento en tamaños pequeños y color. Las correcciones avanzan por iteraciones y su número queda fijado de antemano en el contrato.",
      },
      {
        title: "Entrega y cesión de derechos",
        text: "Reunimos los archivos, redactamos la guía breve, entregamos los originales y formalizamos la cesión de derechos. Después seguimos disponibles para las dudas de imprentas y proveedores de publicidad.",
      },
    ],

    faq: [
      {
        q: "¿Cuánto cuesta diseñar un logotipo?",
        a: "El coste depende del alcance: si hace falta solo la marca o también los soportes, cuántas direcciones se presentan, si se requiere un análisis de la competencia y la preparación de archivos para el registro de la marca. Por eso no publicamos tarifas: una cifra sin un encargo detrás induce a error tanto a usted como a nosotros. Envíenos un briefing breve o simplemente un par de párrafos: a qué se dedica la empresa, dónde va a vivir la marca y para cuándo necesita el resultado. Le responderemos con un presupuesto que detalla el alcance del trabajo y los plazos por fases, para que se vea qué está pagando y de qué se puede prescindir sin perder calidad.",
      },
      {
        q: "¿Cuánto tiempo lleva el trabajo?",
        a: "Normalmente entre dos y cuatro semanas desde la firma del contrato hasta la entrega de los archivos. La horquilla no se explica por la dificultad del dibujo, sino por el número de aprobaciones internas en su empresa y por la rapidez de las respuestas. Planificamos el trabajo por fases y le indicamos con antelación en qué días esperamos su decisión: si esos días no hay respuesta, el plazo se desplaza otro tanto. Un ritmo acelerado es posible si se acuerda antes de empezar y podemos reservar los días necesarios para el proyecto. El calendario exacto lo recibirá junto con el presupuesto, después del briefing: antes de eso, cualquier plazo sería una suposición.",
      },
      {
        q: "¿Cuántas revisiones incluye el trabajo?",
        a: "El número de iteraciones queda fijado en el contrato antes de empezar, para que las correcciones no se conviertan en un proceso sin final ni límites. Suelen ser varias rondas en la fase de direcciones y varias más en el afinado de la marca elegida, y eso basta en la inmensa mayoría de los proyectos. Las correcciones dentro de la dirección aprobada están incluidas. Volver a los bocetos después de haber aprobado una dirección es ya una fase nueva, y la llamamos abiertamente fase nueva, no ajuste gratuito. Para necesitar menos iteraciones conviene reunir de una vez los comentarios de todas las personas implicadas, en lugar de recibirlos de uno en uno cada día.",
      },
      {
        q: "¿A quién pertenecen los derechos sobre el resultado?",
        a: "Los derechos exclusivos sobre el logotipo aprobado pasan al cliente: está recogido en el contrato y, junto con los archivos, recibe la documentación que acredita la cesión. Puede usar la marca sin límite de territorio ni de plazo, cambiar de proveedores y registrarla como marca comercial. Nosotros nos reservamos únicamente el derecho a mostrar el trabajo en el portafolio y en entornos profesionales. Si el proyecto es confidencial o aún no se ha lanzado, aplazamos la publicación hasta que nos dé permiso o no la hacemos en absoluto; se acuerda al principio y no se resuelve a posteriori.",
      },
      {
        q: "¿Qué necesitamos aportar para empezar?",
        a: "Como mínimo, las respuestas al briefing y una persona de su parte con capacidad de decisión. En el briefing preguntamos por el producto, el público, los competidores, los soportes y por aquello que descarta de plano: la lista de «no» ahorra más tiempo que la de «sí». Es útil enviarnos el material que ya exista: textos sobre la empresa, fotografías, artes anteriores, enlaces a competidores. Si no hay nada de eso, no pasa nada, lo aclaramos en la videollamada. A partir de ahí solo necesitamos que responda a tiempo en las fases de aprobación; del resto nos ocupamos nosotros.",
      },
      {
        q: "¿Registran ustedes la marca comercial?",
        a: "Del registro se ocupa un agente de la propiedad industrial: es una profesión jurídica aparte y no pretendemos ejercerla. Nuestra parte es técnica: preparamos la imagen en los formatos necesarios y definimos con usted qué se presenta exactamente a registro. Si lo desea, podemos revisar las bases de datos públicas en busca de coincidencias evidentes, pero esa consulta no es un dictamen jurídico ni garantiza el registro. Si no cuenta con un agente, le orientamos sobre a quién conviene dirigirse y entregamos los archivos en el formato que se suele pedir.",
      },
      {
        q: "¿Y si no nos convence ninguna de las direcciones?",
        a: "Ocurre, y normalmente la causa no está en el dibujo, sino en que el encargo se formuló de forma imprecisa. Por eso presentamos las direcciones pronto y no en la fase final: cuando rectificar todavía sale barato. Si ninguna propuesta acierta, volvemos al briefing y analizamos qué se desajustó exactamente: el público, el tono o las asociaciones. Después hacemos una nueva ronda de bocetos; las condiciones de esa vuelta atrás están recogidas en el contrato de antemano, sin improvisar por correo. No prometemos que la primera presentación siempre dé en el blanco, pero sí prometemos no fingir que lo ha dado.",
      },
      {
        q: "¿Trabajan con empresas de fuera de Moscú?",
        a: "Sí. El estudio está en Moscú, pero el proceso es totalmente remoto: el briefing y las revisiones se hacen por videollamada, las presentaciones intermedias en un documento compartido y los archivos se entregan mediante enlace. La geografía no afecta ni a los plazos ni al alcance del trabajo. Con clientes de otras franjas horarias acordamos de antemano una franja para las llamadas, para que las aprobaciones no se alarguen un día de más. Si prefiere una reunión presencial en Moscú, también es posible, pero no es necesaria en ninguna fase.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     BRANDING E IDENTIDAD CORPORATIVA
     ══════════════════════════════════════════════════════════════ */
  brending: {
    h1: "Identidad corporativa y branding",
    lead:
      "La identidad corporativa es el conjunto de decisiones que permiten reconocerle antes de que alguien lea su nombre. Construimos ese sistema completo: desde el posicionamiento y el logotipo hasta los soportes, las plantillas y las normas que permitirán a su equipo mantenerlo.",

    sections: [
      {
        h2: "Qué es la identidad corporativa y para qué sirve",
        paragraphs: [
          "La identidad corporativa no es una colección de imágenes bonitas, sino una forma de ahorrar atención al cliente. Cuando la web, el rótulo, el envase, la presentación y el perfil en redes sociales parecen un mismo organismo, nadie necesita volver a averiguar quién es usted en cada encuentro con la marca. El reconocimiento se acumula y cada nuevo contacto le sale a la empresa más barato que el anterior.",
          "La situación contraria es más frecuente: el logotipo lo dibujó un proveedor, la web otro, las presentaciones las monta un comercial en un editor de texto y de las redes se encarga una tercera persona. Formalmente está todo, pero no hay reconocimiento y el presupuesto de publicidad trabaja en vacío. La identidad corporativa resuelve justamente eso: fija un marco dentro del cual cualquier soporte nuevo sale «de la casa».",
          "Por eso casi siempre empezamos por el posicionamiento y no por el dibujo: qué vende realmente la empresa, a quién, en qué se diferencia de sus vecinos de mercado y con qué palabras lo cuenta. Sin eso, la identidad se convierte en una cuestión de gusto, y se desmonta en la primera reunión en la que cada persona tiene su propia idea de lo bonito.",
        ],
      },
      {
        h2: "Cómo trabajamos la marca",
        paragraphs: [
          "La primera fase es investigación y conversaciones. Estudiamos el mercado, observamos a los competidores directos y a las categorías adyacentes, y analizamos cómo se ve hoy la empresa y qué funciona de ello. A menudo lo más valioso sale de las entrevistas con el equipo: la manera en que el departamento comercial explica el producto a un cliente suele ser más precisa que cualquier documento sobre la misión.",
          "Después formulamos la plataforma de marca en palabras sencillas: esencia, diferencia, tono y promesa. Es un documento breve, no un volumen de cuarenta páginas, porque tiene que usarse de verdad. Sobre él se construye el lenguaje visual: la marca, la paleta, la tipografía, los principios de composición, los elementos gráficos y el enfoque de fotografía e ilustración.",
          "A continuación el sistema se pone a prueba en los soportes. No hacemos ejemplos abstractos, sino los que usted necesita: envase, rótulo, uniforme del personal, plantillas de presentaciones y publicaciones, documentos, ambientación del punto de venta. Es justo en esa fase cuando se ve dónde el sistema es rígido y no cede, y dónde le faltan variantes, así que ajustamos las normas antes de la entrega y no después.",
        ],
      },
      {
        h2: "Rebranding: cuándo hace falta de verdad",
        paragraphs: [
          "Merece la pena plantear un rebranding cuando la imagen visual estorba al negocio: la empresa ha crecido y vende a otro tipo de cliente, han cambiado el precio y el posicionamiento, han aparecido líneas que no caben en el sistema antiguo, o el estilo se hizo hace tanto que se lee como descuido. Esos son motivos de fondo y el diseño puede resolverlos.",
          "En cambio, «me he cansado» o «el competidor lo tiene más llamativo» son malos argumentos. Cambiar la identidad borra parte del reconocimiento acumulado, y hay que volver a construirlo. A veces la respuesta honesta a una petición de rebranding es esta: lo que hay que cambiar no es el logotipo, sino la web, las fotografías o el tono de la comunicación. Lo decimos claramente, incluso cuando eso reduce el volumen del encargo.",
          "Si aun así hay que cambiar, tratamos aparte la profundidad del cambio. La vía evolutiva conserva el reconocimiento y renueva la ejecución: los mismos significados con una presentación actual. La vía rupturista tiene sentido cuando cambia el modelo de negocio o después de una ruptura reputacional con el pasado. La elección afecta tanto al presupuesto como al plan de transición: los soportes antiguos no desaparecen de un día para otro y el orden de su sustitución hay que planificarlo con antelación.",
        ],
      },
      {
        h2: "Qué recibe y qué influye en el plazo",
        paragraphs: [
          "Al final recibe el logotipo con todas sus versiones, el sistema cromático y tipográfico, los elementos gráficos, los artes de los soportes acordados, las plantillas para las tareas recurrentes y el manual de marca: un documento con normas y ejemplos. Todo en archivos originales: documentos con capas y tipografías con sus licencias o los enlaces correspondientes, listos para entregar a cualquier proveedor.",
          "Escribimos el manual de marca como un instructivo para personas, no como un álbum de estantería. Contiene respuestas a las preguntas que surgen de verdad: qué margen lleva el logotipo, qué tipografía se usa en los documentos de Word, qué hacer si el fondo es recargado, cómo se compone una publicación y cómo una propuesta comercial. Cuanto más claras sean esas normas, más tiempo vivirá el sistema sin nosotros.",
          "El plazo depende del alcance: la identidad de una empresa pequeña se resuelve en unas semanas; un branding completo con investigación y decenas de soportes lleva meses. Lo que más afecta al calendario es la rapidez de las aprobaciones y lo completos que sean los datos de partida: si la lista de soportes se va concretando sobre la marcha, el plan se desplaza. El alcance, las fases y el plazo quedan fijados en el presupuesto tras un briefing breve.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Plataforma de marca",
        note: "Un documento breve: esencia, diferencia frente a la competencia, tono y promesa, en un lenguaje que se pueda usar.",
      },
      {
        ru: "Logotipo y sus versiones",
        note: "Marca principal, composición horizontal y compacta, monocromo e inversión, en vectorial y en mapa de bits.",
      },
      {
        ru: "Sistema visual",
        note: "Paleta con códigos, tipografía, retículas, elementos gráficos y criterios de fotografía e ilustración.",
      },
      {
        ru: "Artes de los soportes",
        note: "Lo que usted necesita: envase, material impreso, rótulo, uniforme, ambientación del local y documentación.",
      },
      {
        ru: "Plantillas para el equipo",
        note: "Presentaciones, publicaciones y propuestas comerciales: bases que se rellenan sin necesidad de un diseñador.",
      },
      {
        ru: "Manual de marca y archivos originales",
        note: "Normas con ejemplos de «así sí» y «así no», archivos de trabajo con capas y tipografías con licencia o enlace.",
      },
    ],

    steps: [
      {
        title: "Briefing e inmersión",
        text: "Analizamos el negocio: producto, público, canales de venta y planes del año. Hablamos no solo con la dirección, sino también con quienes venden y atienden al cliente.",
      },
      {
        title: "Investigación de mercado",
        text: "Observamos a los competidores y las categorías adyacentes, reunimos un panorama visual del sector y buscamos el territorio libre. Presentamos las conclusiones antes de dibujar nada.",
      },
      {
        title: "Plataforma de marca",
        text: "Formulamos la esencia, la diferencia y el tono en palabras sencillas y los aprobamos. Es el apoyo de todas las decisiones visuales posteriores.",
      },
      {
        title: "Identidad visual",
        text: "Desarrollamos la marca, la paleta, la tipografía y el lenguaje gráfico. Presentamos las direcciones en el contexto de soportes reales y no sobre un fondo blanco.",
      },
      {
        title: "Soportes y plantillas",
        text: "Desplegamos el sistema sobre la lista de soportes acordada y montamos las plantillas que su equipo podrá usar por su cuenta.",
      },
      {
        title: "Manual de marca y entrega",
        text: "Redactamos las normas, reunimos los archivos originales, entregamos el material y hacemos una sesión con el equipo para que adopte el sistema y sepa mantenerlo.",
      },
    ],

    faq: [
      {
        q: "¿Cuánto cuesta desarrollar una identidad corporativa?",
        a: "Aquí la horquilla es amplia, porque «identidad corporativa» significa cosas distintas según la empresa: unos necesitan la marca y un conjunto mínimo de soportes; otros, investigación de mercado, plataforma de marca, envase, ambientación del punto de venta y manual. Publicar una única cifra para todos esos casos no sería honesto. Escríbanos contándonos a qué se dedica la empresa, qué tiene ya y qué soportes va a necesitar el próximo año, y le responderemos con un presupuesto desglosado por fases. En ese presupuesto se ve qué conviene hacer ahora y qué se puede dejar para el paso siguiente sin perjuicio.",
      },
      {
        q: "¿Cuánto tiempo lleva un proyecto de branding?",
        a: "Una identidad compacta para una empresa pequeña se resuelve en unas semanas. Un branding completo con investigación, plataforma, un conjunto amplio de soportes y manual de marca lleva meses, un plazo normal para un trabajo cuyo resultado vive años. Dividimos el proyecto en fases con puntos de aprobación claros, de modo que usted ve el avance de forma continua y no espera a ciegas una presentación final. El calendario se elabora después del briefing y depende del volumen de soportes y de la rapidez con que se aprueben las fases por su parte.",
      },
      {
        q: "¿Cuántas revisiones incluye el trabajo?",
        a: "El número de iteraciones de cada fase queda fijado en el contrato antes de empezar. Dentro de la dirección aprobada, las correcciones están incluidas: forman parte de un proceso normal, no son un favor. Volver a una fase anterior después de haberla aprobado se considera un trabajo aparte, y lo decimos abiertamente en lugar de diluirlo en la correspondencia. La experiencia demuestra que hacen falta menos iteraciones cuando los comentarios de todas las personas implicadas se recogen de una vez y cuando hay alguien que toma la decisión final. Pedimos que se designe a esa persona ya en la primera llamada.",
      },
      {
        q: "¿A quién pertenecen los derechos sobre la identidad corporativa?",
        a: "Los derechos exclusivos sobre los artes y la marca aprobados pasan al cliente mediante contrato: puede usarlos sin restricciones, modificarlos y cederlos a otros proveedores. Las tipografías se tratan aparte: si el sistema utiliza fuentes comerciales, la licencia se adquiere a nombre de su empresa y le indicamos de antemano cuál se necesita exactamente. Las ilustraciones y fotografías creadas dentro del proyecto se entregan junto con lo demás. El estudio se reserva el derecho a mostrar el trabajo en su portafolio; si el proyecto es confidencial, la publicación se aplaza o no se hace.",
      },
      {
        q: "¿Qué necesitamos aportar para empezar?",
        a: "Las respuestas al briefing, acceso a varias personas para entrevistas breves y alguien con capacidad de decisión final. Es útil enviarnos todo lo que ya exista: artes actuales, fotografías, textos, presentaciones, datos de ventas y la lista de competidores que considera fuertes. Además le pediremos que concrete los soportes que va a necesitar durante el próximo año: de esa lista dependen el alcance y el coste. Si por ahora está poco definida, la elaboramos juntos en la primera llamada: forma parte de nuestro trabajo, no son deberes suyos.",
      },
      {
        q: "¿En qué se diferencia un manual de marca de una guía de estilo?",
        a: "La guía de estilo describe las normas visuales: cómo está construido el logotipo, qué colores y tipografías se usan, qué márgenes se respetan y qué no debe hacerse con la marca. Es un documento técnico para diseñadores y proveedores. El manual de marca es más amplio: además de la parte visual explica el sentido, quién es usted, para quién trabaja, en qué se diferencia y con qué lenguaje habla. A una empresa pequeña suele bastarle una guía de estilo cuidada y un juego de plantillas; el manual completo hace falta allí donde mucha gente trabaja con la marca y las decisiones se toman en departamentos distintos. Proponemos el formato según el encargo, no según la tarifa.",
      },
      {
        q: "¿Se puede renovar el estilo sin cambiar el logotipo?",
        a: "Sí, y con bastante frecuencia es lo más sensato. El logotipo es la parte más inerte del sistema: ya está en los rótulos, en los documentos y en la memoria de los clientes. Lo que sí envejece es la paleta, la tipografía, la composición, las fotografías y la presentación en redes sociales: son ellas las que dan sensación de antigüedad. Podemos conservar la marca y reconstruir todo lo que la rodea, incluido, si hace falta, un ajuste técnico cuidadoso del propio logotipo sin cambiar su forma. En el briefing analizamos qué le funciona y qué le estorba, y proponemos la intervención mínima que produce efecto.",
      },
      {
        q: "¿Quién mantendrá el estilo una vez entregado el proyecto?",
        a: "Diseñamos el sistema para que pueda mantenerlo su equipo: plantillas, normas comprensibles y una sesión de entrega en la que repasamos el documento junto a quienes van a usarlo. A partir de ahí caben dos escenarios. El primero: usted trabaja de forma autónoma y nosotros respondemos a las dudas según vayan surgiendo. El segundo: asumimos un mantenimiento periódico, con soportes nuevos, materiales de temporada y apoyo a sus proveedores. La segunda opción se formaliza aparte y no es una condición obligatoria: el sistema no debe romperse solo porque usted decida prescindir de nosotros.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     DESARROLLO WEB
     ══════════════════════════════════════════════════════════════ */
  "sozdanie-saytov": {
    h1: "Desarrollo de sitios web a medida",
    lead:
      "Hacemos sitios web escritos en código, no montados con los bloques de un constructor. Diseño, maquetación, animación y optimización técnica están dentro del mismo equipo, así que de la velocidad de carga y del comportamiento en el móvil responde la misma persona que dibujó la pantalla.",

    sections: [
      {
        h2: "Qué tipo de sitios hacemos",
        paragraphs: [
          "Una landing page tiene sentido cuando hay un servicio, una oferta y un objetivo claro: una solicitud, una reserva, una llamada. Esa página se construye alrededor de una única acción, y todo lo que contiene o conduce a ella o resuelve la objeción que impide llevarla a cabo. Las secciones de más no aportan confianza aquí, solo diluyen la atención.",
          "Un sitio corporativo hace falta cuando hay varios servicios, públicos distintos y es importante que cada uno encuentre el suyo a través del buscador. Ahí aparece la estructura: páginas independientes de servicios, portafolio, blog y página sobre la empresa. Las secciones importan tanto para las personas como para los buscadores, que posicionan páginas y no sitios enteros: una única página de «Servicios» pierde frente a cuatro páginas precisas.",
          "Las tiendas en línea y los catálogos son una categoría aparte: ficha de producto, filtros, disponibilidad, carrito, pago y exportaciones. Aquí el diseño se subordina a la lógica del producto y no al revés. También hacemos pantallas internas para el personal (paneles de administración, tableros de cocina, interfaces de pedidos), porque el sitio a menudo resulta ser solo la puerta de entrada a un sistema que se usa todos los días.",
        ],
      },
      {
        h2: "Cómo funciona el proceso",
        paragraphs: [
          "Empezamos por el objetivo, no por la estructura. Necesitamos entender quién llega al sitio, qué debe hacer allí y qué se lo impide ahora mismo. Con esas respuestas montamos la estructura y el prototipo: la disposición de los bloques, sin color ni acabado. Aprobar un prototipo es más rápido y más barato: en esta fase mover una sección cuesta diez minutos y no dos días.",
          "Después viene el diseño. Dibujamos las pantallas clave en versión de escritorio y móvil a la vez: más de la mitad del tráfico llega desde el teléfono, y el «ya lo adaptaremos luego» es la forma más segura de acabar con un sitio incómodo. En paralelo pensamos el movimiento: para nosotros la animación no es adorno, sino una manera de mostrar las relaciones entre pantallas y de retener la atención donde hace falta.",
          "Luego el desarrollo. Escribimos el código en Next.js y React, conectamos los formularios, la analítica y las integraciones necesarias, y comprobamos la velocidad y el comportamiento en dispositivos reales. Entregamos con acceso a todo: repositorio, alojamiento, dominio y panel de gestión. El cliente no debe quedar como rehén de su proveedor: es un principio, no una opción.",
        ],
      },
      {
        h2: "Por qué escribimos código en lugar de usar un constructor",
        paragraphs: [
          "Un constructor es una herramienta razonable para validar una hipótesis: en un fin de semana tiene una página y sabe si hay demanda. Los problemas empiezan después. La plantilla arrastra código que usted no necesita, y eso golpea directamente a la velocidad de carga, que forma parte de los factores de posicionamiento de Google y Yandex e influye en si el visitante llega siquiera a esperar a que la página cargue.",
          "La segunda limitación es el techo de posibilidades. Cualquier mecánica no estándar, una animación compleja, una ficha de producto atípica o una integración con su sistema de gestión choca con que el constructor no sabe hacerlo. Rodearlo con widgets de terceros funciona hasta la primera actualización de la plataforma. El código propio no tiene esas fronteras: hacemos exactamente lo que el proyecto necesita.",
          "La tercera es el control. Un sitio en un constructor vive según las reglas de la plataforma: tarifas, restricciones, acceso al marcado y el destino del proyecto si el servicio cierra. Un sitio en Next.js es su repositorio, que puede trasladarse a cualquier alojamiento y entregarse a cualquier desarrollador. Entregamos el código completo y no atamos técnicamente al cliente a nosotros.",
        ],
      },
      {
        h2: "Qué recibe",
        paragraphs: [
          "Un sitio en funcionamiento con maquetación adaptable, probado en los navegadores actuales y en teléfonos reales. La base técnica de SEO viene puesta: títulos y descripciones únicos en cada página, direcciones canónicas, mapa del sitio, robots.txt, marcado Schema.org, jerarquía de encabezados correcta y textos con sentido en enlaces e imágenes.",
          "Entregamos todos los accesos: el código fuente en el repositorio, el alojamiento, el dominio, el correo y el panel de edición de contenido si el proyecto lo contempla. En una videollamada le mostramos cómo cambiar textos e imágenes y dejamos un instructivo breve. La analítica se conecta desde el principio, Yandex.Metrica y Google Analytics, porque de otro modo, al cabo de un mes, será imposible entender qué está pasando con el tráfico.",
          "Digamos también qué no prometemos: posiciones concretas en el buscador ni un número concreto de solicitudes. Nadie puede garantizarlo con honestidad, porque en los resultados influyen la competencia, la antigüedad del dominio, los enlaces y el comportamiento de los usuarios. Respondemos de lo que está en nuestro terreno: la velocidad, un código limpio, una estructura orientada a las búsquedas y una página técnicamente preparada para el posicionamiento.",
        ],
      },
      {
        h2: "Plazos y qué influye en ellos",
        paragraphs: [
          "Una landing page suele llevar unas semanas; un sitio corporativo, bastante más; una tienda con catálogo e integraciones, más aún. El plazo exacto no depende del número de páginas, sino de la cantidad de pantallas únicas y de mecánica no estándar: veinte fichas de producto iguales se hacen antes que tres páginas con lógicas distintas.",
          "Hay dos cosas que desplazan el calendario más que ninguna otra. La primera es el contenido. Si los textos, las fotografías y los datos de producto llegan a trozos a lo largo de un mes, el sitio no puede estar listo antes. Podemos ayudar con los textos y orientar sobre qué sesión de fotos hace falta, pero el material sobre su negocio nace igualmente con su participación.",
          "La segunda son las integraciones con sistemas ajenos: almacén, CRM, pasarela de pago, empresa de transporte. Ahí la velocidad depende de la documentación y del soporte técnico del otro lado, y eso se recoge honestamente en el plan como una fase aparte con margen. El alcance, las fases y el plazo quedan fijados en el presupuesto tras un briefing breve: antes del briefing, cualquier cifra sería una suposición.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Sitio en su propio dominio",
        note: "Proyecto desplegado y en funcionamiento: maquetación adaptable, comprobada en los navegadores actuales y en teléfonos reales.",
      },
      {
        ru: "Código fuente",
        note: "El repositorio completo, con acceso desde su cuenta. El proyecto se puede trasladar y ceder a otro desarrollador.",
      },
      {
        ru: "Archivos de diseño",
        note: "Todas las pantallas en versión de escritorio y móvil, con capas y componentes.",
      },
      {
        ru: "Base técnica de SEO",
        note: "Metaetiquetas, canonical, sitemap.xml, robots.txt, marcado Schema.org y una jerarquía de encabezados semántica.",
      },
      {
        ru: "Analítica y formularios",
        note: "Yandex.Metrica y Google Analytics, y las solicitudes del sitio al correo o a la mensajería: configurado y comprobado.",
      },
      {
        ru: "Accesos e instrucciones",
        note: "Alojamiento, dominio, panel de edición y un instructivo breve para actualizar textos e imágenes.",
      },
    ],

    steps: [
      {
        title: "Briefing y objetivo",
        text: "Analizamos quién llega al sitio, qué debe hacer allí y qué se lo impide ahora. Fijamos un objetivo medible para el proyecto.",
      },
      {
        title: "Estructura y prototipo",
        text: "Montamos el mapa de páginas y la disposición de los bloques, sin color. Aprobar el prototipo es más rápido y barato que rehacer un diseño acabado.",
      },
      {
        title: "Diseño de pantallas",
        text: "Dibujamos las pantallas clave en versión de escritorio y móvil a la vez, y definimos el movimiento y los estados de la interfaz.",
      },
      {
        title: "Desarrollo",
        text: "Escribimos el código en Next.js y React, conectamos formularios, analítica e integraciones, y comprobamos la velocidad y el comportamiento en dispositivos reales.",
      },
      {
        title: "Pruebas y lanzamiento",
        text: "Repasamos navegadores, teléfonos y recorridos de uso, configuramos el dominio y el alojamiento, publicamos y entregamos todos los accesos.",
      },
      {
        title: "Después del lanzamiento",
        text: "Le mostramos cómo actualizar el contenido, resolvemos dudas y, si hace falta, asumimos el mantenimiento periódico del proyecto.",
      },
    ],

    faq: [
      {
        q: "¿Cuánto cuesta desarrollar un sitio web?",
        a: "El precio lo determinan el número de pantallas únicas y la complejidad de la mecánica, no la cantidad de páginas. Una landing page con un solo objetivo y una tienda con catálogo, filtros e integración con el almacén son trabajos de órdenes distintos, y una cifra común para ambos carece de sentido. Descríbanos el encargo en dos o tres párrafos: qué negocio es, qué debe hacer el visitante, qué integraciones necesita y si ya tiene diseño y textos. Le responderemos con un presupuesto por fases y le señalaremos qué se puede lanzar en una primera versión y qué añadir más adelante: así el proyecto arranca antes y más barato.",
      },
      {
        q: "¿Cuánto tiempo lleva el desarrollo?",
        a: "Una landing page, unas semanas; un sitio corporativo, más; una tienda con catálogo e integraciones, más aún. El plazo se forma con el número de pantallas únicas, la mecánica no estándar y la rapidez con la que llega el contenido. Trabajamos por fases con puntos de aprobación (estructura, diseño, desarrollo y pruebas), de modo que usted ve el resultado de forma continua. El calendario queda fijado en el presupuesto tras el briefing, y en él se señalan aparte los días en que esperamos materiales o decisiones suyas: son precisamente esas pausas las que suelen mover la fecha de lanzamiento.",
      },
      {
        q: "¿Cuántas revisiones incluye el trabajo?",
        a: "Las iteraciones quedan fijadas en el contrato para cada fase: prototipo, diseño y maquetación terminada. Las correcciones dentro de una fase aprobada están incluidas. Los cambios que anulan una decisión ya aceptada, por ejemplo una estructura nueva cuando la maquetación está en marcha, se formalizan como un trabajo aparte, porque eso es rehacer y no ajustar. Lo decimos desde el principio y no emitimos una factura a posteriori. Para que haya menos correcciones, aprobamos el prototipo antes del diseño: mover un bloque en el esquema cuesta minutos; en el código terminado, días.",
      },
      {
        q: "¿A quién pertenecen el sitio, el código y los accesos?",
        a: "Todo pertenece al cliente. El código fuente se entrega en un repositorio de su cuenta, el dominio se registra a su nombre y el alojamiento se contrata con sus datos. Los archivos de diseño los recibe en formato original. Los derechos sobre el resultado se ceden mediante contrato, incluido el derecho a seguir desarrollando el proyecto con otros programadores: no incorporamos ataduras técnicas a nosotros. Si el proyecto usa tipografías de pago, servicios de terceros o bibliotecas con condiciones particulares, lo indicamos de antemano y tramitamos las licencias a nombre de su empresa y no del estudio.",
      },
      {
        q: "¿Qué necesitamos aportar para empezar?",
        a: "Tener claro el objetivo y una persona con capacidad de decisión. Al arrancar hacen falta: una descripción del negocio y los servicios, una idea del público y ejemplos de sitios que le gustan y que no le gustan, explicando por qué. Después, el contenido: textos, fotografías, logotipo e identidad corporativa si los tiene, y los datos de producto para el catálogo. Si no hay contenido, díganoslo desde el principio: le ayudamos con la estructura de textos y le orientamos sobre qué sesión de fotos hace falta, pero lo incluimos en el plan. Esperar materiales en silencio es la causa más frecuente de retraso.",
      },
      {
        q: "¿Hacen sitios con constructores?",
        a: "Por regla general, no. Escribimos código en Next.js y React porque eso da velocidad de carga, libertad en la mecánica y control total sobre el proyecto. El constructor se justifica en un solo escenario: hay que comprobar en pocos días si existe demanda para un servicio nuevo con una inversión mínima. Si su caso es exactamente ese, se lo diremos con franqueza y no le venderemos un desarrollo desde cero. Cuando la hipótesis se confirme, el prototipo montado en el constructor servirá como un buen pliego técnico para un sitio en condiciones.",
      },
      {
        q: "¿Garantizan el primer puesto en los buscadores?",
        a: "No, y nadie puede garantizarlo con honestidad. Las posiciones dependen de la competencia del sector, de la antigüedad del dominio, de los enlaces externos, del comportamiento de los visitantes y de unos algoritmos que cambian sin que nosotros intervengamos. Respondemos de la parte técnica, que sí está bajo nuestro control: velocidad de carga, estructura limpia de encabezados, metaetiquetas únicas, mapa del sitio, marcado semántico, páginas específicas para búsquedas concretas y analítica conectada. Es el cimiento sin el cual el posicionamiento sencillamente no funciona. A partir de ahí hacen falta contenido y tiempo, y eso lo decimos antes de firmar el contrato.",
      },
      {
        q: "¿Dan mantenimiento al sitio después del lanzamiento?",
        a: "Sí, pero es un acuerdo aparte y no una condición automática. Tras la entrega le mostramos cómo cambiar textos e imágenes por su cuenta y dejamos un instructivo breve; a mucha gente le basta con eso. Si necesita trabajo continuado, formalizamos el mantenimiento: actualización de dependencias, ajustes menores, secciones nuevas y apoyo con la analítica y el contenido. Los errores provocados por nosotros y detectados después del lanzamiento los corregimos dentro del periodo de garantía recogido en el contrato. Las condiciones y el alcance del mantenimiento se acuerdan junto con el presupuesto, antes de empezar.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     VISUALIZACIÓN 3D Y MOTION
     ══════════════════════════════════════════════════════════════ */
  "3d-vizualizaciya": {
    h1: "Visualización 3D y motion graphics a medida",
    lead:
      "El 3D muestra lo que todavía no existe: el producto antes de la tirada, el edificio antes de la obra, una escena imposible de fotografiar. Montamos esas imágenes de principio a fin, desde el modelo y los materiales hasta la luz y la animación, y las entregamos en formatos listos para imprenta, web y redes sociales.",

    sections: [
      {
        h2: "Qué visualizamos",
        paragraphs: [
          "Producto. Render de un envase, un frasco, un dispositivo o un mueble cuando no hay nada que fotografiar o sale demasiado caro: la tirada aún no está impresa, la muestra existe en un solo ejemplar y la ficha de producto tiene que publicarse ya. De un modelo terminado salen infinitos ángulos, fondos y variantes de acabado, incluidos los que en un estudio fotográfico habría que volver a montar cada vez.",
          "Arquitectura, interiores y urbanismo. Un edificio, una plaza, un parque, una fuente o un acceso: todo lo que hay que enseñar a un cliente, a un inversor o a una comisión antes de empezar la obra. Aquí la luz y los materiales son especialmente importantes: son ellos los que separan una visualización convincente de una imagen correcta pero de plástico, que nadie se cree.",
          "Motion y gráficos para redes sociales y web. Piezas cortas con el producto girando o descomponiéndose en sus partes, cabeceras y transiciones animadas, escenas 3D directamente en el navegador. Ese contenido retiene la atención donde una imagen fija se pasa de largo, y se puede recortar para distintas plataformas sin volver a producirlo.",
        ],
      },
      {
        h2: "Cómo se construye una escena",
        paragraphs: [
          "Primero, las referencias y el acuerdo sobre qué vamos a mostrar exactamente. Necesitamos planos, medidas, muestras de materiales, fotografías del objeto o del envase reales y las especificaciones. Cuanto más precisos sean los datos de partida, menos rondas de correcciones: un tono de plástico elegido «a ojo» casi siempre habrá que cambiarlo, y reconfigurar un material después del render final cuesta tiempo.",
          "Después, el modelado y el encuadre en bruto. En esta fase presentamos la escena en gris, sin materiales: geometría, ángulo y composición del plano. La aprobación tiene que producirse justo aquí: cambiar la posición de la cámara en gris lleva minutos, mientras que hacerlo después de ajustar la luz y los materiales obliga a recalcular la escena entera.",
          "Luego, materiales, luz y render. Ajustamos superficies, reflejos, fuentes de luz y profundidad de campo, que es lo que crea la sensación de realidad. Tras el cálculo llega la posproducción: color, contraste y limpieza de artefactos. En la animación se añade entre esas fases el trabajo con el movimiento de la cámara y los objetos, que también se aprueba sobre un cálculo en baja calidad, antes del render final.",
        ],
      },
      {
        h2: "3D en lugar de fotografía: cuándo compensa",
        paragraphs: [
          "El 3D gana cuando físicamente no hay nada que fotografiar. El producto sigue en producción, el edificio no está construido, el parque existe solo como proyecto. Ninguna fotografía sirve aquí, y la decisión (una aprobación, una venta, una inversión) hay que tomarla ya, antes de invertir en fabricación o en obra.",
          "El segundo caso es cuando hay muchos objetos y son del mismo tipo. Una escena montada funciona como una cadena de producción: cambian la etiqueta, el color o el volumen del frasco y todo lo demás se mantiene. Para una gama de veinte referencias sale claramente más barato y más previsible que dos jornadas de fotografía recolocando la luz en cada una, y el resultado queda garantizadamente uniforme en luz y en ángulo.",
          "Pero el 3D no es una solución universal, y lo decimos abiertamente. Comida real, tejido en movimiento, personas, el ambiente de un lugar: casi siempre sale más barato y más convincente fotografiarlo. Un único objeto sencillo sobre fondo blanco también suele ser más fácil de fotografiar. Si en su caso la fotografía es lo lógico, se lo diremos así, aunque eso reduzca el encargo.",
        ],
      },
      {
        h2: "Formatos de entrega y plazos",
        paragraphs: [
          "Las imágenes fijas se entregan en alta resolución, apta para imprenta, y en versiones aligeradas para la web y las redes sociales, directamente en las proporciones necesarias y sin recortar nada importante por los bordes. Si lo pide, guardamos aparte la imagen con fondo transparente, para que el objeto pueda colocarse sobre cualquier base sin contar con nosotros.",
          "La animación se entrega en las resoluciones y proporciones acordadas: horizontal para la web y las presentaciones, vertical para historias y vídeos cortos. Entregamos el archivo maestro en alta calidad y versiones comprimidas para publicar. Si están previstas localizaciones o cambios de rótulos, lo contemplamos desde el principio: rehacer el texto de una pieza terminada es más complicado que dejar preparada la capa desde el inicio.",
          "El plazo depende de la complejidad de la geometría, del número de ángulos y de la calidad del material de partida. Una sola imagen de producto se hace en unos días; una serie de escenas o una animación llevan bastante más. Reservamos tiempo aparte para el cálculo: el render tarda lo que tarda, y eso no se acelera por muchas ganas que haya. El calendario exacto y el alcance del trabajo los indicamos tras un briefing breve con referencias.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Imágenes en alta resolución",
        note: "Archivos aptos para imprenta y versiones aligeradas para la web, en las proporciones que pide cada plataforma.",
      },
      {
        ru: "Imágenes con fondo transparente",
        note: "PNG con canal alfa, para poder colocar el objeto sobre cualquier base sin recurrir a nosotros.",
      },
      {
        ru: "Animación y piezas de vídeo",
        note: "Archivo maestro en alta calidad más versiones comprimidas en formato horizontal y vertical.",
      },
      {
        ru: "Ángulos adicionales",
        note: "Con la escena ya montada, los nuevos puntos de vista y variantes de acabado salen más rápido que la primera imagen.",
      },
      {
        ru: "Escena original",
        note: "Modelo, materiales y ajustes de luz: se entregan según lo acordado, y se habla antes de empezar.",
      },
      {
        ru: "Derechos de uso",
        note: "Los derechos sobre las imágenes y piezas terminadas pasan al cliente mediante contrato.",
      },
    ],

    steps: [
      {
        title: "Briefing y referencias",
        text: "Reunimos el encargo y el material: planos, medidas, muestras, fotografías y especificaciones. Acordamos qué mostramos exactamente y desde qué ángulos.",
      },
      {
        title: "Modelado",
        text: "Construimos la geometría del objeto o de la escena según medidas reales. La precisión de esta fase determina si la imagen resultará creíble.",
      },
      {
        title: "Encuadre en bruto",
        text: "Presentamos la escena en gris, sin materiales: ángulo, encuadre y composición. Es aquí donde hay que aprobar; mover la cámara después sale más caro.",
      },
      {
        title: "Materiales y luz",
        text: "Ajustamos superficies, reflejos e iluminación: la fase en la que la imagen deja de parecer generada por ordenador.",
      },
      {
        title: "Render y posproducción",
        text: "Calculamos la escena, limpiamos artefactos y afinamos color y contraste. En la animación se añade el trabajo con el movimiento de la cámara y los objetos.",
      },
      {
        title: "Entrega de archivos",
        text: "Preparamos las versiones para cada plataforma, entregamos el material y formalizamos la cesión de derechos sobre las imágenes y piezas terminadas.",
      },
    ],

    faq: [
      {
        q: "¿Cuánto cuesta una visualización 3D?",
        a: "El precio se compone de la complejidad de la geometría, el número de ángulos, las exigencias de los materiales y si hace falta animación. Una imagen de un objeto sencillo y la visualización de una urbanización con paisajismo, vegetación y agua son trabajos de volúmenes distintos, y por eso no publicamos una cifra única. Envíenos la descripción del objeto, referencias del resultado que busca e indíquenos a dónde van a ir las imágenes: imprenta, web, redes sociales o una presentación para inversores. Le responderemos con un presupuesto que detalla el alcance y el plazo por fases, incluido el tiempo de cálculo de la escena.",
      },
      {
        q: "¿Cuánto tiempo lleva el trabajo?",
        a: "Una sola imagen de producto suele hacerse en unos días; una serie de escenas o una animación llevan bastante más. El plazo se compone del modelado, el ajuste de materiales y luz, el propio cálculo y la posproducción. Hay que contar aparte con el render: consume su tiempo de máquina, y eso no se acelera por dar prioridad al encargo. Lo que sí acelera el proceso de verdad es un material de partida preciso: planos acotados, códigos de color y muestras de superficies. El calendario exacto lo indicamos tras el briefing con referencias: antes de eso, el plazo sería adivinado a ciegas.",
      },
      {
        q: "¿Cuántas revisiones incluye el trabajo?",
        a: "El número de iteraciones queda fijado en el contrato y repartido por fases. Las correcciones sobre el encuadre en bruto (ángulo, encuadre, composición) están incluidas y son bienvenidas: es ahí donde salen más baratas. Las correcciones posteriores al render final son posibles, pero cada una implica volver a calcular la escena, así que pedimos que se revisen con atención las fases intermedias. Cambiar el objeto en sí, otro modelo de envase u otra distribución en planta, no es una corrección sino un trabajo nuevo, y lo llamamos así desde el principio, antes de empezar.",
      },
      {
        q: "¿A quién pertenecen los derechos sobre las imágenes?",
        a: "Los derechos sobre las imágenes y las piezas terminadas pasan al cliente mediante contrato: puede usarlas en publicidad, en marketplaces, en impresión y en presentaciones sin límite de plazo. Aparte se acuerda la entrega de la escena original, es decir, el modelo, los materiales y los ajustes de luz. Es posible, pero se habla antes de empezar, porque afecta al alcance del trabajo. El estudio se reserva el derecho a mostrar el resultado en su portafolio; si el objeto es confidencial o aún no ha salido al mercado, aplazamos la publicación hasta que nos dé permiso o no la hacemos.",
      },
      {
        q: "¿Qué necesitamos aportar para empezar?",
        a: "Datos de partida lo más precisos posible. Para un producto: medidas, el troquel del envase en vectorial, códigos de color, muestras de materiales o una descripción detallada de ellos y fotografías de la muestra real desde varios lados. Para arquitectura y urbanismo: planos, plantas, secciones y la especificación de pavimentos y vegetación. Envíenos además referencias, imágenes cuya luz y ambiente le gusten. Si falta parte de los datos, díganoslo desde el principio: o buscamos un equivalente y lo aprobamos con usted, o reservamos tiempo para concretarlo, pero no nos lo inventaremos en silencio.",
      },
      {
        q: "¿Por qué es mejor el 3D que la fotografía?",
        a: "Ni mejor ni peor: más adecuado en determinados casos. El 3D es insustituible cuando no hay nada que fotografiar: el producto aún no está fabricado, el edificio no está construido, el parque existe solo sobre el papel. También gana en gamas amplias de referencias del mismo tipo: con la escena montada se puede cambiar la etiqueta, el color o el volumen sin repetir la sesión, manteniendo la misma luz y el mismo ángulo. Pero la comida real, el tejido en movimiento, las personas y el ambiente de un lugar casi siempre resultan más convincentes y más baratos fotografiados. Si su caso pertenece a esta segunda categoría, se lo diremos claramente.",
      },
      {
        q: "¿Hacen animación y motion graphics?",
        a: "Sí. Puede tratarse del giro de un producto, del despiece de un objeto, de un sobrevuelo de un edificio o de un terreno, o de cabeceras y transiciones animadas para la web y las redes sociales. El trabajo se organiza igual que con una imagen fija, pero se añade la fase de movimiento: las trayectorias de la cámara y de los objetos se aprueban sobre un cálculo en baja calidad, antes del render final. Entregamos el archivo maestro y versiones comprimidas en formato horizontal y vertical. Si la pieza está prevista en varios idiomas o con rótulos distintos, díganoslo de antemano: eso se contempla en la estructura del proyecto desde el inicio.",
      },
      {
        q: "¿Se pueden pedir ángulos adicionales más adelante?",
        a: "Sí, y es una de las principales ventajas prácticas del 3D. Mientras la escena está montada, un ángulo nuevo, otro fondo u otra variante de acabado se hacen bastante más rápido y más barato que la primera imagen: no hay que volver a construir el modelo ni a ajustar los materiales. Conservamos los archivos de trabajo del proyecto y podemos retomarlos más adelante, cuando necesite formatos nuevos para un marketplace, publicidad exterior o una gama renovada. Las imágenes adicionales se presupuestan aparte y siempre por debajo del arranque inicial, porque el volumen de trabajo es sustancialmente menor.",
      },
    ],
  },
};

export default es;
