/*/ Global variables /*/

const addButton = document.querySelector(".addButton");
const itemList = document.querySelector(".itemList");


/*/ Add elements to the list /*/

const addItem = function(){
    const newLine = document.createElement("li");
    const newButton = document.createElement("button");
    const text = document.querySelector("#item");

    newLine.textContent = text.value;
    newLine.appendChild(newButton);

    newButton.textContent = "Delete";
    newButton.setAttribute("onClick", "this.parentElement.remove()");

    itemList.appendChild(newLine);
    
    text.value = "";
    text.focus();
}
/*/ /*/


addButton.addEventListener("click", () => addItem());