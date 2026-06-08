export const getRelativeTime = (dateString) => {
    if (!dateString) return '';
    
    const created = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - created) / 1000);
    
    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);

    if (months > 0) return months === 1 ? 'Added a month ago' : `Added ${months} months ago`;
    if (weeks > 0) return weeks === 1 ? 'Added a week ago' : `Added ${weeks} weeks ago`;
    if (days > 0) {
        if (days === 1) return 'Added yesterday';
        return `Added ${days} days ago`;
    }
    return 'Added today';
};

export const isFollowUpRecommended = (dateString) => {
    if (!dateString) return false;

    const created = new Date(dateString);
    const now = new Date();
    const diffInMs = now - created;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays >= 21;
};