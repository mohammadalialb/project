'use strict'

//-------------------------------------


//  <ul class="list-group" id="list-group-1">
// <li class="item-group">item 1</li>
// <li class="item-group">item 2</li>
//     </ul>

// var ul = document.createElement('ul')
// ul.classList.add('list-group')
// ul.id = 'list-group'
// ul.setAttribute('id' , 'list-group')


// var li1 = document.createElement('li')
// li1.classList.add('item-group')
// li1.textContent = 'item 1'

// var li2 = document.createElement('li')
// li2.classList.add('item-group')
// li2.textContent = 'item 2'


// console.log(ul , li1 , li2)

// ul.appendChild(li1 )

// ul.appendChild(li2 )


// document.querySelector('.group').appendChild(ul)



// console.log(prompt('who are you?'))

// var el1= document.querySelector('.el1')

// var el2 = document.querySelector('.el2')

// el1.addEventListener('click' , function (e) {
//     console.log('element 1')
// })
 
// var el2func = function (e) {
// e.stopPropagation()
// console.log('element 2')
// }
// el2.addEventListener('click' , el2func)

// var link =document.getElementById('web')
// link.addEventListener('click' , function(e){
//     e.preventDefault()
//     console.log('click')
//     })


//     setTimeout(() => {
//         el2.removeEventListener('click' , el2func)
//     },2000);

var ajax = new XMLHttpRequest()

var data = {
    username : 'mohammadali' ,
    email : 'mohammadali@gmail.com'
}

ajax.open('POST' , 'https://jsonplaceholder.typicode.com/users')
ajax.setRequestHeader('content-type' , "application/json; charset=UTF-8")


ajax.addEventListener('load' , function(){
    if(this.readyState == XMLHttpRequest.DONE)
        if (this.status==201 ) {
           console.log('done')
           var data = JSON.parse(this.responseText)
           console.log(data)
        }else{
            console.log(this.status)
        }
})
ajax.send(JSON.stringify(data))
// ajax.onreadystatechange = function () {
//     if (this.readyState = XMLHttpRequest.DONE) {
//     if(this.status = 200){
//         console.log('done' , this.responsetText)
//     } else if (this.status = 404) {
//         console.log('users not found')
//     }
//     }
// }

// ajax.addEventListener('load' , function() {
//     if (this.readyState = XMLHttpRequest.DONE) {
//     if(this.status = 200){
//         console.log('done' , this.responsetText)
//     } else if (this.status = 404) {
//         console.log('users not found')
//     }
//     }
// })
