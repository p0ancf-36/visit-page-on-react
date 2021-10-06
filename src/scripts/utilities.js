export function ElementArray(length, element) {
   return new Array(length)
      .fill(null)
      .map((_, index) => element(index));
}