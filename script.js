// Generar nombres de usuario aleatorios
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack', 'Katherine', 'Liam', 'Mia', 'Noah', 'Olivia', 'Oscar', 'Penelope', 'Quinn', 'Ryan', 'Sofia'];

// Obtener elementos de personas
const people = document.querySelectorAll('.person');

// Función para actualizar el estado de conexión de las personas
function updatePeopleStatus() {
    // Obtener una cantidad aleatoria de personas conectadas
    const connectedCount = Math.floor(Math.random() * (people.length + 1));

    // Recorrer todas las personas y actualizar su estado
    for (let i = 0; i < people.length; i++) {
        if (i < connectedCount) {
            // Persona conectada
            people[i].classList.remove('afk');
            people[i].textContent = names[Math.floor(Math.random() * names.length)];
        } else {
            // Persona desconectada
            people[i].classList.add('afk');
            people[i].textContent = names[Math.floor(Math.random() * names.length)];
        }
    }
}

// Actualizar el estado de las personas cada 10 segundos
setInterval(updatePeopleStatus, 10000);

// Actualizar el estado de las personas al cargar la página
updatePeopleStatus();