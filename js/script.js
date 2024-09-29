function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    
    do {
        swapped = false; 
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; 
    } while (swapped); 

    return arr;
}


const arrayToSort = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
const sortedArray = bubbleSort(arrayToSort);


console.log(sortedArray);
