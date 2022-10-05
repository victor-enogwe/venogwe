import { usePost } from '@/contexts/PostContext';
import { VEProps } from '@/typings/typings';
import { pageClasses } from '@/utils/constants.client';
import { getStaticProps as defaultGetStaticProps } from '@/utils/functions';
import { getPost, getPosts } from '@/utils/ghost';
import { PostOrPage } from '@tryghost/content-api';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next/types';
import Row from 'react-bootstrap/Row';

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  try {
    const posts = await getPosts({});

    // Get the paths we want to create based on posts
    const paths = posts.map(({ slug }) => ({ params: { slug } }));

    // { fallback: false } means posts not found should 404.
    return { paths, fallback: false };
  } catch (error) {
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<VEProps<{ post?: PostOrPage }>>> {
  const { props } = await defaultGetStaticProps(context);

  try {
    const { params } = context;

    const post = await getPost({ slug: params?.slug as string });

    if (!post) return { notFound: true };

    return { props: { ...props, post } };
  } catch (error: any) {
    return { props: { ...props, error: error?.message } };
  }
}

export default function Post(): JSX.Element {
  const post = usePost();

  return (
    <main className={`${pageClasses}`}>
      <Row
        className="flex-grow-1 p-4"
        dangerouslySetInnerHTML={{ __html: post?.html ?? `` }}
      />
    </main>
  );
}
