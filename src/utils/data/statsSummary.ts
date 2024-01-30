import type { ProfileSectionProps } from '@/modules/profile/types';

const formatNumber = (value: string) => {
  const val: number = parseInt(value, 10);

  return `${Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 0,
  }).format(val)}`;
};

export const getStatisticSummaryData = ({
  broker,
  agency,
}: ProfileSectionProps): Statistics[] => {
  const totalVolume = agency?.totalVolume || broker?.totalVolume;
  const totalSold = broker?.totalSold || agency?.totalSold;
  const totalFinanced = broker?.totalFinanced || agency?.totalFinanced;
  const closed = broker?.dealsCount || agency?.dealsCount;
  const totalSquareFootage =
    broker?.totalSquareFootage || agency?.totalSquareFootage;
  const leased = agency?.leaseDealsCount;

  return [
    {
      value:
        !totalVolume ||
        totalVolume === '0' ||
        totalVolume === 0 ||
        totalSold === '0' ||
        totalFinanced === '0' ||
        !totalSold ||
        !totalFinanced
          ? null
          : `$${formatNumber(`${totalVolume}`)}`,
      label: 'VOLUME',
    },
    {
      value:
        !totalSold || totalSold === '0' || totalSold === 0
          ? null
          : `$${formatNumber(`${totalSold}`)}`,
      label: 'SOLD',
    },
    {
      value:
        !totalFinanced || totalFinanced === '0' || totalFinanced === 0
          ? null
          : `$${formatNumber(`${totalFinanced}`)}`,
      label: 'FINANCED',
    },
    {
      value: !leased || leased === '0' ? null : `${formatNumber(`${leased}`)}`,
      label: 'LEASED',
    },
    {
      value: !closed || closed === 0 ? null : `${formatNumber(`${closed}`)}`,
      label: 'CLOSED',
    },
    {
      value:
        !totalSquareFootage ||
        totalSquareFootage === '0' ||
        totalSquareFootage === 0
          ? null
          : `${formatNumber(`${totalSquareFootage}`)}`,
      label: 'AREA',
    },
  ];
};
