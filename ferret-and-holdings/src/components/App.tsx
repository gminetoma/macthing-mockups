import "normalize.css";
import "../styles/App.css";
import "../styles/fonts.css";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </>
  );
};

export default App;
