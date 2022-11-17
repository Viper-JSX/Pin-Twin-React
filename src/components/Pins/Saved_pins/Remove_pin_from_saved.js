function RemovePinFromSaved({ userId, pinId, handlePinRemoveFromSaved }){
    return(
        <button onClick={() => handlePinRemoveFromSaved({ deleteData: { userId, pinId } })}>Remove from saved</button>
    );
}

export default RemovePinFromSaved;