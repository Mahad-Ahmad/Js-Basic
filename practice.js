// const string = "i loVe pakistan";

// console.log(captaliaze(string));

// function captaliaze(str) {
//   const split = str.toLowerCase().split(" ");
//   for (let i = 0; i < split.length; i++) {
//     split[i] = split[i][0].toUpperCase() + split[i].slice(0);
//   }
//   return split;
// }

// function capitalizeTheFirstLetterOfEachWord(words) {
//   var separateWord = words.toLowerCase().split(" ");
//   for (var i = 0; i < separateWord.length; i++) {
//     separateWord[i] =
//       separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
//   }
//   return separateWord.join(" ");
// }
// console.log(capitalizeTheFirstLetterOfEachWord("my name is john"));

// const fisrt = "eye";

// console.log(palindrome(fisrt));

// function palindrome(a) {
//   const split = a.split("");
//   const reverse = split.reverse();
//   const join = reverse.join("");
//   if (a == join) return true;
//   return false;
// }

// const fisrt1 = "army";
// const fisrt2 = "mary";
// console.log(pali(fisrt1, fisrt2));

// function pali(a, b) {
//   if (a.length !== b.length) return "false";
//   const n1 = a.toLowerCase().split("");
//   const n2 = b.toLowerCase().split("");
//   console.log(n1);

//   let total1 = 0;
//   for (let i = 0; i < n1.length; i++) {
//     for (let j = 0; j < n2.length; i++) {
//       if (n1[i] === n2[j]) total1++;
//     }
//   }
//   console.log(total1);
// }

// const arr = [1, 0, 7, 4, -5, -7];
// console.log(sort(arr));

// function sort(arr) {
//   const sort = arr.sort();
//   const o = Math.max.apply(null, sort);
//   sort.splice(sort.indexOf(o), 1);
//   return Math.max.apply(null, sort);
// }

// function formatDate(userDate) {
//   let dat = new Date(userDate);
//   let date1 = new Date(
//     dat.getTime() - dat.getTimezoneOffset() * 6000
//   ).toISOString()().split[" "][0];
//   return date1;
// }

// console.log(formatDate("12/31/2014"));

const fisrt1 = "army";
const fisrt2 = "mary";

console.log(pali(fisrt1, fisrt2));

function pali(a, b) {
  if (a.length !== b.length) return "false";

  const n1 = a.toLowerCase().split("");
  const n2 = b.toLowerCase().split("");
  console.log(n1, n2);
  // if (n1.sort === n2.sort) return "true";

  // let total1 = 0;
  for (let i = 0; i < n1.length; i++) {
    for (let j = 0; j < n2.length; i++) {
      if (n1[i] === n2[i]) return;
    }
  }
  // return "false";
  // console.log(total1);
}

// function add66(a, b) {
//   return a + b;
// [zerba, horse].forEach(k=>{

// })

// console.log(add66(2)(3));

function tt(a) {
  return a % 0;
}

console.log(tt(5));
let mw = 2;
