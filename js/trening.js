" use strict";

// // // to String

// // // 1)
// // console.log(typeof(String(null)));
// // console.log(typeof(String(4)));

// // // 2)
// //  console.log(typeof(5 + ''));

// //  const num = 5;

// //  console.log("https://vk.com/catalog/" + num);

// //  const fontSize = 26 + 'px';

// //  //to Number 

// //  // 1)

// //  console.log(typeof(Number('4')));

// //  // 2)
// //  console.log(typeof(+'4'));

// // // 3) 
// // console.log(typeof(parseInt("15px", 10)));

// // let answ = +prompt("Hello", "");

// // // to boolean  lesoon 26, 20.01.22

// // // 1)

// // // 0, '', null, undefined, NaN; это всегда false
// // // все остальное всегда true

// // let switcher = null;

// // if (switcher) {
// //   console.log('working...');
// // }

// // switcher = 1;
 
// // if (switcher) {
// //   console.log('working...');
// // }

// // // 2)
// // console.log(typeof(Boolean('4')));

// // // 3)
// // console.log(typeof(!!"4444"));

// // lesson 27, 20.01.22 
// // задачи с собеседований 

// /*  let x = 5; alert(x++); при такой записи alert, 
// ответ будет 5. потому что посфикстная записть сперва возвращает текущее значение, 
// тоесть вернет 5 а только потом изменяет его на плюс 1
// let x = 5; alert(++x); 
// при такой префиксной записи оператора инкримента alert вернет нам сразу же измененное хначение 6*/

// // [ ] + false - null + true
// // console.log(typeof([] + false));  false
// // console.log(typeof([] + false - null));  NaN
// // console.log(typeof([] + false - null + true));  NaN


// // let y = 1;
// // let x = y = 2; с проава на лево
// // alert(x);      ответ число 2


// // console.log([] + 1 + 2); // ответ  строковая "12"


// // alert( "1"[0] ); //1

// // console.log(2 && 1 && null && 0 && undefined); // c лева на прово останавливаеться на false тоесть ответ null

// // console.log(!!(1 && 2) === (1 && 2)); не равны 

// // alert( null || 2 && 3 || 4);
//  /* нужно воспользоваться таблиценй приарететов операторов JS 
// где логический оператор && имеет более высокий приоретет нежели ||  ответ будет 3*/

// // const a = [1, 2, 3];
// // const b = [1, 2, 3];

// // console.log(a == b); // false

// // alert(+"Infinity"); //  строковое значение преобразуеться в число

// // console.log("Ёжик" > "яблоко"); // таблица юникодов символов всего мира там найдем ответ 
// // а в задаче ответом будет false

// // console.log(0 || " " || 2 || undefined || true || false); 
// // логический оператор || "И" останавливаеться на "првде" true 
// // ответ 2


// // lesson 28, 20.01.22  получение элементов со страницы
// // const box = document.getElementById('box');

// // console.log(box);

// // const btns = document.getElementsByTagName('button');

// // console.log(btns[0]);

// // const circles = document.getElementsByClassName('circle');

// // console.log(circles);

// // const hearts = document.querySelectorAll('.heart');

// // console.log(hearts);

// // hearts.forEach(item => {
// //   console.log(item);
// // });

// // const oneHeart = document.querySelector('.heart');
// // console.log(oneHeart);

//lesson 29 21.01.22 дейсйствие с элементами на странице

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('.heart');

// // box.style.backgroundColor = 'green';
// // box.style.width = '500px';

// box.style.cssText = `background-color: blue; width: 50px`;

// btns[1].style.borderRadius =  '100%';
// circles[0].style.backgroundColor = 'red';

// // for (let i =0; i < hearts.length; i++) {
// //   hearts[i].style.backgroundColor = 'blue';
// // }

// hearts.forEach(item => {
//   item.style.backgroundColor ='blue';
// });

// const div = document.createElement('div');
// // const text = document.createTextNode('ha');

// div.classList.add('black');

// wrapper.append(div);
// // wrapper.appendChild(div);


// // wrapper.prepend(div);


// // hearts[0].before(div);
// // hearts[0].after(div);

// // wrapper.insertBefore(div, hearts[2]);

// // circles[0].remove();

// // wrapper.removeChild(hearts[1]);

// // hearts[0].replaceWith(circles[0]);

// // wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = "<h1>hello world</h1>";
// // div.textContent = 'hello';

// div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");
