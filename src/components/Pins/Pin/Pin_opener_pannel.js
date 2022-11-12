function PinOpenerPannel({ pin }){
    return(
        <div className="pinOpenerPannel">
            <button className="savePin">Save</button>
            <b>Open {pin.title}</b>
        </div>
    );
}

export default PinOpenerPannel;