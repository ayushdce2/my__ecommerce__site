import { useEffect, useState } from "react";
import { Provider } from 'react-redux';
import store from './redux/store';
import Homepage from "./components/Homepage";

export default function App() {
  



  return (
    <>
    
    <Provider store={store}>  {/* Wrap your app with Provider */}
    <Homepage />
  </Provider>

  </>
  );
}
