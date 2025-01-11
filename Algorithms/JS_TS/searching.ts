function linearSearch(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}

function binarySearch(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const middlePoint = Math.floor(low + (high - low) / 2);
        const value = haystack[middlePoint];

        if (value === needle) return true;
        else if (value > needle) {
            high = middlePoint;
        } else {
            low = middlePoint + 1;
        }
    } while (low < high);

    return false;
}