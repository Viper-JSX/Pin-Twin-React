function RemovePinFromSaved({ userId, pinId, handlePinRemoveFromSaved }){
    return(
        <button onClick={() => handlePinRemoveFromSaved({ removalData: { userId, pinId } })}>Remove from saved</button>
    );
}

export default RemovePinFromSaved;