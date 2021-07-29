import "./assets/scss/index.scss";

import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout></Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
