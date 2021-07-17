import Timer from "./timer.js";

const dataFinal = new Timer("23 October 2021 21:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = dataFinal.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);