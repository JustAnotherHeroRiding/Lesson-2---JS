function shiftN(array, n) {
    const length = array.length;
    n = n % length;
    if (n === 0) {
      return array; // No need to shift if n is zero
    }
  
    reverseArray(array, 0, length - 1); // Reverse the entire array
    reverseArray(array, 0, n - 1);      // Reverse the first part
    reverseArray(array, n, length - 1); // Reverse the second part
  
    return array;
  }
  
  // Helper function to reverse a portion of the array in-place
  function reverseArray(array, start, end) {
    while (start < end) {
      const temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start++;
      end--;
    }
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5, 6];
  const shiftAmount = 2;
  
  shiftN(originalArray, shiftAmount);
  console.log("Shifted Array:", originalArray);
  