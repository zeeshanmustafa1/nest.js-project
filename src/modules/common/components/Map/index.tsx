import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';

const defaultContainerStyle = {
  width: '100%',
  height: '500px',
  position: 'absolute',
};

type ContainerStyles = {
  width?: string;
  height: string;
};

interface IMap {
  center: google.maps.LatLngLiteral;
  containerStyle?: ContainerStyles;
  googleMapOptions?: google.maps.MapOptions | undefined;
}

export const Map: React.FC<IMap> = React.memo(
  ({ center, containerStyle, googleMapOptions }) => {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    });

    // const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    //   const bounds = new google.maps.LatLngBounds(center);
    //   map.fitBounds(bounds);
    // }, []);

    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle ?? defaultContainerStyle}
        center={center}
        zoom={18}
        options={googleMapOptions}
        // onLoad={onLoad}
      >
        {center?.lat && center?.lng && (
          <Marker position={{ lat: center.lat, lng: center.lng }} />
        )}
      </GoogleMap>
    ) : (
      <></>
    );
  }
);

Map.displayName = 'Map';
