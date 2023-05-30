// pages/_app.js
import '../styles/global.css';
import '../styles/reset.css';
import '../styles/main.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
