

const validParanthesis = (str)=>{


    let OB_needed = 0, CB_needed = 0;

    for(let i =0; i<str.length; i++){

        if(str[i] == '('){
            CB_needed++;
        }
        else if(CB_needed > 0){
            CB_needed--;
        }
        else
        OB_needed++;
    }

    return OB_needed + CB_needed;

}

console.log(validParanthesis("()))(("));