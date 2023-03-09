// 1. Bikin 3 object, masing masing ada 5 property
// 2. Outputkan semua datanya satu persatu

const drStrange = {
  fullname: 'Stephen Vincent Strange',
  species: 'Human',
  affiliates: 'Avengers',
  abilities: ['Cloack of Levitation', 'Eye of Agamotto', 'Mastery of Magic'],
  partnerships: ['Clea', 'Wong', 'Ancient One'],
};

const kamadoTanjiro = {
  fullname: 'Kamado Tanjiro',
  species: 'Human',
  affiliates: 'Demon Slayer Corps',
  abilities: ['Water Breathing', 'Sun Breathing'],
  partnerships: ['Zenitsu Agatsuma', 'Inosuke Hashibara', 'Kamado Nezuko'],
};

const uzumakiNaruto = {
  fullname: 'Uzumaki Naruto',
  species: 'Human',
  affiliates: 'Hidden Leaf Village',
  abilities: ['Rasengan', 'Shadow Clone', 'Six Paths Senjutsu'],
  partnerships: ['Uchiha Sasuke', 'Haruno Sakura'],
};

const getObjectValue = (__object, objectName) => {
  console.log(`Isi dari object ${objectName} {`);
  Object.keys(__object).forEach((prop) => {
    console.log(`${prop}: ${__object[prop]}`);
  });
  console.log(`}\n`);
};

getObjectValue(drStrange, 'drStrange');
getObjectValue(kamadoTanjiro, 'kamadoTanjiro');
getObjectValue(uzumakiNaruto, 'uzumakiNaruto');
