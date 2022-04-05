import { getInitialProps } from '@/utils/functions';
import Error from 'next/error';

Error.getInitialProps = async (context) => ({
  ...(await getInitialProps(context)),
  ...(await Error.getInitialProps(context)),
});

export default Error;
