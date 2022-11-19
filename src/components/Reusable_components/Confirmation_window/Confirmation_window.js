import { useDispatch, useSelector } from "react-redux/es/exports";
import { CONFIRM_PIN_DELETE } from "../../../confirmation_types/confirmation_types";
import { confirmAction } from "../../../redux/action_creators";

function ConfirmationWindow({ handleConfirmationCancel, handlePinDelete }){
    const dispatch = useDispatch();
    const confirmationValues = useSelector((state) => state.confirmation);
    
    if(!confirmationValues.confirmationType) return null;

    function confirmationHandler(){
        dispatch(confirmAction());

        switch(confirmationValues.confirmationType){
            case CONFIRM_PIN_DELETE: {
                handlePinDelete({ pinId: confirmationValues.pinId });
            }
        }
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