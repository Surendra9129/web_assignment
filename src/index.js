import('./index.css')
import { image } from './file';
const h1=document.createElement('h1');
h1.innerText="hello",
h1.classList.add('redColor');
document.getElementById('root').appendChild(h1);

const pic=document.createElement('img');
pic.src="image";
document.getElementById('pics').appendChild(pic)