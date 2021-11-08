function swap_array_elements(array, a, b) {
  const temp = array[a];

  array[a] = array[b];
  array[b] = temp;
}

function comparison(a, b) {
  if(a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
}

export { swap_array_elements, comparison }
