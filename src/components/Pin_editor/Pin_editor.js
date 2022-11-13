import { useState } from "react";
import { useLocation } from "react-router";

function PinEditor({ mode, handlePinCreate, handlePinEdit }){
    const location = useLocation();
    const [ pinData, setPinData ] = useState(location?.state?.pin || { imageSrc: "", title: "", discription: "", tagsString: "" });

    function handlePinImageChange(event){
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])
        reader.onload = function(processed){
            console.log(processed.srcElement.result);
            setPinData({ ...pinData, imageSrc: processed.srcElement.result });
        }
    }

    function handleTitleChange(event){
        setPinData({ ...pinData, title: event.target.value });
    }

    function handleDiscriptionChange(event){
        setPinData({ ...pinData, discription: event.target.value });
    }

    function handleTagsChange(event){
        setPinData({ ...pinData, tagsString: event.target.value });
    }

    return(
        <div className="pinEditor">
            <input type="file" accept="image/png, image/gif, image/jpeg" onChange={handlePinImageChange} />
            <input type="text" value={pinData.title} placeholder="Title" onChange={handleTitleChange} />
            <textarea value={pinData.discription} placeholder="Discription" onChange={handleDiscriptionChange} ></textarea>
            <input type="text" value={pinData.tagsString} placeholder="Tags" onChange={handleTagsChange} />
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