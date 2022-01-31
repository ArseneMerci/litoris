import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}

function Box() {
  return (
    <div
      style={{
        padding: 40,
        background: "white",
        display: "inline-block",
        borderRadius: 5
      }}
    />
  );
}

const Test=()=> {
  return (
    <div className="App bg-black" style={{textAlign:"center",padding:"40px"}}>
      <p style={{ color: "white", padding: 10 }}>Scroll down</p>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Box />
      </FadeInWhenVisible>
      <style jsx>
        {
          `
          .App > * + * {
            margin-top: 500px;
          }
          `
        }
      </style>
    </div>
  );
}
export default Test;

