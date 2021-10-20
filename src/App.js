import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Headr from "./components/Continer";
//Animation and Style
import { motion } from "framer-motion";
import { fade } from "./animation";

function App() {

  return (
    <motion.div variants={fade} initial="hidden" animate="show" className="App">
      <GlobalStyle />
      <motion.h1>Weather App</motion.h1>
      <Headr />
    </motion.div>
  );
}

export default App;
