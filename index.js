function findMatching(array, name) {
    return array.filter(item => item.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(array, string) {
    return array.filter(item => {
        const test = item.slice(0, string.length);
        return test === string;
    })
}

function matchName(array, string) {
    return array.filter(item => item.name === string);
}