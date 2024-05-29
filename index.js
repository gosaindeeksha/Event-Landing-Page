function updateCountdown() {
    // Set the date we're counting down to
    const countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "0";
            document.getElementById("hours").innerHTML = "0";
            document.getElementById("minutes").innerHTML = "0";
            document.getElementById("seconds").innerHTML = "0";
        }
    }, 1000);
}

// Call the function to start the countdown
updateCountdown();

// to see full schedule functionality 
document.getElementById('show-more').addEventListener('click', function() {
    document.getElementById('extra-cards').classList.toggle('d-none');
    this.textContent = this.textContent === 'See Full Schedule' ? 'See Less' : 'See Full Schedule';
});
//to all speakers functionality
document.getElementById('show-more2').addEventListener('click', function() {
    const extraSpeakers = document.getElementById('extra-speakers');
    extraSpeakers.classList.toggle('d-none');
    this.textContent = this.textContent === 'Meet All the Speakers' ? 'Show Less' : 'Meet All the Speakers';
});
