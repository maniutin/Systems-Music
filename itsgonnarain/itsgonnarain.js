let audioContext = new AudioContext();

fetch("itsgonnarain.wav")
  .then((response) => response.arrayBuffer())
  .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
  .then((audioBuffer) => {
    let sourceNode = audioContext.createBufferSource();
    sourceNode.buffer = audioBuffer;
    sourceNode.connect(audioContext.destination);
    $("#start").click(function () {
      sourceNode.start(0, 3);
    });
  })
  .catch((e) => console.error(e));
