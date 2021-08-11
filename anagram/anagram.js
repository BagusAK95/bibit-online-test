const words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

function anagram(words) {
    const keys = [];
    const results = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const key = word.split('').sort().join('');
        if (keys.indexOf(key) == -1) {
            keys.push(key)
        }

        const index = keys.indexOf(key);
        if (!results[index]) {
            results[index] = [word]
        } else {
            results[index].push(word)
        }
    }

    console.dir(results)
};

anagram(words)