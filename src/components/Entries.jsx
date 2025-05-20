import dataFields from "../../utils/datafields";

export default function Entries(props) {
    const dataKey = props.dataKey
    const dataObject = dataFields[dataKey];
    const isMultiEntry = dataObject.multiEntry;
    const entryTitles = dataObject.entryTitles;
    const isEntryActive = props.isEntryActive;
    const currentEntries = dataObject.entries;

    function handleEdit() {
        props.editEntry()
    };

    function handleDelete() {
        props.handleDelete()
    };

    function getRequiredEntry(entry) {
        return entry.id === props.formId;
    };

    function getEntry(entry) {
        let content = []
        for (const [key, value] of Object.entries(entry)) {
            {
                key != 'id' ? content.push(
                    <div key={key} className='entry'>
                        <p key={key + 'title'}>{entryTitles[key]} </p>
                        <p key={key + 'value'}>{value}</p>
                    </div>

                ) : null
            };
        }
        return content
    };

    function returnDefault() {
        return (
            <div id={dataKey + '-information'}>
                {currentEntries.map((entry, index) => (
                    <div key={index} id={entry.id} className='form-group'>
                        <label htmlFor={entry.name}>{entry.labelContext} </label>
                        {getEntry(entry)}
                        <button id={dataKey + '-edit'} onClick={handleEdit}>Edit</button>

                    </div>
                ))}
            </div>
        )
    };


    function renderEntries() {
        if (isMultiEntry) {
            const entry = currentEntries.find(getRequiredEntry)
            if (entry != undefined) {
                return (
                    <div key={entry.id} id={dataKey + '-information'}>
                        <div key={entry.id} id={entry.id} className='form-group'>
                            <label htmlFor={entry.name}>{entry.labelContext} </label>
                            {getEntry(entry)}
                            <button id={dataKey + '-edit'} onClick={handleEdit}>Edit</button>
                            {isMultiEntry ? <button key='delete-btn' onClick={handleDelete}>Delete Job</button> : ''}
                        </div>
                    </div>
                )
            }
            else {
                returnDefault();
            }

        }
        else {
            return returnDefault();
        };
    };

    return (
        <div key={dataKey + '-entry-container'} id={dataKey + '-entry-container'} className='entry-container' style={isEntryActive ? { display: '' } : { display: 'none' }}>
            {renderEntries()}
        </div>
    )
};
