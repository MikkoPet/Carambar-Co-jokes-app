document.getElementById('randomJokeButton').addEventListener('click', async () => {
    const res = await fetch('/api/jokes/random');
    const joke = await res.json();
    document.getElementById('randomJokeResult').innerText = `${joke.question}\n\n${joke.answer}`;
});

document.getElementById('allJokesButton').addEventListener('click', async () => {
    const res = await fetch('/api/jokes/');
    const jokes = await res.json();
    let jokesHTML = '<table>';
    jokes.forEach(joke => {
        jokesHTML += `<tr class="jokesTable">
                        <td>${joke.question}</td>
                        <td>${joke.answer}</td>
                        </tr>`
    });
    jokesHTML += '</table>';
    document.getElementById('allJokesResult').innerHTML = jokesHTML;
});

document.getElementById('specificJokeButton').addEventListener('click', async () => {
    const jokeId = document.getElementById('specificJokeIdInput').value;
    const res = await fetch(`/api/jokes/${jokeId}`);
    const joke = await res.json();
    document.getElementById('specificJokeIdResult').innerText = `${joke.question}\n\n${joke.answer}`;
});

const form = document.getElementById('addJokeForm');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const question = document.getElementById('addJokeQuestion').value;
    const answer = document.getElementById('addJokeAnswer').value;
    const joke = { question, answer };
    const res = await fetch('/api/jokes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(joke)
    });
    if (res.ok) {
        document.getElementById('addJokeResult').textContent = 'Votre blague à bien été ajoutée !';
        form.reset();
    } else {
        document.getElementById('addJokeResult').textContent = 'Une erreur s\'est produite à l\'ajout de votre blague. Veuillez réessayer ultérieurement';
    }
});