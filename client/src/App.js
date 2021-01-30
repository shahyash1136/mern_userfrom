import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Reducer from './Context/Reducer';
import { DataContext } from './Context/DataContext';
import { GET__DATA } from './Context/action.type';
import { dataUrl } from "./api/index";
import Home from './Page/Home';

const App = () => {

  const [userData, dispatch] = useReducer(Reducer, []);
  const getData = async () => {
    try {
      let res = await axios.get(dataUrl)
      let { data } = res;
      dispatch({
        type: GET__DATA,
        payload: data
      })

    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <React.Fragment>
      <ToastContainer />
      <DataContext.Provider value={{ userData, dispatch }}>
        <Home />
      </DataContext.Provider>
    </React.Fragment>
  );
}

export default App;
