import { ResponsiveChoropleth } from "@nivo/geo";
import {geoFeatures} from '../../data/mockDataGeo' 
import {mockGeographyData as data} from '../../data/mockData'
export const BottomChart = () => {
  const color="#c9a0dc";
  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: color,
            },
          },
          legend: {
            text: {
              fill: color,
            },
          },
          ticks: {
            line: {
              stroke:color,
              strokeWidth: 1,
            },
            text: {
              fill: color,
            },
          },
        },
        legends: {
          text: {
            fill: color,
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      legends={[
        {
          anchor: 'bottom-left',
          direction: 'column',
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: 'left-to-right',
          itemTextColor: '#444444',
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000000',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  )
}
