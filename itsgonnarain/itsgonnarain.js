let audioContext = new AudioContext();

function startLoop(audioBuffer) {
  let sourceNode = audioContext.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.loop = true;
  sourceNode.loopStart = 2.8;
  sourceNode.loopEnd = 3.6;
  sourceNode.connect(audioContext.destination);
  sourceNode.start(0, 3);
}

fetch("itsgonnarain.wav")
  .then((response) => response.arrayBuffer())
  .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
  .then((audioBuffer) => {
    $("#start").click(function () {
      startLoop(audioBuffer);
      startLoop(audioBuffer);
    });
  })
  .catch((e) => console.error(e));
