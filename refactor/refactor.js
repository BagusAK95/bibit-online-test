function findFirstStringInBracket(str) {
    const result = str.match(/\((.*?)\)/)
    if (result) {
        console.dir(result[1])
    }
}

findFirstStringInBracket('What is an API? (Application Programming Interface)')