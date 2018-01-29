// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic RFID example listens for an RFID
device to come within range of the module,
then logs its UID to the console.
*********************************************/

var tessel = require('tessel');
var rfidlib = require('rfid-pn532');
const audio = require('./audio/audio');

var rfid = rfidlib.use(tessel.port['A']);

const uids = {
  '0430828a725780': {
    sound: audio.kick,
    name: 'ventra'
  },
  '047af712964f80': {
    sound: audio.snare,
    name: 'disney'
  },
  '1bf62d0d': {
    sound: audio.hat,
    name: 'blank'
  }
};

rfid.setPollPeriod( 50, function(err) {
  if (err) console.error(err);
} )

rfid.on('ready', function(version) {
  console.log('Ready to read RFID card');

  rfid.on('data', function(card) {
    if (uids[card.uid.toString('hex')]) {
      uids[card.uid.toString('hex')].sound.play();
    } else {
      audio.scream.play();
    }
  });
});

rfid.on('error', function(err) {
  console.error(err);
});

module.exports = {
  rfid
};

// hardcode in some uids
// assign each uid a sound
// rfid.on('data'
// play sound

// ventra: UID: 0430828a725780
// disney: UID: 047af712964f80
// blank: UID: 1bf62d0d
