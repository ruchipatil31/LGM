const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const branch = document.getElementById('branch').value;
  const semester = document.getElementById('semester').value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>${gender}</td>
    <td>${branch}</td>
    <td>${semester}</td>
  `;
  tbody.appendChild(row);

  form.reset();
});