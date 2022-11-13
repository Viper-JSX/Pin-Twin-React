import { useState } from "react";
import { useLocation } from "react-router";

function PinEditor({ mode, handlePinCreate, handlePinEdit }){
    const location = useLocation();
    const [ pinData, setPinData ] = useState(location?.state?.pin || { imageSrc: "", title: "", discription: "", tagsString: "" });

    return(
        <div className="pinEditor">
            <input type="file" accept="image/png, image/gif, image/jpeg" value={pinData.imageSrc}  />
            <input type="text" value={pinData.title} placeholder="Title" />
            <textarea value={pinData.discription} placeholder="Discription"></textarea>
            <input type="text" value={pinData.tagsString} placeholder="Tags" />
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