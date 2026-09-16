export default function Modal({ isVisible, errorMessage = null , information}) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          {/* <h1>The Form Has been Submitted Successfully</h1> */}
          <h1 style={{color: errorMessage != null ? "red" : "green"}}>
            {errorMessage != null
              ? errorMessage
              : "The Form Has been Submitted Successfully"}
          </h1>

          {/* Afficher les informations */} 
          <p>Name: {information.name}</p> 
          <p>Phone Number: {information.phoneNumber}</p> 
          <p>Age: {information.age}</p> 
          <p> Employee: {information.isEmployee ? "Yes" : "No"} </p> 
          <p>Salary: {information.salaryRange}</p>
          
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
