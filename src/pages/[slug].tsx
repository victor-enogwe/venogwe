import { usePage } from '@/contexts/PageContext';
import { VEProps } from '@/typings/typings';
import { pageClasses } from '@/utils/constants.client';
import { getStaticProps as defaultGetStaticProps } from '@/utils/functions';
import { getPage, getPages } from '@/utils/ghost';
import { PostOrPage } from '@tryghost/content-api';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next/types';
import Row from 'react-bootstrap/Row';

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  try {
    const pages = await getPages({});

    // Get the paths we want to create based on pages
    const paths = pages.map(({ slug }) => ({ params: { slug } }));

    // { fallback: false } means pages not found should 404.
    return { paths, fallback: false };
  } catch (error) {
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<VEProps<{ page?: PostOrPage }>>> {
  const { props } = await defaultGetStaticProps(context);

  try {
    const { params } = context;

    const page = await getPage({ slug: params?.slug as string });

    if (!page) return { notFound: true };

    return { props: { ...props, page } };
  } catch (error: any) {
    return { props: { ...props, error: error?.message } };
  }
}

export default function Page(): JSX.Element {
  const page = usePage();

  return (
    <main className={`${pageClasses}`}>
      <Row
        className="flex-grow-1 p-4"
        dangerouslySetInnerHTML={{ __html: page?.html ?? `` }}
      />
    </main>
  );
}
