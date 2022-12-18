let orig = JSON.parse(localStorage.passwdOrder)
let inp = [];
console.log(orig)

function incr(a) {
    document.getElementById(a).innerHTML = a
    inp.push(a)
    if(inp.length == 6) {
        if(JSON.stringify(orig)==JSON.stringify(inp))
            window.location.replace('index1.html');
           
        else {
            document.getElementById('res').innerHTML = 'Wrong Password'
            // alert(Wrong Password!)
            let node = document.createElement("button")
            node.type = 'submit'
            node.innerHTML = "<a href ='login.html'>Login Page</a>"
            document.getElementById('but').appendChild(node)
        }
    }
//    }
}
