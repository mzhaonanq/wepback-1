import jpg from './1.jpg';
import xxx from './x.js';
import './y.stylus';
console.log(xxx)

const div = document.getElementById('app')
div.innerHTML=`
<img src=${jpg}></img> 
`

const button = document.createElement('button')
button.innerText="懒加载"
button.onclick=()=>{
  const promise = import('./lazy.js')
  promise.then(module=>{
    const fn = module.default
    fn()
  },(reason)=>{console.log(reason)})
}
div.appendChild(button)