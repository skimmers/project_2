const resultsHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const city = document.querySelector('#city-search').value.trim();
    const state = document.querySelector('#state-search').value.trim();
    const zipcode = document.querySelector('zipcode-search').value.trim();
  
    if (city && state && zipcode) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/results', {
        method: 'POST',
        body: JSON.stringify({ city, state, zipcode }),
        headers: { 'Content-Type': 'application/json' },
      });
  
    }
  };
  
  document
    .querySelector('.results-form')
    .addEventListener('search', resultsHandler);