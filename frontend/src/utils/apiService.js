const BASE_URL = 'http://localhost:5000/api/applications';

/**
 * Sends a POST request to create a new job application
 * @param {Object} applicationData - The form data from the UI
 * @returns {Promise<Object>} The newly created application object
 */
export const createApplication = async (applicationData) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create application');
    }

    return await response.json();
};