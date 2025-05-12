const dataFields = {
    general: {
        formFields : [{
            id: 'fName',
            name: 'fName',
            type: 'text',
            placeholder: 'First Name...',
            labelContext: 'First Name:',
            inputType: 'input'
        },
        {
            id: 'lName',
            name: 'lName',
            type: 'text',
            placeholder: 'Last Name...',
            labelContext: 'Last Name:',
            inputType: 'input'
        },
        {
            id: 'email',
            name: 'email',
            type: 'text',
            placeholder: 'johndoe@example.com',
            labelContext: 'Email Address:',
            inputType: 'input'
        },
        {
            id: 'phone',
            name: 'phone',
            type: 'text',
            placeholder: '+447912579856',
            labelContext: 'Phone Number:',
            inputType: 'input'
        },
        {
            id: 'location',
            name: 'location',
            type: 'text',
            placeholder: 'Texas, USA',
            labelContext: 'Location:',
            inputType: 'input'
        }],

        formInfo : {
            fName: '',
            lName: '',
            email: '',
            phone: '',
            location: '',
        },
    },
        
    education: {
        formFields : [{
            id: 'school',
            name: 'schoolName',
            type: 'text',
            placeholder: 'schoolName',
            labelContext: 'School Name:',
            inputType: 'input'
        },
        {
            id: 'subject',
            name: 'subjectName',
            type: 'text',
            placeholder: 'Subject...',
            labelContext: 'Subject:',
            inputType: 'input'
        },
        {
            id: 'grade',
            name: 'grade',
            type: 'text',
            placeholder: '1st Class',
            labelContext: 'Grade:',
            inputType: 'input'
        },
        {
            id: 'graduationDate',
            name: 'graduationDate',
            type: 'date',
            placeholder: '',
            labelContext: 'Graduation Date:',
            inputType: 'input'
        },
    ],

        formInfo : {
            schoolName: '',
            subjectName: '',
            grade: '',
            graduationDate: '',
            location: '',
        },
    },

    work: {
        formFields : [{
            id: 'company',
            name: 'company',
            type: 'text',
            placeholder: 'Google...',
            labelContext: 'Company:',
            inputType: 'input'
        },
        {
            id: 'position',
            name: 'position',
            type: 'text',
            placeholder: 'Position title...',
            labelContext: 'Position:',
            inputType: 'input'
        },
        {
            id: 'responsibilities',
            name: 'responsibilities',
            type: 'text',
            placeholder: '...',
            labelContext: 'Responsibilities:',
            inputType: 'textarea'
        },
        {
            id: 'fromDate',
            name: 'fromDate',
            type: 'date',
            placeholder: '01-01-2020',
            labelContext: 'From:',
            inputType: 'input'
        },
        {
            id: 'toDate',
            name: 'toDate',
            type: 'date',
            placeholder: '01-01-2025',
            labelContext: 'To:',
            inputType: 'input'
        }],

        formInfo : {
            fName: '',
            lName: '',
            email: '',
            phone: '',
            location: '',
        },
    }


};


export default dataFields;