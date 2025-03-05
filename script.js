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
    
    // Animate the counter
    const octoberDayElement = document.getElementById('october-day');
    const targetNumber = octoberDay;
    
    // Start from a lower number for animation
    let currentNumber = Math.max(1, targetNumber - 50);
    
    // Set initial value
    octoberDayElement.textContent = currentNumber;
    
    // Animate the number counting up
    const counterAnimation = setInterval(() => {
        currentNumber++;
        octoberDayElement.textContent = currentNumber;
        
        if (currentNumber >= targetNumber) {
            clearInterval(counterAnimation);
            // Once animation is done, set the correct ordinal suffix
            setOrdinalSuffix(targetNumber);
        }
    }, 30);
    
    // Set the correct ordinal suffix (st, nd, rd, th)
    function setOrdinalSuffix(number) {
        const ordinal = document.getElementById('ordinal');
        
        if (number % 100 >= 11 && number % 100 <= 13) {
            // Special case for 11th, 12th, 13th
            ordinal.textContent = 'th';
        } else {
            switch (number % 10) {
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
        document.title = `October ${number}${ordinal.textContent}, 2019`;
        
        // Setup SMS share button
        setupShareButton(number, ordinal.textContent);
    }
    
    // Setup SMS share button
    function setupShareButton(dayNumber, ordinalSuffix) {
        const shareButton = document.getElementById('share-button');
        
        if (shareButton) {
            shareButton.addEventListener('click', function() {
                // Create the message: "happy october xxxxth"
                const message = `happy october ${dayNumber}${ordinalSuffix}`;
                
                // Create SMS link with the message
                const smsLink = `sms:?&body=${encodeURIComponent(message)}`;
                
                // Open the SMS app
                window.open(smsLink, '_blank');
            });
        }
    }
}); 