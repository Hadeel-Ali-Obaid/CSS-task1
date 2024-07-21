document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const tableBody = document.querySelector('tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const species = document.getElementById('species').value;
        const age = document.getElementById('age').value;
        const habitat = document.getElementById('habitat').value;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${species}</td>
            <td>${age} years</td>
            <td>${habitat}</td>
        `;

        tableBody.appendChild(newRow);
        form.reset();
    });
});
