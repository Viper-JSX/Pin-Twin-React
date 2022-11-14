import { useSelector } from "react-redux/es/exports";

function ConfirmationWindow(){
    const confirmationValues = useSelector((state) => state.confirmation);
    console.log(confirmationValues);
    if(!confirmationValues.confirmationType) return null;

    return(
        <div>
            <b className="confirmationWindowText">{confirmationValues.text}</b>
            <br />
            <button className="proceedConfirmation" >Proceed</button>
            <button className="cancelConfirmation" >Cancel</button>
        </div>
    )
}

export default ConfirmationWindow;