
import PropTypes from "prop-types"
import { Pie } from 'react-chartjs-2';
export const BounceRate = ({result}) => {
    
    const data = {
        labels: result.map((data)=>data.campaignType),
        datasets: [
          {
            label: 'No. Of Campaign',
            data: result.map((data)=>data.total),
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
            <h1 className="text-black text-lg font-bold">Email Campaign Type</h1>
            <Pie data={data} width={300}/>
        </div>

    )
}
BounceRate.propTypes = {
  result:PropTypes.array.isRequired
  }
