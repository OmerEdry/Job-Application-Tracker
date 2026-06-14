import BaseForm from "../BaseForm";
import { getAccumulatedFields } from "./jobsConfig";
import { createApplication } from "../../utils/apiService";

export default function AddJobDialog({ isOpen, onClose, status, onRefresh }) {
    const fields = getAccumulatedFields(status);

    const handleSave = async (formData) => {
        console.log("Raw formData directly from BaseForm:", formData);
        console.log("Current status passed to dialog:", status);
        
        try {
            await createApplication(formData, status);

            if (onRefresh) {
                await onRefresh();
            }
            
            onClose();
        } catch (error) {
            console.error("Failed to save job:", error.message);
            alert(`Error: ${error.message}`);
        }
    };

    const handleSaveDraft = async (formData) => {
        // TODO add draft functionality
        console.log("Final job before saving draft:", formData);
        onClose();
    }

    return (
        <BaseForm
            key={`${status}-${isOpen ? 'open' : 'closed'}`}
            isOpen={isOpen}
            onClose={onClose}
            fields={fields}
            title="Add New Job"
            onSubmit={handleSave}
            onSecondaryAction={handleSaveDraft}
            buttons={{ submit: 'Add Job', secondary: 'Save As Draft' }}
        />
    );
}