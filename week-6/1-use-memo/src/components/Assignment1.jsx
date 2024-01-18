import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    // const expensiveValue = 0; 
    // Your solution ends here
    
    let expensiveValue=useMemo(()=>{
        let temp=1
        if(input==0)return 0
        if(input==1)return 1
        for(let i=2;i<=input;i++){
            temp*=i;
        }    
        console.log(temp)
        return temp;
    },[input])
    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}