function RemovePinFromSaved({ userId, pinId, handlePinRemoveFromSaved }){
    return(
        <button onClick={() => handlePinRemoveFromSaved({ deleteData: { userId, pinId } })}>Saved</button>
    );
}

export default RemovePinFromSaved;