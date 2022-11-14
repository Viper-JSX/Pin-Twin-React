import { useDispatch, useSelector } from "react-redux/es/exports";
import { confirmAction } from "../../../redux/action_creators";

function ConfirmationWindow({ handleConfirmationCancel }){
    const confirmationValues = useSelector((state) => state.confirmation);
    if(!confirmationValues.confirmationType) return null;

    const dispatch = useDispatch();

    function confirmationHandler(){
        dispatch(confirmAction());
        //Write function code based on confirmation type using switch/case
    }

    return(
        <div>
            <b className="confirmationWindowText">{confirmationValues.text}</b>
            <br />
            <button className="proceedConfirmation" onClick={confirmationHandler} >Proceed</button>
            <button className="cancelConfirmation" onClick={handleConfirmationCancel} >Cancel</button>
        </div>
    )
}

export default ConfirmationWindow;