function ConfirmationWindow(){
    const confirmationValues = useSelector((state) => state.confirmation);
    
    if(!confirmationValues.confirmationType) return null;

    return(
        <div>
            { confirmationValues.text }
        </div>
    )
}

export default ConfirmationWindow;