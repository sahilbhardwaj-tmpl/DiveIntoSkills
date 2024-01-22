import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { createContext } from "react";
export const Context = createContext("");
function Layout({ children }) {
  const [pageName, setPageName] = useState('');
  return (
    <Context.Provider value={{ pageName, setPageName }}>
      <>
        <div>
          <Header />
          <div
            style={{
              minHeight: "100vh",
              paddingTop: "60px",
              backgroundColor: "#F3F4D3",
            }}
          >
            {children}
          </div>
          <Footer />
        </div>
      </>
    </Context.Provider>
  );
}

export default Layout;
