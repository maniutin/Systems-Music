let audioContext = new AudioContext();

fetch("itsgonnarain.wav")
  .then((response) => response.arrayBuffer())
  .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
  .then((audioBuffer) => {
    let sourceNode = audioContext.createBufferSource();
    sourceNode.buffer = audioBuffer;
    sourceNode.loop = true;
    sourceNode.loopStart = 2.8;
    sourceNode.loopEnd = 3.6;
    sourceNode.connect(audioContext.destination);
    $("#start").click(function () {
      sourceNode.start(0, 3);
    });
  })
  .catch((e) => console.error(e));
