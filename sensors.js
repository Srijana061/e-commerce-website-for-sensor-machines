// Dummy data for featured sensors
const featuredSensors = [
    { name: "Temperature Sensor", description: "Measures temperature", image: "sensor1.jpg" },
    { name: "Humidity Sensor", description: "Measures humidity", image: "sensor2.jpg" },
    { name: "Pressure Sensor", description: "Measures pressure", image: "sensor3.jpg" }
];

// Function to render featured sensors
function renderFeaturedSensors() {
    const sensorGrid = document.querySelector('.sensor-grid');
    sensorGrid.innerHTML = '';

    featuredSensors.forEach(sensor => {
        const sensorCard = document.createElement('div');
        sensorCard.classList.add('sensor-card');
        sensorCard.innerHTML = `
            <img src="images/${sensor.image}" alt="${sensor.name}">
            <h3>${sensor.name}</h3>
            <p>${sensor.description}</p>
        `;
        sensorGrid.appendChild(sensorCard);
    });
}

// Call function to render featured sensors
renderFeaturedSensors();
