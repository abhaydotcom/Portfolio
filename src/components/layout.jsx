// Layout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";


const pageTransition = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: -20 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}          // important: unique key per page
         initial="initial"
          animate="animate"
          
          variants={{
            initial: pageTransition.initial,
            animate: pageTransition.animate,
            exit: pageTransition.exit,
          }}
          transition={pageTransition.transition}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}
