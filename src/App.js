import logo from './logo.svg';
import './App.css';
import LoanForm from './LoanForm';
import {Route, Routes} from "react-router-dom"

function App() {

  const title = "Loan Project"
  return (
    <div className="App" style={{marginTop:"250px"}}>
      <LoanForm title={title}/>



    </div>

  );
}

export default App;
