function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

const arrowSwap = <T, U>(a: T, b: U): [U, T] => {
  return [b, a];
};

let result = swap(123, "Hello");
console.log(result); // ["Hello", 123]
