import BaseForm from "../BaseForm";
import { getAccumulatedFields } from "./jobsConfig";
import { updateApplication } from "../../utils/apiService";

export default function EditJobDialog({ isOpen, onClose, job, onRefresh }) {
    const fields = getAccumulatedFields(job?.status);

    const handleSave = async (formData) => {
        try {
            await updateApplication(job.id, formData, job?.status);
            if (onRefresh) {
                await onRefresh();
            }
            onClose();
        } catch (error) {
            console.error("Failed to update job:", error.message);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <BaseForm
            key={`${job?.id}-${isOpen ? 'open' : 'closed'}`}
            isOpen={isOpen}
            onClose={onClose}
            fields={fields}
            initialValues={job || {}}
            title="Edit Job"
            onSubmit={handleSave}
            buttons={{ submit: 'Save Edits', secondary: 'Cancel' }}
        />
    );
}