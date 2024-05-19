var characterReplacement = function(s, k) {

    let left =0, maxFreq =0, map = new Map(), len = 0, maxLen = 0;

    for(let right=0; right<s.length; right++){

        len = right -left +1;
        map.set(s[right], (map.get(s[right]) +1) || 1);

        maxFreq = Math.max(maxFreq, map.get(s[right]));

        // Invalid Window
        while(len - maxFreq > k){

            const value = map.get(s[left]);
            map.set(s[left], value -1);
            len--;
            left++;
        }

        maxLen = Math.max(maxLen, len);
    }

    return maxLen;
    
};

console.log(characterReplacement('ABAB',2));