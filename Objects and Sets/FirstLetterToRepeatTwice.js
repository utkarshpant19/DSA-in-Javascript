const firstLetterToRepeatTwice = (s)=>{
    let obj = {};

    for(let i=0; i<s.length; i++){

      if(!obj[s[i]]){
          obj[s[i]] = i;
      }
      else{
          return s[i];
      }
    }
}

console.log(firstLetterToRepeatTwice("aa"));