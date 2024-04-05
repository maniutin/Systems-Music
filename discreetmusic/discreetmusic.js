Tone.Transport.bpm.value = 240;

function makeSynth() {
  let envelope = {
    attack: 0.1,
    release: 4,
    releaseCurve: "linear",
  };

  let filterEnvelope = {
    baseFrequency: 200,
    octaves: 2,
    attack: 0,
    decay: 0,
    release: 1000,
  };
  return new Tone.DuoSynth({
    harmonicity: 1,
    voice0: {
      oscillator: { type: "sawtooth" },
      envelope,
      filterEnvelope,
    },
    voice1: {
      oscillator: { type: "sine" },
      envelope,
      filterEnvelope,
    },
    vibratoRate: 0.5,
    vibratoAmount: 0.1,
  });
}

let leftSynth = makeSynth();
let rightSynth = makeSynth();

let leftPanner = new Tone.Panner(-0.5).toMaster();
let rightPanner = new Tone.Panner(0.5).toMaster();

leftSynth.connect(leftPanner);
rightSynth.connect(rightPanner);
