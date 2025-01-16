import { AppContextProvider } from '@/context/AppContext';
import '@/styles/globals.css';
import '@fontsource/quicksand';

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
