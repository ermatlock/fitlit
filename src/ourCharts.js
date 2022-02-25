import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
import Hydration from "./Hydration";
import currentHydration from "./scripts";

let hydrationWeekChart;
let sleepWeekChart;

const hydrationChart = document.getElementById("hydrationChart");
const sleepChart = document.getElementById("sleepChart");

const updateHydrationChart = (data) => {
  hydrationWeekChart = new Chart(hydrationChart, {
    type: "bar",
    data: {
      labels: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
      datasets: [
        {
          label: "Hydration in Ounces",
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
            "rgba( 255, 0, 255, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, .8)",
            "rgba(54, 162, 235, .8)",
            "rgba(255, 206, 86, .8)",
            "rgba(75, 192, 192, .8)",
            "rgba(153, 102, 255, .8)",
            "rgba(255, 159, 64, .8)",
            "rgba( 255, 0, 255, .8)",
          ],
          borderWidth: 6,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

const updateSleepChart = (data1, data2) => {
  sleepWeekChart = new Chart(sleepChart, {
    type: "line",
    data: {
      labels: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
      datasets: [
        {
          label: "Sleep Hours",
          data: data1,
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
            "rgba( 255, 0, 255, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, .8)",
            "rgba(54, 162, 235, .8)",
            "rgba(255, 206, 86, .8)",
            "rgba(75, 192, 192, .8)",
            "rgba(153, 102, 255, .8)",
            "rgba(255, 159, 64, .8)",
            "rgba( 255, 0, 255, .8)",
          ],
          borderWidth: 6,
        },
        {
          label: "Sleep Quality",
          data: data2,
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
            "rgba( 255, 0, 255, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, .8)",
            "rgba(54, 162, 235, .8)",
            "rgba(255, 206, 86, .8)",
            "rgba(75, 192, 192, .8)",
            "rgba(153, 102, 255, .8)",
            "rgba(255, 159, 64, .8)",
            "rgba( 255, 0, 255, .8)",
          ],
          borderWidth: 6,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

export { updateHydrationChart, updateSleepChart };
