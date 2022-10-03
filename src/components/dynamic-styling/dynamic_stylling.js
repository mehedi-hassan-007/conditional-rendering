import React, {useState, useEffect} from 'react';
import './dynamic_styling.css';

const Dynamic_stylling = () => {
    const [name, setName] = useState ("")
    const[validInput, setvalidInput] = useState(true);

    useEffect(() => {
        if(name.length < 4){
            setvalidInput(true);
        }
        else{
            setvalidInput(false);
        }
    }, [name]);
    

    const handleChange =(e) =>{
        setName(e.target.value);
      
    }
    return (
        <div>
            <input type="text" value={name} onChange={handleChange} className={`${validInput ? "valid" : "inValid"}`} />
        </div>
    );
};

export default Dynamic_stylling;