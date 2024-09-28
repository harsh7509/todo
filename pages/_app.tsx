// pages/_app.tsx
import { RecoilRoot } from 'recoil';
import './globals.css';
import  "../styles/TodoList.module.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;