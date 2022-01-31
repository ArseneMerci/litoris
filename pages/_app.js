import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { StoreProvider } from "../utils/Store";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </StoreProvider>
  );
}

export default MyApp;
