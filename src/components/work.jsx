
export default function Work(){
    return(
        <>
            <form id='work-form'>
                <div className='form-group'>
                    <label id='company-name-label' htmlFor='company-name-text'>Company Name: </label> 
                    <input type='text' name='company-name-text' id='company-name-text'></input>
                </div>
                <div className='form-group'>
                    <label id='position-label' htmlFor='position-text'>Position: </label> 
                    <input type='text' name='position-text' id='position-text'></input>
                </div>
                <div className='form-group'>
                    <label id='responsibilities-label' htmlFor='responsibilities-text'>Responsibilities: </label> 
                    <input type='text' name='responsibilities-text' id='responsibilities-text'></input>
                </div>
                <div className='form-group'>
                    <label id='date-from-label' htmlFor='date-from-text'>Start Date: </label> 
                    <input type='date' name='date-from-text' id='date-from-text'></input>
                </div>
                <div className='form-group'>
                    <label id='date-to-label' htmlFor='date-to-text'>End Date: </label> 
                    <input type='date' name='date-to-text' id='date-to-text'></input>
                </div>
                <div className='form-group'>
                    <button>Add</button>
                </div>
            </form>
        </>
    )
}