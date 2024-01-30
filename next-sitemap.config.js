/* eslint-disable no-console */
/** @type {import('next-sitemap').IConfig} */
const fetch = require('node-fetch');

// Default code you can customize according to your requirements.
module.exports = {
  siteUrl: process.env.NEXT_SITE_URL || 'https://traded.co/',
  generateRobotsTxt: false, // (optional)
  additionalPaths: async () => {
    const result = [];

    try {
      // Agents Sitemap
      let agents = await fetch(process.env.GRAPHQL_API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GRAPHQL_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `{
          brokers(page: 0, limit: 20000) {
            nodes {
              slug
              updatedAt
            }
          }
        }`,
        }),
      });
      agents = await agents.json();
      agents = agents?.data?.brokers?.nodes;

      agents?.forEach((agent) =>
        result.push({
          loc: `/agent/${agent?.slug}`,
          // changefreq: 'daily',
          // priority: 0.7,
          lastmod: agent?.updatedAt,
        })
      );
    } catch {
      console.log('Agents Sitemap Crashed');
    }

    try {
      // Agencies Sitemap
      let agencies = await fetch(process.env.GRAPHQL_API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GRAPHQL_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `{
          companies(page: 0, limit: 20000, companyType: "agency") {
            nodes {
              slug
              updatedAt
            }
          }
        }`,
        }),
      });
      agencies = await agencies.json();
      agencies = agencies?.data?.companies?.nodes;

      agencies?.forEach((agency) =>
        result.push({
          loc: `/agency/${agency?.slug}`,
          // changefreq: 'daily',
          // priority: 0.7,
          lastmod: agency?.updatedAt,
        })
      );
    } catch {
      console.log('Agencies Sitemap Crashed');
    }

    try {
      // Lenders Sitemap
      let lenders = await fetch(process.env.GRAPHQL_API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GRAPHQL_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `{
          companies(page: 0, limit: 20000, companyType: "lender") {
            nodes {
              slug
              updatedAt
            }
          }
        }`,
        }),
      });
      lenders = await lenders.json();
      lenders = lenders?.data?.companies?.nodes;

      lenders?.forEach((lender) =>
        result.push({
          loc: `/lender/${lender?.slug}`,
          // changefreq: 'daily',
          // priority: 0.7,
          lastmod: lender?.updatedAt,
        })
      );
    } catch {
      console.log('Lenders Sitemap Crashed');
    }

    try {
      // Properties/Deals Sitemap
      let deals = await fetch(process.env.GRAPHQL_API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GRAPHQL_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `{
          deals(page: 0, limit: 40000) {
            slug
            feeds
            transactionType
            createdAt
          }
        }`,
        }),
      });
      deals = await deals?.json();
      deals = deals?.data?.deals;

      deals?.forEach((deal) => {
        const { feeds, transactionType, slug } = deal;
        feeds?.forEach((feed) =>
          result.push({
            loc: `/property/${feed?.toLowerCase()}/${transactionType?.toLowerCase()}/${slug}`,
            // changefreq: 'daily',
            // priority: 0.7,
            lastmod: deal?.createdAt,
          })
        );
      });
    } catch {
      console.log('Deals Sitemap Crashed');
    }

    return result;
  },
};
