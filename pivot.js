function generateArray(size, min = 0, max = 100) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [], right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr;
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function main() {
    const array = generateArray(50, 0, 100);
    console.log("Original Array:", array);

    console.log("Quick Sort:", quickSort([...array]));
    console.log("Bubble Sort:", bubbleSort([...array]));

    const target = array[Math.floor(Math.random() * array.length)];
    console.log(`Searching for ${target}...`);
    console.log(`Linear Search result: ${linearSearch(array, target)}`);

    console.log(`Max Value: ${findMax(array)}`);
    console.log(`Min Value: ${findMin(array)}`);
}

main();