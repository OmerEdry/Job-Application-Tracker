import { uniqueSkills } from "../../mockJobs/mockJobs"; //Replace with api/get when moving to DB
import BaseForm from "../BaseForm";
import { getAccumulatedFields } from "./jobsConfig";
import { updateApplication } from "../../utils/apiService";

export default function EditJobDialog({ isOpen, onClose, job }) {
    const fields = getAccumulatedFields(job?.status);

    const handleSave = async (formData) => {
    try {
        await updateApplication(job.id, formData, job?.status);
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