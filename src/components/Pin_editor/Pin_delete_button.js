import { CONFIRM_PIN_DELETE } from "../../confirmation_types/confirmation_types";

function PinDeleteButton({ pinId, handleConfirmationWindowOpen }){
    return (
        <button onClick={() => handleConfirmationWindowOpen({ confirmationType: CONFIRM_PIN_DELETE, pinId  })}>Delete</button>
    );
}

export default PinDeleteButton;