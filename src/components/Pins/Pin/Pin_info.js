import Comments from "../../Reusable_components/Comments/Comments";

function PinInfo({ pin }){
    console.log(pin)
    return(
        <div className="pinInfo">
            <b>{ pin.title }</b>
            <p>{ pin.discription }</p>
            <Comments comments={pin.comments} />
        </div>
    );
}

export default PinInfo;