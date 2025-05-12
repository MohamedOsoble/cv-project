import dataFields from "../../utils/datafields";
import { useState } from "react";

export default function GenerateForm(dataKey){

    const dataObject = dataFields[dataKey]
    const formFields = dataObject.formFields
    const [formInfo, setFormInfo] = useState(dataObject.formInfo
    )

    const handleChange = (e) => {
        setFormInfo({...formInfo, 
            [e.target.name]: e.target.value
    })};

    const handleEdit = () => {
        const genInfo = document.getElementById(dataKey + '-information')
        const genForm = document.getElementById(dataKey + '-form')
        genForm.style.display = ''
        genInfo.style.display = 'none';
    };

    const handleSave = (formData) => {
        const genInfo = document.getElementById(dataKey + '-information')
        const genForm = document.getElementById(dataKey +'-form')
        for (const key of formData.keys()){
            setFormInfo({...formInfo, key:formData.get(key)})
        }
            genForm.style.display = 'none'
            genInfo.style.display = '';
    };

    function createFormFields(field, FieldType){
        console.log(FieldType)
        return(
            <div key={field.id} className='form-group'>
            <label htmlFor={field.name}>{field.labelContext} </label>
            <FieldType type={field.type} id={field.id} name={field.name} placeholder={field.placeholder} value={formInfo[field.name]} onChange={handleChange}
            ></FieldType>
            </div>
        )
    }

    function createForm(data){
        return (
            <form id='general-form' action={handleSave}>
                {data.map((field) => (
                    createFormFields(field, field.inputType)
                ))}
                <div className='form-group'>
                    <button type='submit'>Save</button>
                </div>
            </form>
        )
    }

    function renderForm(){

        return(
            <div key={dataKey + '-container'} id={dataKey + '-container'} className='form-container'>
                <div id={dataKey + '-information'} style={{display: 'none'}}>
                    {formFields.map((field) => (
                    <div key={field.id} className='form-group'>
                    <label htmlFor={field.name}>{field.labelContext} </label>
                    <p>{formInfo[field.name]}</p>
                    </div>
                ))}
                <button id={dataKey + '-edit'} onClick={handleEdit}>Edit</button>
            </div>
                    {createForm(formFields)}
            </div>
        );
    }

    return renderForm();

};