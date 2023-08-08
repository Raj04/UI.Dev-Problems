// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 1000);
//   setTimeout(function () {
//     console.log(3);
//   }, 0);
//   console.log(4);
// })();

//
// 1,4,3,2

var a = {},
  b = { key: "b" },
  c = { key: "c" };
a[b] = 123;
a[c] = 456;

// console.log(a[b]);
// 123

// a :{
// object:456
// }

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// 5 5 5 5 5

// refs

// const promise1=()=>{
//     new Promise("Success");
// }

// const apiresponse=await
