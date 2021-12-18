import './App.css';
import Dates from './components/Dates';
import React from 'react'

// import FormAdd from './components/FormAdd';

function App() {
  return (
    <div className="App">
      <h1 className='my-5' style={{textTransform:"uppercase", fontFamily:"'Anton', sans-serif"}}>Administrador de pacientes</h1>
      {/* <FormAdd /> */}
      <Dates />
    </div>
  );
}

export default App;
