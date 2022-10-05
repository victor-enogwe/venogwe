import GhostContentAPI, {
  BrowseFunction,
  PostOrPage,
  PostsOrPages,
  ReadFunction,
} from '@tryghost/content-api';

export const ghost = new GhostContentAPI({
  url: process.env.GHOST_CONTENT_URL ?? ``,
  key: process.env.GHOST_CONTENT_API_KEY ?? ``,
  version: `v5.0`,
});

export async function getPosts(
  ...args: Parameters<BrowseFunction<PostsOrPages>>
): Promise<PostsOrPages> {
  const posts = await ghost.posts.browse(...args);

  return posts;
}

export async function getPages(
  ...args: Parameters<BrowseFunction<PostsOrPages>>
): Promise<PostsOrPages> {
  const pages = await ghost.pages.browse(...args);

  return pages;
}

export async function getPost(
  ...args: Parameters<ReadFunction<PostOrPage>>
): Promise<PostOrPage> {
  const post = await ghost.posts.read(...args);

  return post;
}

export async function getPage(
  ...args: Parameters<ReadFunction<PostOrPage>>
): Promise<PostOrPage> {
  const page = await ghost.pages.read(...args);

  return page;
}
