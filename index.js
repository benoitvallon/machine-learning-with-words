var mimir = require('mimir'),
  bow = mimir.bow,
  dict = mimir.dict;

var texts = ["John likes to watch movies. Mary likes movies too.",
  "John also likes to watch football games."
];

voc = dict(texts);

console.log('voc', voc);
console.log(bow("John likes to watch movies. Mary likes movies too.", voc));
console.log(bow("John also likes to watch football games.", voc));
