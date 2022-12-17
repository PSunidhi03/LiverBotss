let orig = [1,2,3,4,5,6,7,8]
let inp = [];

function incr(a) {
    document.getElementById(a).innerHTML = a
    inp.push(a)
    if(inp.length == 8) {
        if(JSON.stringify(orig)==JSON.stringify(inp))
            document.getElementById('res').innerHTML = 'Wrong password'
            else {
            document.getElementById('res').innerHTML = 'Wrong Password'
            
            let node = document.createElement("button")
            node.type = 'submit'
            node.innerHTML = "<a href= 'login.html'> Login Page</a>"
            document.getElementById('but').appendChild(node)
        }
    }
}
