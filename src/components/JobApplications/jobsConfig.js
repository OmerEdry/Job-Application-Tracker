import { uniqueJobs, uniqueSkills } from "../../mockJobs/mockJobs";

const COMPANY_NAME = { name: 'companyName', label: 'Company Name', placeholder: 'Select company', type: 'autocomplete', freeSolo: true, options: uniqueJobs, required: true };
const COMPANY_LOGO = { name: 'companyLogo', label: 'Company Logo', type: 'text', required: false };
const JOB_TITLE = { name: 'jobTitle', label: 'Job Title', type: 'autocomplete', freeSolo: true, required: true };
const LOCATION = { name: 'location', label: 'Location', type: 'text', required: false };
const WORK_TYPE = { name: 'workType', label: 'Work Type', type: 'autocomplete', freeSolo: true, required: true };
const STATUS = { name: 'status', label: 'Status', type: 'autocomplete', required: true, options: ['Wishlist', 'Applied', 'Interviewing', 'Offer', 'Archive'] };
const JOB_URL = { name: 'jobUrl', label: 'Job URL', type: 'text', required: false };
const TAGS = { name: 'tags', label: 'Tags', placeholder: 'Max 5', type: 'autocomplete', multiple: true, freeSolo: true, limitTags: 2, options: uniqueSkills, };
const APPLIED_DATE = { name: 'appliedDate', label: 'Applied Date', type: 'date', required: true };
const PLATFORM = { name: 'platform', label: 'Platform', type: 'text', };
const NEXT_INTERVIEW_DATE = { name: 'nextInterviewDate', label: 'Interview Date', type: 'date', required: true };
const ROUND = { name: 'round', label: 'Round', type: 'text', };
const ANSWER_DEADLINE = { name: 'answerDeadline', label: 'Answer Deadline', type: 'date' };
const OFFER_AMOUNT = { name: 'offerAmount', label: 'Offer Amount', type: 'text' };
const NOTES = { name: 'notes', label: 'Notes', type: 'text' };

export const STATUSES = ['Wishlist', 'Applied', 'Interviewing', 'Offer'];

export const STATUS_FIELDS_CONFIG = {
    Wishlist: [
        COMPANY_NAME, COMPANY_LOGO, JOB_TITLE, LOCATION,
        WORK_TYPE, STATUS, JOB_URL, TAGS
    ],
    Applied: [APPLIED_DATE, PLATFORM],
    Interviewing: [NEXT_INTERVIEW_DATE, ROUND],
    Offer: [ANSWER_DEADLINE, OFFER_AMOUNT]
};

export const capitalize = (str) => {
    if (!str || typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const getAccumulatedFields = (status) => {
    const normalizedStatus = capitalize(status);
    const index = STATUSES.indexOf(normalizedStatus);

    if (index === -1) return STATUS_FIELDS_CONFIG[normalizedStatus] || [];

    let fields = [];
    for (let i = 0; i <= index; i++) {
        const stage = STATUSES[i];
        if (STATUS_FIELDS_CONFIG[stage]) {
            fields = [...fields, ...STATUS_FIELDS_CONFIG[stage]];
        }
    }
    return fields;
};

export const getFieldsBetweenStatuses = (currentStatus, newStatus) => {
    if (!newStatus) return [];
    const currentIndex = STATUSES.indexOf(capitalize(currentStatus));
    const newIndex = STATUSES.indexOf(capitalize(newStatus));

    if (newIndex <= currentIndex) return [];

    let fields = [];
    for (let i = currentIndex + 1; i <= newIndex; i++) {
        const stage = STATUSES[i];
        if (STATUS_FIELDS_CONFIG[stage]) {
            fields = [...fields, ...STATUS_FIELDS_CONFIG[stage]];
        }
    }
    return fields;
};