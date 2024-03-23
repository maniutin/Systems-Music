let audioContext = new AudioContext();

function startLoop(audioBuffer, pan = 0, rate = 1) {
  let sourceNode = audioContext.createBufferSource();
  let pannerNode = audioContext.createStereoPanner();

  sourceNode.buffer = audioBuffer;
  sourceNode.loop = true;
  sourceNode.loopStart = 2.8;
  sourceNode.loopEnd = 3.6;
  sourceNode.playbackRate.value = rate;
  pannerNode.pan.value = pan;

  sourceNode.connect(pannerNode);
  sourceNode.connect(audioContext.destination);

  sourceNode.start(0, 3);
}

fetch("itsgonnarain.wav")
  .then((response) => response.arrayBuffer())
  .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
  .then((audioBuffer) => {
    $("#start").click(function () {
      startLoop(audioBuffer, -1);
      startLoop(audioBuffer, 1, 1.002);
    });
  })
  .catch((e) => console.error(e));
