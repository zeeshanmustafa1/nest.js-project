import { render, screen } from '@testing-library/react';

import type { Company } from '@/__generated__/types.d';
import TradedHomepage from '@/pages';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('TradedHomepage page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      const brokerRows: IBrokerRow[] = [];
      const partnerAgencies: Company[] = [];
      const recentActivity: IRecentActivity = {
        recentLeases: [],
        recentLoans: [],
        recentSales: [],
      };

      render(
        <TradedHomepage
          brokerRows={brokerRows}
          recentActivity={recentActivity}
          partnerAgencies={partnerAgencies}
        />
      );

      const heading = screen.getByRole('heading', {
        name: /We post CRE transactions and spotlight the players involved./,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
