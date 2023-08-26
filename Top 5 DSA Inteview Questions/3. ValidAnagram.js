const isAnagram = (str, str2)=>{
return str.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')

}

console.log(isAnagram('anagram','nagaram'));