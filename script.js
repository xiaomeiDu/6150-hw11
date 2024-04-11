document
  .getElementById("jokeButton")
  .addEventListener("click", fetchRandomJoke);

function fetchRandomJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((joke) => {
      document.getElementById("setup").textContent = joke.setup;
      setTimeout(() => {
        // Adds a slight delay before showing the punchline for comedic timing
        document.getElementById("punchline").textContent = joke.punchline;
      }, 1000); // Delay of 3 seconds
    })
    .catch((error) => console.error("Error fetching joke:", error));
}

// Fetch a joke when the page loads
fetchRandomJoke();
