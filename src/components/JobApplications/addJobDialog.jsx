import BaseForm from "../BaseForm";
import { getAccumulatedFields } from "./jobsConfig";

export default function AddJobDialog({ isOpen, onClose, status }) {
    const fields = getAccumulatedFields(status);

    const handleSave = async (formData) => {
        // TODO create new job object and add it to corresponding stack
        console.log("Final job before saving:", formData);
        onClose();
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