const fighters = [
  {
    name: "Freezer",
    power: 8000,
  },
  {
    name: "Vegeta",
    power: 8500,
  },
  {
    name: "Crilin",
    power: 500,
  },
  {
    name: "Mr Satan",
    power: 50,
  },
  {
    name: "Junior",
    power: 6000,
  },
  {
    name: "Goku",
    power: 9001,
  },
  {
    name: "Tensing",
    power: 450,
  },
  {
    name: "Videl",
    power: 300,
  },
  {
    name: "Bulma",
    power: 20,
  },
  {
    name: "C-18",
    power: 7800,
  },
  {
    name: "Gohan",
    power: 8900,
  },
  {
    name: "Trunks",
    power: 1250,
  },
];

const weapons = [
  {
    name: "Ventaglio della Musa",
    power: 15,
  },
  {
    name: "Scouter",
    power: 30,
  },
  {
    name: "Bastone Roshi",
    power: 60,
  },
  {
    name: "Fagioli Magici",
    power: 70,
  },
  {
    name: "Katana di Yajirobei",
    power: 85,
  },
  {
    name: "Spada del Dragone Azzurro",
    power: 115,
  },
  {
    name: "Armatura Saiyan",
    power: 145,
  },
  {
    name: "Cannone da braccio",
    power: 170,
  },
  {
    name: "Nuvola d'oro",
    power: 200,
  },
  {
    name: "Bastone Nyoi",
    power: 220,
  },
  {
    name: "Spada Z",
    power: 235,
  },
  {
    name: "Orecchini Potara",
    power: 250,
  },
];

const cpuFigther = {
  name: "Capsule corp. Warrior",
  power: 4000,
  newPower: 4000,
  modifier: false,
  wapon: "Parlantina di Bulma",
};

const msgPropRegex = /\[(.*?)\]/;
const msgRndRegex = /\{(.*?)\}/;

const messages = [
  {
    text: "Benvenuti al Torneo Tenkaichi 2024!",
  },
  {
    text: "Andiamo a presentare i partecipanti!",
  },
  {
    text: "[name] con una potenza di [power]",
    prop: true,
    use: "fighters",
    cycle: true,
    // rnd: { entrata: ["Abbiamo", "Ed ecco", "Fa il suo ingresso", "E' con noi", "Vediamo entrare"] },
  },
  {
    text: "E' ora il momento di scegliere l'arma! Ricordiamo a tutti che ogni arma può essere assegnata una sola volta, quindi affrettatevi!",
  },
  {
    text: "I nostri combattenti hanno scelto l'arma, vediamo come è andata:",
  },
  {
    text: "[name] ha scelto [wapon], ora la sua potenza è salita a [power]!",
    prop: true,
    use: "armedFighters",
    cycle: true,
  },
  {
    text: "E' il momento dell'allenamento!",
  },
  {
    text: "Ogni combattente avrà un'ora a disposizione per allenarsi con i potenziatori Tenkaichi!",
  },
  {
    text: "Torneremo a breve con i risultati!",
  },
  {
    text: "...",
  },
  {
    text: "...",
  },
  {
    text: "Eccoci tornati!",
  },
  {
    text: "Non sempre l'allenamento da i suoi frutti, ma siamo sicuri che la maggior parte dei combattenti ne avranno tratto giovamento.",
  },
  {
    text: "Ma ora vediamo come è andata:",
  },
  {
    text: "[name] ha aumentato la sua potenza di [modifier],<br/>ora la sua potenza è di [newPower]!",
    prop: true,
    use: "trainedFighters",
    cycle: true,
  },
  {
    text: "Che incredibili risultati!",
  },
  {
    text: "Purtroppo alcuni concorrenti potrebbero non aver raggiunto la soglia minima per la qualificazione",
  },
  {
    text: "Ma... un momento! Sembra ci sia un nuovo sfidante!",
    condition: "newFighter",
  },
  {
    text: "Con la potenza di [power] e la sua personale arma '[wapon]'<br/>Entra in campo [name]!",
    prop: true,
    use: "cpuFigther",
    condition: "newFighter",
  },
  {
    text: "Vediamo dunque chi si è qualificato:",
  },
  {
    text: "[name]",
    prop: true,
    use: "qualifiedFigther",
    cycle: true,
  },
  {
    text: "Siete pronti a sapere i nomi sul podio?",
  },
  {
    text: "Signore e signori, sul gradino più basso del podio",
  },
  {
    text: "Con una potenza di [newPower]...",
    prop: true,
    use: "last",
  },
  {
    text: "[name]!",
    prop: true,
    use: "last",
  },
  {
    text: "Al secondo posto",
  },
  {
    text: "Con una potenza di [newPower]...",
    prop: true,
    use: "second",
  },
  {
    text: "[name]!",
    prop: true,
    use: "second",
  },
  {
    text: "E infine...",
  },
  {
    text: "il vincitore del torneo Tenkaichi 2024...",
  },
  {
    text: "Con una potenza di [newPower]...",
    prop: true,
    use: "winner",
  },
  {
    text: "...",
  },
  {
    text: "[name]!",
    prop: true,
    use: "winner",
  },
  {
    text: "Grazie ancora a tutti i partecipanti e grazie a voi per seguirci con passione.",
  },
  {
    text: "Il torneo Tenkaici vi aspetta l'anno prossimo!",
  },
  {
    text: "Buona notte e buone botte...",
  },
  {
    text: "..ah no, quella è un'altra competizione",
  },
];
