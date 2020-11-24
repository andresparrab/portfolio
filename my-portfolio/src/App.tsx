import Routing from './routes/Routing';
import Header from "./components/NavigationBar/Header";
import React from 'react';
import "./App.css";


function App() {
  return (
    <Routing>
      <Header />
    </Routing>
  );
}

export default App;
