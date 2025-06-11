const imgElement = document.getElementById('hi');
console.log('By ID', imgElement);

const paraElements = document.getElementsByClassName('my-para');
console.log('By Class:', paraElements[0]);

const liTags = document.getElementsByTagName('li');
console.log('By Tag Name:', liTags);

const mypara = document.querySelector('.my-para');
console.log('querySelector:', mypara);

const allListItems = document.querySelectorAll('ul li');
console.log('querySelectorAll:', allListItems);

mypara.innerHTML = 'Learning <h6>DOM</h6>';

mypara.textContent += ' (textContent added)';

mypara.innerText += ' [innerText added]';

mypara.style.color='blue';
mypara.style.fontFamily='times roman';

imgElement.style.border = '5px solid blue';

mypara.classList.add('highlight');
mypara.classList.remove('my-para');
mypara.classList.toggle('new-class');
console.log('Contains class highlight:', mypara.classList.contains('highlight'));

console.log('Image src:', imgElement.getAttribute('src'));
imgElement.setAttribute('alt', 'New Alt Text');
imgElement.removeAttribute('height');
console.log('Has alt attribute:', imgElement.hasAttribute('alt'));

const newPara = document.createElement('p');
newPara.textContent = 'This is an image.';
document.body.appendChild(newPara);

const hr = document.createElement('hr');
document.body.insertBefore(hr, newPara);

const listItemToRemove = liTags[0];
listItemToRemove.remove();

const newLi = document.createElement('li');
newLi.textContent = 'Replaced Item';
const parentList = document.querySelector('ul');
parentList.replaceChild(newLi, parentList.children[3]);