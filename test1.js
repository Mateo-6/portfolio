/* Alejandro Martinez
16:08
const a = [1];
const b = a;
b.push(2);
console.log(a, b);
Alejandro Martinez
16:17
sumTwoSmallestNumbers()
Ana Maria Espinosa
16:24
bubble sort
Alejandro Martinez
16:30
const obj = {
  a: this,
  b: function(){
    return this;
  },
  c: ()=>{
    return this;
  },
  d(){
    return this;
  }, 
  e: function(){
    return this.a;
  }
}
Alejandro Martinez
16:36
---
console.log(1);
setTimeout(()=>console.log(2), 0);
Promise.resolve().then(()=>console.log(3));
setTimeout(()=>console.log(4), 1);
console.log(5);
Alejandro Martinez
16:46
///
expect(3).toBe(3)
Alejandro Martinez
16:53
---
console.log(x);
var x = 100;
console.log(x);

console.log(y);
let y = 200;
console.log(y);
Alejandro Martinez
17:16


stop propagation

``
 */

const a = [1];
const b = a;
b.push(2);
console.log(a, b);