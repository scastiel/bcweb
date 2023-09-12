import * as React from "react";
import Main from "./src/components/Main";
import store from "./src/redux/store";
import { Provider } from "react-redux";



/* const endpointBc = "https://demo-btw.monkey-soft.fr/bcweb/bcx/";
const endpointRefreshToken = "https://demo-btw.monkey-soft.fr/refresh-token/"; */

const App = () => {
  const isLogged = false;
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
};

export default App;
