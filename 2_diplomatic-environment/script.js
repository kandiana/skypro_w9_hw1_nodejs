const scriptResponse = {
  RU: 'Пацак должен делать ку два раза',
  UK: 'Пацак повинен робити ку два рази',
  EN: 'Patsak has to do ku twice',
  ES: 'Patsak tiene que hacer ku dos veces',
  DE: 'Pazaken muss zweimal ku machen',
  FR: 'Patsak doit faire kou deux fois',
  IT: 'Pazachi deve fare "ku" due volte',
  JA: 'とパッツ人は「クー」を2回行う必要があります',
};

const language = process.env.LANGUAGE || 'RU';

console.log(scriptResponse[language]);
