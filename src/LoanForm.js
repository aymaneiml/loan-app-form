import { useState } from "react";
import "./FormStyles.css";
import Modal from "./Modal";

export default function LoanForm() {

  

  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.age === "" ||
    loanInputs.phoneNumber === "";


  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null)

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);

    if(loanInputs.age < 18 || loanInputs.age > 100){
      setErrorMessage("The age is not allowed")
    } else if(loanInputs.phoneNumber.length<10 || loanInputs.phoneNumber.length>12){
      setErrorMessage("Phone Number Format Is Incorrect !!")
    }

    setShowModal(true)
  }

  function handleDivClick(){
    if(showModal){
      setShowModal(false);
    } 
  }


  return (
    <div onClick={handleDivClick} className="flex" style={{ flexDirection: "column" }}>
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>

        <hr></hr>

        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value });
          }}
        />
        
        <label>Phone Number:</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, phoneNumber: event.target.value });
          }}
        />

        <label>Age:</label>
        <input
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value });
          }}
        />

        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
        />

        <label>Salary:</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>

        <button
          className={btnIsDisabled ? "disabled" : ""}
          disabled={btnIsDisabled}
          id="submit-loan-btn"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>

      <Modal isVisible={showModal} errorMessage={errorMessage} information={loanInputs}/>
    </div>
  );
}
