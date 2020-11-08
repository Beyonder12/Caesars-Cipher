function rot13(str) { // LBH QVQ VG!
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let shiftedAlphabet = alphabet.slice(13) + alphabet.slice(0,13) //NOPQRSTUVWXYZABCDEFGHIJKLM
  let decoded = []
  for(let i = 0; i < str.length; i++) {
    if(shiftedAlphabet.indexOf(str[i]) != -1) {
      decoded.push(alphabet[shiftedAlphabet.indexOf(str[i])])
    }
    else {
      decoded.push(str[i])
    }
  }
  return decoded.join('')
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
