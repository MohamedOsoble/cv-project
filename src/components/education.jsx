
export default function Education(){

    const formInfo = {
        schoolName: null,
        subject: null,
        grade: null,
        date: null,
    };

    function save(formData){

            formInfo.schoolName = formData.get('school-name-text');
            formInfo.subject = formData.get('subject-text'),
            formInfo.grade = formData.get('grade-text'),
            formInfo.date = formData.get('date-text')

        console.log(formInfo)
    };
    return(
        <>
            <form id='education-form' action={save}>
                <div className='form-group'>
                    <label id='school-name-label' htmlFor='school-name-text'>School Name: </label> 
                    <input type='text' name='school-name-text' id='school-name-text' value={formInfo.schoolName}></input>
                </div>
                <div className='form-group'>
                    <label id='subject-label' htmlFor='subject-text'>Subject: </label> 
                    <input type='text' name='subject-text' id='subject-text' value={formInfo.subject}></input>
                </div>
                <div className='form-group'>
                    <label id='grade-label' htmlFor='grade-text'>Grade: </label> 
                    <input type='text' name='grade-text' id='grade-text' value={formInfo.grade}></input>
                </div>
                <div className='form-group'>
                    <label id='date-label' htmlFor='date-text'>Graduation Date: </label> 
                    <input type='date' name='date-text' id='date-text'value={formInfo.date}></input>
                </div>
                <div className='form-group'>
                    <button type='submit'>Save</button>
                </div>
            </form>
        </>
    )
}