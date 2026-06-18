function Bags(bags, time, total){

    localStorage.removeItem('bags');
    localStorage.removeItem('time');
    localStorage.removeItem('total');

    localStorage.setItem('bags', bags)
    localStorage.setItem('time', time)
    localStorage.setItem('total', "$ " + total)

    bags = localStorage.getItem('bags')
    time = localStorage.getItem('time')
    total = localStorage.getItem('total')

    document.getElementById('bags').innerHTML = bags
    document.getElementById('time').innerHTML = time
    document.getElementById('total').innerHTML = total
}

function Stock() {

    const list = document.getElementById("list")

    const li = document.createElement('li')
    const div = document.createElement('div')
    const p = document.createElement('p')

    const name = document.getElementById('inputText').value
    const count = document.getElementById('inputCount').value

    li.textContent = `${name} ${count} / ${count}`
    div.className = 'barBack'
    p.style.width = '100%'
    p.style.backgroundColor = '#487D2D'
    p.style.height = '1rem'
    p.style.borderRadius = '2rem'
    p.style.textAlign = 'left'

    div.appendChild(p)
    list.appendChild(li)
    list.appendChild(div)
}

function toProducts(){
    window.location.href = './Products.html'
}

function ticket(){
    alert('¡Ticket impreso!')
}

function toCommerce(){
    window.location.href = './Commerce.html'
}

function toReturn(){
    window.location.href = './Return.html'
}