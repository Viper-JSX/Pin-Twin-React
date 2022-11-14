import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import ImageSelect from "./Image_select";

function PinEditor({ mode, handlePinCreate, handlePinEdit }){
    const location = useLocation();
    const userId = useSelector((state) => state.user.id);
    const [ pinData, setPinData ] = useState(location?.state?.pin || { creatorId: userId, imageSrc: "", title: "", discription: "", tagsString: "" });

    function handlePinImageChange(event){
        if(event.target.files.length === 0) return;

        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])
        reader.onload = function(processed){
            setPinData({ ...pinData, imageSrc: processed.srcElement.result });
        }
    }

    function handlePinTitleChange(event){
        setPinData({ ...pinData, title: event.target.value });
    }

    function handlePinDiscriptionChange(event){
        setPinData({ ...pinData, discription: event.target.value });
    }

    function handlePinTagsChange(event){
        setPinData({ ...pinData, tagsString: event.target.value });
    }

    return(
        <div className="pinEditor">
            <ImageSelect imageSrc={pinData.imageSrc} handlePinImageChange={handlePinImageChange} />
            <input type="text" value={pinData.title} placeholder="Title" onChange={handlePinTitleChange} />
            <textarea value={pinData.discription} placeholder="Discription" onChange={handlePinDiscriptionChange} ></textarea>
            <input type="text" value={pinData.tagsString} placeholder="Tags" onChange={handlePinTagsChange} />
            {
                mode === "create" ?
                <button className="createPin" onClick={() => handlePinCreate({ pinData })}>Create</button>
                :
                <button className="editPin" onClick={ () => handlePinEdit({ pinData })}>Save</button>
            }
        </div>
    );
}

export default PinEditor;