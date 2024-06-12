document.getElementById('randomJokeButton').addEventListener('click', async () => {
    const res = await fetch('/api/jokes/random');
    const joke = await res.json();
    document.getElementById('randomJokeResult').innerText = `${joke.question}\n\n${joke.answer}`;
});