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
            // alert(Wrong Password!)
            // const node = document.createElement("input")
            // const node1 = document.createElement("a")
            // node.setAttribute("type", "button")
            // node1.setAttribute("href", "login.html")
            // node.append(node1)
            // document.getElementById('but').append(node)
            }
            }
   }

