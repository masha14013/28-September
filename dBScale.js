function dBScale(intensity) {
  let x = intensity / 10 ** -12
  return 10 * Math.log10(x);
}