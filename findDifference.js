function findDifference(a, b) {
  let volumeA = a[0] * a[1] * a[2];
  let volumeB = b[0] * b[1] * b[2];
  if (volumeA > volumeB) {
    return volumeA - volumeB;
  } else if (volumeB > volumeA) {
    return volumeB - volumeA;
  } else {
    return 0;
  }
}