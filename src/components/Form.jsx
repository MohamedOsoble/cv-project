import dataFields from "../../utils/datafields";
import { useState } from "react";

export default function Form(props) {

    const dataKey = props.dataKey;
    const isFormActive = props.isFormActive;
    // Load Data
    const dataObject = dataFields[dataKey];
    const formFields = dataObject.formFields;
    const isMultiEntry = dataObject.multiEntry;
    let currentForm = '';

    if (!props.Form) {
        currentForm = dataObject.formInfo
    }
    else {
        currentForm = props.Form
    };

    const [formInfo, setFormInfo] = useState(currentForm);

    function handleChange(e) {
        setFormInfo(
            {
                ...formInfo,
                [e.target.name]: e.target.value
            }
        );
    };

    function getRequiredEntry(entry) {
        return entry.id === formInfo.id;
    };

    function handleSave(formData) {
        for (const key of formData.keys()) {
            setFormInfo({ ...formInfo, key: formData.get(key) })
        };
        processForm();
        props.submitForm();
    };

    function processForm() {
        if (isMultiEntry && dataObject.entries.find(getRequiredEntry)) {
            const entryIndex = dataObject.entries.findIndex(getRequiredEntry)
            dataObject.entries[entryIndex] = formInfo
        }
        else {
            dataObject.entries[0] = formInfo
        };
    };


    function createForm() {
        const data = formFields
        return (
            <form key={dataKey + '-form'} id={dataKey + '-form'} action={handleSave}>
                {data.map((field) => (
                    createFormFields(field, field.inputType)
                ))}
                <div className='form-group'>
                    <button type='submit'>Save</button>
                </div>
            </form>
        );
    };

    function createFormFields(field, FieldType) {
        return (
            <div key={field.id} id={field.id + '-field'} className='form-group'>
                <label htmlFor={field.name}>{field.labelContext} </label>
                <FieldType key={field.id + 'input'} type={field.type} id={field.id + '-input'} name={field.name} placeholder={field.placeholder} value={formInfo[field.name]} onChange={handleChange} required
                ></FieldType>
            </div>
        );
    };

    return (
        <div key={dataKey + '-form-container'} id={dataKey + '-form-container'} className='form-container' style={isFormActive ? { display: '' } : { display: 'none' }}>
            {createForm()}
        </div>
    );

};