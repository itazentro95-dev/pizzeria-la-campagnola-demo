/* La Campagnola — i18n + depth engine. No dependencies. Italian renders with JS off. */
(function () {
  "use strict";

  var I18N = {
    it: {
      "meta.title": "La Campagnola: Pizzeria e Trattoria, Rione Sanità, Napoli",
      "util.hours": "Mar-Dom: 12:00-16:00 / 18:30-23:30",
      "brand.sub": "Trattoria e pizzeria dei fratelli Grossi",
      "nav.fritti": "I Fritti", "nav.menu": "Il Menù", "nav.gallery": "Galleria", "nav.house": "La Casa", "nav.visit": "Visita",
      "cta.call": "Chiama ora",
      "hero.kicker": "Rione Sanità · Fuori Porta San Gennaro",
      "hero.l1": "Dal mercato", "hero.l2": "dei Vergini,", "hero.l3": "al forno.",
      "hero.sub": "Pizzeria e trattoria tradizionale napoletana dei fratelli Grossi, nel cuore del rione Sanità: dalla margherita alle pizze nate ai banchi del mercato.",
      "hero.cta1": "Vedi il menù", "hero.cta2": "Prenota un tavolo",
      "hero.rating": "oltre 2.100 recensioni su Google",
      "hero.tag": "La Margherita", "hero.chip1": "Dal banco", "hero.chip2": "al forno, ogni giorno",
      "hero.note": "il lunedì il forno riposa",
      "marq.market": "Dal mercato dei Vergini",
      "trust.1": "su Google, da oltre 2.100 recensioni",
      "trust.2": "i fritti, il rito prima della pizza",
      "trust.3n": "I banchi", "trust.3": "le pizze dedicate ai venditori del mercato dei Vergini",
      "trust.4n": "Fratelli Grossi", "trust.4": "una casa di famiglia, fuori Porta San Gennaro",
      "fritti.eyebrow": "Banco nº 0 · L’attesa", "fritti.title": "Prima del forno: i fritti",
      "fritti.lede": "A Napoli la pizza si aspetta così: piccoli, dorati, da mangiare in piedi o appena seduti. Prezzi dal menù della casa.",
      "fritti.hint": "Scorri per assaggiare tutto il banco →",
      "f.crocche": "Provola, parmigiano e pepe",
      "f.bucatini": "Besciamella, provola, carne macinata, piselli, parmigiano",
      "f.patate": "Il classico di casa, in versione fritta",
      "f.arancino": "Riso arborio, salame Napoli, carne macinata, piselli, provola",
      "f.montanara": "Pizza fritta con ragù napoletano e formaggio",
      "f.migliaccio": "Polenta con cicoli, salame Napoli, formaggio",
      "f.baccala": "Dorato e asciutto, come da tradizione",
      "menu.eyebrow": "Il menù della casa", "menu.title": "Una passeggiata tra i banchi",
      "menu.lede": "Il menù è una passeggiata al mercato dei Vergini: ogni banco ha le sue pizze, ogni pizza il suo venditore. Prezzi dal menù ufficiale pubblicato dalla casa.",
      "menu.n1": "Le Classiche", "menu.n2": "Le Stelle ai Vergini", "menu.n3": "I Banchi del Mercato", "menu.n4": "La Trattoria", "menu.n5": "Dolci",
      "s1.title": "Le Classiche",
      "s1.lede": "«La Margherita è l’essenza della pizza», dal menù della casa. Con le Marinare: un inno alla semplicità, tra aglio, origano e San Marzano.",
      "s1.sub1": "Margherita e le altre", "s1.sub2": "Le Marinare", "s1.sub3": "Le Eterne",
      "s1.note": "nel week-end chiedi la pizza nel rutiello: 10 €",
      "d.margherita": "Pomodoro San Marzano, fior di latte, Grana Padano, basilico, olio EVO",
      "d.provola": "Pomodoro San Marzano, provola e pepe, Grana Padano, basilico, olio EVO",
      "d.bufala": "Pomodoro San Marzano, mozzarella di bufala DOP, Grana Padano, basilico, olio EVO",
      "d.napoletana": "Pomodoro San Marzano, fior di latte, acciughe di Cetara, Grana Padano, origano, basilico, olio EVO",
      "d.filetto": "Pomodorino datterino, provola di bufala, Grana Padano, basilico, olio EVO",
      "d.stracciata": "Pomodoro San Marzano, stracciata, olio EVO",
      "d.flegrea": "Pomodoro cannellino flegreo, fior di latte, grana, basilico, olio EVO",
      "d.marinara": "Pomodoro San Marzano, origano di montagna, aglio bianco, basilico, olio EVO",
      "d.rinforzata": "Pomodoro San Marzano, olive caiazzane, acciughe di Cetara, pesto di aglio orsino, basilico, olio EVO",
      "d.gialli": "Pomodorini gialli del Vesuvio, origano di montagna, aglio bianco, basilico, olio EVO",
      "d.cosacca": "Pomodoro San Marzano, pecorino romano, basilico, olio EVO",
      "d.capricciosa": "Pomodoro San Marzano, fior di latte, prosciutto cotto di Parma, funghi, carciofi sott’olio, olive caiazzane, Grana Padano, basilico, olio EVO",
      "d.diavola": "Pomodoro San Marzano, fior di latte, salame piccante Napoli, Grana Padano, basilico, olio EVO",
      "d.ripforno": "Ricotta di bufala, prosciutto cotto, fior di latte, pomodoro San Marzano, basilico, olio EVO",
      "d.ripfritto": "Ricotta di bufala, provola, cicoli di maiale, pepe nero, pomodoro San Marzano",
      "d.scarole": "Scarola riccia, provola, olive caiazzane, Grana Padano, olio EVO, fritto o al forno",
      "d.formaggi": "Base bianca: fior di latte, tuma persa, pecorino bagnolese al tartufo, blu di bufala, cacio ricotta del Cilento",
      "s2.title": "Le Stelle ai Vergini",
      "s2.lede": "Le creazioni dello chef Pasquale Palamaro: l’eccellenza della pizza incontra l’alta cucina, tra tradizione partenopea e ricerca. Dal menù della casa.",
      "d.apparenza": "«Una diavola di mare»: salmonino rosa, mozzarella, peperoncino, salsa piccante di datterino giallo, friggitelli, jalapeño verde dolce, parmigiano, olio EVO",
      "d.scarpariello": "Pomodoro caramella, parmigiano 12 mesi, pecorino romano, olio EVO",
      "d.evergreen": "Fior di latte, spinaci novelli, puntarelle, crescione di fiume, limone di Sorrento, noce moscata, olio EVO",
      "d.pollo": "Pollo ruspante, carciofi mammarelle, cipolla di Montoro, provola di Agerola, parmigiano vacche rosse, olio EVO",
      "s3.title": "Dal Mercato del Borgo al forno",
      "s3.lede": "La stagionalità è il cuore di questa selezione: ogni pizza è legata a un venditore e a un luogo del quartiere, dai banchi del mercato dei Vergini. Dal menù della casa.",
      "s3.veg": "L’ortolano", "s3.fish": "Il pescivendolo", "s3.cheese": "Il casaro", "s3.butcher": "Il macellaio",
      "s3.note": "Le pizze stagionali cambiano con la disponibilità degli ingredienti del mercato.",
      "d.pulcinella": "Friarielli, salsiccia, provola di Agerola, Grana Padano, olio EVO",
      "d.misericordiella": "Cornicione ripieno di ricotta di bufala e pepe nero, friarielli e provola, provolone del Monaco DOP, olio EVO",
      "d.tarallosa": "Cornicione ripieno di salame e provola, pomodorini gialli, tarallo, olio EVO",
      "d.vicoletto": "La vegetariana del mese: verdure di stagione dal mercato, provola di Agerola, basilico, olio EVO",
      "d.cuore": "Ricotta di bufala, fior di latte, fiori di zucca, datterino giallo, pepe, grana, olio EVO",
      "d.pesto": "Pesto di basilico, provola di bufala DOP, pomodoro a pacchetelle DOP, Grana Padano, pistacchio di Bronte, olio EVO",
      "d.azzurra": "Fior di latte, alici, zeste di limone, grana, olio EVO",
      "d.delizia": "Pomodoro datterino, fior di latte, prosciutto crudo, rucola, scaglie di grana, olio EVO",
      "d.toto": "Pomodorino del Piennolo, provola, provolone del Monaco DOP, basilico, olio EVO",
      "d.pizzaiola": "Pomodoro San Marzano, origano, aglio bianco, provola, pecorino, basilico, olio EVO",
      "d.ciru": "Ricotta di bufala, fior di latte, pancetta, pepe nero, Grana Padano, basilico, olio EVO",
      "d.regina": "Ragù napoletano, fior di latte, polpettine di carne, Grana Padano, olio EVO",
      "d.nanninella": "Patate al forno, salsiccia, provola, Grana Padano, basilico, olio EVO",
      "d.carciofata": "Crema di carciofi, provola, carciofi alla julienne con olive, pancetta al pepe nero, scaglie di grana",
      "s4.title": "La Trattoria",
      "s4.lede": "Non solo pizza: la cucina napoletana di casa Grossi, dai primi della domenica ai secondi del mercato.",
      "s4.sub1": "Antipasti", "s4.sub2": "Primi", "s4.sub3": "Secondi", "s4.sub4": "Contorni",
      "s4.note": "parte dei piatti cambia con il mercato: chiedi la lavagna del giorno",
      "d.genovese": "Con carne di manzo", "d.mistomare": "Cozze e lupini",
      "d.lasagna": "Ricotta, ragù, provola di bufala, uova, Grana Padano",
      "s5.title": "Il dolce finale",
      "s5.lede": "I classici della pasticceria napoletana, per chiudere come si deve.",
      "s5.note": "Coperto 2 €. Bibite, birre alla spina e la carta dei vini, con le etichette campane, dalla Falanghina all’Aglianico, sono sul menù completo della casa.",
      "gal.eyebrow": "Galleria", "gal.title": "Il giro del mercato",
      "gal.c1": "Il banco del fruttajuolo", "gal.c2": "La margherita", "gal.c3": "Il forno",
      "gal.c4": "I fritti", "gal.c5": "La sala", "gal.c6": "Il dolce finale",
      "gal.note": "Immagini di atmosfera create per questa dimostrazione. Le foto vere della casa sono sulla sua pagina Facebook.",
      "story.tag": "il mercato dei Vergini, a due passi",
      "story.eyebrow": "La casa", "story.title": "Fratelli Grossi, fuori Porta San Gennaro",
      "story.quote": "«La Campagnola è una pizzeria e trattoria tradizionale napoletana, situata nel rione Sanità, nel cuore di Napoli.»",
      "story.cite": "La casa, nella sua descrizione ufficiale",
      "story.p1": "La tavola comincia al mercato: il menù della casa dedica un’intera sezione ai banchi del Borgo Vergini, e ogni pizza porta il nome del suo venditore: il fruttajuolo, il casaro, il macellaio, il pescivendolo. È il quartiere, la Sanità, che detta la carta.",
      "story.p2": "Nelle oltre duemila recensioni su Google ricorrono le stesse parole: impasto sottile e leggero, prezzi onesti, il servizio svelto e di casa. È il posto che i napoletani del quartiere consigliano a chi arriva da fuori, e dove, all’ora di punta, un po’ di fila è parte del rito.",
      "story.f1n": "Trattoria + pizzeria", "story.f1": "due anime, una sola cucina",
      "story.f2n": "Opzioni vegetariane", "story.f2": "e piatti del mercato ogni giorno",
      "story.f3n": "A due passi", "story.f3": "dal Museo Archeologico e dalla metro Museo",
      "visit.eyebrow": "Visita", "visit.title": "Passa a trovarci",
      "visit.directions": "Indicazioni stradali", "visit.hours": "Orari",
      "visit.note": "Orari secondo il profilo Google della casa. TripAdvisor riporta orari leggermente diversi (12:00-15:30 / 19:00-23:00): per essere sicuri, una telefonata e via.",
      "day.mon": "Lunedì", "day.tue": "Martedì", "day.wed": "Mercoledì", "day.thu": "Giovedì", "day.fri": "Venerdì", "day.sat": "Sabato", "day.sun": "Domenica",
      "hours.closed": "Chiuso", "hours.value": "12:00-16:00 / 18:30-23:30",
      "foot.line": "Trattoria e pizzeria dei fratelli Grossi · Rione Sanità, Napoli",
      "foot.fine": "Sito dimostrativo non ufficiale, realizzato a scopo di presentazione. Fatti, menù e prezzi provengono dal menù ufficiale e dai profili pubblici della casa (Google 4,5 · oltre 2.100 recensioni; TripAdvisor Travellers’ Choice 2026). Immagini di atmosfera create per la dimostrazione.",
      "bar.call": "Chiama", "bar.menu": "Menù", "bar.hours": "Orari", "bar.dir": "Indicazioni"
    },
    en: {
      "meta.title": "La Campagnola: Pizzeria & Trattoria, Rione Sanità, Naples",
      "util.hours": "Tue-Sun: 12:00-16:00 / 18:30-23:30",
      "brand.sub": "Trattoria and pizzeria of the Grossi brothers",
      "nav.fritti": "The Fritti", "nav.menu": "The Menu", "nav.gallery": "Gallery", "nav.house": "The House", "nav.visit": "Visit",
      "cta.call": "Call now",
      "hero.kicker": "Rione Sanità · Outside Porta San Gennaro",
      "hero.l1": "From the Vergini", "hero.l2": "market stalls,", "hero.l3": "to the oven.",
      "hero.sub": "Run by the Grossi brothers in the heart of the Rione Sanità: a traditional Neapolitan pizzeria and trattoria, from the classic margherita to pizzas born at the market stalls.",
      "hero.cta1": "See the menu", "hero.cta2": "Book a table",
      "hero.rating": "over 2,100 reviews on Google",
      "hero.tag": "The Margherita", "hero.chip1": "From the stall", "hero.chip2": "to the oven, every day",
      "hero.note": "on Mondays the oven rests",
      "marq.market": "From the Vergini market",
      "trust.1": "on Google, from over 2,100 reviews",
      "trust.2": "the fritti, the ritual before the pizza",
      "trust.3n": "The stalls", "trust.3": "pizzas dedicated to the vendors of the Vergini market",
      "trust.4n": "The Grossi brothers", "trust.4": "a family house, outside Porta San Gennaro",
      "fritti.eyebrow": "Stall no. 0 · The wait", "fritti.title": "Before the oven: the fritti",
      "fritti.lede": "In Naples this is how you wait for pizza: small, golden bites, eaten standing or just as you sit down. Prices from the house menu.",
      "fritti.hint": "Swipe to taste the whole stall →",
      "f.crocche": "Smoked provola, parmesan and pepper",
      "f.bucatini": "Béchamel, provola, minced meat, peas, parmesan",
      "f.patate": "The house classic, in fried form",
      "f.arancino": "Arborio rice, Naples salami, minced meat, peas, provola",
      "f.montanara": "Fried pizza with Neapolitan ragù and cheese",
      "f.migliaccio": "Polenta with crackling, Naples salami, cheese",
      "f.baccala": "Golden and crisp, as tradition demands",
      "menu.eyebrow": "The house menu", "menu.title": "A walk among the stalls",
      "menu.lede": "The menu is a stroll through the Vergini market: every stall has its pizzas, every pizza its vendor. Prices from the official menu published by the house.",
      "menu.n1": "The Classics", "menu.n2": "Le Stelle ai Vergini", "menu.n3": "The Market Stalls", "menu.n4": "The Trattoria", "menu.n5": "Desserts",
      "s1.title": "The Classics",
      "s1.lede": "\"The Margherita is the essence of pizza\", from the house menu. And the Marinare: a hymn to simplicity, with garlic, oregano and San Marzano.",
      "s1.sub1": "Margherita and friends", "s1.sub2": "The Marinare", "s1.sub3": "The Timeless",
      "s1.note": "at the weekend, ask for the pizza nel rutiello: €10",
      "d.margherita": "San Marzano tomato, fior di latte, Grana Padano, basil, extra virgin olive oil",
      "d.provola": "San Marzano tomato, smoked provola and pepper, Grana Padano, basil, extra virgin olive oil",
      "d.bufala": "San Marzano tomato, DOP buffalo mozzarella, Grana Padano, basil, extra virgin olive oil",
      "d.napoletana": "San Marzano tomato, fior di latte, Cetara anchovies, Grana Padano, oregano, basil, extra virgin olive oil",
      "d.filetto": "Datterino cherry tomatoes, buffalo provola, Grana Padano, basil, extra virgin olive oil",
      "d.stracciata": "San Marzano tomato, stracciata, extra virgin olive oil",
      "d.flegrea": "Phlegraean cannellino tomato, fior di latte, grana, basil, extra virgin olive oil",
      "d.marinara": "San Marzano tomato, mountain oregano, white garlic, basil, extra virgin olive oil",
      "d.rinforzata": "San Marzano tomato, Caiazzo olives, Cetara anchovies, wild garlic pesto, basil, extra virgin olive oil",
      "d.gialli": "Yellow Vesuvio cherry tomatoes, mountain oregano, white garlic, basil, extra virgin olive oil",
      "d.cosacca": "San Marzano tomato, pecorino romano, basil, extra virgin olive oil",
      "d.capricciosa": "San Marzano tomato, fior di latte, Parma cooked ham, mushrooms, artichokes in oil, Caiazzo olives, Grana Padano, basil, extra virgin olive oil",
      "d.diavola": "San Marzano tomato, fior di latte, spicy Naples salami, Grana Padano, basil, extra virgin olive oil",
      "d.ripforno": "Buffalo ricotta, cooked ham, fior di latte, San Marzano tomato, basil, extra virgin olive oil",
      "d.ripfritto": "Buffalo ricotta, provola, pork crackling, black pepper, San Marzano tomato",
      "d.scarole": "Curly escarole, provola, Caiazzo olives, Grana Padano, extra virgin olive oil, fried or baked",
      "d.formaggi": "White base: fior di latte, tuma persa, truffle pecorino from Bagnoli, buffalo blue, Cilento cacio ricotta",
      "s2.title": "Le Stelle ai Vergini",
      "s2.lede": "The creations of chef Pasquale Palamaro: where pizza meets fine dining, between Neapolitan tradition and research. From the house menu.",
      "d.apparenza": "\"A diavola from the sea\": pink salmon, mozzarella, chilli, spicy yellow datterino sauce, friggitelli peppers, sweet green jalapeño, parmesan, extra virgin olive oil",
      "d.scarpariello": "Candy tomato, 12-month parmesan, pecorino romano, extra virgin olive oil",
      "d.evergreen": "Fior di latte, baby spinach, puntarelle, watercress, Sorrento lemon, nutmeg, extra virgin olive oil",
      "d.pollo": "Free-range chicken, mammarella artichokes, Montoro onion, Agerola provola, red-cow parmesan, extra virgin olive oil",
      "s3.title": "From the Borgo Market to the oven",
      "s3.lede": "Seasonality is the heart of this selection: every pizza is tied to a vendor and a place in the quarter, from the stalls of the Vergini market. From the house menu.",
      "s3.veg": "The greengrocer", "s3.fish": "The fishmonger", "s3.cheese": "The cheesemonger", "s3.butcher": "The butcher",
      "s3.note": "Seasonal pizzas change with the availability of market ingredients.",
      "d.pulcinella": "Friarielli, sausage, Agerola provola, Grana Padano, extra virgin olive oil",
      "d.misericordiella": "Crust stuffed with buffalo ricotta and black pepper, friarielli and provola, DOP Provolone del Monaco, extra virgin olive oil",
      "d.tarallosa": "Crust stuffed with salami and provola, yellow cherry tomatoes, tarallo, extra virgin olive oil",
      "d.vicoletto": "The vegetarian of the month: seasonal market vegetables, Agerola provola, basil, extra virgin olive oil",
      "d.cuore": "Buffalo ricotta, fior di latte, courgette flowers, yellow datterino, pepper, grana, extra virgin olive oil",
      "d.pesto": "Basil pesto, DOP buffalo provola, DOP pacchetelle tomato, Grana Padano, Bronte pistachio, extra virgin olive oil",
      "d.azzurra": "Fior di latte, anchovies, lemon zest, grana, extra virgin olive oil",
      "d.delizia": "Datterino tomato, fior di latte, cured ham, rocket, grana shavings, extra virgin olive oil",
      "d.toto": "Piennolo cherry tomato, provola, DOP Provolone del Monaco, basil, extra virgin olive oil",
      "d.pizzaiola": "San Marzano tomato, oregano, white garlic, provola, pecorino, basil, extra virgin olive oil",
      "d.ciru": "Buffalo ricotta, fior di latte, pancetta, black pepper, Grana Padano, basil, extra virgin olive oil",
      "d.regina": "Neapolitan ragù, fior di latte, little meatballs, Grana Padano, extra virgin olive oil",
      "d.nanninella": "Roast potatoes, sausage, provola, Grana Padano, basil, extra virgin olive oil",
      "d.carciofata": "Artichoke cream, provola, julienned artichokes with olives, black-pepper pancetta, grana shavings",
      "s4.title": "The Trattoria",
      "s4.lede": "Not just pizza: the Grossi family’s Neapolitan cooking, from Sunday first courses to market second courses.",
      "s4.sub1": "Starters", "s4.sub2": "First courses", "s4.sub3": "Main courses", "s4.sub4": "Sides",
      "s4.note": "part of the menu changes with the market: ask for the board of the day",
      "d.genovese": "With beef", "d.mistomare": "Mussels and wedge clams",
      "d.lasagna": "Ricotta, ragù, buffalo provola, eggs, Grana Padano",
      "s5.title": "The sweet ending",
      "s5.lede": "The classics of Neapolitan pastry, to finish as you should.",
      "s5.note": "Cover charge €2. Soft drinks, draught beers and the wine list, with Campanian labels, from Falanghina to Aglianico, are on the full house menu.",
      "gal.eyebrow": "Gallery", "gal.title": "The market round",
      "gal.c1": "The greengrocer’s stall", "gal.c2": "The margherita", "gal.c3": "The oven",
      "gal.c4": "The fritti", "gal.c5": "The dining room", "gal.c6": "The sweet ending",
      "gal.note": "Atmospheric images created for this demonstration. The house’s real photos are on its Facebook page.",
      "story.tag": "the Vergini market, a short walk away",
      "story.eyebrow": "The house", "story.title": "The Grossi brothers, outside Porta San Gennaro",
      "story.quote": "\"La Campagnola is a traditional Neapolitan pizzeria and trattoria, in the Rione Sanità, in the heart of Naples.\"",
      "story.cite": "The house, in its official description",
      "story.p1": "The table starts at the market: the house menu devotes a whole section to the stalls of the Borgo Vergini, and every pizza carries its vendor’s name: the greengrocer, the cheesemonger, the butcher, the fishmonger. It is the quarter, the Sanità, that writes the menu.",
      "story.p2": "Across more than two thousand Google reviews the same words keep returning: thin, light dough, honest prices, quick and homely service. It is the place the neighbourhood recommends to anyone arriving from outside, and where, at peak hours, a short queue is part of the ritual.",
      "story.f1n": "Trattoria + pizzeria", "story.f1": "two souls, one kitchen",
      "story.f2n": "Vegetarian options", "story.f2": "and market dishes every day",
      "story.f3n": "A short walk", "story.f3": "from the Archaeological Museum and the Museo metro",
      "visit.eyebrow": "Visit", "visit.title": "Come and see us",
      "visit.directions": "Get directions", "visit.hours": "Opening hours",
      "visit.note": "Hours as listed on the house’s Google profile. TripAdvisor lists slightly different hours (12:00-15:30 / 19:00-23:00): to be sure, one quick call does it.",
      "day.mon": "Monday", "day.tue": "Tuesday", "day.wed": "Wednesday", "day.thu": "Thursday", "day.fri": "Friday", "day.sat": "Saturday", "day.sun": "Sunday",
      "hours.closed": "Closed", "hours.value": "12:00-16:00 / 18:30-23:30",
      "foot.line": "Trattoria and pizzeria of the Grossi brothers · Rione Sanità, Naples",
      "foot.fine": "Unofficial demonstration website, made for presentation purposes. Facts, menu and prices come from the house’s official menu and public profiles (Google 4.5 · over 2,100 reviews; TripAdvisor Travellers’ Choice 2026). Atmospheric images created for the demonstration.",
      "bar.call": "Call", "bar.menu": "Menu", "bar.hours": "Hours", "bar.dir": "Directions"
    }
  };

  /* ---------- language ---------- */
  var KEY = "campagnola-lang";
  var langBtns = Array.prototype.slice.call(document.querySelectorAll(".lang-btn"));

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.it;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k]) el.textContent = dict[k];
    });
    document.documentElement.lang = lang;
    document.title = dict["meta.title"];
    langBtns.forEach(function (b) { b.classList.toggle("is-on", b.getAttribute("data-lang") === lang); });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  langBtns.forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });

  var stored = "it";
  try { stored = localStorage.getItem(KEY) || "it"; } catch (e) {}
  if (stored !== "it") applyLang(stored);

  if (typeof module !== "undefined" && module.exports) module.exports = I18N;

  /* ---------- motion / depth ---------- */
  var RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var FINE = window.matchMedia("(pointer: fine)").matches;
  if (RM) return;
  document.documentElement.classList.add("js", "anim");

  /* reveal on scroll */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  /* hero depth: parallax planes + frame tilt */
  var hero = document.querySelector(".hero");
  var planes = Array.prototype.slice.call(document.querySelectorAll(".plane"));
  var frame = document.getElementById("heroFrame");
  var px = 0, py = 0, tx = 0, ty = 0, ticking = false;

  function depthLoop() {
    px += (tx - px) * 0.07;
    py += (ty - py) * 0.07;
    var sy = window.scrollY || 0;
    planes.forEach(function (pl) {
      var d = parseFloat(pl.getAttribute("data-depth") || "0.4");
      var z = pl.classList.contains("plane-a") ? -140 : pl.classList.contains("plane-b") ? -80 : -30;
      pl.style.transform = "translate3d(" + (px * d * 26).toFixed(1) + "px," + (py * d * 18 - sy * d * 0.12).toFixed(1) + "px," + z + "px)";
    });
    if (frame) {
      frame.style.setProperty("--ry", (px * 4.5).toFixed(2) + "deg");
      frame.style.setProperty("--rx", (-py * 4.5).toFixed(2) + "deg");
    }
    if (Math.abs(tx - px) > 0.001 || Math.abs(ty - py) > 0.001) {
      requestAnimationFrame(depthLoop);
    } else { ticking = false; }
  }
  function kick() { if (!ticking) { ticking = true; requestAnimationFrame(depthLoop); } }

  if (FINE && hero) {
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      kick();
    }, { passive: true });
    hero.addEventListener("pointerleave", function () { tx = 0; ty = 0; kick(); }, { passive: true });
  }
  window.addEventListener("scroll", kick, { passive: true });
  kick();

  /* gallery curve: cards rotateY by distance from track centre */
  var track = document.getElementById("galTrack");
  if (track) {
    var cards = Array.prototype.slice.call(track.querySelectorAll(".gal-card"));
    var galTick = false;
    function curve() {
      var tr = track.getBoundingClientRect();
      var centre = tr.left + tr.width / 2;
      cards.forEach(function (c) {
        var r = c.getBoundingClientRect();
        var ratio = Math.max(-1, Math.min(1, (r.left + r.width / 2 - centre) / (tr.width / 2)));
        c.style.setProperty("--ry", (-ratio * 11).toFixed(2) + "deg");
        c.style.setProperty("--sc", (1 - Math.abs(ratio) * 0.045).toFixed(3));
      });
      galTick = false;
    }
    function galKick() { if (!galTick) { galTick = true; requestAnimationFrame(curve); } }
    track.addEventListener("scroll", galKick, { passive: true });
    window.addEventListener("scroll", galKick, { passive: true });
    window.addEventListener("resize", galKick);
    curve();
  }

})();
