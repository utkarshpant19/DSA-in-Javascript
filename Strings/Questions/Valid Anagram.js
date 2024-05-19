var isAnagram = function(s, t) {

    if(s.length != t.length){
        return false;
    }

    const map = new Map();

    for(let i=0; i<s.length; i++){

        const char = s.charAt(i);
        if(map.has(char)){
            const value = map.get(char);
            map.set(char, value +1);
        }
        else{
            map.set(char, 1);
        }
    }

    for(let i=0; i<t.length; i++){

        const char = t.charAt(i);
        if(map.has(char)){

            const val = map.get(char);
            map.set(char, val -1);
            if(map.get(char) == 0){
                map.delete(char);
            }
           
        }
        else{
            return false;
        }
    }

    return map.size == 0;

};

console.log(isAnagram("anagram", "nagaram"));