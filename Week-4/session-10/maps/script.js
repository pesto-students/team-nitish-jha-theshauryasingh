function calcWordFrequencies() {
    let sentence = prompt("Enter the sentence to calculate word frequencies");
    let wordArray = sentence.split(' ');
    console.log(sentence, wordArray);
    const wordFrequencies = new Map();
    // iterate over sentence
    for (let i = 0; i < wordArray.length; i++) {
        key = wordArray[i]
        if (wordFrequencies.has(key)){
            wordFrequencies.set(key, wordFrequencies.get(key) + 1);
        }
        else {
            wordFrequencies.set(key, 1);
        }
    }
    Array.from(wordFrequencies.keys()).forEach(function(element) {
        console.log(element, wordFrequencies.get(element));
    });
}

calcWordFrequencies();