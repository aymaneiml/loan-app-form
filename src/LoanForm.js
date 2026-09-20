import { useState } from "react";
import "./FormStyles.css";
import Modal from "./Modal";
import MyComponent from "./MyComponent";
import { LoanInputContext } from "./contexts/LoanFormUnputContext";

export default function LoanForm({ title }) {
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
  const [errorMessage, setErrorMessage] = useState(null);

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);

    if (loanInputs.age < 18 || loanInputs.age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (
      loanInputs.phoneNumber.length < 10 ||
      loanInputs.phoneNumber.length > 12
    ) {
      setErrorMessage("Phone Number Format Is Incorrect !!");
    }

    setShowModal(true);
  }

  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }

  function handleNameInputChange(value) {
    setLoanInputs({ ...loanInputs, name: value });
  }

  function handlePhoneNumberInputChange(value) {
    setLoanInputs({ ...loanInputs, phoneNumber: value });
  }

  function handleAgeInputChange(value) {
    setLoanInputs({ ...loanInputs, age: value });
  }

  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <h1 style={{ color: "white" }}> {title}</h1>
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>

        <hr></hr>

        <LoanInputContext.Provider
          value={{
            lableTitle: "name",
            handleChange: handleNameInputChange ,
            value: loanInputs.name,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        {/* <MyComponent
          label="name"
          handleChange={handleNameInputChange}
          value={loanInputs.name}
        /> */}

        <LoanInputContext.Provider
          value={{
            lableTitle: "phone number",
            handleChange: handlePhoneNumberInputChange ,
            value: loanInputs.phoneNumber,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        {/* <MyComponent
          label="phone Number"
          handleChange={handlePhoneNumberInputChange}
          value={loanInputs.phoneNumber}
        /> */}

        {/* <MyComponent
          label="age"
          handleChange={handleAgeInputChange}
          value={loanInputs.age}
        /> */}

        <LoanInputContext.Provider
          value={{
            lableTitle: "age",
            handleChange: handleAgeInputChange ,
            value: loanInputs.age,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

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

      <Modal
        isVisible={showModal}
        errorMessage={errorMessage}
        information={loanInputs}
      />
    </div>
  );
}
