let synth = new Tone.MonoSynth({
  oscillator: { type: "sawtooth" },
  filterEnvelope: {
    baseFrequency: 200,
    octaves: 2,
    attack: 0,
    decay: 0,
  },
});
synth.toMaster();
synth.triggerAttackRelease("C4", 1);
