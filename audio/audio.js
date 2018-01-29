// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
- Play audio from an amusing scene between Luke Skywalker, R2-D2 and Yoda
- When the audio reaches the end, play it again from the beginning.
*********************************************/

var path = require('path');
var av = require('tessel-av');
// var mp3 = path.join(__dirname, 'polish-girl.mp3');
var mp3 = path.join(__dirname, 'yoda-mudhole.mp3')
// console.log(__dirname);//    /tmp/remote-script
// var mp3player = new av.Player(mp3);
// mp3player.play();

const kickPath = path.join(__dirname, 'kick.mp3');
const snarePath = path.join(__dirname, 'snare.mp3');
const hatPath = path.join(__dirname, 'hat.mp3');
const screamPath = path.join(__dirname, 'scream.mp3');

const kick = new av.Player(kickPath);
const snare = new av.Player(snarePath);
const hat = new av.Player(hatPath);
const scream = new av.Player(screamPath);

var speaker = new av.Speaker();

let test = () => {
  speaker.say({
    phrase: 'shorter test!',
    a: 100,
    p: 50
  });
};

let boots = () => {
  speaker.say({
    phrase: 'boots',
    a: 100,
    p: 30
  });
};

let cats = () => {
  speaker.say({
    phrase: 'cats',
    a: 100,
    p: 100
  });
};

let tomtom = () => {
  speaker.say({
    phrase: 'doooooon',
    a: 100,
    p: 80
  });
};

// for (let i = 0; i < 8; i++) {
//   boots();
//   cats();
//   tomtom();
//   cats();
// }

// var sound = new av.Player(mp3);

// sound.play(Options {
//   phrase: "Hello Dave, you're looking well today"
// });

// sound.on('ended', function(seconds) {
//   sound.play();
// });


module.exports = {
  // boots, cats, tomtom
  kick, snare, hat, scream
}

// mad libs
// get sound more responsive? or load an mp3?