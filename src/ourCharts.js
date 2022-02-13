import { Chart, registerables } from 'chart.js';
import promiseALL from "./scripts.js"
Chart.register(...registerables);
export {chart1}

const chart1 = (location, data) => {
  const chart = new Chart (location, {

   labels: labels,
   datasets: [{
     label: 'My First dataset',
     backgroundColor: 'rgb(255, 99, 132)',
     borderColor: 'rgb(255, 99, 132)',
     data: [0, 10, 5, 2, 20, 30, 45],
   }]


})
}
