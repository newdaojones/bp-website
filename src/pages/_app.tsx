// _app.tsx
import '@bpwebsite/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div data-testid="app">
      <Component {...pageProps} />
    </div>
  );
}
