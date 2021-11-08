import { swap_array_elements, comparison } from "./helper"

export function bubble_sort(array) {
  const length = array.length;

  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length - 1 - i; j++) {
      if(comparison(array[j], array[j + 1]) === 1) {
        swap_array_elements(array, j, j + 1);
      }
    }
  }

  return array
}
