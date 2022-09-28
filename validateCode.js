function validateCode (code) {
  if (String(code)[0] == 1 || String(code)[0] == 2 || String(code)[0] == 3) {
    return true;
  } else {
    return false;
  }
}



// function validateCode (code) {return /^[123]/.test(code)}