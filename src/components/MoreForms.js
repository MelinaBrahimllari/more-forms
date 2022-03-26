import React, { useState } from 'react';


const MoreForms = () => {
    const [firstname, setFirstname] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastname, setLastname] = useState("");
    const [secondError, setSecondError] = useState("");
    const [email, setEmail] = useState("");
    const [thirdError, setThirdError] = useState("");
    const [password, setPassword] = useState("");
    const [fourthError, setFourthError] = useState("");


    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 1) {
            setFirstError("Name is required!");
        } else if (e.target.value.length < 3) {
            setFirstError("Name must be 3 characters or longer!");
        } else {
            setFirstError("");
        }
    }
    const handleLastname = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 1) {
            setSecondError("Last Name is required!");
        } else if (e.target.value.length < 3) {
            setSecondError("Last Name must be 3 characters or longer!");
        } else {
            setSecondError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setThirdError("Email is required!");
        } else if (e.target.value.length < 6) {
            setThirdError("Email must be 6 characters or longer!");
        } else {
            setThirdError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setFourthError("PASSWORD is required!");
        } else if (e.target.value.length < 8) {
            setFourthError("Password must be 8 characters or longer!");
        } else {
            setFourthError("");
        }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <label>FirstName: </label>
                <input type="text" onChange={handleFirstName} />
                {
                    firstError ?
                        <p>{firstError}</p> :
                        ''
                }
                <label>LastName: </label>
                <input type="text" onChange={handleLastname} />
                {
                    secondError ?
                        <p>{secondError}</p> :
                        ''
                }
                <label>Email: </label>
                <input type="text" onChange={handleEmail} />
                {
                    thirdError ?
                        <p>{thirdError}</p> :
                        ''
                }

                <label>Password: </label>
                <input type="text" onChange={handlePassword} />
                {
                    fourthError ?
                        <p>{fourthError}</p> :
                        ''
                }



            </div>
            {
                fourthError ?
                    <input type="submit" value="Create Movie" disabled /> :
                    <input type="submit" value="Create Movie" />
            }
        </form>
    );
}
export default MoreForms;