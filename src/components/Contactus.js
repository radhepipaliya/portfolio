import React ,{useState} from 'react'
import PropTypes from 'prop-types';

export default function Contactus(props) {

    const handleUpClick=()=>{
        console.log("UperrCase Clicked " +  text);
        let newText=text.toUpperCase();
        setText(newText);
    }
     

    const handleOnchange= (event)=>{ 
        console.log("On change");
        setText(event.target.value)
    }
    
const[text,setText]=useState("Enter text here");


    return (
        <>
        <div>
            <h1>{props.contactHeading}</h1>
            {/* <div class="mb-4">
            <label for="myBox" className="form-label">Email address</label>
                <input type="email" className="form-control" id="mybox" placeholder="name@example.com"/>
            </div> */}
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>

            <button type="button" className="btn btn-primary" onClick={handleUpClick}> Convert to uppercase</button>
        </div>
        </>

        
    )
}

Contactus.propTypes = {
    contactHeading: PropTypes.string
}
Contactus.defaultProps = {
    contactHeading: "Contact Us"
}
