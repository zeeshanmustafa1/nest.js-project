import type { Deal } from '@/__generated__/types.d';

export const getDealStats = (deal: Deal) => {
  const stats: Record<
    string,
    { value: string; value2?: string; image: string }
  > = {
    Location: {
      value: deal?.properties
        ? (deal?.properties[0]?.displayAddress as string)
        : '',
      image: '/assets/Icon/Colored/Location.svg',
    },
    'Sold Value': {
      value:
        deal?.salePrice &&
        parseInt(deal?.salePrice, 10) &&
        !deal?.transactionType?.toLowerCase()?.includes('loan')
          ? `$${parseInt(deal?.salePrice, 10).toLocaleString()}`
          : '',
      value2: deal?.pricePerSquareFoot
        ? `${parseInt(deal?.pricePerSquareFoot, 10).toLocaleString()} PPSF`
        : '',
      image: '/assets/Icon/Colored/SoldValue.svg',
    },
    'Asset Type': {
      value: deal?.assetType ?? '',
      image: '/assets/Icon/Colored/AssetType.svg',
    },
    Area: {
      value:
        deal?.totalSquareFootageDeal &&
        parseInt(deal?.totalSquareFootageDeal, 10) &&
        !deal?.transactionType?.toLowerCase()?.includes('loan')
          ? `${parseInt(deal?.totalSquareFootageDeal, 10).toLocaleString()} SF`
          : '',
      image: '/assets/Icon/Colored/Stack.svg',
    },
    Parties: {
      value: deal?.parties ?? '',
      image: '/assets/Icon/Colored/User.svg',
    },
  };

  return stats;
};
