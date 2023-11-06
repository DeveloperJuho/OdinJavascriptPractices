const container = document.querySelector('#container');
const body = document.querySelector("body");

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

/*/ New stuff here /*/

const redText = document.createElement('p');
redText.setAttribute("style", "color: red;");
redText.textContent = "Hey I'm red!";
container.appendChild(redText);

const blueHeader = document.createElement('h3');
blueHeader.setAttribute("style", "color: blue;");
blueHeader.textContent = "I'm a blue h3!";
container.appendChild(blueHeader);

// new div section

const newContainer = document.createElement('div');
newContainer.setAttribute("style",`    
    border: solid 1px black;
    background-color: pink;
`);

const newContainerHeader = document.createElement('h1');
newContainerHeader.textContent = "I'm in a div!";
newContainer.appendChild(newContainerHeader);

const newContainerParagraph = document.createElement('p');
newContainerParagraph.textContent = "Me too!";
newContainer.appendChild(newContainerParagraph);

body.appendChild(newContainer);

// Button scripts

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const eventBtn = document.querySelector('#eventBtn');
eventBtn.addEventListener('click', () => {
    alert("Hello World");
});


