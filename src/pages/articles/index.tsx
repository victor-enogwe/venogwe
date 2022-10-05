import { useArticles } from '@/contexts/ArticlesContext';
import { VEProps } from '@/typings/typings';
import { pageClasses } from '@/utils/constants.client';
import { getStaticProps as defaultGetStaticProps } from '@/utils/functions';
import { getPosts } from '@/utils/ghost';
import { PostsOrPages } from '@tryghost/content-api';
import Link from 'next/link';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next/types';
import Row from 'react-bootstrap/Row';

export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<VEProps<{ posts?: PostsOrPages }>>> {
  const { props } = await defaultGetStaticProps(context);

  try {
    const { params } = context;
    const posts = await getPosts({ ...params, limit: 10 });

    return { props: { ...props, posts } };
  } catch (error: any) {
    return { props: { ...props, error: error?.message } };
  }
}

export default function Articles(): JSX.Element {
  const articles = useArticles();

  return (
    <main className={`${pageClasses}`}>
      <Row className="flex-grow-1 p-4">
        <ul>
          {articles?.map((article) => (
            <li key={article.id}>
              <Link href={`/articles/${article.slug}`} passHref>
                <a title={article.title}>{article.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Row>
    </main>
  );
}
