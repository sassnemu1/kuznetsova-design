/**
 * Tradução para português europeu das páginas comerciais /uslugi/*.
 *
 * A estrutura espelha exactamente a do original russo em data/UslugiData.js:
 * o carregador funde os arrays por índice, pelo que a ordem e a contagem
 * de elementos têm de coincidir.
 *
 * Regras mantidas do original:
 *  • nenhum preço e nenhuma quantia — em vez de números, o convite para
 *    enviar um briefing;
 *  • nenhuma promessa de posições em motores de busca nem de resultados;
 *  • nenhum cliente, prémio ou caso inventado.
 */

const pt = {
  /* ══════════════════════════════════════════════════════════════
     LOGÓTIPO
     ══════════════════════════════════════════════════════════════ */
  logotip: {
    h1: "Criação de logótipos por encomenda",
    lead:
      "Um logótipo não é uma ilustração, é uma ferramenta de trabalho. Tem de se ler na assinatura de um e-mail e num letreiro de fachada, a uma só cor e bordado num tecido. Desenhamos marcas que aguentam todos estes suportes e entregamo-las em ficheiros de origem, acompanhadas das regras de utilização.",

    sections: [
      {
        h2: "O que inclui o desenvolvimento de um logótipo",
        paragraphs: [
          "Criar um logótipo não é entregar um ficheiro, é montar um sistema. Começamos pelo briefing e por uma conversa: de que vive a empresa, a quem vende, com quem a confundem, onde é que a marca vai viver mais vezes — numa aplicação móvel, numa embalagem, numa fachada. A forma depende directamente destas respostas: uma marca para um ícone de aplicação e uma marca para gravação em metal obedecem a regras diferentes.",
          "Segue-se a análise do sector. Vemos como se apresentam os concorrentes e procuramos um território que o distinga, em vez de o diluir no meio do mercado. Depois desenhamos esboços e mostramos duas ou três direcções já em apresentação limpa. Não vinte propostas: vinte propostas significam que a solução não foi encontrada e que a responsabilidade da escolha está a ser passada para o cliente.",
          "A direcção escolhida é levada até à marca final: proporções, acerto óptico, comportamento em tamanho reduzido, zona de protecção, versões monocromática e invertida. No fim recebe um conjunto de ficheiros e regras curtas que lhe permitem entregar o logótipo, sem nos consultar, a uma gráfica, a um fornecedor de publicidade exterior ou a um novo responsável de marketing.",
        ],
      },
      {
        h2: "Como trabalhamos a marca",
        paragraphs: [
          "O primeiro esboço é desenhado à mão, não escolhido num banco de imagens. Descartamos deliberadamente o óbvio — as primeiras ideias são quase sempre as mesmas que lhe ocorreram a si e aos seus concorrentes — e continuamos até aparecer uma forma que tem uma razão para ser assim. Essa razão sabemos depois explicá-la por palavras, e não com um «fica mais bonito».",
          "Cada direcção é mostrada em contexto, e não sobre uma folha branca: num cartão de visita, no avatar de uma aplicação de mensagens, num letreiro, numa embalagem. Uma marca que resulta bem numa apresentação desfaz-se muitas vezes no suporte real — perde legibilidade a 16 píxeis ou afoga-se quando reduzida a uma só cor. Mais vale saber isso antes da aprovação do que já com a tiragem na máquina.",
          "A discussão faz-se em torno do problema, não do gosto. «Gosto» e «não gosto» também são informação, mas pedimos que explique o que incomoda em concreto: a marca parece pesada, fria, remete para o lado errado, tem ar de cadeia comercial. Com uma formulação destas conseguimos trabalhar. Com um «não é isto» abstracto não conseguimos, e dizemo-lo com franqueza.",
        ],
      },
      {
        h2: "O que recebe no final",
        paragraphs: [
          "O logótipo final é entregue em vectorial — ou seja, não perde qualidade nem num cartão de visita nem num painel de dez metros. Junta-se-lhe versões rasterizadas para redes sociais e documentos, o favicon do site, uma variante para fundo escuro e uma versão monocromática para relevo, gravação e bordado.",
          "Com os ficheiros segue um mini-guia: tamanho mínimo, zona de protecção, utilizações admissíveis e proibidas, códigos de cor em RGB, CMYK e Pantone. É quanto basta para que a gráfica ou um novo colaborador não estraguem a marca por desconhecimento — esticando-a na horizontal ou colocando-a sobre um fundo carregado.",
          "Os direitos exclusivos sobre o logótipo aprovado passam para si, e isso fica escrito no contrato. Ao estúdio fica apenas o direito de mostrar o trabalho no portefólio. Se o projecto estiver sob acordo de confidencialidade ou ainda não tiver arrancado, adiamos a publicação até ter o seu acordo ou simplesmente não a fazemos — isto combina-se no início, não depois dos factos.",
        ],
      },
      {
        h2: "Prazos e o que os influencia",
        paragraphs: [
          "O desenvolvimento de uma marca demora normalmente entre duas e quatro semanas. A variável decisiva não é a nossa velocidade de desenho, mas a velocidade da resposta do seu lado. Se as alterações demoram uma semana a ser reunidas junto de todos os interessados, o prazo desloca-se exactamente essa semana, e nenhuma optimização interna do processo compensa isso.",
          "Há uma acção concreta que acelera o trabalho: designe a pessoa que toma a decisão final. Um comité de cinco vozes não escolhe a melhor marca — escolhe aquela que não irrita ninguém, e essa é quase sempre a mais apagada das propostas. Recolher opiniões é útil; decidir por maioria não é.",
          "O que atrasa é a mudança de pressupostos a meio do caminho. Se, depois de aprovada a direcção, mudar o nome, o produto ou o público, voltamos à fase de esboços. É uma situação normal, e é mais honesto chamar-lhe pelo nome do que apresentá-la como um retoque cosmético. O prazo exacto e o âmbito do trabalho indicamo-los depois de um briefing curto — antes disso, qualquer número seria inventado.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Logótipo em vectorial",
        note: "SVG, AI e PDF. Escala do ícone de uma aplicação ao letreiro de fachada sem perder qualidade.",
      },
      {
        ru: "Versões rasterizadas",
        note: "PNG com fundo transparente em vários tamanhos, favicon para o site, avatares para redes sociais e aplicações de mensagens.",
      },
      {
        ru: "Monocromático e inversão",
        note: "Versão a uma só cor e variante para fundo escuro — para impressão, relevo, gravação e bordado.",
      },
      {
        ru: "Mini-guia de utilização",
        note: "Zona de protecção, tamanho mínimo, códigos de cor RGB / CMYK / Pantone e a lista do que não se pode fazer com a marca.",
      },
      {
        ru: "Ficheiros de trabalho originais",
        note: "Ficheiros com camadas, para que não dependa de um único fornecedor e possa passar o projecto adiante.",
      },
      {
        ru: "Transmissão de direitos",
        note: "Os direitos exclusivos sobre a marca aprovada passam para o cliente por contrato.",
      },
    ],

    steps: [
      {
        title: "Briefing e ponto de partida",
        text: "Uma conversa de 40 a 60 minutos e um questionário curto: objectivo, público, suportes, o que agrada e o que está fora de questão. As conclusões ficam por escrito — para não haver dúvidas daqui a um mês sobre o que foi combinado.",
      },
      {
        title: "Análise e território",
        text: "Observamos concorrentes e mercados vizinhos e definimos o território visual que é possível ocupar. Apresentamos um resumo curto: nesta fase, mudar de direcção ainda é barato.",
      },
      {
        title: "Esboços e direcções",
        text: "Desenhamos propostas à mão, seleccionamos duas ou três viáveis e levamo-las a apresentação limpa — já em contexto de suportes reais, e não sobre folha branca.",
      },
      {
        title: "Afinação da proposta escolhida",
        text: "Acertamos proporções, óptica, comportamento em tamanho reduzido e cor. As alterações decorrem por iterações, com um número fixado antecipadamente no contrato.",
      },
      {
        title: "Entrega e transmissão de direitos",
        text: "Reunimos os ficheiros, escrevemos o mini-guia, entregamos os originais e formalizamos a passagem dos direitos. Depois disso continuamos disponíveis para questões com gráficas e fornecedores de publicidade.",
      },
    ],

    faq: [
      {
        q: "Quanto custa desenvolver um logótipo?",
        a: "O valor depende do âmbito: se precisa apenas da marca ou também de suportes, quantas direcções são apresentadas, se é necessária análise da concorrência e preparação de ficheiros para registo de marca. Por isso não publicamos tabela de preços — um número sem o problema por trás induz em erro tanto a si como a nós. Envie-nos um briefing curto ou simplesmente dois parágrafos: o que faz a empresa, onde vai viver a marca, para quando precisa do resultado. Em resposta enviamos um orçamento com o âmbito do trabalho e os prazos por fases, para que se veja pelo que está a pagar e do que pode prescindir sem perder qualidade.",
      },
      {
        q: "Quanto tempo demora o trabalho?",
        a: "Habitualmente entre duas e quatro semanas, da assinatura do contrato à entrega dos ficheiros. A variação não se explica pela dificuldade do desenho, mas pelo número de aprovações do seu lado e pela rapidez das respostas. Planeamos o trabalho por fases e dizemos antecipadamente em que dias esperamos decisões suas: se nesses dias não houver resposta, o prazo desloca-se outro tanto. Um regime acelerado é possível se for combinado antes do arranque e se conseguirmos libertar os dias necessários para o projecto. O calendário exacto recebe-o com o orçamento, depois do briefing — antes disso, qualquer prazo indicado seria adivinhação.",
      },
      {
        q: "Quantas alterações estão incluídas?",
        a: "O número de iterações fica fixado no contrato antes do arranque, para que as alterações não se transformem num processo sem fim nem limites. Normalmente são algumas rondas na fase das direcções e outras tantas no acerto da marca escolhida — chega na esmagadora maioria dos projectos. As alterações dentro da direcção aprovada estão incluídas no trabalho. Regressar aos esboços depois de aprovada a direcção já é uma fase nova, e é isso que lhe chamamos com franqueza, em vez de a apresentar como um acerto gratuito. Para precisar de menos iterações, ajuda muito reunir de uma só vez os comentários de todos os interessados, em vez de os receber a conta-gotas.",
      },
      {
        q: "A quem pertencem os direitos sobre o resultado?",
        a: "Os direitos exclusivos sobre o logótipo aprovado passam para o cliente — está escrito no contrato, e com os ficheiros recebe os documentos que comprovam essa transmissão. Pode usar a marca sem limites de território ou de prazo, mudar de fornecedores, registar a marca. Reservamos apenas o direito de mostrar o trabalho no portefólio e em comunidades profissionais. Se o projecto for confidencial ou ainda não tiver arrancado, adiamos a publicação até à sua autorização ou não a fazemos de todo — isto fica definido no início, e não decidido depois dos factos.",
      },
      {
        q: "O que precisamos de ter para começar?",
        a: "No mínimo, as respostas ao briefing e uma pessoa do seu lado com poder de decisão. No briefing perguntamos sobre o produto, o público, os concorrentes, os suportes e sobre aquilo que está categoricamente fora de questão: a lista dos «não» poupa mais tempo do que a lista dos «sim». É útil enviar o material que já existe: textos sobre a empresa, fotografias, ficheiros antigos, ligações para concorrentes. Se nada disso existir, não há problema: esclarecemos na chamada. Daí em diante só precisamos que responda a tempo nas fases de aprovação; o resto fica connosco.",
      },
      {
        q: "Tratam do registo da marca?",
        a: "O registo é tratado por um agente oficial da propriedade industrial — é uma profissão jurídica autónoma e não nos fazemos passar por ela. A nossa parte é técnica: preparamos a imagem nos formatos exigidos e definimos consigo o que exactamente é submetido a registo. Se assim o quiser, podemos consultar as bases públicas à procura de coincidências evidentes, mas essa verificação não constitui um parecer jurídico nem garante o registo. Se não tiver um agente, indicamos a quem faz sentido recorrer e entregamos os ficheiros no formato em que costumam ser pedidos.",
      },
      {
        q: "E se nenhuma das direcções agradar?",
        a: "Acontece, e normalmente a causa não está no desenho, mas no facto de o problema ter sido formulado de forma imprecisa. É por isso que mostramos as direcções cedo, e não na fase final — quando ainda é barato mudar de rumo. Se nenhuma proposta acertar, voltamos ao briefing e analisamos o que divergiu: o público, o tom, as associações. Depois fazemos uma nova ronda de esboços; as condições desse regresso estão previstas no contrato à partida, sem improvisos por e-mail. Não prometemos que a primeira apresentação acerta sempre no alvo, mas prometemos não fingir que acertou.",
      },
      {
        q: "Trabalham com empresas de fora de Moscovo?",
        a: "Sim. O estúdio está em Moscovo, mas o processo é totalmente remoto: o briefing e as conversas decorrem por videochamada, as apresentações intermédias num documento partilhado, os ficheiros seguem por ligação. A geografia não altera nem os prazos nem o âmbito do trabalho. Com clientes noutros fusos horários combinamos antecipadamente uma janela para as chamadas, para que as aprovações não se estiquem um dia inteiro a mais. Se preferir um encontro presencial em Moscovo, também é possível, mas não é obrigatório em nenhuma fase.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     BRANDING E IDENTIDADE CORPORATIVA
     ══════════════════════════════════════════════════════════════ */
  brending: {
    h1: "Desenvolvimento de identidade corporativa e branding",
    lead:
      "A identidade corporativa é o conjunto de decisões que permite reconhecerem-no antes de lerem o nome. Montamos esse sistema por inteiro: do posicionamento e do logótipo aos suportes, modelos e regras que permitem à sua equipa continuar a conduzi-lo.",

    sections: [
      {
        h2: "O que é a identidade corporativa e para que serve ao negócio",
        paragraphs: [
          "A identidade corporativa não é um conjunto de imagens bonitas, é uma forma de poupar a atenção do cliente. Quando o site, o letreiro, a embalagem, a apresentação e o feed nas redes sociais parecem um só organismo, a pessoa não tem de perceber de novo quem é a empresa a cada encontro com a marca. O reconhecimento acumula-se, e cada contacto seguinte custa menos do que o anterior.",
          "A situação inversa é mais frequente: o logótipo foi feito por um fornecedor, o site por outro, as apresentações são montadas por um gestor num editor de texto e as redes sociais são geridas por uma terceira pessoa. Formalmente está tudo feito, mas não há reconhecimento, e o orçamento de publicidade trabalha em vazio. A identidade corporativa resolve exactamente este problema — define o enquadramento dentro do qual qualquer suporte novo sai já «da casa».",
          "Por isso quase nunca começamos pelo desenho, mas pelo posicionamento: o que é que a empresa vende de facto, a quem, em que se distingue dos vizinhos de mercado e com que palavras fala sobre isso. Sem isto, a identidade transforma-se numa questão de gosto — e desfaz-se na primeira reunião em que cada um tem a sua ideia do que é bonito.",
        ],
      },
      {
        h2: "Como está organizado o nosso trabalho sobre a marca",
        paragraphs: [
          "A primeira fase é investigação e conversa. Estudamos o mercado, olhamos para os concorrentes directos e para categorias vizinhas, analisamos como a empresa se apresenta hoje e o que aí funciona. Muitas vezes o mais valioso vem das entrevistas com os colaboradores: a forma como a equipa comercial explica o produto ao cliente é habitualmente mais precisa do que qualquer documento sobre a missão.",
          "Depois formulamos a plataforma de marca em palavras simples: essência, diferença, tom, promessa. É um documento curto, e não um volume de quarenta páginas — tem de ser efectivamente usado. Sobre ele constrói-se a linguagem visual: a marca, a paleta, a tipografia, os princípios de composição, os elementos gráficos, a abordagem à fotografia e à ilustração.",
          "Em seguida, o sistema é testado nos suportes. Não fazemos exemplos abstractos, mas aqueles de que precisa: embalagem, letreiro, farda do pessoal, modelos de apresentações e de publicações, documentos, ambientação do ponto de venda. É exactamente nesta fase que se vê onde o sistema é rígido de mais e onde lhe faltam variantes — e afinamos as regras antes da entrega, não depois.",
        ],
      },
      {
        h2: "Rebranding: quando é mesmo necessário",
        paragraphs: [
          "Vale a pena avançar para um rebranding quando a imagem visual prejudica o negócio: a empresa cresceu e vende a outro tipo de cliente, mudaram o preço e o posicionamento, surgiram áreas que não cabem no sistema antigo, ou o estilo é tão antigo que se lê como falta de cuidado consigo próprio. São razões de fundo, e resolvem-se com design.",
          "Já «estou farto disto» e «o concorrente tem uma imagem mais vistosa» são maus fundamentos. Mudar de identidade anula parte do reconhecimento acumulado, que depois tem de ser reconquistado. Por vezes a resposta honesta a um pedido de rebranding é esta: o que é preciso mudar não é o logótipo, mas o site, as fotografias ou o tom da comunicação. Dizemo-lo directamente, mesmo quando isso reduz o volume da encomenda.",
          "Se a mudança for mesmo necessária, discutimos à parte a sua profundidade. O caminho evolutivo preserva o reconhecimento e renova a execução: os mesmos sentidos, com apresentação actual. O caminho revolucionário justifica-se numa mudança de modelo de negócio ou depois de uma ruptura reputacional com o passado. A escolha influencia o orçamento e também o plano de transição: os suportes antigos não desaparecem num dia, e a ordem da sua substituição tem de ser planeada com antecedência.",
        ],
      },
      {
        h2: "O que recebe e o que influencia o prazo",
        paragraphs: [
          "No final recebe o logótipo com todas as suas versões, o sistema cromático e tipográfico, os elementos gráficos, os ficheiros dos suportes acordados, os modelos para tarefas recorrentes e o manual de marca — um documento com regras e exemplos. Tudo em ficheiros de origem: ficheiros com camadas, tipos de letra com as respectivas licenças ou as ligações para elas, prontos a entregar a qualquer fornecedor.",
          "Escrevemos o manual de marca como um manual de instruções para pessoas, e não como um álbum para a prateleira. Tem respostas para as perguntas que surgem realmente: qual é a margem à volta do logótipo, que tipo de letra usar nos documentos Word, o que fazer quando o fundo é carregado, como compor uma publicação e como compor uma proposta comercial. Quanto mais claras forem estas regras, mais tempo o sistema vive sem nós.",
          "O prazo depende do âmbito: a identidade de uma empresa pequena monta-se em algumas semanas; um branding completo, com investigação e dezenas de suportes, leva meses. O que mais influencia o calendário é a rapidez das aprovações e a completude dos dados iniciais — se a lista de suportes for sendo acrescentada ao longo do caminho, o plano desloca-se. O âmbito do trabalho, as fases e o prazo ficam fixados no orçamento depois de um briefing curto.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Plataforma de marca",
        note: "Documento curto: essência, diferença face aos concorrentes, tom e promessa — numa linguagem que é possível usar.",
      },
      {
        ru: "Logótipo e as suas versões",
        note: "Marca principal, composição horizontal e compacta, monocromático e inversão — em vectorial e em raster.",
      },
      {
        ru: "Sistema visual",
        note: "Paleta com códigos, tipografia, grelhas, elementos gráficos, princípios de fotografia e ilustração.",
      },
      {
        ru: "Ficheiros dos suportes",
        note: "Aquilo de que precisa: embalagem, impressos, letreiro, farda, ambientação do espaço, documentos.",
      },
      {
        ru: "Modelos para a equipa",
        note: "Apresentações, publicações, propostas comerciais — bases que se preenchem sem designer.",
      },
      {
        ru: "Manual de marca e originais",
        note: "Regras com exemplos de «assim» e «assim não», ficheiros de trabalho com camadas, tipos de letra com licenças ou ligações.",
      },
    ],

    steps: [
      {
        title: "Briefing e imersão",
        text: "Analisamos o negócio: produto, público, canais de venda, planos para o ano. Falamos não só com a direcção, mas também com quem vende e atende o cliente.",
      },
      {
        title: "Estudo do mercado",
        text: "Observamos concorrentes e categorias vizinhas, reunimos um panorama visual do sector e procuramos território por ocupar. Apresentamos as conclusões antes de desenhar seja o que for.",
      },
      {
        title: "Plataforma de marca",
        text: "Formulamos a essência, a diferença e o tom em palavras simples e aprovamo-los. É a base de todas as decisões visuais seguintes.",
      },
      {
        title: "Identidade",
        text: "Desenvolvemos a marca, a paleta, a tipografia e a linguagem gráfica. Mostramos as direcções em contexto de suportes reais, e não sobre fundo branco.",
      },
      {
        title: "Suportes e modelos",
        text: "Desdobramos o sistema na lista de suportes acordada e montamos os modelos que a sua equipa usa por si própria.",
      },
      {
        title: "Manual de marca e entrega",
        text: "Escrevemos as regras, reunimos os originais, entregamos os ficheiros e fazemos uma sessão com a equipa, para que o sistema seja adoptado e saibam conduzi-lo.",
      },
    ],

    faq: [
      {
        q: "Quanto custa desenvolver uma identidade corporativa?",
        a: "O intervalo é aqui muito largo, porque «identidade corporativa» significa coisas diferentes em empresas diferentes: umas precisam da marca e de um conjunto mínimo de suportes, outras de estudo de mercado, plataforma de marca, embalagem, ambientação do ponto de venda e manual de marca. Publicar um único número para todos estes casos seria desonesto. Escreva-nos a dizer o que faz a empresa, o que já existe e de que suportes precisa no próximo ano — voltamos com um orçamento repartido por fases. Nesse orçamento vê-se o que pode ser feito já e o que pode ficar para um passo seguinte sem prejuízo.",
      },
      {
        q: "Quanto tempo demora um projecto de branding?",
        a: "Uma identidade compacta para uma empresa pequena monta-se em algumas semanas. Um branding completo, com investigação, plataforma, um conjunto alargado de suportes e manual de marca, leva meses — é um prazo normal para um trabalho cujo resultado vive anos. Dividimos o projecto em fases com pontos de aceitação claros, pelo que vê o progresso permanentemente, em vez de esperar às cegas por uma apresentação final. O calendário é elaborado depois do briefing e depende do número de suportes e da rapidez com que decorrem as aprovações do seu lado.",
      },
      {
        q: "Quantas alterações estão incluídas?",
        a: "O número de iterações em cada fase fica fixado no contrato antes do arranque. Dentro da direcção aprovada, as alterações estão incluídas no trabalho — fazem parte do processo normal, não são um favor. Regressar a uma fase anterior depois de esta ter sido aceite conta como trabalho autónomo, e dizemo-lo directamente, em vez de o diluir na troca de mensagens. A prática mostra que são precisas menos iterações quando os comentários são reunidos de uma só vez junto de todos os interessados e quando existe uma pessoa que toma a decisão final. Pedimos que a designem logo na primeira chamada.",
      },
      {
        q: "A quem pertencem os direitos sobre a identidade corporativa?",
        a: "Os direitos exclusivos sobre os ficheiros e a marca aprovados passam para o cliente por contrato — pode usá-los sem restrições, alterá-los e entregá-los a outros fornecedores. Os tipos de letra são tratados à parte: se o sistema usar fontes comerciais, a licença é adquirida em nome da sua empresa, e dizemos antecipadamente qual é necessária. As ilustrações e fotografias criadas no âmbito do projecto são entregues com o resto. Ao estúdio fica o direito de mostrar o trabalho no portefólio — num projecto confidencial, a publicação é adiada ou não é feita.",
      },
      {
        q: "O que precisamos de ter para começar?",
        a: "As respostas ao briefing, acesso a algumas pessoas para entrevistas curtas e uma pessoa com poder de decisão final. É útil enviar tudo o que já existe: ficheiros actuais, fotografias, textos, apresentações, dados de vendas, a lista de concorrentes que considera fortes. Pediremos ainda que formule a lista de suportes de que vai precisar no próximo ano — dela dependem o âmbito e o valor. Se essa lista ainda estiver difusa, montamo-la em conjunto na primeira chamada: isso faz parte do trabalho, não é trabalho de casa seu.",
      },
      {
        q: "Qual é a diferença entre um manual de marca e um guia de estilo?",
        a: "O guia de estilo descreve as regras visuais: como está construído o logótipo, que cores e tipos de letra, que margens, o que não se pode fazer com a marca. É um documento técnico para designers e fornecedores. O manual de marca é mais amplo: além da parte visual, explica o sentido — quem são, para quem, em que se distinguem, em que linguagem falam. A uma empresa pequena chega normalmente um guia de estilo cuidado e um conjunto de modelos; um manual de marca completo é necessário onde muita gente trabalha sobre a marca e as decisões são tomadas em departamentos diferentes. Propomos o formato em função do problema, não da tabela de preços.",
      },
      {
        q: "É possível renovar o estilo sem mudar o logótipo?",
        a: "Sim, e não raras vezes é a decisão mais sensata. O logótipo é a parte mais inerte do sistema: já está nos letreiros, nos documentos e na memória dos clientes. Entretanto, quem envelhece são a paleta, os tipos de letra, a composição, as fotografias e a apresentação nas redes sociais — são esses elementos que criam a sensação de idade. Podemos manter a marca e reconstruir tudo à sua volta, incluindo, se for necessário, um acerto técnico cuidadoso do próprio logótipo sem alterar a forma. No briefing analisamos o que funciona e o que atrapalha e propomos a intervenção mínima que produz efeito.",
      },
      {
        q: "Quem conduz o estilo depois da entrega do projecto?",
        a: "Fazemos o sistema de forma a que possa ser conduzido pela sua equipa: modelos, regras claras e uma sessão de entrega em que analisamos o documento com quem vai usá-lo. Depois disso há dois cenários possíveis. No primeiro, trabalham autonomamente e nós respondemos às dúvidas à medida que surgem. No segundo, assumimos um acompanhamento regular: novos suportes, materiais sazonais, apoio a fornecedores. A segunda hipótese é contratada à parte e não é condição obrigatória — o sistema não deve partir-se só porque decidiu dispensar-nos.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     DESENVOLVIMENTO DE SITES
     ══════════════════════════════════════════════════════════════ */
  "sozdanie-saytov": {
    h1: "Desenvolvimento de sites por encomenda",
    lead:
      "Fazemos sites escritos em código, e não montados a partir de blocos de um construtor. Design, integração, animação e optimização técnica ficam dentro da mesma equipa, pelo que a velocidade de carregamento e o comportamento no telemóvel são da responsabilidade de quem desenhou o ecrã.",

    sections: [
      {
        h2: "Que sites fazemos",
        paragraphs: [
          "Uma landing page serve quando existe um serviço, uma proposta e um objectivo claro: um pedido de contacto, uma marcação, uma chamada. Uma página assim constrói-se à volta de uma única acção, e tudo nela ou conduz a essa acção ou remove a objecção que impede que ela aconteça. As secções a mais não acrescentam confiança, dispersam a atenção.",
          "Um site institucional é necessário quando há vários serviços, públicos distintos, e importa que cada um encontre o seu através da pesquisa. Aqui aparece a estrutura: páginas de serviço autónomas, portefólio, blogue, página sobre a empresa. As secções são importantes para as pessoas e também para os motores de busca — que classificam páginas, e não sites inteiros, pelo que uma única página «Serviços» perde para quatro páginas precisas.",
          "As lojas em linha e os catálogos são uma categoria à parte: ficha de produto, filtros, disponibilidade, carrinho, pagamento, exportações. Aqui o design está subordinado à lógica do produto, e não ao contrário. Fazemos também ecrãs internos para as equipas — painéis de administração, ecrãs de cozinha, interfaces de encomendas —, porque o site é muitas vezes apenas a entrada para um sistema que é usado todos os dias.",
        ],
      },
      {
        h2: "Como decorre o processo",
        paragraphs: [
          "Começamos pelo problema, não pela estrutura. Precisamos de perceber quem chega ao site, o que deve fazer e o que hoje o impede de o fazer. Com base nessas respostas montamos a estrutura e o protótipo: a disposição dos blocos, sem cor nem acabamento. Aprovar um protótipo é mais rápido e mais barato — nesta fase mudar uma secção de sítio custa dez minutos, e não dois dias.",
          "Segue-se o design. Desenhamos os ecrãs principais em versão de secretária e móvel ao mesmo tempo: mais de metade do tráfego chega pelo telemóvel, e o «adaptamos depois» é uma forma segura de obter um site incómodo. Em paralelo pensamos o movimento: a animação não é para nós decoração, mas uma forma de mostrar as ligações entre ecrãs e de segurar a atenção onde é preciso.",
          "Depois o desenvolvimento. Escrevemos código em Next.js e React, ligamos formulários, analítica e as integrações necessárias, verificamos a velocidade e o comportamento em equipamentos reais. Entregamos com acesso a tudo: repositório, alojamento, domínio, painel de gestão. O cliente não deve ficar refém do fornecedor — é um princípio, não uma opção.",
        ],
      },
      {
        h2: "Porque escrevemos código em vez de montar num construtor",
        paragraphs: [
          "O construtor é uma ferramenta perfeitamente válida para testar uma hipótese: num fim-de-semana tem uma página e percebe se existe procura. Os problemas começam depois. O modelo arrasta consigo código de que não precisa, e isso afecta directamente a velocidade de carregamento — que é um dos factores considerados pelos motores de busca e influencia se o visitante chega sequer a esperar que a página abra.",
          "A segunda limitação é o tecto de possibilidades. Qualquer mecânica fora do padrão, uma animação complexa, uma ficha de produto atípica ou uma integração com o seu sistema de gestão esbarra no facto de o construtor não fazer isso. Contornar com widgets de terceiros funciona até à primeira actualização da plataforma. O código próprio não tem essas fronteiras: fazemos exactamente o que o projecto exige.",
          "A terceira é o controlo. Um site num construtor vive segundo as regras da plataforma: tarifários, limitações, acesso ao markup, o destino do projecto se o serviço fechar. Um site em Next.js é o seu repositório, que pode ser transferido para qualquer alojamento e entregue a qualquer programador. Entregamos o código na íntegra e não prendemos o cliente a nós por via técnica.",
        ],
      },
      {
        h2: "O que recebe",
        paragraphs: [
          "Um site a funcionar, com integração responsiva, verificado nos navegadores actuais e em telemóveis reais. A base técnica de SEO fica no sítio: títulos e descrições únicos por página, endereços canónicos, mapa do site, robots.txt, marcação Schema.org, hierarquia de títulos correcta e textos com sentido nas ligações e nas imagens.",
          "Entregamos todos os acessos: código-fonte no repositório, alojamento, domínio, correio electrónico e painel de edição de conteúdos, se estiver previsto. Mostramos numa chamada como alterar textos e imagens e deixamos um manual curto. A analítica é ligada logo — Yandex.Metrica e Google Analytics —, caso contrário, daqui a um mês será impossível perceber o que está a acontecer ao tráfego.",
          "Digamos também o que não prometemos: posições concretas na pesquisa nem um número concreto de contactos. Ninguém pode garantir isso com honestidade — os resultados dependem da concorrência, da idade do domínio, das ligações externas e do comportamento dos utilizadores. Respondemos pelo que está na nossa esfera: velocidade, código limpo, estrutura orientada às pesquisas e preparação técnica da página para ser promovida.",
        ],
      },
      {
        h2: "Prazos e o que os influencia",
        paragraphs: [
          "Uma landing page demora habitualmente algumas semanas, um site institucional bastante mais, uma loja com catálogo e integrações é o mais demorado. O prazo exacto não depende do número de páginas, mas do número de ecrãs únicos e de mecânica fora do padrão: vinte fichas de produto iguais fazem-se mais depressa do que três páginas com lógicas diferentes.",
          "Há duas coisas que mais deslocam o calendário. A primeira é o conteúdo. Se os textos, as fotografias e os dados dos produtos chegam aos bocados ao longo de um mês, o site não pode estar pronto antes disso. Podemos ajudar com os textos e indicar que sessão fotográfica é necessária, mas os materiais sobre o seu negócio nascem sempre com a sua participação.",
          "A segunda são as integrações com sistemas de terceiros: armazém, CRM, serviço de pagamentos, transportadora. Aqui a velocidade depende da documentação e do apoio técnico do outro lado, e isso é assumido com honestidade no plano, como fase autónoma e com margem. O âmbito do trabalho, as fases e o prazo ficam fixados no orçamento depois de um briefing curto — antes do briefing, qualquer número seria adivinhação.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Site no seu próprio domínio",
        note: "Projecto publicado e a funcionar: integração responsiva, verificação nos navegadores actuais e em telemóveis reais.",
      },
      {
        ru: "Código-fonte",
        note: "O repositório na íntegra, com acesso pela sua conta. O projecto pode ser transferido e entregue a outro programador.",
      },
      {
        ru: "Ficheiros de design",
        note: "Todos os ecrãs em versão de secretária e móvel, com camadas e componentes.",
      },
      {
        ru: "Base técnica de SEO",
        note: "Meta-tags, canonical, sitemap.xml, robots.txt, marcação Schema.org, estrutura semântica de títulos.",
      },
      {
        ru: "Analítica e formulários",
        note: "Yandex.Metrica e Google Analytics, pedidos de contacto enviados por e-mail ou para uma aplicação de mensagens — configurados e testados.",
      },
      {
        ru: "Acessos e manual",
        note: "Alojamento, domínio, painel de edição e um manual curto para actualizar textos e imagens.",
      },
    ],

    steps: [
      {
        title: "Briefing e objectivo",
        text: "Analisamos quem chega ao site, o que deve fazer e o que hoje o impede de o fazer. Fixamos um objectivo mensurável para o projecto.",
      },
      {
        title: "Estrutura e protótipo",
        text: "Montamos o mapa de páginas e a disposição dos blocos, sem cor. Aprovar o protótipo é mais rápido e mais barato do que refazer um design acabado.",
      },
      {
        title: "Design dos ecrãs",
        text: "Desenhamos os ecrãs principais em versão de secretária e móvel ao mesmo tempo e pensamos o movimento e os estados da interface.",
      },
      {
        title: "Desenvolvimento",
        text: "Escrevemos código em Next.js e React, ligamos formulários, analítica e integrações, e verificamos a velocidade e o comportamento em equipamentos reais.",
      },
      {
        title: "Testes e lançamento",
        text: "Percorremos navegadores, telemóveis e cenários, configuramos o domínio e o alojamento, publicamos e entregamos todos os acessos.",
      },
      {
        title: "Depois do lançamento",
        text: "Mostramos como actualizar o conteúdo, respondemos a dúvidas e, se for necessário, assumimos o acompanhamento regular do projecto.",
      },
    ],

    faq: [
      {
        q: "Quanto custa desenvolver um site?",
        a: "O valor é determinado pelo número de ecrãs únicos e pela complexidade da mecânica, não pelo número de páginas. Uma landing page com um único objectivo e uma loja com catálogo, filtros e integração com o armazém são trabalhos de ordens diferentes, e um número comum para ambos não faria sentido. Descreva o problema em dois ou três parágrafos: que negócio é, o que deve fazer o visitante, que integrações são necessárias, se já existem design e textos. Voltamos com um orçamento por fases e indicamos o que pode ser lançado numa primeira versão e o que pode ser acrescentado depois — assim o projecto arranca mais depressa e mais barato.",
      },
      {
        q: "Quanto tempo demora o desenvolvimento?",
        a: "Uma landing page, algumas semanas; um site institucional, mais tempo; uma loja com catálogo e integrações, mais tempo ainda. O prazo forma-se a partir do número de ecrãs únicos, da mecânica fora do padrão e da rapidez com que chega o conteúdo. Trabalhamos por fases com pontos de aceitação — estrutura, design, desenvolvimento, testes —, pelo que vê o resultado permanentemente. O calendário fica fixado no orçamento depois do briefing e assinala à parte os dias em que aguardamos materiais ou decisões suas: são normalmente essas pausas que empurram a data de lançamento.",
      },
      {
        q: "Quantas alterações estão incluídas?",
        a: "As iterações ficam fixadas no contrato para cada fase — no protótipo, no design e na integração concluída. As alterações dentro da fase aprovada estão incluídas no trabalho. As mudanças que revogam uma decisão já aceite — por exemplo, uma nova estrutura na fase de integração — são tratadas como trabalho autónomo, porque isso é refazer, não afinar. Dizemo-lo logo, e não com uma factura depois dos factos. Para haver menos alterações, aprovamos o protótipo antes do design: mudar um bloco de sítio num esquema custa minutos, no código acabado custa dias.",
      },
      {
        q: "A quem pertencem o site, o código e os acessos?",
        a: "Tudo pertence ao cliente. O código-fonte é entregue num repositório na sua conta, o domínio é registado em seu nome, o alojamento é contratado com os seus dados. Os ficheiros de design recebe-os em formato editável. Os direitos sobre o resultado transferem-se por contrato, incluindo o direito de evoluir o projecto com outros programadores — não incorporamos amarras técnicas a nós. Se o projecto usar tipos de letra pagos, serviços de terceiros ou bibliotecas com condições especiais, dizemo-lo antecipadamente e tratamos das licenças em nome da sua empresa, e não do estúdio.",
      },
      {
        q: "O que precisamos de ter para começar?",
        a: "Clareza sobre o objectivo e uma pessoa com poder de decisão. No arranque são necessários: a descrição do negócio e dos serviços, uma ideia do público, exemplos de sites de que gosta e de que não gosta, com a explicação do porquê. Depois, o conteúdo: textos, fotografias, logótipo e identidade, se existirem, e os dados dos produtos para o catálogo. Se não houver conteúdo, diga-o desde já: ajudamos com a estrutura dos textos e indicamos que sessão fotográfica é necessária, mas incluímos isso no plano. Esperar em silêncio por materiais é a causa mais frequente de derrapagem de prazos.",
      },
      {
        q: "Fazem sites em construtores?",
        a: "Em regra, não. Escrevemos código em Next.js e React, porque isso dá velocidade de carregamento, liberdade na mecânica e controlo total sobre o projecto. O construtor justifica-se num cenário: quando é preciso testar em poucos dias a procura por um serviço novo com um investimento mínimo. Se o seu caso for esse, dizemo-lo com franqueza e não lhe vendemos um desenvolvimento de raiz. Quando a hipótese se confirmar, o protótipo montado no construtor será um bom caderno de encargos para um site a sério.",
      },
      {
        q: "Garantem o primeiro lugar nos resultados de pesquisa?",
        a: "Não, e ninguém pode garantir isso com honestidade. As posições dependem da concorrência do sector, da idade do domínio, das ligações externas, do comportamento dos visitantes e de algoritmos que mudam sem a nossa participação. Respondemos pela parte técnica, que está na nossa esfera de controlo: velocidade de carregamento, estrutura limpa de títulos, meta-tags únicas, mapa do site, marcação, páginas autónomas para pesquisas concretas e analítica ligada. É a fundação sem a qual a promoção não funciona de todo. Depois disso são precisos conteúdo e tempo — e dizemos isto antes de assinar o contrato.",
      },
      {
        q: "Fazem manutenção do site depois do lançamento?",
        a: "Sim, mas é um acordo à parte, não uma condição automática. Depois da entrega mostramos como alterar textos e imagens autonomamente e deixamos um manual curto — a muitos clientes isso chega. Se for necessário trabalho regular, contratamos acompanhamento: actualização de dependências, pequenos ajustes, novas secções, apoio com analítica e conteúdos. Os erros que resultem de falha nossa e sejam detectados depois do lançamento são corrigidos dentro do período de garantia fixado no contrato. As condições e o âmbito do acompanhamento são discutidos juntamente com o orçamento, antes do arranque dos trabalhos.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     VISUALIZAÇÃO 3D E MOTION DESIGN
     ══════════════════════════════════════════════════════════════ */
  "3d-vizualizaciya": {
    h1: "Visualização 3D e motion design por encomenda",
    lead:
      "O 3D mostra o que ainda não existe: o produto antes da tiragem, o edifício antes da obra, a cena que é impossível fotografar. Montamos estas imagens por inteiro — do modelo e dos materiais à luz e à animação — e entregamo-las em formatos prontos para impressão, site e redes sociais.",

    sections: [
      {
        h2: "O que visualizamos",
        paragraphs: [
          "Produto. Render de embalagem, frasco, dispositivo ou mobiliário, quando não há nada para fotografar ou fotografar sai caro: a tiragem ainda não foi impressa, existe uma única amostra, e a ficha de produto tem de arrancar agora. De um modelo já construído sai um número ilimitado de ângulos, fundos e variantes de acabamento — incluindo aqueles que num estúdio obrigariam a montar tudo de novo de cada vez.",
          "Arquitectura, interiores e espaço público. Um edifício, uma praça, um parque, uma fonte, uma entrada — tudo o que é preciso mostrar ao cliente, ao investidor ou a uma comissão antes de começarem os trabalhos. Aqui a luz e os materiais são especialmente importantes: são eles que distinguem uma visualização convincente de uma imagem cuidada mas plastificada, em que ninguém acredita.",
          "Motion e grafismo para redes sociais e site. Vídeos curtos com rotação do produto, decomposição nas suas peças, separadores e transições animadas, cenas 3D no próprio navegador. Este tipo de conteúdo segura a atenção onde uma imagem estática é ignorada, e pode ser recortado para plataformas diferentes sem voltar a produzir tudo.",
        ],
      },
      {
        h2: "Como se constrói o trabalho sobre uma cena",
        paragraphs: [
          "Primeiro, as referências e o acordo sobre o que vamos afinal mostrar. Precisamos de desenhos técnicos, medidas, amostras de materiais, fotografias do objecto ou da embalagem reais, especificações. Quanto mais precisos forem os dados iniciais, menos rondas de alterações são necessárias: um tom de plástico escolhido «a olho» tem quase sempre de ser mudado, e reconfigurar um material depois do render final custa tempo.",
          "Segue-se a modelação e a composição em bruto. Nesta fase mostramos a cena a cinzento, sem materiais: geometria, ângulo, enquadramento. É aqui que é preciso aprovar — mudar o ponto de câmara na versão a cinzento demora minutos, mas depois de a luz e os materiais estarem configurados significa recalcular a cena inteira.",
          "Depois, os materiais, a luz e o render. Configuramos superfícies, reflexos, fontes de luz e profundidade de campo — o que cria a sensação de realidade. Terminado o cálculo, entra a pós-produção: cor, contraste, limpeza de artefactos. Na animação acrescenta-se, entre estas fases, o trabalho sobre o movimento da câmara e dos objectos, que também é aprovado no cálculo em bruto, antes do render final.",
        ],
      },
      {
        h2: "3D em vez de fotografia: quando se justifica",
        paragraphs: [
          "O 3D ganha quando não há fisicamente nada para fotografar. O produto ainda está em produção, o edifício não está construído, o parque existe apenas em projecto. Nenhuma fotografia ajuda aqui, e a decisão — uma aprovação, uma venda, um investimento — tem de ser tomada já, antes do investimento na produção ou na obra.",
          "O segundo caso é quando há muitos objectos e são do mesmo tipo. A cena construída funciona como uma linha de montagem: muda-se o rótulo, a cor, o volume do frasco — o resto mantém-se. Para uma gama de vinte referências isto sai bastante mais barato e mais previsível do que dois dias de estúdio a remontar a luz para cada referência, e o resultado é garantidamente uniforme na luz e no ângulo.",
          "Mas o 3D não é uma solução universal, e dizemo-lo com franqueza. Comida real, tecido em movimento, pessoas, a atmosfera de um lugar — tudo isso costuma ser mais barato e mais convincente fotografar. Um único objecto simples sobre fundo branco também é normalmente mais fácil de fotografar. Se, para o seu caso, a fotografia for a opção lógica, é isso que dizemos, mesmo que reduza a encomenda.",
        ],
      },
      {
        h2: "Formatos de entrega e prazos",
        paragraphs: [
          "As imagens estáticas são entregues em alta resolução, adequada a impressão, e em versões aligeiradas para site e redes sociais — já nas proporções necessárias, sem cortar o que importa nas margens. A pedido, guardamos ainda a imagem com fundo transparente, para que o objecto possa ser colocado sobre qualquer base sem a nossa intervenção.",
          "A animação é entregue nas resoluções e proporções acordadas: horizontal para site e apresentações, vertical para stories e vídeos curtos. Entregamos o ficheiro-mestre em alta qualidade e as versões comprimidas para publicação. Se estiverem previstas localizações ou substituição de legendas, isso é acautelado à partida — refazer a composição do texto num vídeo já concluído é mais difícil do que prever a camada desde o início.",
          "O prazo depende da complexidade da geometria, do número de ângulos e da qualidade dos materiais de origem. Uma única imagem de produto faz-se em alguns dias; uma série de cenas ou uma animação leva bastante mais tempo. Contamos à parte o tempo de cálculo: o render demora o que tem de demorar, e isso não acelera por vontade. O calendário exacto e o âmbito do trabalho indicamo-los depois de um briefing curto com referências.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Imagens em alta resolução",
        note: "Ficheiros adequados a impressão e versões aligeiradas para o site — nas proporções certas para cada plataforma.",
      },
      {
        ru: "Imagens com fundo transparente",
        note: "PNG com canal alfa, para que o objecto possa ser colocado sobre qualquer base sem recorrer a nós.",
      },
      {
        ru: "Animação e vídeos",
        note: "Ficheiro-mestre em alta qualidade mais versões comprimidas em formato horizontal e vertical.",
      },
      {
        ru: "Ângulos adicionais",
        note: "A partir da cena já construída, novos pontos de vista e variantes de acabamento fazem-se mais depressa do que a primeira imagem.",
      },
      {
        ru: "Cena de origem",
        note: "Modelo, materiais e configuração de luz — entregues mediante acordo, discutido antes do arranque.",
      },
      {
        ru: "Direitos de utilização",
        note: "Os direitos sobre as imagens e os vídeos finais passam para o cliente por contrato.",
      },
    ],

    steps: [
      {
        title: "Briefing e referências",
        text: "Reunimos o objectivo e os materiais: desenhos técnicos, medidas, amostras, fotografias, especificações. Combinamos o que exactamente mostramos e a partir de que ângulos.",
      },
      {
        title: "Modelação",
        text: "Construímos a geometria do objecto ou da cena a partir das medidas reais. A precisão aqui determina se a imagem vai parecer credível.",
      },
      {
        title: "Composição em bruto",
        text: "Mostramos a cena a cinzento, sem materiais: ângulo, enquadramento, composição. Aprova-se aqui — mudar a câmara mais tarde é mais caro.",
      },
      {
        title: "Materiais e luz",
        text: "Configuramos superfícies, reflexos e iluminação — a fase em que a imagem deixa de parecer feita por computador.",
      },
      {
        title: "Render e pós-produção",
        text: "Calculamos a cena, limpamos artefactos e afinamos a cor e o contraste. Na animação acrescenta-se o trabalho sobre o movimento da câmara e dos objectos.",
      },
      {
        title: "Entrega dos ficheiros",
        text: "Reunimos as versões para todas as plataformas, entregamos os materiais e formalizamos a transmissão dos direitos sobre as imagens e os vídeos finais.",
      },
    ],

    faq: [
      {
        q: "Quanto custa uma visualização 3D?",
        a: "O valor resulta da complexidade da geometria, do número de ângulos, das exigências quanto aos materiais e de haver ou não animação. Uma imagem de um objecto simples e a visualização de um espaço público com paisagem, vegetação e água são trabalhos de dimensões muito diferentes, e por isso não publicamos um número único. Envie-nos a descrição do objecto, referências do resultado que pretende e indique o destino das imagens: impressão, site, redes sociais ou apresentação a investidores. Em resposta recebe um orçamento com o âmbito do trabalho e o prazo por fases, incluindo o tempo de cálculo da cena.",
      },
      {
        q: "Quanto tempo demora o trabalho?",
        a: "Uma única imagem de produto faz-se normalmente em alguns dias; uma série de cenas ou uma animação leva bastante mais tempo. O prazo compõe-se da modelação, da configuração de materiais e luz, do próprio cálculo e da pós-produção. O render conta à parte: ocupa o seu tempo de máquina, e isso não acelera por a tarefa ser prioritária. O que acelera mesmo o processo são materiais de origem precisos: desenhos com medidas, códigos de cor, amostras de superfícies. O calendário exacto indicamo-lo depois do briefing com referências — antes disso, o prazo seria adivinhado a esmo.",
      },
      {
        q: "Quantas alterações estão incluídas?",
        a: "O número de iterações fica fixado no contrato e distribuído pelas fases. As alterações na composição em bruto — ângulo, enquadramento, composição — estão incluídas no trabalho e são bem-vindas: é aí que sai mais barato introduzi-las. As alterações depois do render final são possíveis, mas cada uma implica recalcular a cena, pelo que pedimos atenção às fases intermédias. Trocar o próprio objecto — outro modelo de embalagem, outra planta do espaço — não é uma alteração, é um trabalho novo, e chamamos-lhe isso desde logo, antes de começar.",
      },
      {
        q: "A quem pertencem os direitos sobre as imagens?",
        a: "Os direitos sobre as imagens e os vídeos finais passam para o cliente por contrato: pode usá-los em publicidade, em marketplaces, em impressão e em apresentações, sem limite de prazo. A entrega da cena de origem — modelo, materiais e configuração de luz — é tratada à parte. É possível, mas discute-se antes do arranque, porque influencia o âmbito do trabalho. Ao estúdio fica o direito de mostrar o resultado no portefólio; se o objecto for confidencial ou ainda não tiver chegado ao mercado, adiamos a publicação até à sua autorização ou não a fazemos.",
      },
      {
        q: "O que precisamos de ter para começar?",
        a: "Dados de origem tão precisos quanto possível. Para um produto: medidas, planificação da embalagem em vectorial, códigos de cor, amostras de materiais ou a sua descrição detalhada, fotografias de uma amostra real de vários lados. Para arquitectura e espaço público: desenhos técnicos, plantas, cortes, especificação de pavimentos e de plantação. Envie ainda referências: imagens cuja luz e atmosfera lhe agradem. Se faltarem alguns dados, diga-o desde já — ou escolhemos um equivalente e confirmamo-lo consigo, ou reservamos tempo para esclarecer, mas não inventamos em silêncio.",
      },
      {
        q: "Em que é que o 3D é melhor do que a fotografia?",
        a: "Não é melhor nem pior — é mais adequado em determinados casos. O 3D é insubstituível quando não há nada para fotografar: o produto ainda não foi fabricado, o edifício não está construído, o parque existe apenas em projecto. Ganha também em gamas extensas de referências semelhantes: a cena já construída permite mudar o rótulo, a cor ou o volume sem voltar a fotografar, mantendo a mesma luz e o mesmo ângulo. Mas comida real, tecido em movimento, pessoas e a atmosfera de um lugar são quase sempre mais convincentes e mais baratos em fotografia. Se o seu caso for desta segunda categoria, dizemo-lo directamente.",
      },
      {
        q: "Fazem animação e motion?",
        a: "Sim. Pode ser a rotação de um produto, a decomposição de um objecto nas suas peças, o sobrevoo de um edifício ou de um terreno, separadores e transições animadas para o site e para as redes sociais. O trabalho decorre como numa imagem estática, mas acrescenta-se a fase de movimento: as trajectórias da câmara e dos objectos são aprovadas no cálculo em bruto, antes do render final. Entregamos o ficheiro-mestre e as versões comprimidas em formato horizontal e vertical. Se o vídeo estiver previsto em várias línguas ou com legendas diferentes, diga-o antecipadamente — isso é acautelado na estrutura do projecto logo no arranque.",
      },
      {
        q: "É possível obter mais ângulos depois?",
        a: "Sim, e essa é uma das principais vantagens práticas do 3D. Enquanto a cena estiver montada, um novo ângulo, outro fundo ou outra variante de acabamento fazem-se bastante mais depressa e por menos do que a primeira imagem — não é preciso voltar a construir o modelo nem a configurar os materiais. Guardamos os ficheiros de trabalho do projecto e podemos regressar a eles mais tarde, quando forem precisos formatos novos para um marketplace, para publicidade exterior ou para uma gama actualizada. As imagens adicionais são orçamentadas à parte e ficam sempre abaixo do valor inicial — o volume de trabalho é aí substancialmente menor.",
      },
    ],
  },
};

export default pt;
