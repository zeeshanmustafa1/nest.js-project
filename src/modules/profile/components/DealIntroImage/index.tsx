import { Box } from '@mui/material';
import Image from 'next/image';

import { RenderIf } from '@/modules/common/components';

import { DealIntroImageContainer, DealIntroImageWrapper } from './styles';

export interface DealintroImageProps {
  image: string;
  alt: string;
}

export const DealIntroImage: React.FC<DealintroImageProps> = ({
  image,
  alt,
}) => {
  const images = ['jpeg', 'jpg', 'gif', 'png'];
  const videos = ['mp4', '3gp', 'ogg'];

  return (
    <RenderIf condition={image}>
      <DealIntroImageContainer>
        <Box
          position="absolute"
          left={['20%', '30%', '33%', '33%']}
          top={-70}
          zIndex={1}
        >
          <Image
            src="/assets/Shapes/Star1.svg"
            alt="Dots and stars shapes"
            width={90}
            height={90}
          />
        </Box>
        <Box
          position="absolute"
          left={['12%', '25%', '30%', '30%']}
          top={-50}
          zIndex={-1}
        >
          <Image
            src="/assets/Shapes/AgentAster.svg"
            alt="Asterick"
            width={50}
            height={50}
          />
        </Box>
        <DealIntroImageWrapper>
          <RenderIf
            condition={images.some((el) => (image as string).includes(el))}
          >
            <Image
              src={image as string}
              alt={alt}
              width="100%"
              height="100%"
              layout="responsive"
              style={{ borderRadius: '12px', border: 'black' }}
            />
          </RenderIf>
          <RenderIf
            condition={videos.some((el) => (image as string).includes(el))}
          >
            <video
              src={image as string}
              width="100%"
              height="100%"
              autoPlay={true}
              loop={true}
              muted={true}
              controls={false}
            />
          </RenderIf>
        </DealIntroImageWrapper>
        <Box
          position="absolute"
          display={['none', 'block', 'block', 'block']}
          right={[0, '10%', '15%', '22%']}
          bottom={-10}
          sx={{ transform: 'rotate(260deg)' }}
        >
          <Image
            src="/assets/Arrows/PointingArrow.svg"
            alt="PointingArrow"
            width={150}
            height={150}
          />
        </Box>
      </DealIntroImageContainer>
    </RenderIf>
  );
};
