import PinOpener from "./Pin/Pin_opener/Pin_opener";

function Pins({ pins, handlePinOpenerClick, handlePinSave, handlePinRemoveFromSaved }){
    return(
        <div className={`pins ${pins.length === 0 ? "empty" : ""}`}>
            {
                pins.length > 0 ? 
                pins.map((pin) => <PinOpener 
                    pin={pin} 
                    key={`pin_${pin.id}`} 
                    handlePinOpenerClick={handlePinOpenerClick} 
                    handlePinSave={handlePinSave} 
                    handlePinRemoveFromSaved={handlePinRemoveFromSaved}
                    /> 
                )
                :
                <b>No pins</b> 
            }
        </div>
    );
}

export default Pins;