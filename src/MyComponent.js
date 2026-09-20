import { useContext } from "react";
import { LoanInputContext } from "./contexts/LoanFormUnputContext";

export default function MyComponent(){
    const myContext = useContext(LoanInputContext)

    console.log("The context from MyInput.js is")
    console.log(myContext)
    return(
        <>
            <label>{myContext.lableTitle}:</label>
            <input
            value={myContext.inputValue}
            onChange={(event) => {
               myContext.handleChange(event.target.value)
            }}
            />
        
        </>

    );
}