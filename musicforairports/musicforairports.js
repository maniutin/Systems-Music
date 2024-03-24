const SAMPLE_LIBRARY = {
  "Grand Piano": [
    {
      note: "A",
      octave: 4,
      file: "/Users/maniutin/Desktop/Me Making Music/Samples/Orchestral/Sonatina Symphonic Orchestra Samples/Grand Piano/piano-f-a4.wav",
    },
    {
      note: "A",
      octave: 5,
      file: "/Users/maniutin/Desktop/Me Making Music/Samples/Orchestral/Sonatina Symphonic Orchestra Samples/Grand Piano/piano-f-a5.wav",
    },
    {
      note: "A",
      octave: 6,
      file: "/Users/maniutin/Desktop/Me Making Music/Samples/Orchestral/Sonatina Symphonic Orchestra Samples/Grand Piano/piano-f-a6.wav",
    },
    {
      note: "C",
      octave: 4,
      file: "/Users/maniutin/Desktop/Me Making Music/Samples/Orchestral/Sonatina Symphonic Orchestra Samples/Grand Piano/piano-f-c4.wav",
    },
    {
      note: "C",
      octave: 5,
      file: "/Users/maniutin/Desktop/Me Making Music/Samples/Orchestral/Sonatina Symphonic Orchestra Samples/Grand Piano/piano-f-c5.wav",
    },
    {
      note: "C",
      octave: 6,
      file: "/Users/maniutin/Desktop/Me Making Music/Samples/Orchestral/Sonatina Symphonic Orchestra Samples/Grand Piano/piano-f-c6.wav",
    },
    {
      note: "D#",
      octave: 4,
      file: "/Users/maniutin/Desktop/Me Making Music/Samples/Orchestral/Sonatina Symphonic Orchestra Samples/Grand Piano/piano-f-d#4.wav",
    },
    {
      note: "D#",
      octave: 5,
      file: "/Users/maniutin/Desktop/Me Making Music/Samples/Orchestral/Sonatina Symphonic Orchestra Samples/Grand Piano/piano-f-d#5.wav",
    },
    {
      note: "D#",
      octave: 6,
      file: "/Users/maniutin/Desktop/Me Making Music/Samples/Orchestral/Sonatina Symphonic Orchestra Samples/Grand Piano/piano-f-d#6.wav",
    },
    {
      note: "F#",
      octave: 4,
      file: "/Users/maniutin/Desktop/Me Making Music/Samples/Orchestral/Sonatina Symphonic Orchestra Samples/Grand Piano/piano-f-f#4.wav",
    },
    {
      note: "F#",
      octave: 5,
      file: "/Users/maniutin/Desktop/Me Making Music/Samples/Orchestral/Sonatina Symphonic Orchestra Samples/Grand Piano/piano-f-f#5.wav",
    },
    {
      note: "F#",
      octave: 6,
      file: "/Users/maniutin/Desktop/Me Making Music/Samples/Orchestral/Sonatina Symphonic Orchestra Samples/Grand Piano/piano-f-f#6.wav",
    },
  ],
};

function getSample(instrument, noteAndOctave) {
  let [, requestedNote, requestedOctave] = /^(\w[b#]?)(\d)$/.exec(
    noteAndOctave
  );
  requestedOctave = parseInt(requestedOctave, 10);
}
