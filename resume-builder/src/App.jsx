import { useState } from "react";
import './App.css';
import BasicInfo from './components/basicInfo.jsx';
import exampleD from './example';
function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleD.personalInfo);
  
  function changeHandler(e) {
    e.preventDefault();
    //const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(personalInfo);
}

return (
    <>
      <h1>Resume Builder</h1>
      <BasicInfo
        handleSubmit={handleSubmit}
        onChange = {changeHandler}
        email = {personalInfo.email}
        fName = {personalInfo.fName}
        lName = {personalInfo.lName}
        pNumber = {personalInfo.pNumber}
        address = {personalInfo.address}
      /> 
    </>
  )
}

export default App
