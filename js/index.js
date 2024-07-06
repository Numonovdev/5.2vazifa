// 2-qism.

// 1-masala

// iife
// (function son(arr){
// })()// strukturasi shundey tashqi ozgaruvchi yokiruvchi elementlardan himoyalash uchun

// 2-masala
// argumentga funksiya elon qilish 
// funksiya ichida funksiya elon qilish 
// misol uchun forEach,map 

// 4-masala

// function faan(n){
//      if(n == 0){
//           return 1;
//      }
//      return n ** faan(n - 1);
// } // funksiyani oz ichiga ozini chaqirish

// console.log(faan(4));

// 3-qism. Masalalar

// 1-masala

// const ob = {
//      name: 'sherniyoz',
//      year: 22,
//      from: 'quva',
//      job: 'student',
// }

// console.log(Object.keys(ob))

// 2-masala

// const ob = {
//      name: 'sherniyoz',
//      year: 22,
//      from: 'quva',
//      job: 'student',
// }

// console.log(Object.values(ob))

// 3masala

// const ob = {
//      name: 'sherniyoz',
//      year: 22,
//      from: 'quva',
//      job: 'student',
// }

// console.log(Object.entries(ob))


// 4-masala

// const ob = {
//      name: 'sherniyoz',
//      year: 22,
//      from: 'quva',
//      job: 'student',
// }

// console.log(Object.freeze(ob))






// Massiv metodlariga oid masalalar.



// 3-masala
// const arr1 =[7, 8, 9]
// const arr2 =[1, 2, 3]
// const arr3 =[4, 5, 6]

// function  arr(arr1, arr2, arr3){
//      let arr =  arr2.concat(arr3, arr1);
//      return arr;
// }

// console.log(arr(arr1, arr2, arr3))

// 4-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function kubi(arr, element){
//      let res;
//      for(let i=0;i<arr.length;i++){
//           if(arr[i]==element){
// res=arr.indexOf(element)
//           }
//      }
//      return res**3
// }
// console.log(kubi(arr,3));

// 5-Massala
// let arr1 = [1, 2, 3,4, 5, 6,2]
// function lastindex(arr1, arr2){
//      return arr1.lastIndexOf(arr2)
// }
// console.log(lastindex(arr1, 2))

// 6-masala

// let arr1 = [1, 2,3, 4, 5,]
// let arr2 = [3,8,9,65,2,43]
// function aniqlovchi(arr1,arr2,element){
//      let res = arr1.concat(arr2);
// for(let i of res){
//      if(i === element){
//        return 'true'   
//      } 
// }
// }
// console.log(aniqlovchi(arr1,arr2,3))

// 7-malasala

// let arr = [1, 2,3,4,45,6]
// let element = 2;
// function qidiruv(arr,element){
//     return arr.includes(element);
// }
// console.log(qidiruv(arr, element))

// 8-masala





// 9-masala
// let arr = [1,2,3,4,5,6,7,8,9,10]

// function mapmethod(arr){
//      let son = []; 
//      arr.map(function(value){
//           if(value % 2 == 0){
//               son.push( value ** 2 )
//           } else{
//               son.push( value ** 3 )
//           }
//      })
//      return son;
// }
// console.log(mapmethod(arr));


// 10-masala
// let arr = ['son', 'tiniq', 'toq', 'mashi', 'nil']
// function sikil(arr){
// let res = [];
// arr.map(function(value){
//      res.push(value[value.length - 1])
// })
// return res;
// }
// console.log(sikil(arr))

// 11-masala
