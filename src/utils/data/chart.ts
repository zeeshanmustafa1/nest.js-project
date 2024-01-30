import moment from 'moment';

import type { Deal, Graph } from '@/__generated__/types.d';
import theme from '@/theme';

import type { StatisticsSectionProps } from '../../modules/profile/types';

export const getAgencyChartData = ({
  agencyChartData,
}: StatisticsSectionProps) => {
  const dataMapper: ChartData[] = [];
  const xAxis: Array<String> = [];

  if (agencyChartData) {
    Object.keys(agencyChartData).forEach((chartDataName: string) => {
      if (chartDataName !== '__typename') {
        const chartDataItem = agencyChartData[chartDataName as keyof Graph];
        if (chartDataItem) {
          const generatedAxis: Axis[] = (chartDataItem as String[][])?.map(
            (item: String[]) => {
              if (!xAxis.includes(item[0] as string))
                xAxis.push(item[0] as string);
              return { x: item[0] as string, y: item[1] as string };
            }
          );

          generatedAxis.sort(
            (a: Axis, b: Axis) =>
              (new Date(a?.x) as any) - (new Date(b?.x) as any)
          );

          dataMapper.push({ name: chartDataName, charData: generatedAxis });
        }
      }
    });
  }

  xAxis.sort(
    (a: String, b: String) =>
      (new Date(a as string) as any) - (new Date(b as string) as any)
  );

  return { dataMapper, xAxis };
};

const getAgencyChartColors = () => {
  return {
    deals: {
      color: '#ffc107',
    },
    sale: {
      color: '#20c997',
    },
    agents: {
      color: '#6610f2',
    },
    lease: {
      color: '#dc3545',
    },
    loan: {
      color: '#fd7e14',
    },
    volume: {
      color: '#17a2b8',
    },
  };
};

export const getAgencyDatasets = (dataMapper: ChartData[]) => {
  const colors = getAgencyChartColors();
  return dataMapper?.map((dataset: ChartData) => {
    return {
      fill: true,
      lineTension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: '#ffffff',
      pointBorderColor: colors[dataset.name as keyof ChartColors].color,
      pointBorderWidth: 4,

      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: colors[dataset.name as keyof ChartColors].color,
      pointHoverBorderWidth: 5,
      pointHoverRadius: 7,

      borderColor: colors[dataset.name as keyof ChartColors].color,
      label: dataset.name,
      data: dataset.charData,
    };
  });
};

export const getAgentDatasets = (dataMapper: ChartData[]) => {
  return dataMapper?.map((dataset: ChartData) => {
    return {
      fill: true,
      lineTension: 0,
      pointRadius: 3,
      pointBackgroundColor: '#ffffff',
      pointBorderColor: theme.palette.primary.dark,
      pointBorderWidth: 3,

      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: theme.palette.primary.dark,
      pointHoverBorderWidth: 5,
      pointHoverRadius: 7,

      borderColor: theme.palette.primary.dark,
      label: dataset.name,
      data: dataset.charData,
      parsing: true,
    };
  });
};

export const getAgentChartData = (deals: Deal[] | undefined) => {
  const dataMapper: ChartData[] = [];
  const xAxis: Array<String> = [];

  if (deals) {
    const generatedAxis: Axis[] = deals?.map((deal) => {
      return {
        x: moment(deal?.closingDate).format('L'),
        y: deal?.salePrice,
        mainImage: deal?.mainImage,
        feed: deal?.feeds ? deal?.feeds[0] : 'feed',
        transactionType: deal?.transactionType,
        slug: deal?.slug,
      } as Axis;
    });

    generatedAxis.sort(
      (a: Axis, b: Axis) => (new Date(a?.x) as any) - (new Date(b?.x) as any)
    );

    // const firstDate = new Date(generatedAxis[0]?.x);
    // console.log(new Date(firstDate.setMonth(firstDate.getMonth() + 3)));

    // xAxis.sort(
    //   (a: String, b: String) =>
    //     (new Date(a as string) as any) - (new Date(b as string) as any)
    // );

    // if (generatedAxis) {
    //   const firstDate = generatedAxis[0]?.x;
    //   const lastDate = generatedAxis[generatedAxis.length - 1]?.x;

    //   if (firstDate && lastDate) {
    //     for (
    //       let i = new Date(firstDate);
    //       i <= new Date(lastDate);
    //       new Date(i.setMonth(i.getMonth() + 3))
    //     ) {
    //       xAxis.push(moment(i).format('L'));
    //     }
    //   }
    // }

    dataMapper.push({ name: 'deals', charData: generatedAxis });
  }

  return { dataMapper, xAxis };
};
