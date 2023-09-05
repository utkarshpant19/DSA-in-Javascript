

const validParanthesis = (str)=>{

    let obj = {};

    for(let i =0; i<str.length; i++){
        if(str[i] == '(' && str[i+1] == ')'){
            i = i+2;
            continue;
        }

        obj[str[i]] = obj[str[i]] + 1 || 1;
    }

    console.log(obj);
    let open = 0, close = 0;

    for(let key in obj){
        if(key == '('){
            open = obj[key];
        }
        else
        close = obj[key];
    }

    return Math.abs(open -close);
}

console.log(validParanthesis("()))(("));