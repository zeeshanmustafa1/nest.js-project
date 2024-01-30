import 'mapbox-gl/dist/mapbox-gl.css';

import type { FeatureCollection, Point } from 'geojson';
import type { LngLatLike, Map } from 'mapbox-gl';
import mapboxgl from 'mapbox-gl';
import type { LegacyRef } from 'react';
import React, { useEffect, useRef } from 'react';
import { renderToString } from 'react-dom/server';

import { routes } from '@/constants/routes';

import * as S from './styles';

const { NEXT_PUBLIC_MAPBOX_API_TOKEN } = process.env;

mapboxgl.accessToken = NEXT_PUBLIC_MAPBOX_API_TOKEN as string;

export const MapBox: React.FC<{ data: FeatureCollection<Point> }> = ({
  data,
}) => {
  const mapContainerRef = useRef<HTMLElement | string>('');

  // Initialize map when component mounts
  useEffect(() => {
    const map: Map = new mapboxgl.Map({
      container: mapContainerRef?.current,
      style: 'mapbox://styles/mapbox/light-v11',
      // center: data?.features[0]?.geometry?.coordinates as LngLatLike,
      center:
        data.features && data?.features[0]?.geometry?.coordinates
          ? (data?.features[0]?.geometry?.coordinates as LngLatLike) || [
              -73.9792148, 40.6778809,
            ]
          : [-73.9792148, 40.6778809],
      zoom: 5,
    });

    // map.on('render', () => map.resize());

    map.on('load', () => {
      map.resize();
      // Add a new source from our GeoJSON data and
      // set the 'cluster' option to true. GL-JS will
      // add the point_count property to your source data.
      map.addSource('deals', {
        type: 'geojson',
        // data: geoJson as FeatureCollection<Point>,
        data,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
      });

      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'deals',
        filter: ['has', 'point_count'],
        paint: {
          // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
          // with three steps to implement three types of circles:
          //   * Blue, 20px circles when point count is less than 100
          //   * Yellow, 30px circles when point count is between 100 and 750
          //   * Pink, 40px circles when point count is greater than or equal to 750
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#51bbd6',
            100,
            '#f1f075',
            750,
            '#f28cb1',
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            100,
            30,
            750,
            40,
          ],
        },
      });

      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'deals',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12,
        },
      });

      map.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'deals',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#11b4da',
          'circle-radius': 8,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff',
        },
      });

      // inspect a cluster on click
      map.on('click', 'clusters', (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['clusters'],
        });
        const clusterId = features[0]?.properties?.cluster_id;
        const source: mapboxgl.GeoJSONSource = map.getSource(
          'deals'
        ) as mapboxgl.GeoJSONSource;
        source.getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) return;

          map.easeTo({
            center: (features[0]?.geometry as Point)?.coordinates as LngLatLike,
            zoom,
          });
        });
      });

      // When a click event occurs on a feature in
      // the unclustered-point layer, open a popup at
      // the location of the feature, with
      // description HTML from its properties.
      map.on('click', 'unclustered-point', (e) => {
        const coordinates =
          e.features &&
          (e?.features[0]?.geometry as Point)?.coordinates?.slice();
        const title = e.features && e.features[0]?.properties?.title;
        const salePrice = e.features && e.features[0]?.properties?.salePrice;
        const assetType = e.features && e.features[0]?.properties?.assetType;
        const image = e.features && e.features[0]?.properties?.image;
        const slug = e.features && e.features[0]?.properties?.slug;
        const feed = e.features && e.features[0]?.properties?.feed;
        const transactionType =
          e.features && e.features[0]?.properties?.transactionType;

        // Ensure that if the map is zoomed out such that
        // multiple copies of the feature are visible, the
        // popup appears over the copy being pointed to.
        if (coordinates && coordinates[0])
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

        new mapboxgl.Popup()
          .setLngLat(coordinates as LngLatLike)
          .setHTML(
            renderToString(
              <div style={{ display: 'flex', padding: '5px' }}>
                <a
                  href={
                    slug && feed && transactionType
                      ? routes.transactions.getTransactionHref(
                          feed?.toLowerCase(),
                          transactionType?.toLowerCase(),
                          slug
                        )
                      : '/deals'
                  }
                  style={{ borderRadius: '50px' }}
                >
                  <img
                    src={image}
                    alt={title}
                    height={100}
                    width={100}
                    style={{
                      border: '1px solid transparent',
                      borderRadius: '5%',
                    }}
                  />
                </a>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: 10,
                  }}
                >
                  <a
                    href={
                      slug && feed && transactionType
                        ? routes.transactions.getTransactionHref(
                            feed,
                            transactionType,
                            slug
                          )
                        : '/deals'
                    }
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <p style={{ fontSize: 13, margin: 0, fontWeight: 500 }}>
                      {title}
                    </p>
                  </a>
                  <p style={{ fontSize: 13, margin: 0, fontWeight: 500 }}>
                    {salePrice}
                  </p>
                  <p style={{ fontSize: 13, margin: 0, fontWeight: 500 }}>
                    {assetType}
                  </p>
                </div>
              </div>
            )
          )
          .addTo(map);
      });

      map.on('mouseenter', 'clusters', () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'clusters', () => {
        map.getCanvas().style.cursor = '';
      });
    });

    // Clean up on unmount
    return () => map.remove();
  }, [data]);

  return <S.MapContainer ref={mapContainerRef as LegacyRef<HTMLDivElement>} />;
};
