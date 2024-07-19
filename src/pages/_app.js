import '@/styles/globals.css';
import Header from '@/components/Header';
import { TransitionProvider } from '@/context/TransitionContext';
import TransitionLayout from '@/components/TransitionLayout';

export default function App({ Component, pageProps, router }) {
  return (
    <TransitionProvider>
      <Header />
      <TransitionLayout>
        <Component key={router.route} {...pageProps} />
      </TransitionLayout>
    </TransitionProvider>
  );
}
