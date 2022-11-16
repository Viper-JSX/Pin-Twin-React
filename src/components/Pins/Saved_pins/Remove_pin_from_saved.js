function RemovePinFromSaved({ userId, pinId, handleRemoveFromSaved }){
    return(
        <button onClick={() => handleRemoveFromSaved({ removalData: { userId, pinId } })}>Remove from saved</button>
    );
}

export default RemovePinFromSaved;