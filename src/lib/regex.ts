export function slugToTitle(slug: string, fallback: string = 'Title'): string {
  let title = slug.replace(/-/g, ' ');
  const words = title.split(' ');
  title = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  if (title === '') {
    return fallback;
  }

  return title;
}
