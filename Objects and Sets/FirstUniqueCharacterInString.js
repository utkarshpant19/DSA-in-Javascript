const firstUniqChar = (s)=> {

    let map = new Map();
    for (let i = 0; i < s.length; i++) {

        if (map.has(s[i])) {

            let newVal = map.get(s[i]);
            map.set(s[i], newVal + 1);

        }
        else {
            map.set(s[i], 1);
        }
    }

    for (let entry of map.entries()) {

        if (entry[1] == 1) {
            return s.indexOf(entry[0]);
        }

    }
    return -1;

};

let s = "loveleetcode";
console.log(firstUniqChar(s));
