function solution(a, b){
  if (a.length < b.length) {
    return `${a}${b}${a}`;
  } else if (a.length > b.length) {
    return `${b}${a}${b}`;
  } else if (a.length == b.length) {
    return `000`;
  }
}