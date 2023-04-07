/*
There is a given list of strings where each string contains only lowercase letters from a-j, inclusive. 
The set of strings is said to be a GOOD SET if no string is a prefix of another string. In this case, 
print GOOD SET. Otherwise, print BAD SET on the first line followed by the string being checked.

Note If two strings are identical, they are prefixes of each other.
*/

function noPrefix(words) {
    const root = new TrieNode();
    let badWordIndex = -1;
    for (let i = 0; i < words.length; i++) {
        insertWord(root, words[i], i)
        let hasPrefix = false;
        let isPrefix = false;
        let current = root;
        for (let character of words[i]) {
            if (current.isWordEnd) {
                hasPrefix = true
                break;
            }
            current = current.edges.get(character);
        }
        if (current.indexes.length > 1) {
            hasPrefix = true;
        }
        if (current.edges.size > 0) {
            isPrefix = true;
        }
        if (hasPrefix || isPrefix) {
            badWordIndex = i;
            break;
        }
    }
    if (badWordIndex === -1) {
        console.log('GOOD SET');
    } else {
        console.log('BAD SET');
        console.log(words[badWordIndex]);
    }
}