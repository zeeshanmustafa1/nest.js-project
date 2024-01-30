import Image from 'next/image';
import React from 'react';

interface MediaFrameProps {
  value: string;
  width: number | string;
  height: number | string;
  style: React.CSSProperties;
  alt?: string;
}

export const isImage = (value: string): boolean => {
  const images = ['jpeg', 'jpg', 'gif', 'png'];
  return Boolean(value && images.some((el) => value.includes(el)));
};

export const isVideo = (value: string): boolean => {
  const videos = ['mp4', '3gp', 'ogg'];
  return Boolean(value && videos.some((el) => value.includes(el)));
};

export const MediaFrame: React.FC<MediaFrameProps> = ({
  value,
  width = 100,
  height = 100,
  style,
  alt,
}) => {
  if (isVideo(value)) {
    return (
      <video
        src={value}
        width={width}
        height={height}
        style={style}
        autoPlay={true}
        loop={true}
        muted={true}
        controls={false}
      />
    );
  }

  if (isImage(value)) {
    return (
      <Image
        src={value}
        alt={alt}
        width={width}
        height={height}
        objectFit="contain"
        priority
        style={style}
      />
    );
  }

  return null;
};
