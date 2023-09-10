import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  import ChartDataLabels from "chartjs-plugin-datalabels";
  import {faker} from '@faker-js/faker';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
  );
  

export const Sales = () => {
    const options = {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Sales',
          },
        },
      };
      
      const labels = ['Champion', 'Loyal Customer', 'Recent Customer', 'Promising', 'Cant lose', 'Lost', 'At Risk'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(15, 177, 42)',
            backgroundColor: 'rgba(60, 236, 16, 0.87)',
          }
        ],
      };
    return (
       <div style={{"width":"500px"}} className="bg-slate-100 rounded-lg">
        <Bar  options={options} data={data} />
       </div>
        
    )
}
