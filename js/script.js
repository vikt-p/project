"use strict";

//alert('Hello');

//const result=confirm("Are you here");
//console.log(result);

//const answer=+prompt("Вам есть18","");
//console.log(typeof(answer));

/*const answers=[];
answers[0]=prompt("Как ваше имя","");
answers[1]=prompt("Как ваша фамилия","");
answers[2]=prompt("Сколько вам лет","");
//const answers=[];
//console.log(typeof(answers));*/

//const category="toys";
//console.log(`http://someurl.com/${category}/5`);
let incr=10;
let decr=10;
console.log(incr++);
console.log(decr++);
/* let num=50;
do {
console.log(num);
num++;
}
while (num<55); */
let num=50;
while (num<55){
    console.log(num);
    num++;
}
for (let i=1;i<10;i++){
if(i===6){
break;
}
console.log(i);
}