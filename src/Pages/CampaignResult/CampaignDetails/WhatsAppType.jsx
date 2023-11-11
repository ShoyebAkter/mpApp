import { Pie } from 'react-chartjs-2';
import PropTypes from "prop-types"
export const WhatsAppType = ({whatsAppResult}) => {
    const data = {
        labels: whatsAppResult.map((data)=>data.campaignType),
        datasets: [
          {
            label: 'No. Of Campaign',
            data: whatsAppResult.map((data)=>data.total),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div id="chart">
            <h1 className="text-black text-lg font-bold">Whats App Campaign Type</h1>
            <Pie data={data} width={300}/>
        </div>
  )
}
WhatsAppType.propTypes = {
  whatsAppResult:PropTypes.array.isRequired,
  }