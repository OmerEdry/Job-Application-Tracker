import { mapFormToBackend } from './jobAdapter';

const BASE_URL = 'http://localhost:5000/api/applications';

/**
 * Sends a POST request to create a new job application
 * @param {Object} formData - The raw data from the React form
 * @param {string} status - The current status string from the UI
 * @returns {Promise<Object>} The newly created application object from the DB
 */
export const createApplication = async (formData, status) => {
    const mappedData = mapFormToBackend(formData, status);
    console.log("API Service: Sending mapped data to server:", mappedData);

    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mappedData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create application');
    }

    return await response.json();
};