document.getElementById('generation-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('input').value;
  const currentYear = new Date().getFullYear();
  const yearOfBirth = isNaN(input) ? currentYear - parseInt(input, 10) : parseInt(input, 10);
  const generation = getGeneration(yearOfBirth);
  document.getElementById('output').innerText = `Generation: ${generation}`;
});

function getGeneration(yearOfBirth) {
  if (yearOfBirth >= 1946 && yearOfBirth <= 1964) {
    return 'Baby Boomer';
  } else if (yearOfBirth >= 1965 && yearOfBirth <= 1980) {
    return 'Generation X';
  } else if (yearOfBirth >= 1981 && yearOfBirth <= 1996) {
    return 'Millennial';
  } else if (yearOfBirth >= 1997) {
    return 'Generation Z';
  } else {
    return 'Unknown';
  }
}
