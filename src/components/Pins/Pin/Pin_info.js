import Comments from "../../Reusable_components/Comments/Comments";

function PinInfo({ pin }){
    return(
        <div className="pinInfo">
            <b className="pinTitle">{ pin.title }</b>
            <p className="pinDiscription">{ pin.discription }</p>
        </div>
    );
}

export default PinInfo;