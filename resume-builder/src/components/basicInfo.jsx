/* eslint-disable react/prop-types */
import '../styles/basicInfo.css'

function BasicInfo( {onChange, email, fName, lName, pNumber, address, handleSubmit}){

    return(
        <>
        <div>
            <h2>Personal Details</h2>
            <form className="bForm" onSubmit={handleSubmit}>
                <div>
                <label className = "formElem">First Name </label>
                <input type = 'text' name = 'fName' defaultValue = {fName} placeholder="First Name" onChange = {onChange}/>
                <label className = "formElem"> Last Name </label>
                <input type = 'text' name = 'lName' defaultValue = {lName} placeholder="Last Name" onChange = {onChange}/>
                </div>
                <label className = "formElem"> Email </label>
                <input type = 'email' name='email' defaultValue = {email} placeholder="Email" onChange = {onChange}/>
                <label className = "formElem"> Phone Number </label>
                <input type = 'number' name='pNumber' defaultValue = {pNumber} placeholder="Phone Number" onChange = {onChange}/>
                <label className = "formElem"> Address </label>
                <input type = 'text' name='address' defaultValue = {address} placeholder="Adress" onChange = {onChange}/>
                
            </form>
            <p> {fName} {lName} {email} {pNumber} {address} </p>
        </div>
        </>

    );
}

export default BasicInfo;