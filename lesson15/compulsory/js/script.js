var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
/* ul список - myList */
var myList = document.getElementById("list");
/* s на конце Elements означает что мы ищем коллекцию*/
var ul = document.getElementsByTagName("ul");
/* элементы списка*/
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
/* в скобках указывается клас, который нам нужно найти*/
var close = document.querySelector(".close");

console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);

/*делаем так, что бы при нажатии добовлялась новая задача*/
function addItem(){
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item";
	/*добовляем задачу внуть ul списка */
	myList.appendChild(newLi);
	popup.style.display = "none";
}

/*удаляем элементы списка ( [0] делается для того, что бы удалять с 1 элемента*/
function delItem(){
	myList.removeChild(story[0]);

/*делаем окошко popup, когда у нас законились элементы, он вылазиет*/
/* if проверяет на отсутсвие этих элементов, стилезуем и делаем его блочным*/
	if(story.length == 0){
		popup.style.display = "block";
	}
}

/*закрываем окошко, которое вылазет*/
function closePopup(){
	popup.style.display = "none";
}

/*прописывае действия при клики на кнопки и крестик*/
btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);