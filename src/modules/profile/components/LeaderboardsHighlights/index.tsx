import Image from 'next/image';

import { RenderIf, Tag } from '@/modules/common/components';

import * as S from './styles';

export const ProfileLeaderboardsHighlights: React.FC<{
  title: string;
  tags?: Array<string> | undefined;
  scrollTo?: Function;
  isStatHighlight?: boolean;
}> = ({ title, tags, scrollTo, isStatHighlight = true }) => {
  const getIcon = (tag: string): string => {
    if (tag?.toLowerCase().includes('deal junkie')) {
      return '/assets/Icon/Colored/DealJunkie.svg';
    }
    if (tag?.toLowerCase().includes('hot deal')) {
      return '/assets/Icon/Colored/Fire.svg';
    }
    if (tag?.toLowerCase().includes('rising talent')) {
      return '/assets/Icon/Colored/Leaf.svg';
    }

    return '';
  };

  return (
    <S.LeaderboardHighlightsWrapper
      aria-label={`${title}'s leaderboard positions`}
    >
      {tags?.map((tag) => (
        <RenderIf condition={tag && !tag.includes('#0')} key={tag}>
          <Tag
            isStatHighlight={isStatHighlight}
            onClick={() => scrollTo && scrollTo()}
            text={tag}
            icon={
              getIcon(tag) ? (
                <Image
                  alt={tag}
                  src={getIcon(tag)}
                  width={16}
                  height={16}
                  loading="lazy"
                />
              ) : null
            }
          />
        </RenderIf>
      ))}
    </S.LeaderboardHighlightsWrapper>
  );
};
