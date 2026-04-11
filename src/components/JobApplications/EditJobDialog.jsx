import { uniqueSkills, uniqueJobs } from "../../mockJobs/mockJobs"; //Repalce with api/get when moving to database, and save it as a state
import BaseForm from "../BaseForm";



export default function EditJobDialog({ isOpen, onClose, job }) {

    const editFields = [
        { name: 'companyName', label: 'Company Name', placeholder: 'Select company', type: 'autocomplete', freeSolo: true, options: uniqueJobs, required: true },
        { name: 'companyLogo', label: 'Company Logo', type: 'text', required: false },
        { name: 'jobTitle', label: 'Job Title', type: 'autocomplete', freeSolo: true, required: true },
        { name: 'location', label: 'Location', type: 'text', required: false },
        { name: 'workType', label: 'Work Type', type: 'autocomplete', required: true },
        { name: 'status', label: 'Status', type: 'autocomplete', required: true },
        { name: 'jobUrl', label: 'Job URL', type: 'text', required: false },
        { name: 'tags', label: 'Tags', placeholder: 'Max 5', type: 'autocomplete', multiple: true, freeSolo: true, limitTags: 2, options: uniqueSkills, }
    ];

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
            isOpen={isOpen}
            onClose={onClose}
            title="Edit Job"
            fields={editFields}
            initialValues={job}
            onSubmit={handleSave}
        />
    );
}