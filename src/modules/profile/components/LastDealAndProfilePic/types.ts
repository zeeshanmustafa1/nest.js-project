import type { Deal, Maybe } from '@/__generated__/types.d';

export interface ProfileLastDealAndProfilePicProps {
  pictureUrl: string | undefined | null;
  type: 'Agent' | 'Agency' | 'Property';
  title: string | undefined | null;
  lastClosing?: string | undefined | null;
  lastDeal?: Maybe<Deal>;
  isStaticImage?: boolean;
}
