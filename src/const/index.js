// randomise un tableau
const shake = arr => {
  for (let position = arr.length - 1; position >= 1; position--) {
    let randomIndex = Math.floor(Math.random() * (position + 1));
    [arr[position], arr[randomIndex]] = [arr[randomIndex], arr[position]];
  }
  return arr;
};

// retire les valeur n.x  du tableau
const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

// create the Value
const createValue = value => {
  let obj = {
    try: false,
    value
  };
  return obj;
};

const createValuePlayer = () => {
  let player = {
    saveTry: [],
    findPair: [],
    nbFind: 0,
    finishLvl: true,
    nbFaute: 0,
    easterEggsFound: 0,
    faultForThisLvl: 0,
    lvlPlayer: 0,
    cptTry: 0,
    bonusSee: 0
  };
  return player;
};

const resetValuePlayer = player => {
  player.cptTry = 0;
  player.saveTry = [];
  player.nbFind = 0;
  player.findPair = [];
  player.faultForThisLvl = 0;
  return player;
};

const tabEmojiString = [
  "fas fa-angry",
  "fas fa-dizzy",
  "fas fa-flushed",
  "fas fa-frown",
  "fas fa-grimace",
  "fas fa-grin",
  "fas fa-grin-beam",
  "fas fa-grin-beam-sweat",
  "fas fa-grin-hearts",
  "fas fa-grin-squint",
  "fas fa-grin-squint-tears",
  "fas fa-grin-stars",
  "fas fa-grin-tears",
  "fas fa-grin-tongue",
  "fas fa-grin-tongue-wink",
  "fas fa-grin-wink",
  "fas fa-kiss",
  "fas fa-kiss-wink-heart",
  "fas fa-laugh",
  "fas fa-laugh-beam",
  "fas fa-laugh-squint",
  "fas fa-laugh-wink",
  "fas fa-meh",
  "fas fa-meh-rolling-eyes",
  "fas fa-sad-cry",
  "fas fa-sad-tear",
  "fas fa-heart",
  "fas fa-star",
  "fas fa-circle",
  "fas fa-cloud",
  "fas fa-apple-alt"
];
const tabEmoji = [
  "😁",
  "😂",
  "😅",
  "😇",
  "😉",
  "🙂",
  "😋",
  "😍",
  "😘",
  "😗",
  "😜",
  "😎",
  "😏",
  "😶",
  "😒",
  "😳",
  "😞",
  "😟",
  "😠",
  "😡",
  "😖",
  "😤",
  "😮",
  "😱",
  "😰",
  "😧",
  "😪",
  "😭",
  "😵",
  "😷",
  "😴",
  "💩",
  "😈",
  "👿",
  "😻",
  "😼",
  "😽",
  "😹",
  "😺",
  "🙀",
  "👍",
  "👎",
  "👏",
  "💋",
  "🤓",
  "🥰",
  "🥳",
  "🥺",
  "🤯",
  "🤔",
  "🤗",
  "🤭",
  "🤫",
  "🙄",
  "🥴",
  "🤑",
  "🙊",
  "🙈",
  "🙉",
  "❤️",
  "💚",
  "💘",
  "💜"
];
export {
  shake,
  reducedFilter,
  sleep,
  tabEmoji,
  createValue,
  createValuePlayer,
  resetValuePlayer
};
