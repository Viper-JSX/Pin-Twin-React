import PinOpener from "./Pin/Pin_opener/Pin_opener";

function Pins({ pins, handlePinOpenerClick, handlePinSave, handlePinRemoveFromSaved }){
    return(
        <div className="pins">
            {
                pins.map((pin) => <PinOpener 
                    pin={pin} 
                    key={`pin_${pin.id}`} 
                    handlePinOpenerClick={handlePinOpenerClick} 
                    handlePinSave={handlePinSave} 
                    handlePinRemoveFromSaved={handlePinRemoveFromSaved}
                    /> 
                ) 
            }
        </div>
    );
}

export default Pins;