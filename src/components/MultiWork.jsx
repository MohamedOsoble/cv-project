import Form from "./Form";
import Parent from "./Parent";
import Entries from "./Entries";
import { useState } from "react";
import dataFields from "../../utils/datafields";
import AddButton from "./Formhelpers";


export default function Multiwork() {
    const dataKey = 'work';
    const dataObject = dataFields[dataKey]
    const [activeIndex, setActiveIndex] = useState(1);
    const [workHistory, updateWorkHistory] = useState(dataObject.entries);
    const [count, setCount] = useState(1)
    const increment = () => setCount(prevCount => prevCount + 1)
    const isRequiredIndex = (entry) => entry.id.indexOf(formId);

    let initialForm = { ...dataObject.formInfo }
    let formId = count.toString()
    initialForm.id = formId

    if (dataObject.entries.length === 0) {
        dataObject.entries.push(initialForm)
    }


    function newForm() {
        increment()
        let newForm = { ...dataObject.formInfo, id: count + 1 };
        dataObject.entries.push(newForm);
        updateWorkHistory(dataObject.entries);
        console.log(workHistory)
        return createAllForms();
    };

    function deleteForm(formId){
        if (dataObject.entries.length < 2){
            dataObject.entries = []
            updateWorkHistory(dataObject.entries)
            setActiveIndex(1)
            return newForm()
        }
        else{
            const formIndex = (entry) => entry.id.indexOf(formId);
            dataObject.entries.pop(formIndex)
            updateWorkHistory(dataObject.entries)
            setActiveIndex(0)
            return createAllForms();
        };
    }

    function createAllForms() {
        if (workHistory.length > 1) {
            return (
                <>
                    {workHistory.map((form) => (
                        <div key={form.id}>
                            <Form dataKey={dataKey}
                                isFormActive={activeIndex === 1}
                                submitForm={() => { setActiveIndex(0) }}
                                createNewForm={() => {newForm, setActiveIndex(1)}}
                                Form={form}
                            >
                            </Form>
                            <Entries dataKey={dataKey} p
                                isEntryActive={activeIndex === 0}
                                editEntry={() => setActiveIndex(1)}
                                handleDelete={() => deleteForm(form.id)}
                                formId={form.id}
                                createNewForm={() => newForm}
                            >
                            </Entries>
                        </div>
                    )

                    )}
                    <AddButton
                        buttonFunction={newForm}
                        buttonName={'Add New Work'}
                        isActive={activeIndex === 0}
                        setActiveIndex={() => {newForm, setActiveIndex(1)}}>
                    </AddButton>
                </>
            )


        }
        else {
            return (
                <div key={initialForm.id}>
                    <Form dataKey={dataKey}
                        isFormActive={activeIndex == 1}
                        submitForm={() => { setActiveIndex(0) }}
                        createNewForm={() => {newForm, setActiveIndex(1)}}
                        Form={initialForm}
                    >
                    </Form>
                    <Entries dataKey={dataKey}
                        isEntryActive={activeIndex === 0}
                        editEntry={() => setActiveIndex(1)}
                        formId={initialForm.id}
                        handleDelete={() => deleteForm(initialForm.id)}
                        createNewForm={() => {setActiveIndex(1), newForm()}}
                    >
                    </Entries>
                    <AddButton
                        buttonFunction={newForm}
                        buttonName={'Add New Work'}
                        isActive={activeIndex === 0}
                        setActiveIndex={() => {setActiveIndex(1), newForm()}}>
                    </AddButton>
                </div>
            )
        }

    };

    return (
        <Parent dataKey={dataKey}>

            {createAllForms()}

        </Parent>
    );
};   