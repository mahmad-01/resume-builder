import { useState } from "react";
import './App.css';
import Header from './components/header.jsx';
import BasicInfo from './components/basicInfo.jsx';
import EducationInfo  from "./components/educationInfo";
//import exampleD from './example';
function App() {
  const [personalInfo, setPersonalInfo] = useState({
    email: "",
    fName: "",
    lName: "",
    pNumber: "",
    address: ""
  });

  const [educationInfo, setEducationInfo]= useState({
    schoolName: "",
    gradDate: "",
    titleStudy:"",
    eduDescription: ""
  })

  function eduChangeHandler(e){
    setEducationInfo({...educationInfo, [e.target.name]: e.target.value})
  }
  
  function changeHandler(e) {
    e.preventDefault();
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(personalInfo);
}

return (
    <>
      <Header/>
      <BasicInfo
        handleSubmit={handleSubmit}
        onChange = {changeHandler}
        email = {personalInfo.email}
        fName = {personalInfo.fName}
        lName = {personalInfo.lName}
        pNumber = {personalInfo.pNumber}
        address = {personalInfo.address}
      />
      <EducationInfo
        onChange = {eduChangeHandler}
        schoolName={educationInfo.schoolName}
        titleStudy={educationInfo.titleStudy}
        gradDate = {educationInfo.gradDate}
        eduDescription={educationInfo.eduDescription}
      />
    </>
  )
}

export default App
