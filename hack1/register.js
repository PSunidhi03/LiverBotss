let inp1 = []
let inp2 = []


function arrayEquals(a, b) {
  return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}

function incr(a) {
    if(inp1.length!=6){
      inp1.push(a)
    }
    else {
      inp2.push(a)
    }
    if(inp1.length == 6) {
      document.getElementById("but").innerHTML="<h1><b><em>Re-enter the password</em></b></h1>"
    }
    if(arrayEquals(inp1, inp2)) {
      localStorage.setItem("passwdOrder", JSON.stringify(inp1))
      document.getElementById("but").innerHTML="<h2><em>Registration successful</em></h2>"
      let node = document.createElement("button")
      node.type = 'submit'
      node.innerHTML = "<a href ='login.html'>Login Page</a>"
      document.getElementById('but').appendChild(node)
    }
    
}