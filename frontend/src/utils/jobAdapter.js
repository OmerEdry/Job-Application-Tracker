/**
 * Maps frontend form data (from jobsConfig.js) into backend database schema
 * @param {Object} formData - The raw data from the React form
 * @param {string} status - The current status string from the UI
 * @returns {Object} Clean adapted data ready for the Backend
 */
export const mapFormToBackend = (formData, status) => {
    const statusMap = {
        'wishlist': 1,
        'applied': 2,
        'interviewing': 3,
        'offer': 4,
        'rejected': 5
    };

    const normalizedStatus = status ? status.toLowerCase() : 'wishlist';
    const statusId = statusMap[normalizedStatus];

    return {
        companyName: formData.companyName,
        title: formData.jobTitle,
        work_type: (formData.workType && typeof formData.workType === 'string') ? formData.workType.toLowerCase() : undefined,
        url: formData.jobUrl || "",
        location: formData.location || "",
        notes: formData.notes || "",
        tags: formData.tags || [],
        status_id: statusId
    };
};

/**
 * Maps an array of backend jobs to frontend-compatible jobs for the Board display
 * @param {Array} backendJobs - Raw data array from the GET API
 * @returns {Array} Formatted jobs ready for the UI components
 */
export const mapBackendToBoard = (backendJobs) => {
    if (!Array.isArray(backendJobs)) return [];

    return backendJobs.map(job => {
        let displayWorkType = job.work_type;
        if (job.work_type === 'on_site') displayWorkType = 'On site';
        if (job.work_type === 'remote') displayWorkType = 'Remote';
        if (job.work_type === 'hybrid') displayWorkType = 'Hybrid';

        return {
            ...job,
            jobTitle: job.title,
            workType: displayWorkType,
            companyName: job.companyName || job.company
        };
    });
};
