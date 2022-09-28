function isPalindrome(x) {
  let backwards = x.split("").reverse().join("");
  backwards = backwards.toUpperCase();
  x = x.toUpperCase();
  if (x == backwards) {
    return true;
  } else {
    return false;
  }
}