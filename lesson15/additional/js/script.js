var age
var name
var 

// https://yandex.ru/search/?text=%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%20%D0%B2%20javascript%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%20%D0%BD%D0%B0%2018%20%D0%BB%D0%B5%D1%82&clid=2236985&banerid=6300000000&win=227&lr=172
// https://ruseller.com/lessons.php?id=592&rub=28   сайт посмотри
// https://canonium.com/articles/javascript-date-and-time

/*пример как делать но не знаю работает или нет*/
// var age = sessionStorage.getItem('age');
//         if (age != 1) {
//             $('.age-alert').removeClass('hidden').addClass('fx-row fx-middle');
//         };
//     $('.aa-yes').click(function(){
//         $('.age-alert').slideUp(200);
//          sessionStorage.setItem('age', 1);
//     });
   
//     $('.aa-no').click(function(){
//         window.location.href='https://www.google.ru';
//     });
   
























// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// var main = document.getElementById("main");
// /* ul список - myList */
// var myList = document.getElementById("list");
// /* s на конце Elements означает что мы ищем коллекцию*/
// var ul = document.getElementsByTagName("ul");
// /* элементы списка*/
// var story = myList.getElementsByClassName("item");
// var popup = document.getElementsByClassName("popup")[0];
// /* в скобках указывается клас, который нам нужно найти*/
// var close = document.querySelector(".close");

// console.log(btn1);
// console.log(btn2);
// console.log(ul);
// console.log(story);

// /*делаем так, что бы при нажатии добовлялась новая задача*/
// function addItem(){
// 	var newLi = document.createElement("li");
// 	newLi.innerHTML = "Новая задача!";
// 	newLi.className = "item";
// 	/*добовляем задачу внуть ul списка */
// 	myList.appendChild(newLi);
// 	popup.style.display = "none";
// }

// /*удаляем элементы списка ( [0] делается для того, что бы удалять с 1 элемента*/
// function delItem(){
// 	myList.removeChild(story[0]);

// /*делаем окошко popup, когда у нас законились элементы, он вылазиет*/
// /* if проверяет на отсутсвие этих элементов, стилезуем и делаем его блочным*/
// 	if(story.length == 0){
// 		popup.style.display = "block";
// 	}
// }

// /*закрываем окошко, которое вылазет*/
// function closePopup(){
// 	popup.style.display = "none";
// }

// /*прописывае действия при клики на кнопки и крестик*/
// btn1.addEventListener("click", addItem);
// btn2.addEventListener("click", delItem);
// close.addEventListener("click", closePopup);