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
              '#649445',
              '#48705c',
              '#2a4e40',
            ],
            borderColor: [
              '#649445',
              '#48705c',
              '#2a4e40',
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