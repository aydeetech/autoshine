import { createContext, useEffect, useState } from "react";
import axios from "axios";



export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const ApiUrl = "http://localhost:5858/"

  

  useEffect(() => {

  })
  
  return <AppContext.Provider>
    {children}
  </AppContext.Provider>;
};

export default AppProvider;
