import { CONFIRM_PIN_DELETE } from "../../confirmation_types/confirmation_types";

function PinDeleteButton({ pinId, handleConfirmationWindowOpen }){
    return (
        <button onClick={() => handleConfirmationWindowOpen({ confirmationType: CONFIRM_PIN_DELETE, pinId, confirmationText: "Do you really want to delete this pin?"  })}>Delete</button>
    );
}

export default PinDeleteButton;