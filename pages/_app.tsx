import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from "../providers/AuthProvider";


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
   const getLayout =
    (Component as MyNextComponentType).getLayout ||
    ((page: JSX.Element): JSX.Element => <AppLayout children={page} />);

  return ( <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>)
}
export default MyApp
