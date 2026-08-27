/**
 * English copy for the commercial landing pages /uslugi/*.
 *
 * Mirrors the arrays in src/data/UslugiData.js by index — the loader merges
 * on position, so the order and the length of every array must match the source.
 *
 * Deliberately preserved from the original:
 *  • no prices and no figures anywhere — the price list is an internal document,
 *    and every page invites a brief instead of quoting a number;
 *  • no invented clients, cases, awards or testimonials;
 *  • no guarantees, no promised search rankings, no deadlines the studio
 *    has not actually offered.
 */

const en = {
  /* ══════════════════════════════════════════════════════════════
     LOGO
     ══════════════════════════════════════════════════════════════ */
  logotip: {
    h1: "Custom logo design",
    lead:
      "A logo is not a picture, it is a working tool. It has to hold up in an email signature and on a shopfront, in a single colour and in embroidery. We design marks that survive all of those surfaces, and we hand them over as source files together with the rules for using them.",

    sections: [
      {
        h2: "What logo design involves",
        paragraphs: [
          "A logo is a system, not a single file. We start with a brief and a conversation: how the company makes its money, who it sells to, who it gets confused with, and where the mark will spend most of its life — in a mobile app, on packaging, on a building. The answers shape the form directly, because a mark built for an app icon and a mark built to be engraved in metal follow different rules.",
          "Next comes a look at the category. We study how competitors present themselves and search for territory that lets you stand apart rather than blend in. Then we sketch, and we present two or three directions worked up to a finished standard. Not twenty options: twenty options mean the answer has not been found and the burden of choosing has quietly been handed to the client.",
          "The chosen direction is taken through to a final mark: proportions, optical correction, behaviour at small sizes, clear space, monochrome and reversed versions. You end up with a set of files and a short set of rules, so the logo can go to a printer, a signage contractor or a new marketing hire without us in the room.",
        ],
      },
      {
        h2: "How we work on a mark",
        paragraphs: [
          "The first sketches are drawn by hand, not picked from a stock library. We deliberately discard the obvious — the first ideas are almost always the ones that already occurred to you and to your competitors — and keep working until a form appears that has a reason to look the way it does. That reason is something we can then explain in words, rather than falling back on \"it looks better this way\".",
          "Every direction is shown in context rather than on a blank page: on a business card, as a messenger avatar, on a sign, on packaging. A mark that looks superb in a presentation often falls apart on a real surface — it loses legibility at sixteen pixels, or it disappears in a single colour. Better to find that out before sign-off than at the print run.",
          "We discuss the work in terms of the task, not taste. \"I like it\" and \"I don't\" are information too, but we ask what exactly is bothering you: the mark feels heavy, or cold, or points in the wrong direction, or looks like a chain business. That kind of note can be worked with. An abstract \"not quite right\" cannot, and we say so plainly.",
        ],
      },
      {
        h2: "What you receive",
        paragraphs: [
          "The final logo is delivered as vector artwork, which means it holds its quality on a business card and on a ten-metre banner alike. Alongside it come raster versions for social media and documents, a favicon for the website, a version for dark backgrounds, and a monochrome version for foil stamping, engraving and embroidery.",
          "The files come with a short guide: minimum size, clear space, permitted and prohibited uses, and colour values in RGB, CMYK and Pantone. That is enough to stop a print supplier or a new colleague from damaging the mark by accident — stretching it horizontally, say, or dropping it onto a busy background.",
          "Exclusive rights to the approved logo pass to you, and this is set out in the contract. The studio retains only the right to show the work in its portfolio. If the project is under NDA or has not launched yet, we postpone publication until you agree to it, or skip it altogether — something we settle at the start rather than after the fact.",
        ],
      },
      {
        h2: "Timelines and what affects them",
        paragraphs: [
          "Designing a mark usually takes between two and four weeks. The main variable is not how fast we draw but how fast feedback comes back from your side. If it takes a week to gather comments from everyone with a stake in the decision, the schedule moves by exactly that week, and no amount of internal efficiency on our end makes it up.",
          "One specific thing speeds the work up: appoint a person who makes the final call. A committee of five voices does not choose the best mark — it chooses the one that annoys nobody, which is almost always the palest of the options. Collecting opinions is useful; deciding by majority is not.",
          "What slows things down is a change of inputs halfway through. If the name, the product or the audience changes after a direction has been approved, we go back to the sketching stage. That happens, and it is more honest to call it what it is than to pass it off as a cosmetic tweak. We give you an exact timeline and scope of work after a short brief — before that, any figure would be invented.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Vector logo",
        note: "SVG, AI and PDF. Scales from an app icon to a building sign with no loss of quality.",
      },
      {
        ru: "Raster versions",
        note: "Transparent PNGs at several sizes, a favicon for the site, and avatars sized for social media and messengers.",
      },
      {
        ru: "Monochrome and reversed",
        note: "A single-colour version and a version for dark backgrounds — for print, foil stamping, engraving and embroidery.",
      },
      {
        ru: "Short usage guide",
        note: "Clear space, minimum size, RGB / CMYK / Pantone colour values, and a list of what must never be done to the mark.",
      },
      {
        ru: "Editable source files",
        note: "Layered artwork, so you are not tied to one supplier and can hand the project on to anyone.",
      },
      {
        ru: "Transfer of rights",
        note: "Exclusive rights to the approved mark pass to the client under the contract.",
      },
    ],

    steps: [
      {
        title: "Brief and inputs",
        text: "A conversation of 40 to 60 minutes plus a short questionnaire: the task, the audience, the surfaces, what appeals and what is out of the question. We write up the outcome, so that a month later there is no argument about what was agreed.",
      },
      {
        title: "Category analysis",
        text: "We look at competitors and adjacent markets and identify visual territory worth occupying. You get a short summary at this point, while changing direction is still cheap.",
      },
      {
        title: "Sketches and directions",
        text: "We draw options by hand, select two or three that hold up, and work them into finished presentations — shown on real surfaces from the outset rather than on a blank page.",
      },
      {
        title: "Refining the chosen route",
        text: "We tune proportions, optical balance, behaviour at small sizes and colour. Revisions run in rounds, and their number is agreed in the contract in advance.",
      },
      {
        title: "Handover and rights",
        text: "We assemble the files, write the short guide, hand over the source artwork and complete the transfer of rights. After that we stay reachable for questions from your print and signage suppliers.",
      },
    ],

    faq: [
      {
        q: "What does a logo cost?",
        a: "It depends on the scope: whether you need the mark alone or the surfaces around it, how many directions we present, whether competitor analysis is required, and whether files need preparing for trademark registration. That is why we do not publish a price list — a figure detached from the task misleads you as much as it misleads us. Send a short brief, or simply write a couple of paragraphs: what the company does, where the mark will live, and when you need it. We will come back with an estimate setting out the scope and the timing stage by stage, so you can see what you are paying for and what can be dropped without hurting the result.",
      },
      {
        q: "How long does the work take?",
        a: "Usually two to four weeks from signing to file handover. The spread has nothing to do with how complicated the drawing is and everything to do with the number of approvals on your side and how quickly answers come back. We plan the work in stages and tell you in advance which days we are waiting on a decision from you: if the answer does not arrive on those days, the schedule shifts by the same amount. A faster track is possible if we discuss it before the start and can clear the necessary days for the project. You get the exact schedule together with the estimate after the brief — before that, any date would be guesswork.",
      },
      {
        q: "How many revisions are included?",
        a: "The number of rounds is set out in the contract before we begin, so that revisions do not turn into an open-ended process. Typically that means several rounds at the direction stage and several more while refining the chosen mark — enough for the overwhelming majority of projects. Revisions within an agreed direction are part of the work. Going back to sketching after a direction has been signed off is a new stage, and we call it a new stage rather than dressing it up as a free tweak. Fewer rounds are needed when comments are gathered from everyone involved at once, rather than arriving one a day.",
      },
      {
        q: "Who owns the result?",
        a: "Exclusive rights to the approved logo pass to the client — this is written into the contract, and the files come with the paperwork confirming the transfer. You can use the mark with no limits on territory or duration, change suppliers, and register it as a trademark. We retain only the right to show the work in our portfolio and in professional communities. If the project is confidential or has not launched yet, we postpone publication until you permit it, or skip it entirely — agreed at the start, not decided retrospectively.",
      },
      {
        q: "What do you need from us to begin?",
        a: "At minimum, answers to the brief and one person on your side with the authority to decide. The brief asks about the product, the audience, competitors and surfaces, and about what is categorically wrong for you: a list of \"no\" saves more time than a list of \"yes\". Anything you already have is useful — copy about the company, photographs, old artwork, links to competitors. If none of that exists, it is not a problem; we will work through it on a call. From then on all we need is timely answers at the approval points; the rest is on us.",
      },
      {
        q: "Do you register trademarks?",
        a: "Registration is handled by a trademark attorney — a separate legal profession, and we do not pretend to it. Our part is technical: we prepare the artwork in the required formats and help you articulate exactly what is being filed. On request we can check open databases for obvious matches, but such a check is not a legal opinion and does not guarantee registration. If you do not have an attorney, we can point you towards someone worth approaching and supply the files in the form they are usually asked for.",
      },
      {
        q: "What if none of the directions appeal?",
        a: "It happens, and the cause is usually not the drawing but a task that was framed imprecisely. That is why we show directions early rather than at the finish line — while changing course is still inexpensive. If nothing lands, we go back to the brief and work out where things diverged: the audience, the tone, the associations. Then we run a fresh round of sketches; the terms for that are written into the contract in advance, not improvised over email. We do not promise that the first presentation always hits the mark, but we do promise not to pretend it did.",
      },
      {
        q: "Do you work with companies outside Moscow?",
        a: "Yes. The studio is based in Moscow, but the process is entirely remote: briefing and discussions happen over video, work in progress is shared in a common document, and files are delivered by link. Geography affects neither the timeline nor the scope. With clients in other time zones we agree a window for calls in advance, so approvals do not stretch out by an extra day each time. If you would rather meet in person in Moscow, that is possible too, but it is not required at any stage.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     BRANDING AND VISUAL IDENTITY
     ══════════════════════════════════════════════════════════════ */
  brending: {
    h1: "Branding and visual identity design",
    lead:
      "A visual identity is the set of decisions that let people recognise you before they have read the name. We build that system end to end: from positioning and the logo through to applications, templates, and the rules your own team can run it by.",

    sections: [
      {
        h2: "What a visual identity is and why a business needs one",
        paragraphs: [
          "A visual identity is not a collection of attractive pictures; it is a way of conserving your customer's attention. When the website, the sign, the packaging, the deck and the social feed all read as one organism, nobody has to work out who you are afresh at every encounter. Recognition accumulates, and each further contact costs the company less than the last.",
          "The opposite situation is more common: one supplier drew the logo, another built the site, a manager assembles decks in whatever software is to hand, and a third person runs social media. Everything technically exists, yet nothing is recognisable, and the advertising budget spins its wheels. This is precisely the problem an identity solves — it sets a frame within which any new application comes out looking like yours.",
          "That is why we almost always start with positioning rather than drawing: what the company actually sells, to whom, how it differs from its neighbours, and in what words it says so. Without that, identity becomes a matter of taste — and falls apart at the first meeting where everyone has their own idea of what looks good.",
        ],
      },
      {
        h2: "How we work on a brand",
        paragraphs: [
          "The first stage is research and conversation. We study the market, look at direct competitors and at adjacent categories, and examine how the company presents itself today and what in that is working. The most valuable material often comes out of interviews with staff: the way the sales team explains the product to a customer is usually more precise than any mission statement.",
          "We then set out the brand platform in plain language: the essence, the difference, the tone, the promise. It is a short document rather than a forty-page volume, because it has to be genuinely used. The visual language is built on top of it: the mark, the palette, the typography, layout principles, graphic elements, and the approach to photography and illustration.",
          "The system is then tested on applications. We do not produce abstract examples but the ones you actually need: packaging, signage, staff uniform, templates for decks and posts, documents, the fit-out of a point of sale. This is exactly the stage where it becomes clear where the system is too rigid to bend and where it is short of options — and we refine the rules before handover rather than after.",
        ],
      },
      {
        h2: "Rebranding: when it is genuinely needed",
        paragraphs: [
          "A rebrand is worth undertaking when the visual image is getting in the business's way: the company has grown and now sells to a different customer, the price and positioning have changed, new lines have appeared that the old system cannot hold, or the identity is so dated that it reads as a lack of self-respect. These are substantive reasons, and design can address them.",
          "\"We're bored of it\" and \"the competition looks bolder\" are poor grounds. Changing an identity wipes out part of the recognition you have accumulated, and you have to earn it back. Sometimes the honest answer to a rebranding enquiry is that what needs changing is not the logo but the website, the photography or the tone of communication. We say so directly, even when it shrinks the size of the job.",
          "If a change really is needed, we discuss its depth separately. The evolutionary route preserves recognition while modernising the execution: the same meanings, a contemporary delivery. The revolutionary route suits a change of business model or a deliberate break with a damaged past. The choice affects both the budget and the transition plan: old applications do not vanish overnight, and the order in which they are replaced has to be planned in advance.",
        ],
      },
      {
        h2: "What you receive and what affects the timeline",
        paragraphs: [
          "You end up with the logo in all its versions, a colour and typographic system, graphic elements, artwork for the agreed applications, templates for recurring tasks, and a brand book — a document of rules with examples. Everything comes as source files: layered artwork, and licensed fonts or links to them, ready to pass to any supplier.",
          "We write the brand book as an instruction manual for a person, not as an album for the shelf. It answers the questions that actually come up: how much clear space the logo needs, which typeface to use in Word documents, what to do when the background is busy, how to lay out a post and how to lay out a proposal. The clearer those rules, the longer the system survives without us.",
          "The timeline depends on scope: an identity for a small company comes together in a few weeks, while full branding with research and dozens of applications runs to months. The schedule is affected most by the speed of approvals and the completeness of the inputs — if the list of applications keeps growing, the plan moves. We fix the scope, the stages and the timing in an estimate after a short brief.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "Brand platform",
        note: "A short document: the essence, the difference from competitors, the tone and the promise — written in language you can actually use.",
      },
      {
        ru: "Logo and its versions",
        note: "The primary mark, horizontal and compact lock-ups, monochrome and reversed — in vector and raster.",
      },
      {
        ru: "Visual system",
        note: "Palette with colour values, typography, grids, graphic elements, and principles for photography and illustration.",
      },
      {
        ru: "Application artwork",
        note: "Whatever you actually need: packaging, print, signage, uniform, interior fit-out, documents.",
      },
      {
        ru: "Templates for your team",
        note: "Decks, posts, proposals — files your team fills in without a designer.",
      },
      {
        ru: "Brand book and source files",
        note: "Rules with \"do\" and \"don't\" examples, layered working files, and fonts with licences or links.",
      },
    ],

    steps: [
      {
        title: "Brief and immersion",
        text: "We get to grips with the business: the product, the audience, the sales channels, the plans for the year. We talk not only to the founder but to the people who sell and who serve the customer.",
      },
      {
        title: "Market research",
        text: "We look at competitors and adjacent categories, assemble a visual survey of the sector and search for unoccupied territory. You see the conclusions before anything is drawn.",
      },
      {
        title: "Brand platform",
        text: "We set out the essence, the difference and the tone in plain language and agree them. This becomes the foundation for every visual decision that follows.",
      },
      {
        title: "Identity",
        text: "We develop the mark, the palette, the typography and the graphic language. Directions are presented on real applications rather than against a white background.",
      },
      {
        title: "Applications and templates",
        text: "We roll the system out across the agreed list of applications and build the templates your team will use on its own.",
      },
      {
        title: "Brand book and handover",
        text: "We write the rules, assemble the source files, hand everything over and run a session with your team so that the system is understood and can be maintained.",
      },
    ],

    faq: [
      {
        q: "What does a visual identity cost?",
        a: "The range is wide, because \"visual identity\" means different things to different companies: one needs a mark and a minimal set of applications, another needs market research, a brand platform, packaging, a fitted-out point of sale and a brand book. Publishing a single figure to cover all of that would be dishonest. Write and tell us what the company does, what already exists, and which applications you will need over the coming year — we will come back with an estimate broken down by stage. An estimate like that shows what is worth doing now and what can wait for the next step without any loss.",
      },
      {
        q: "How long does branding take?",
        a: "A compact identity for a small company comes together in a few weeks. Full branding with research, a platform, a broad set of applications and a brand book runs to months — a normal timeline for work whose result lasts for years. We break the project into stages with clear acceptance points, so you see progress continuously instead of waiting blindly for a final presentation. The schedule is drawn up after the brief and depends on the number of applications and on how quickly approvals move on your side.",
      },
      {
        q: "How many revisions are included?",
        a: "The number of rounds at each stage is set out in the contract before we begin. Within an agreed direction, revisions are part of the work — a normal part of the process, not a favour. Returning to a previous stage after it has been signed off counts as separate work, and we say so plainly rather than letting it dissolve into an email thread. In practice fewer rounds are needed when comments are collected from everyone involved at once and when one person holds the final decision. We ask you to appoint that person on the very first call.",
      },
      {
        q: "Who owns the identity?",
        a: "Exclusive rights to the approved artwork and mark pass to the client under the contract — you may use them without restriction, develop them further and hand them to other suppliers. Fonts are addressed separately: if the system uses commercial typefaces, the licence is purchased in your company's name, and we tell you in advance exactly which licence is needed. Illustrations and photographs created during the project are handed over with everything else. The studio retains the right to show the work in its portfolio — on a confidential project, publication is postponed or does not happen at all.",
      },
      {
        q: "What do you need from us to begin?",
        a: "Answers to the brief, access to a few people for short interviews, and one person with the authority to make the final call. Anything that already exists is useful: current artwork, photographs, copy, decks, sales data, and a list of the competitors you consider strong. We will also ask you to set out which applications you will need over the coming year, since that drives both the scope and the price. If that list is still vague, we will build it together on the first call: that is part of the work, not homework for you.",
      },
      {
        q: "How does a brand book differ from a guideline?",
        a: "A guideline describes the visual rules: how the logo is constructed, which colours and typefaces to use, what the spacing is, what must never be done to the mark. It is a technical document for designers and suppliers. A brand book is broader: alongside the visual part it explains the meaning — who you are, who you are for, how you differ, what language you speak. A small company is usually well served by a careful guideline and a set of templates; a full brand book is needed where many people work on the brand and decisions are taken across different departments. We propose the format that fits the task, not the one that fits a price list.",
      },
      {
        q: "Can the identity be refreshed without changing the logo?",
        a: "Yes, and quite often that is the most sensible answer. The logo is the most inert part of the system: it is already on signage, on documents and in customers' memories. Meanwhile the palette, the typefaces, the layout, the photography and the social media presentation are what date — and they are what creates the sense of age. We can keep the mark and rebuild everything around it, including, where necessary, careful technical refinement of the logo itself without altering its form. At the brief we will work out what is serving you and what is holding you back, and propose the smallest intervention that makes a difference.",
      },
      {
        q: "Who runs the identity after the project ends?",
        a: "We build the system so your own team can run it: templates, rules people can follow, and a handover session where we go through the document with the people who will use it. From there, two scenarios are possible. In the first you work independently and we answer questions as they arise. In the second we take on ongoing support: new applications, seasonal materials, help for your suppliers. The second is arranged separately and is not a condition of anything — a system should not break simply because you decided to carry on without us.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     WEB DEVELOPMENT
     ══════════════════════════════════════════════════════════════ */
  "sozdanie-saytov": {
    h1: "Custom website development",
    lead:
      "We build websites that are written in code rather than assembled from the blocks of a site builder. Design, front-end, animation and technical optimisation all sit inside one team, so the person responsible for load speed and behaviour on a phone is the same person who drew the layout.",

    sections: [
      {
        h2: "The kinds of sites we build",
        paragraphs: [
          "A landing page suits one service, one offer and one clear goal: an enquiry, a booking, a call. The page is built around a single action, and everything on it either leads towards that action or removes an objection standing in its way. Extra sections do not add credibility here; they dilute attention.",
          "A corporate site is what you need when there are several services, several audiences, and it matters that each audience finds its own through search. Structure appears: separate service pages, a portfolio, a blog, an about page. Those sections matter to people and to search engines alike — engines rank pages rather than whole sites, and one catch-all \"Services\" page loses to four precise ones.",
          "An online store or catalogue is a different class of problem: the product card, filters, stock, the basket, payment, data exports. Here design follows the logic of the product range rather than the other way round. We also build internal screens for staff — admin panels, kitchen dashboards, order interfaces — because a website often turns out to be only the entrance to a system that people use every day.",
        ],
      },
      {
        h2: "How the process works",
        paragraphs: [
          "We start with the task, not the sitemap. We need to understand who arrives on the site, what they should do, and what is stopping them from doing it today. From those answers we assemble the structure and a wireframe: the arrangement of blocks, without colour or polish. A wireframe is faster and cheaper to approve — at that stage moving a section takes ten minutes rather than two days.",
          "Then design. We draw the key screens in desktop and mobile versions at the same time: more than half of traffic arrives from a phone, and \"we'll adapt it later\" is a reliable way to end up with an awkward site. In parallel we work out the motion: animation here is not decoration but a way of showing how screens connect and of holding attention where it is needed.",
          "Then development. We write the code in Next.js and React, connect forms, analytics and the integrations you need, and check speed and behaviour on real devices. We hand over with access to everything: repository, hosting, domain, admin panel. A client should never end up hostage to a supplier — that is a principle, not an option.",
        ],
      },
      {
        h2: "Why we write code instead of using a site builder",
        paragraphs: [
          "A site builder is a perfectly good tool for testing a hypothesis: over a weekend you get a page and find out whether there is demand. The problems start later. A template drags along code you do not need, and that hits load speed directly — and speed is a ranking factor for Google and Yandex, as well as deciding whether a visitor waits for the page at all.",
          "The second limit is the ceiling. Any non-standard mechanic, complex animation, unusual product card or integration with your accounting system runs into the fact that the builder simply cannot do it. Working around it with third-party widgets holds until the platform's next update. Your own code has no such boundary: we build exactly what the project requires.",
          "The third is control. A site on a builder lives by the platform's rules: its pricing, its restrictions, its level of access to the markup, and its fate if the service shuts down. A site on Next.js is your repository, which can be moved to any host and handed to any developer. We give you the code in full and do not tie you to us technically.",
        ],
      },
      {
        h2: "What you receive",
        paragraphs: [
          "A working site with responsive layout, tested in current browsers and on real phones. The technical SEO groundwork is in place: unique page titles and descriptions, canonical URLs, a sitemap, robots.txt, Schema.org markup, correct heading structure and meaningful text on links and images.",
          "We hand over every credential: the source code in the repository, hosting, domain, email, and the content editor if the project has one. We show you on a call how to change text and images, and leave a short set of instructions. Analytics are connected from the start — Yandex.Metrica and Google Analytics — because otherwise, a month later, it is impossible to tell what is happening to your traffic.",
          "We should also say plainly what we do not promise: specific positions in search results, or a specific number of enquiries. Nobody can guarantee those honestly — results depend on competition, domain age, backlinks and user behaviour. We are accountable for what is within our control: speed, clean code, structure aligned to real queries, and a page that is technically ready to be promoted.",
        ],
      },
      {
        h2: "Timelines and what affects them",
        paragraphs: [
          "A landing page usually takes a few weeks, a corporate site noticeably longer, and a store with a catalogue and integrations longest of all. The exact timeline depends not on the number of pages but on the number of unique screens and non-standard mechanics: twenty product cards of the same type are quicker to build than three pages with different logic.",
          "Two things move the schedule more than anything else. The first is content. If copy, photographs and product data arrive piece by piece over a month, the site cannot be finished sooner. We can help with the copy and advise on the photography you need, but material about your business is still produced with your involvement.",
          "The second is integrations with other people's systems: inventory, CRM, a payment provider, a delivery service. The pace there depends on the documentation and on the technical support at the other end, so we build it into the plan honestly, as a separate stage with room to spare. We fix the scope, the stages and the timing in an estimate after a short brief — before the brief, any figure would be guesswork.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "A live site on your own domain",
        note: "Deployed and working: responsive layout, tested in current browsers and on real phones.",
      },
      {
        ru: "Source code",
        note: "The entire repository, with access under your account. The project can be moved and handed to another developer.",
      },
      {
        ru: "Design files",
        note: "Every screen in desktop and mobile versions, with layers and components intact.",
      },
      {
        ru: "Technical SEO groundwork",
        note: "Meta tags, canonical URLs, sitemap.xml, robots.txt, Schema.org markup, semantic heading structure.",
      },
      {
        ru: "Analytics and forms",
        note: "Yandex.Metrica and Google Analytics, and site enquiries delivered to email or a messenger — set up and tested.",
      },
      {
        ru: "Access and instructions",
        note: "Hosting, domain, the content editor, and a short guide to updating text and images.",
      },
    ],

    steps: [
      {
        title: "Brief and objective",
        text: "We work out who arrives on the site, what they should do, and what is stopping them today. We agree a measurable goal for the project.",
      },
      {
        title: "Structure and wireframe",
        text: "We build the sitemap and the arrangement of blocks without colour. Approving a wireframe is faster and cheaper than reworking a finished design.",
      },
      {
        title: "Screen design",
        text: "We draw the key screens in desktop and mobile versions together, and work out the motion and the interface states.",
      },
      {
        title: "Development",
        text: "We write the code in Next.js and React, connect forms, analytics and integrations, and check speed and behaviour on real devices.",
      },
      {
        title: "Testing and launch",
        text: "We go through browsers, phones and user journeys, configure the domain and hosting, publish, and hand over every credential.",
      },
      {
        title: "After launch",
        text: "We show you how to update content, answer questions, and take the project on for ongoing support if you want it.",
      },
    ],

    faq: [
      {
        q: "What does a website cost?",
        a: "The price is driven by the number of unique screens and the complexity of the mechanics, not by the page count. A landing page with a single goal and a store with a catalogue, filters and an inventory integration are jobs of a different order, and a single figure covering both would be meaningless. Describe the task in two or three paragraphs: what the business is, what the visitor should do, which integrations are needed, and whether design and copy already exist. We will come back with a stage-by-stage estimate and point out what can launch as a first version and what can be added later — which gets the project started sooner and for less.",
      },
      {
        q: "How long does development take?",
        a: "A landing page takes a few weeks, a corporate site longer, and a store with a catalogue and integrations longest of all. The timeline comes from the number of unique screens, the non-standard mechanics, and how quickly content arrives. We work in stages with acceptance points — structure, design, development, testing — so you see the result continuously. The schedule is fixed in the estimate after the brief, and it marks out the days when we are waiting on materials or decisions from you: those pauses are usually what moves the launch date.",
      },
      {
        q: "How many revisions are included?",
        a: "Rounds are set out in the contract for each stage — at the wireframe, at the design, and on the finished build. Revisions within an agreed stage are part of the work. Changes that undo a decision already taken — a new structure during the build, for instance — are handled as separate work, because that is a rebuild rather than a refinement. We say so up front rather than sending an invoice afterwards. To keep revisions down we approve the wireframe before design: moving a block in a diagram costs minutes, moving it in finished code costs days.",
      },
      {
        q: "Who owns the site, the code and the credentials?",
        a: "Everything belongs to the client. The source code is delivered to a repository under your account, the domain is registered to you, and the hosting is set up in your name. You receive the design files as editable source. Rights to the result pass under the contract, including the right to develop the project further with other developers — we build in no technical dependencies on ourselves. If the project uses paid fonts, third-party services or libraries with particular terms, we tell you in advance and take out the licences in your company's name rather than the studio's.",
      },
      {
        q: "What do you need from us to begin?",
        a: "A clear understanding of the task and a person with the authority to decide. At the start we need a description of the business and its services, a sense of the audience, and examples of sites you like and dislike with an explanation of why. Then content: copy, photographs, a logo and identity if they exist, and product data for a catalogue. If you have no content, say so straight away: we will help with the copy structure and advise on the photography needed, but we will build that into the plan. Quietly waiting for materials is the single most common cause of a slipped deadline.",
      },
      {
        q: "Do you build sites on site builders?",
        a: "As a rule, no. We write code in Next.js and React because it gives load speed, freedom in the mechanics and full control over the project. A builder is justified in one scenario: you need to test demand for a new service within days and at minimal cost. If that is your situation we will say so honestly rather than selling you development from scratch. Once the hypothesis is confirmed, the prototype you assembled on the builder makes an excellent specification for a proper site.",
      },
      {
        q: "Do you guarantee first place in search results?",
        a: "No, and nobody can guarantee that honestly. Positions depend on competition in your sector, the age of the domain, external links, visitor behaviour, and algorithms that change without our involvement. We are accountable for the technical part that is within our control: load speed, a clean heading structure, unique meta tags, a sitemap, structured data, dedicated pages for specific queries, and analytics that are actually connected. That is the foundation without which promotion does not work at all. Beyond it you need content and time — and we say so before the contract is signed.",
      },
      {
        q: "Do you support the site after launch?",
        a: "Yes, but as a separate agreement rather than an automatic condition. After handover we show you how to change text and images yourself and leave a short set of instructions — for many clients that is enough. If regular work is needed, we set up a support arrangement: dependency updates, small improvements, new sections, help with analytics and content. Faults caused by us and discovered after launch are fixed within the warranty period set out in the contract. The terms and the scope of support are discussed alongside the estimate, before work begins.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     3D VISUALISATION AND MOTION
     ══════════════════════════════════════════════════════════════ */
  "3d-vizualizaciya": {
    h1: "3D visualisation and motion design",
    lead:
      "3D shows what does not exist yet: a product before the print run, a building before construction, a scene that cannot be photographed. We build those images end to end — model, materials, lighting, animation — and deliver them in formats ready for print, the web and social media.",

    sections: [
      {
        h2: "What we visualise",
        paragraphs: [
          "Product. Renders of packaging, a bottle, a device or a piece of furniture, when there is nothing to photograph or photography is too expensive: the print run has not happened, the sample exists as a single unit, and the product listing has to go live now. One finished model yields an unlimited number of angles, backgrounds and design variants — including the ones that would have to be rebuilt from scratch in a studio each time.",
          "Architecture, interiors and landscaping. A building, a square, a park, a fountain, an entrance — anything that has to be shown to a client, an investor or a review board before work begins. Lighting and materials matter especially here: they are what separates a convincing visualisation from a tidy but plastic image nobody believes.",
          "Motion and graphics for social media and the web. Short clips with a product rotating or breaking apart into its components, animated intros and transitions, 3D scenes running directly in the browser. This kind of content holds attention where a still frame gets scrolled past, and it can be recut for different platforms without producing it again.",
        ],
      },
      {
        h2: "How a scene is built",
        paragraphs: [
          "First, references and an agreement on what exactly we are showing. We need drawings, dimensions, material samples, photographs of the real object or packaging, and specifications. The more precise the inputs, the fewer rounds of revisions: a shade of plastic matched by eye will almost always have to be changed, and reworking a material after the final render costs time.",
          "Then modelling and a rough layout. At this stage we show a grey scene without materials: geometry, camera angle, framing. This is the point to sign things off — changing the camera position in a grey scene takes minutes, whereas doing it after lighting and materials are set means recalculating the whole scene.",
          "Then materials, lighting and rendering. We set up surfaces, reflections, light sources and depth of field — the things that create the sense of reality. After the render comes post-production: colour, contrast, cleaning up artefacts. For animation, work on camera and object movement is added between those stages, and that too is approved on a draft render, before the final one.",
        ],
      },
      {
        h2: "3D instead of photography: when it makes sense",
        paragraphs: [
          "3D wins when there is physically nothing to photograph. The product is still in production, the building is not built, the park exists only as a proposal. No photograph can help, and the decision — an approval, a sale, an investment — has to be made now, before money goes into manufacturing or construction.",
          "The second case is a large number of similar objects. A scene that has been built works like a production line: the label, the colour or the volume of a bottle changes and everything else stays. For a range of twenty items that is noticeably cheaper and more predictable than two shoot days spent relighting for each one, and the results are guaranteed to be consistent in light and angle.",
          "But 3D is not a universal answer, and we say so plainly. Real food, fabric in motion, people, the atmosphere of a place — all of these are usually cheaper and more convincing to photograph. A single simple object on a white background is normally easier to shoot as well. If photography is the more logical route for your task, we will say exactly that, even when it means a smaller job.",
        ],
      },
      {
        h2: "Delivery formats and timelines",
        paragraphs: [
          "Still images are delivered at high resolution suitable for print, and in lighter versions for the web and social media — already in the right proportions, with nothing important cropped at the edges. On request we also save an image with a transparent background, so the object can be placed on any backdrop without involving us.",
          "Animation is delivered in the agreed resolutions and aspect ratios: horizontal for the website and presentations, vertical for stories and short video. You get a high-quality master file plus compressed versions for publishing. If localisations or changes of caption are planned, we build that in from the start — re-setting text in a finished clip is harder than allowing for the layer up front.",
          "The timeline depends on the complexity of the geometry, the number of angles and the quality of the source materials. A single product shot takes a few days; a series of scenes or an animation takes noticeably longer. We allow separately for render time: a render takes as long as it takes, and wanting it faster does not help. We give you the exact schedule and scope after a short brief with references.",
        ],
      },
    ],

    deliverables: [
      {
        ru: "High-resolution images",
        note: "Files suitable for print, plus lighter versions for the web — in the right proportions for each platform.",
      },
      {
        ru: "Images with transparent backgrounds",
        note: "PNGs with an alpha channel, so the object can be placed on any backdrop without coming back to us.",
      },
      {
        ru: "Animation and clips",
        note: "A high-quality master file plus compressed versions in horizontal and vertical formats.",
      },
      {
        ru: "Additional angles",
        note: "Once the scene is built, new camera positions and design variants are quicker to produce than the first image.",
      },
      {
        ru: "The scene file itself",
        note: "Model, materials and lighting setup — handed over by arrangement, discussed before the start.",
      },
      {
        ru: "Usage rights",
        note: "Rights to the finished images and clips pass to the client under the contract.",
      },
    ],

    steps: [
      {
        title: "Brief and references",
        text: "We gather the task and the materials: drawings, dimensions, samples, photographs, specifications. We agree exactly what is shown and from which angles.",
      },
      {
        title: "Modelling",
        text: "We build the geometry of the object or scene to real dimensions. Accuracy here decides whether the image looks believable.",
      },
      {
        title: "Rough layout",
        text: "We show a grey scene without materials: angle, framing, composition. This is where you sign off — changing the camera later costs more.",
      },
      {
        title: "Materials and lighting",
        text: "We set up surfaces, reflections and lighting — the stage at which the image stops looking computer-generated.",
      },
      {
        title: "Render and post-production",
        text: "We render the scene, clean up artefacts and finish the colour and contrast. For animation, work on camera and object movement is added.",
      },
      {
        title: "Delivery",
        text: "We assemble versions for every platform, hand over the files and complete the transfer of rights to the finished images and clips.",
      },
    ],

    faq: [
      {
        q: "What does 3D visualisation cost?",
        a: "The price comes from the complexity of the geometry, the number of angles, the demands on materials and whether animation is needed. A single image of a simple object and a landscaping visualisation with terrain, planting and water are jobs of a different size, which is why we do not publish one figure. Send us a description of the object, references for the result you have in mind, and where the images are going: print, the website, social media, or a presentation for an investor. You will get back an estimate with the scope and the timing stage by stage, including the time needed to render the scene.",
      },
      {
        q: "How long does the work take?",
        a: "A single product image usually takes a few days; a series of scenes or an animation takes noticeably longer. The timeline is made up of modelling, setting up materials and lighting, the render itself and post-production. Rendering is worth counting separately: it takes the machine time it takes, and marking the job urgent does not speed it up. What genuinely helps is precise source material: drawings with dimensions, colour codes, surface samples. We give an exact schedule after a brief with references — before that, any date would be a guess.",
      },
      {
        q: "How many revisions are included?",
        a: "The number of rounds is set out in the contract and distributed across the stages. Revisions at the rough layout — angle, framing, composition — are part of the work and actively welcome: that is where they cost the least. Revisions after the final render are possible, but each one means rendering the scene again, which is why we ask you to look carefully at the intermediate stages. Changing the object itself — a different packaging model, a different floor plan — is not a revision but a new job, and we say so straight away, before starting.",
      },
      {
        q: "Who owns the images?",
        a: "Rights to the finished images and clips pass to the client under the contract: you may use them in advertising, on marketplaces, in print and in presentations, with no time limit. Handover of the scene file itself — the model, the materials and the lighting setup — is agreed separately. It is possible, but it has to be discussed before the start, since it affects the scope of work. The studio retains the right to show the result in its portfolio; if the object is confidential or not yet on the market, we postpone publication until you permit it, or skip it.",
      },
      {
        q: "What do you need from us to begin?",
        a: "Source data that is as precise as possible. For a product: dimensions, the packaging dieline in vector, colour codes, material samples or a detailed description of them, and photographs of a real sample from every side. For architecture and landscaping: drawings, plans, sections, and specifications for surfaces and planting. Send references as well: images whose lighting and mood appeal to you. If some of the data does not exist, tell us straight away — we will either select an equivalent and agree it with you, or allow time to clarify, but we will not fill the gaps silently.",
      },
      {
        q: "Is 3D better than photography?",
        a: "Neither better nor worse — more appropriate in certain cases. 3D is indispensable when there is nothing to photograph: the product has not been manufactured, the building has not been built, the park exists only on paper. It also wins on large ranges of similar items: a scene that is already built lets you change the label, the colour or the volume without reshooting, while keeping the lighting and angle identical. But real food, fabric in motion, people and the atmosphere of a place are almost always more convincing and cheaper to photograph. If your task falls into that second category, we will tell you directly.",
      },
      {
        q: "Do you do animation and motion work?",
        a: "Yes. That might be a product rotating, an object breaking apart into its components, a fly-around of a building or a site, or animated intros and transitions for a website and social media. The process is the same as for a still image, with a movement stage added: camera and object paths are approved on a draft render, before the final one. We deliver a master file and compressed versions in horizontal and vertical formats. If the clip is planned in several languages or with different captions, tell us in advance — that is built into the structure of the project at the start.",
      },
      {
        q: "Can we get additional angles later?",
        a: "Yes, and this is one of the main practical advantages of 3D. While the scene exists, a new angle, a different background or another design variant is noticeably quicker and cheaper than the first image — the model does not have to be built again and the materials do not have to be set up again. We keep the working files and can come back to them later, when you need new formats for a marketplace, outdoor advertising or an updated product range. Additional images are quoted separately and always come in below the initial figure, because the amount of work involved is fundamentally smaller.",
      },
    ],
  },
};

export default en;
