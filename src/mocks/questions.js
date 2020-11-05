const AVATAR_URL_START = `https://avatars.dicebear.com/api/human`;
const AVATAR_URL_END = `.svg?w=128&h=128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/b/b8/Alexander_Nakarada_-_Catalyst_%28cc-by%29_%28filmmusic%29.mp3`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/c/ca/Jesse_Spillane_-_03_-_Molten_Snow.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4a/Ballade_of_July_Mikees_Blues_Express_Michael_Huber.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/c/c3/Cinquefoil.ogg`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Alexander Nakarada`,
      src: `https://upload.wikimedia.org/wikipedia/commons/b/b8/Alexander_Nakarada_-_Catalyst_%28cc-by%29_%28filmmusic%29.mp3`,
    },
    answers: [{
      picture: `${AVATAR_URL_START}/${Math.random()}${AVATAR_URL_END}`,
      artist: `Jim Bim`,
    }, {
      picture: `${AVATAR_URL_START}/${Math.random()}${AVATAR_URL_END}`,
      artist: `Jack Black`,
    }, {
      picture: `${AVATAR_URL_START}/${Math.random()}${AVATAR_URL_END}`,
      artist: `Alexander Nakarada`,
    }],
  }
];
