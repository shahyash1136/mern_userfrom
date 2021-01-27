import React, { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Reducer from './Context/Reducer'
import { DataContext } from './Context/DataContext';
import { GET__DATA } from './Context/action.type'

const App = () => {
  const data = {}

  const [userData, dispatch] = useReducer(Reducer, data);
  const getData = async () => {
    await axios.get('http://localhost:8000/api/v1/data/').then(res => {
      console.log(res.data);
      dispatch({
        type: GET__DATA,
        payload: res.data
      })
    })
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <React.Fragment>
      <ToastContainer />
      <DataContext.Provider value={{ userData, dispatch }}>
        <h1>Home</h1>
      </DataContext.Provider>
    </React.Fragment>
  );
}

export default App;
