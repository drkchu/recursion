let list = process.argv[2];
list = list.split(',').map(Number)  // Converting the command line input into an array
                                    // Since the elements are strings, convert to numbers

console.log(mergeSort(list));

/**
 * Pseudocode for mergesort:
 * If size === 1:
 *   done
 * Sort left half
 * Sort right half
 * Merge halves
 *  
 */

function mergeSort(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return arr
    }

    let mid = Math.floor(arr.length / 2);

    let sortedLeftHalf = mergeSort(arr.slice(0, mid));       // Elements from 0 to (but not including) mid
    let sortedRightHalf = mergeSort(arr.slice(mid));         // Implicit mid to end

    return merge(sortedLeftHalf, sortedRightHalf);
}

// Function for merging two SORTED halves
function merge(sortedLeft, sortedRight) {
    let l = 0, r = 0;
    let result = []
    while (l < sortedLeft.length && r < sortedRight.length) {
        if (sortedLeft[l] < sortedRight[r]) {
            result.push(sortedLeft[l]);
            l++;
        }
        else {
            result.push(sortedRight[r]);
            r++;
        }
    }

    while (l < sortedLeft.length) {
        result.push(sortedLeft[l]);
        l++;
    }
    
    while (r < sortedRight.length) {
        result.push(sortedRight[r]);
        r++;
    }

    return result;
}
