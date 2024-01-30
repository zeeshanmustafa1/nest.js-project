import { promises as fs } from 'fs';
import path from 'path';

const config = require('./next.config');

describe('Next.js configuration', () => {
  let redirects: { source: string; destination: string; statusCode: number }[];

  beforeEach(async () => {
    const rawData = await fs.readFile(
      path.resolve(__dirname, 'redirects.json'),
      'utf8'
    );
    redirects = JSON.parse(rawData);
  });

  describe('redirects via regex', () => {
    it('should have valid configuration', async () => {
      const result = await config.redirects();

      expect(result).toEqual(
        redirects.map(({ source, destination, statusCode }) => ({
          source,
          destination,
          statusCode,
        }))
      );
    });

    it('should have valid source and destination', () => {
      redirects.forEach((redirect) => {
        expect(redirect.source).toMatch(/^\//);
        expect(redirect.destination).toMatch(/^(https?:\/\/.+|\/)/);
        expect(redirect.statusCode).toBeGreaterThanOrEqual(300);
        expect(redirect.statusCode).toBeLessThan(400);
      });
    });
  });
});
