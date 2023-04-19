document.getElementById('generation-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('input').value;
    const currentYear = new Date().getFullYear();
    const yearOfBirth = isNaN(input) ? currentYear - parseInt(input, 10) : parseInt(input, 10);
    const generation = getGeneration(yearOfBirth);
    const popularShows = getPopularShows(yearOfBirth);
    document.getElementById('output').innerHTML = `Generation: ${generation}<br>Popular Shows: ${popularShows.join(', ')}`;
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
  
  function getPopularShows(yearOfBirth) {
    const showsByDecade = {
      1940: ['Howdy Doody', 'Captain Kangaroo', 'The Mickey Mouse Club'],
      1950: ['The Flintstones', 'Looney Tunes', 'The Jetsons'],
      1960: ['Sesame Street', 'Scooby-Doo', 'The Pink Panther'],
      1970: ['Mister Rogers\' Neighborhood', 'The Muppet Show', 'Super Friends'],
      1980: ['He-Man and the Masters of the Universe', 'The Smurfs', 'DuckTales'],
      1990: ['Rugrats', 'Animaniacs', 'Power Rangers'],
      2000: ['SpongeBob SquarePants', 'Dora the Explorer', 'Kim Possible'],
      2010: ['Adventure Time', 'Gravity Falls', 'Steven Universe']
    };
  
    const ageToWatch = 7;
    const viewingYear = yearOfBirth + ageToWatch;
    const decade = Math.floor(viewingYear / 10) * 10;
    return showsByDecade[decade] || ['Unknown'];
  }
  