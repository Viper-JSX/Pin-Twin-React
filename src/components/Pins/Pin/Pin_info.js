import Comments from "../../Reusable_components/Comments/Comments";

function PinInfo({ pin }){
    return(
        <div className="pinInfo">
            <b>{ pin.title }</b>
            <p>{ pin.discription }</p>
        </div>
    );
}

export default PinInfo;