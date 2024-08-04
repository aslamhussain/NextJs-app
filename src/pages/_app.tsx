import '../app/styles/globals.css';
import { AppProps } from 'next/app';
import QueryClientProvider from '../app/contexts/QueryClientProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
