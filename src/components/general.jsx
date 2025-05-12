import dataFields from "../../utils/datafields";
import { useState } from "react";

export default function General(){

    const dataObject = dataFields.general
    const fields = dataObject.formFields
    console.log(fields)
    const [formInfo, setFormInfo] = useState({
        fName: '',
        lName: '',
        email: '',
        phone: '',
        location: '',
    })
    
    const handleChange = (e) => {
        setFormInfo({...formInfo, 
            [e.target.name]: e.target.value
    })};

    const handleEdit = (e) => {
        const genInfo = document.getElementById('general-information')
        const genForm = document.getElementById('general-form')
        genForm.style.display = ''
        genInfo.style.display = 'none';
    };

    const handleSave = (formData) => {
        const genInfo = document.getElementById('general-information')
        const genForm = document.getElementById('general-form')
        for (const key of formData.keys()){
            setFormInfo({...formInfo, key:formData.get(key)})
        }
            genForm.style.display = 'none'
            genInfo.style.display = '';
    };

    function createForm(data){
        return (
            <form id='general-form' action={handleSave}>
                {data.map((field) => (
                    <div key={field.id} className='form-group'>
                    <label htmlFor={field.name}>{field.labelContext} </label>
                    <input type={field.type} id={field.id} name={field.name} placeholder={field.placeholder} value={formInfo[field.name]} onChange={handleChange}
                    ></input>
                    </div>
                ))}
                <div className='form-group'>
                    <button type='submit'>Save</button>
                </div>
            </form>
        )
    }

    function openGeneral(){

        return(
            <div id='general-container' className='form-container'>
                <div id='general-information' style={{display: 'none'}}>
                    {fields.map((field) => (
                    <div key={field.id} className='form-group'>
                    <label htmlFor={field.name}>{field.labelContext} </label>
                    <p>{formInfo[field.name]}</p>
                    </div>
                ))}
                <button id='general-edit' onClick={handleEdit}>Edit</button>
            </div>
                    {createForm(fields)}
            </div>
        );
    }

    return openGeneral();

};