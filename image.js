let orig = [1,2,3,4,5,6,7,8]
let inp = [];

function incr(a) {
    document.getElementById(a).innerHTML = a
    inp.push(a)
    if(inp.length == 8) {
        if(JSON.stringify(orig)==JSON.stringify(inp))
            document.getElementById('res').innerHTML = 'u no looser'
        else
            document.getElementById('res').innerHTML = 'u looser'
    }
}
