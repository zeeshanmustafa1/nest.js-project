import type { AgentLeaderBoard } from '@/__generated__/types.d';

export const getAgentLeaderBoardSlidesData = (
  agentLeaderBoardResolver?: AgentLeaderBoard | null
): ILeaderBoardSlide[] => {
  const leaderboards: ILeaderBoardSlide[] = [];

  const leaderboard: Record<string, ILeaderBoardSlide> = {
    hotDeals: {
      title: 'The Hot List',
      subtitle: 'Top traders this quarter by USD.',
      icon: '/assets/Icon/Colored/Fire.svg',
      brokers: agentLeaderBoardResolver?.hotDeals,
    },
    risingTalent: {
      title: 'Rising Talent',
      subtitle: 'Top traders this quarter by USD.',
      icon: '/assets/Icon/Colored/Leaf.svg',
      brokers: agentLeaderBoardResolver?.risingTalent,
    },
    unicorn: {
      title: 'The Unicorns',
      subtitle: 'Top traders this quarter by USD.',
      icon: '/assets/Icon/Colored/Unicorn.svg',
      brokers: agentLeaderBoardResolver?.unicorn,
    },
    dealJunkie: {
      title: 'Deal Junkies',
      subtitle: 'All times most transactions closed.',
      icon: '/assets/Icon/Colored/DealJunkie.svg',
      brokers: agentLeaderBoardResolver?.dealJunkie,
    },
    whales: {
      title: 'Whales',
      subtitle: 'Top traders this quarter by USD.',
      icon: '/assets/Icon/Colored/Fire.svg',
      brokers: agentLeaderBoardResolver?.whales,
    },
    loanShark: {
      title: 'The Loan Sharks',
      subtitle: 'Top traders this quarter by USD.',
      icon: '/assets/Icon/Colored/Fire.svg',
      brokers: agentLeaderBoardResolver?.loanShark,
    },
    leaseShark: {
      title: 'Lease Beasts',
      subtitle: 'Top traders this quarter by USD.',
      icon: '/assets/Icon/Colored/Fire.svg',
      brokers: agentLeaderBoardResolver?.leaseShark,
    },
  };

  Object.keys(agentLeaderBoardResolver ?? {})?.forEach(
    (lead) =>
      leaderboard[lead]?.brokers?.length &&
      leaderboards.push(leaderboard[lead] as ILeaderBoardSlide)
  );

  return leaderboards;
};
