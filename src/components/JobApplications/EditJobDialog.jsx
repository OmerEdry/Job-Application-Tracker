import { uniqueSkills, uniqueJobs } from "../../mockJobs/mockJobs"; //Repalce with api/get when moving to database, and save it as a state
import BaseForm from "../BaseForm";
import { EDIT_JOB_FIELDS } from "./jobsConfig";



export default function EditJobDialog({ isOpen, onClose, job }) {
    const handleSave = async (formData) => {
        const isNewSkill = !uniqueSkills.includes(formData.skill);

        if (isNewSkill) {
            console.log(`"${formData.skill}" is a new skill`);
        } else {
            console.log("Existing skill seleceted");
        }

        console.log("Final job before saving edits:", formData);
        onClose();
    };

    return (
        <BaseForm
            key={`${job?.id}-${isOpen ? 'open' : 'closed'}`}
            isOpen={isOpen}
            onClose={onClose}
            fields={EDIT_JOB_FIELDS}
            initialValues={job}
            title="Edit Job"
            onSubmit={handleSave}
            buttons={{ submit: 'Save Edits', secondary: 'Cancel' }}
        />
    );
}