import 'chart.js/auto';

import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = (slug: any) => {
  const [chartsAssetData, setChartsAssetData] = useState({
    labels: [] as any,
    datasets: [] as any,
  });
  const [chartsLocationData, setChartsLocationData] = useState({
    labels: [] as any,
    datasets: [] as any,
  });

  const locationChartBg = [
    'rgba(77, 215, 138, 1)',
    'rgba(124, 166, 216, 1)',
    'rgba(129, 212, 188, 1)',
    'rgba(74, 99, 148, 1)',
    'rgba(219, 54, 180,1)',
    'rgba(140, 129, 7,1)',
    'rgba(71, 27, 34,1)',
    'rgba(219, 54, 180,1)',
    'rgba(27, 34, 48,1)',
    'rgba(127, 58, 81,1)',
    'rgba(16, 168, 102,1)',
    'rgba(68, 61, 71,1)',
  ];

  const assetChartBg = [
    'rgba(124, 166, 216, 1)',
    'rgba(129, 212, 188, 1)',
    'rgba(77, 215, 138, 1)',
    'rgba(74, 99, 148, 1)',
    'rgba(219, 54, 180,1)',
    'rgba(140, 129, 7,1)',
    'rgba(71, 27, 34,1)',
    'rgba(219, 54, 180,1)',
    'rgba(27, 34, 48,1)',
    'rgba(127, 58, 81,1)',
    'rgba(16, 168, 102,1)',
    'rgba(68, 61, 71,1)',
  ];

  let url = '';

  if (slug.companyType) {
    url = '/api/companyGraphStats';
  } else {
    url = '/api/brokerGraphStats';
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${url}/${slug.slug}/`, {
        method: 'POST',
        body: JSON.stringify({
          companyType: slug.companyType as String,
        }),
      }).then((res) => res.json());
      const { brokerStatisticsGraph } = response.data;
      const { companyStatisticsGraph } = response.data;
      const data = companyStatisticsGraph || brokerStatisticsGraph;

      const assetChartValues: Array<number> = data.assetClassPercentage.filter(
        (asset: any) => asset[1] >= 1
      );

      const assetChartLabels: Array<String> = assetChartValues.map(
        (label: any) => label[0]
      );

      const assetChartPercentages: Array<String> = assetChartValues.map(
        (label: any) => label[1]
      );

      setChartsAssetData({
        labels: assetChartLabels,
        datasets: [
          {
            data: assetChartPercentages,
            backgroundColor: assetChartBg,
          },
        ],
      });

      const locationChartValues: Array<number> = data.locationPercentage.filter(
        (asset: any) => asset[1] >= 1
      );

      const locationChartLabels: Array<String> = locationChartValues.map(
        (label: any) => label[0]
      );

      const locationChartPercentages: Array<number> = locationChartValues.map(
        (label: any) => label[1]
      );

      setChartsLocationData({
        labels: locationChartLabels,
        datasets: [
          {
            data: locationChartPercentages,
            backgroundColor: locationChartBg,
          },
        ],
      });
    };

    fetchData();
  }, [slug]);
  return (
    <div>
      <Box
        display={['flex', 'flex', 'flex']}
        flexDirection={['column', 'column', 'row']}
        marginBottom="30px"
        maxWidth={['600px', '600px', '800px']}
      >
        <Box
          width={['100%', '100%', '50%']}
          display={['flex', 'flex', 'flex']}
          justifyContent={['flex-start', 'flex-start', 'flex-start']}
        >
          <Pie
            data={chartsAssetData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              layout: {
                autoPadding: true,
                padding: {
                  top: 20,
                },
              },
              plugins: {
                legend: {
                  position: 'right',
                  align: 'end',
                  labels: {
                    boxWidth: 15,
                    padding: 10,
                  },
                },
                title: {
                  position: 'top',
                  display: true,
                  text: 'Asset',
                  padding: -20,
                  font: {
                    size: 20,
                  },
                },
              },
            }}
          />
        </Box>
        <Box
          width={['100%', '100%', '50%']}
          display={['flex', 'flex', 'flex']}
          justifyContent={['flex-start', 'flex-start', 'flex-start']}
        >
          <Pie
            data={chartsLocationData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              layout: {
                autoPadding: true,
                padding: {
                  top: 20,
                },
              },
              plugins: {
                legend: {
                  position: 'right',
                  align: 'end',
                  labels: {
                    boxWidth: 15,
                    padding: 10,
                  },
                },
                title: {
                  position: 'top',
                  display: true,
                  text: 'Location',
                  padding: -20,
                  font: {
                    size: 20,
                  },
                },
              },
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default PieChart;
