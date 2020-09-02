import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

let cal = new Grid({
  columns: [
    "",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  data: []
}).render(document.getElementById("app"));

let time = 0;

for (let i = 0; i < 12; i++) {
  cal.config.data.push(new Array(8));

  cal.config.data[i].fill("", 1);

  cal.config.data[i][0] = `${time < 10 ? "0" : ""}${time}:00 - ${
    time + 2 < 10 ? "0" : ""
  }${time + 2}:00`;

  time += 2;
}

/* ----------- Random event --------------- */

const getRandomNums = (a, b) => {
  // Random row, Random column
  return [Math.floor(Math.random() * a), Math.ceil(Math.random() * b)];
};

const el = document.createElement("div");
el.setAttribute("class", "todo");
el.style.cursor = "pointer";
el.innerHTML = "Code";

cal.config.data[getRandomNums(12, 7)[0]][getRandomNums(12, 7)[1]] = el;
