function RemovePinFromSaved({ userId, pinId, handlePinRemoveFromSaved }){
    return(
        <button className="removePinFromSaved" onClick={() => handlePinRemoveFromSaved({ deleteData: { userId, pinId } })}>Saved</button>
    );
}

export default RemovePinFromSaved;