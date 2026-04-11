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



export const ADD_JOB_FIELDS = [
    COMPANY_NAME, COMPANY_LOGO, JOB_TITLE, LOCATION, WORK_TYPE, STATUS, JOB_URL, TAGS, APPLIED_DATE, PLATFORM
];

export const EDIT_JOB_FIELDS = [
    COMPANY_NAME, COMPANY_LOGO, JOB_TITLE, LOCATION, WORK_TYPE, STATUS, JOB_URL, TAGS
];