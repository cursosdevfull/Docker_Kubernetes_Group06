const msgBackend1 = document.getElementById("msgBackend1");
const msgBackend2 = document.getElementById("msgBackend2");

msgBackend1.textContent = "Mensaje desde backend 1";
msgBackend2.textContent = "Mensaje desde backend 2";

fetch("/api/config")
  .then((res) => res.json())
  .then((urlBackend1) => {
    /** */
    fetch(urlBackend1.backend1)
      .then((res) => res.json())
      .then((messages) => {
        msgBackend1.textContent = messages.msgBackend1;
        msgBackend2.textContent = messages.msgBackend2;
      });
    /** */
  });
