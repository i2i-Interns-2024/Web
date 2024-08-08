document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/remaining-usage')
        .then(response => response.json())
        .then(data => {
            updateCircle('#circle1', data.usage1);
            updateCircle('#circle2', data.usage2);
            updateCircle('#circle3', data.usage3);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function updateCircle(circleId, percentage) {
    const circleElement = document.querySelector(circleId).querySelector('circle');
    const textElement = document.querySelector(circleId).querySelector('text');

    
    const circumference = 2 * Math.PI * circleElement.r.baseVal.value;
    
  
    circleElement.style.strokeDasharray = circumference;
    circleElement.style.strokeDashoffset = circumference - (percentage / 100) * circumference;
    
    
    textElement.textContent = `${percentage}%`;
}
