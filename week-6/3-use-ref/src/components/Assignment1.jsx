import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    useEffect(() => {

    }, []);
    let abc=useRef();
    const handleButtonClick = () => {
        abc.current.focus()
    };

    return (
        <div>
            <input type="text" placeholder="Enter text here" ref={abc}/>
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
