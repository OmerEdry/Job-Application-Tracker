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