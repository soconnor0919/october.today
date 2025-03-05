/**
 * October Today API
 * Simple client-side API that returns the current October day count
 */

// Calculate days since October 1, 2019
function calculateOctoberDay() {
    const startDate = new Date(2019, 9, 1); // Month is 0-indexed, so 9 is October
    const today = new Date();
    
    // Calculate difference in days
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

// Set ordinal suffix (st, nd, rd, th)
function getOrdinalSuffix(number) {
    const j = number % 10;
    const k = number % 100;
    
    if (j === 1 && k !== 11) {
        return "st";
    }
    if (j === 2 && k !== 12) {
        return "nd";
    }
    if (j === 3 && k !== 13) {
        return "rd";
    }
    return "th";
}

// Handle requests for the API
document.addEventListener('DOMContentLoaded', () => {
    // Check if this is an API request from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const isApiRequest = urlParams.get('api');
    
    if (isApiRequest === 'json') {
        const octoberDay = calculateOctoberDay();
        const suffix = getOrdinalSuffix(octoberDay);
        
        // Create the response object
        const response = {
            day: octoberDay,
            ordinal: suffix,
            formatted: `${octoberDay}${suffix}`,
            text: `happy october ${octoberDay}${suffix}`
        };
        
        // Display as JSON and prevent normal page rendering
        document.body.innerHTML = `<pre>${JSON.stringify(response, null, 2)}</pre>`;
        document.body.style.fontFamily = 'monospace';
        document.body.style.padding = '20px';
        document.body.style.backgroundColor = '#f5f5f5';
    }
}); 