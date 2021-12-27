import React, { useContext } from "react";
import About from "./components/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/Intro";
import ProductList1 from "./components/productList/ProductList1";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./Context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ backgroundColor: darkMode ? "gray" : "white", color: darkMode && "white" }}>
      <Toggle />
      <Intro />
      <About />
      <ProductList1 />
      <Contact />
    </div>
  );
}

export default App;
