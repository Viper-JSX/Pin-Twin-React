import { useDispatch, useSelector } from "react-redux/es/exports";
import { CONFIRM_PIN_DELETE } from "../../../confirmation_types/confirmation_types";
import { confirmAction } from "../../../redux/action_creators";

function ConfirmationWindow({ handleConfirmationCancel, handlePinDelete }){
    const confirmationValues = useSelector((state) => state.confirmation);
    if(!confirmationValues.confirmationType) return null;

    const dispatch = useDispatch();

    function confirmationHandler(){
        dispatch(confirmAction());

        switch(confirmationValues.confirmationType){
            case CONFIRM_PIN_DELETE: {
                console.log("Pin delete confirmed")
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