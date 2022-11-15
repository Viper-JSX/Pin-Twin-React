import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import ImageSelect from "./Image_select";
import PinDeleteButton from "./Pin_delete_button";
import PinEditorInputs from "./Pin_editor_inputs";
import PinEditorTextFields from "./Pin_editor_text_fields";

function PinEditor({ mode, handlePinCreate, handlePinEdit, handleConfirmationWindowOpen }){
    const location = useLocation();
    const userId = useSelector((state) => state.user.id);
    const [ pinData, setPinData ] = useState(() => {
        if(location.state?.pin){
            return { ...location.state.pin, tagsString: location.state.pin.tags.join(" ") };
        }
        
        return ( { creatorId: userId, imageSrc: "", title: "", discription: "", tagsString: "" } );
    });

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
            <PinEditorInputs pinData={pinData} handlePinImageChange={handlePinImageChange} handlePinTitleChange={handlePinTitleChange} handlePinDiscriptionChange={handlePinDiscriptionChange} handlePinTagsChange={handlePinTagsChange} />

            {
                mode === "create" ?
                <button className="createPin" onClick={() => handlePinCreate({ pinData })}>Create</button>
                :
                <>
                    <PinDeleteButton handleConfirmationWindowOpen={handleConfirmationWindowOpen} pinId={pinData.id} />
                    <button className="editPin" onClick={ () => handlePinEdit({ pinData })}>Save</button>
                </>
            }
        </div>
    );
}

export default PinEditor;