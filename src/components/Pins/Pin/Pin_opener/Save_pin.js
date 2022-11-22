function SavePin({ pin, handlePinSave }){
    return(
        <button className="savePin" onClick={() => handlePinSave(pin)}>Save</button>
    );
}

export default SavePin;