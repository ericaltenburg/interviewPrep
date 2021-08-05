const flatten = (arr) => {
    arr.forEach((value, index) => {
        if (typeof value === "object") {
            arr.splice(index, 1, ...arr[index]);
            return flatten(arr);
        }
    });

    return arr;
};

const flatten2 = (arr) => {
    let ans = arr.join('$').split('$');

    ans.forEach((value, index) => {
        ans[index] = Number(value);
    });
    
    return ans;
};

const flatten3 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            arr.splice(i, 1, ...arr[i]);
            i--;
        }
    }
    
    return arr;
}



let test = [1, [2, [[3, 4], 5], 6]];
let test1 = [[[], [], [[]]]];
let test2 = [11, [2, [[3, 4], 5], 6]];

console.log(flatten(test));
console.log(flatten(test1));
console.log(flatten(test2));

console.log(flatten2(test));
console.log(flatten2(test1));
console.log(flatten2(test2));

console.log(flatten3(test));
console.log(flatten3(test1));
console.log(flatten3(test2));

const isVowel = (ch) => {
    return (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u');
}

const removeconsec = (str) => {
    let str1 = "";
    str1 = str1 + str.charAt(0);

    for (let i = 1; i < str.length; i++) {
        if ((isVowel(str.charAt(i-1))) && isVowel(str.charAt(i))) {
            continue;
        } else {
            let ch = str.charAt(i);
            str1 = str1 + ch;
        }
    }

    return str1;
}

console.log(removeconsec("saample output"));