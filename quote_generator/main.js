const topicInput = document.getElementById('topicInput');
const generateBtn = document.getElementById('generateBtn');
const quoteContainer = document.getElementById('quoteContainer');

generateBtn.addEventListener('click', async () => {
    const topic = topicInput.value.trim();

    if (topic !== '') {
        try {
            const quotes = await fetchQuotes(topic);
            displayQuotes(quotes);
        } catch (error) {
            console.error('Error fetching quotes:', error);
        }
    }
});

const fetchQuotes = async (topic) => {
    const apiKey = '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';
    const apiUrl = `https://api.openai.com/v1/engines/davinci-codex/completions`;

    const prompt = `Generate five quotes on the topic: ${topic}`;
    const maxTokens = 150;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            prompt,
            max_tokens: maxTokens,
            n: 5, // Number of completions (quotes) to generate
        }),
    });

    const data = await response.json();
    return data.choices.map(choice => choice.text.trim());
};

const displayQuotes = (quotes) => {
    quoteContainer.innerHTML = '';

    quotes.forEach((quote, index) => {
        const quoteCard = document.createElement('div');
        quoteCard.classList.add('quote-card');
        quoteCard.innerHTML = `
            <h3>Quote ${index + 1}</h3>
            <p>${quote}</p>
        `;
        quoteContainer.appendChild(quoteCard);
    });
};
