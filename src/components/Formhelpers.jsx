export default function AddButton(props) {

    function handleClick() {
        props.buttonFunction()
    }
    return (
        <button id={props.buttonName} onClick={handleClick} style={props.isActive ? { display: '' } : { display: 'none' }}>{props.buttonName}</button>
    )
};
