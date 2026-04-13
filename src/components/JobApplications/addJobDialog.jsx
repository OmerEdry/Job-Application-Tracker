import { uniqueSkills, uniqueJobs } from "../../mockJobs/mockJobs"; //Repalce with api/get when moving to database, and save it as a state
import BaseForm from "../BaseForm";
import { ADD_JOB_FIELDS } from "./jobsConfig";



export default function AddJobDialog({ isOpen, onClose, status }) {


    const buttons = { submit: 'Add Job', secondary: 'Save As Draft' };

    const handleSave = async (formData) => {
        // TODO create new job object and add it to corrosponding stack
        console.log("Final job before saving edits:", formData);
        onClose();
    };

    const handleSaveDraft = async (formData) => {
        // TODO add draft functionality
        console.log("Final job before saving draft edits:", formData);
        onClose();
    }

    return (
        <BaseForm
            key={`${status}-${isOpen ? 'open' : 'closed'}`}
            isOpen={isOpen}
            onClose={onClose}
            fields={ADD_JOB_FIELDS}
            title="Add New Job"
            submitLabel='Add Job'
            cancelLabel='Save As Draft'
            onSubmit={handleSave}
            onSecondaryAction={handleSaveDraft}
            buttons={buttons}
        />
    );
}