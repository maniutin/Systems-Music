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

let synth = new Tone.DuoSynth({
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
synth.toMaster();

new Tone.Loop((time) => {
  synth.triggerAttackRelease("C4", 1, time);
}, "1m").start();

Tone.Transport.start();
