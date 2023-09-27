import '../styles/educationInfo.css';
/* eslint-disable react/prop-types */

function EducationInfo({onChange, schoolName, titleStudy, gradDate, eduDescription}){
    return(
        <>
        <div>
            <h2>Education Info</h2>
            <form>
                <label className = "formElem">School Name </label>
                <input type='text' name='schoolName' defaultValue={schoolName} placeholder="Name of School" onChange={onChange} />
                <label className = "formElem">Title of Study </label>
                <input type='text' name='titleStudy' defaultValue={titleStudy} placeholder="Title of Study" onChange={onChange} />
                <label className = "formElem">Graduation Date </label>   
                <input type='text' name='gradDate' defaultValue={gradDate} placeholder="Graduation Date" onChange={onChange} />
                <label className = "formElem">Description </label>   
                <input type='text' name='eduDescription' defaultValue={eduDescription} placeholder="Description" onChange={onChange} />
                </form>
                <p> {schoolName} {titleStudy} {gradDate} {eduDescription} </p>
        </div>
        </>
    );
}

export default EducationInfo;