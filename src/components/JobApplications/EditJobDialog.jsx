import { uniqueSkills } from "../../mockJobs/mockJobs"; //Replace with api/get when moving to DB
import BaseForm from "../BaseForm";
import { getAccumulatedFields } from "./jobsConfig";

export default function EditJobDialog({ isOpen, onClose, job }) {
    const fields = getAccumulatedFields(job?.status);

    const handleSave = async (formData) => {
        const isNewSkill = !uniqueSkills.includes(formData.skill);

        if (isNewSkill) {
            console.log(`"${formData.skill}" is a new skill`);
        } else {
            console.log("Existing skill selected");
        }

        console.log("Final job before saving edits:", formData);
        onClose();
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