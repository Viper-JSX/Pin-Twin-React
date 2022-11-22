function SavePin({ pin, handlePinSave }){
    return(
        <button className="savePi" onClick={() => handlePinSave(pin)}>Save</button>
    );
}

export default SavePin;