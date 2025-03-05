document.addEventListener('DOMContentLoaded', function() {
    // Set the start date - October 1, 2019
    const startDate = new Date(2019, 9, 1); // Month is 0-indexed, so 9 = October
    
    // Get today's date
    const today = new Date();
    
    // Calculate days difference
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Add 1 because October 1 is the first day
    const octoberDay = diffDays + 1;
    
    // Set the day in the HTML
    document.getElementById('october-day').textContent = octoberDay;
    
    // Set the correct ordinal suffix (st, nd, rd, th)
    const ordinal = document.getElementById('ordinal');
    
    if (octoberDay % 100 >= 11 && octoberDay % 100 <= 13) {
        // Special case for 11th, 12th, 13th
        ordinal.textContent = 'th';
    } else {
        switch (octoberDay % 10) {
            case 1:
                ordinal.textContent = 'st';
                break;
            case 2:
                ordinal.textContent = 'nd';
                break;
            case 3:
                ordinal.textContent = 'rd';
                break;
            default:
                ordinal.textContent = 'th';
        }
    }
    
    // Set the page title to include the current October day
    document.title = `October ${octoberDay}${ordinal.textContent}, 2019`;
}); 