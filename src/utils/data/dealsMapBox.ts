import type { FeatureCollection, Point } from 'geojson';

import type { Deal } from '@/__generated__/types.d';

export const getMapBoxDataForDeals = (
  deals: Deal[]
): FeatureCollection<Point> => {
  return {
    type: 'FeatureCollection',
    features: deals?.map((deal, index) => {
      const lng: number = deal?.properties
        ? deal?.properties[0]?.longitude ?? -87.59
        : -87.59;
      const lat: number = deal?.properties
        ? deal?.properties[0]?.latitude ?? 41.87
        : 41.87;
      return {
        type: 'Feature',
        properties: {
          id: deal?.id || `${index}-${deal?.title}`,
          image:
            deal?.mainImage ||
            'https://traded.co/wp-content/uploads/2022/11/1220_decatur_street-300x300.jpg',
          title: deal?.title || 'Unavailable',
          salePrice: deal?.salePrice
            ? `$${parseInt(deal?.salePrice, 10).toLocaleString()}`
            : 'Unavailable',
          assetType: deal?.assetType || 'Unavailable',
          feed: deal?.feeds && deal?.feeds[0],
          transactionType: deal?.transactionType,
          slug: deal?.slug,
        },
        geometry: {
          type: 'Point',
          coordinates: [lng, lat],
        },
      };
    }),
  };
};
