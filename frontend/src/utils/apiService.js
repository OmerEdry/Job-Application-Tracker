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

/**
 * Sends a PUT request to update an existing job application
 * @param {string|number} id - The ID of the job to update
 * @param {Object} formData - The updated data from the React form
 * @param {string} status - The current status string from the UI
 */
export const updateApplication = async (id, formData, status) => {
    const mappedData = mapFormToBackend(formData, status);

    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mappedData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update application');
    }

    return await response.json();
};

/**
 * Sends a DELETE request to remove a job application by its ID
 * @param {string|number} id - The ID of the job to delete
 */
export const deleteApplication = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete application');
    }

    return await response.json();
};

/**
 * Fetches all job applications from the backend
 * @returns {Promise<Array>} List of job applications
 */
export const fetchApplications = async () => {
    const response = await fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch applications');
    }

    return await response.json();
};