import { useState } from "react";
import { useLocation } from "react-router";

function PinEditor({ mode, handlePinCreate, handlePinEdit }){
    const location = useLocation();
    const [ pinData, setPinData ] = useState(location.state.pin || { imageSrc: "", title: "", discription: "", tagsString: "" });

    return(
        <div className="pinEditor">
            <input type="image" value={pinData.imageSrc} />
            <input type="text" value={pinData.title} />
            <textarea value={pinData.discription}></textarea>
            <input type="text" value={pinData.tagsString} />

            {
                mode === "create" ?
                <button className="createPin" onClick={() => handlePinCreate()}>Create</button>
                :
                <button className="editPin" onClick={ () => handlePinEdit()}>Save</button>
            }
        </div>
    );
}

export default PinEditor;