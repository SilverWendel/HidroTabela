const e0 = document.getElementById("e0");
const e1 = document.getElementById("e1");
const e2 = document.getElementById("e2");
const eletro = document.getElementById("eletrosphere");
const hydro = document.getElementById("tittle");
const matter = document.getElementById("mat");
const antimatter = document.getElementById("ant");
const n0 = document.getElementById("n0");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const neutro = document.getElementById("core");
const cc = document.getElementById("cc");
const painel = document.getElementById("control");
const pointer = document.getElementById("pointer");
const massa = document.getElementById("massa");
const teste = document.getElementById("teste");

const h1 = document.getElementById("h1");
const h1c = document.getElementById("h1c");
const h1a = document.getElementById("h1a");
const h2 = document.getElementById("h2");
const h2c = document.getElementById("h2c");
const h2a = document.getElementById("h2a");
const h3 = document.getElementById("h3");
const h3c = document.getElementById("h3c");
const h3a = document.getElementById("h3a");
const ah1 = document.getElementById("ah1");
const ah1c = document.getElementById("ah1c");
const ah1a = document.getElementById("ah1a");
const ah2 = document.getElementById("ah2");
const ah2c = document.getElementById("ah2c");
const ah2a = document.getElementById("ah2a");
const ah3 = document.getElementById("ah3");
const ah3c = document.getElementById("ah3c");
const ah3a = document.getElementById("ah3a");

const h1m = document.getElementById("h1m");
const h2m = document.getElementById("h2m");
const h3m = document.getElementById("h3m");
const ah1m = document.getElementById("ah1m");
const ah2m = document.getElementById("ah2m");
const ah3m = document.getElementById("ah3m");

const radio = document.getElementById("radio");
const net = document.getElementById("net");

const all = document.getElementById("all");
const pos = document.getElementById("pos");
const neg = document.getElementById("neg");
const neu = document.getElementById("neu");
const radi = document.getElementById("rad");
const nrad = document.getElementById("nrad");
const mat = document.getElementById("matfil");
const ant = document.getElementById("antfil");

const tabela = document.getElementById("table");

const metal = document.getElementById("nuke");

let n = 0;
let e = 1;
let anti = false;
e1.style.borderColor = "white";
e1.style.boxShadow = "inset 0px 0px 8px 0px white";
n0.style.borderColor = "white";
n0.style.boxShadow = "inset 0px 0px 8px 0px white";
matter.style.borderColor = "white";
matter.style.boxShadow = "inset 0px 0px 8px 0px white";
let control = false;
pointer.style.transform = "rotateY(180deg)";
all.style.borderColor = "white";
all.style.boxShadow = "inset 0px 0px 8px 0px white";

//MATÉRIA

h1.onclick = function(){
    n = 0;
    e = 1;
    anti = false;
}

h1c.onclick = function(){
    n = 0;
    e = 0;
    anti = false;
}

h1a.onclick = function(){
    n = 0;
    e = 2;
    anti = false;
}

h2.onclick = function(){
    n = 1;
    e = 1;
    anti = false;
}

h2c.onclick = function(){
    n = 1;
    e = 0;
    anti = false;
}

h2a.onclick = function(){
    n = 1;
    e = 2;
    anti = false;
}

h3.onclick = function(){
    n = 2;
    e = 1;
    anti = false;
}

h3c.onclick = function(){
    n = 2;
    e = 0;
    anti = false;
}

h3a.onclick = function(){
    n = 2;
    e = 2;
    anti = false;
}

h1m.onclick = function(){
    n = 0;
    e = -1;
    anti = false;
}

h2m.onclick = function(){
    n = 1;
    e = -1;
    anti = false;
}

h3m.onclick = function(){
    n = 2;
    e = -1;
    anti = false;
}

//ANTI MATÉRIA

ah1.onclick = function(){
    n = 0;
    e = 1;
    anti = true;
}

ah1c.onclick = function(){
    n = 0;
    e = 0;
    anti = true;
}

ah1a.onclick = function(){
    n = 0;
    e = 2;
    anti = true;
}

ah2.onclick = function(){
    n = 1;
    e = 1;
    anti = true;
}

ah2c.onclick = function(){
    n = 1;
    e = 0;
    anti = true;
}

ah2a.onclick = function(){
    n = 1;
    e = 2;
    anti = true;
}

ah3.onclick = function(){
    n = 2;
    e = 1;
    anti = true;
}

ah3c.onclick = function(){
    n = 2;
    e = 0;
    anti = true;
}

ah3a.onclick = function(){
    n = 2;
    e = 2;
    anti = true;
}

ah1m.onclick = function(){
    n = 0;
    e = -1;
    anti = true;
}

ah2m.onclick = function(){
    n = 1;
    e = -1;
    anti = true;
}

ah3m.onclick = function(){
    n = 2;
    e = -1;
    anti = true;
}




matter.onclick = function(){
    anti = false;
}

antimatter.onclick = function(){
    anti = true;
}

e0.onclick = function(){
    e = 0;

}

e1.onclick = function(){
    e = 1;
}

e2.onclick = function(){  
    e = 2;
}

metal.onclick = function(){
    e = -1;
}

n0.onclick = function(){
    n = 0;
}

n1.onclick = function(){
    n = 1;
}

n2.onclick = function(){

    n = 2;
}

cc.onclick = function(){
    pointer.style.transitionDuration = "0.2s";
    if(control){
        painel.style.display = "none";
        control = false;
        pointer.style.transform = "rotateY(180deg)";
        cc.style.left = "98%";
        neutro.style.left = "50%";
        eletro.style.left = "50%";
        metal.style.left = "50%";
        hydro.style.left = "50%";
    }else{
        painel.style.display = "flex";
        control = true;
        pointer.style.transform = "rotateY(0deg)";
        if(window.innerWidth <= 768){
            cc.style.left = "65%";
        }
        else{
            cc.style.left = "73%";
        }
        neutro.style.left = "40%";
        metal.style.left = "40%";
        eletro.style.left = "40%";
        hydro.style.left = "40%";
    }
}

window.addEventListener("resize", function(){

    if(control == true){
        if(window.innerWidth <= 768){
            cc.style.left = "65%";
        }
        else{
            cc.style.left = "73%";
        }
    }

});

all.onclick = function(){
    all.style.borderColor = "white";
    all.style.boxShadow = "inset 0px 0px 8px 0px white";
    pos.style.borderColor = "rgb(98, 98, 98)";
    pos.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    neg.style.borderColor = "rgb(98, 98, 98)";
    neg.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    neu.style.borderColor = "rgb(98, 98, 98)";
    neu.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    radi.style.borderColor = "rgb(98, 98, 98)";
    radi.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    nrad.style.borderColor = "rgb(98, 98, 98)";
    nrad.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    mat.style.borderColor = "rgb(98, 98, 98)";
    mat.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    ant.style.borderColor = "rgb(98, 98, 98)";
    ant.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";

    h1.parentNode.style.display = "flex";
    h1c.parentNode.style.display = "flex";
    h1a.parentNode.style.display = "flex";
    h2.parentNode.style.display = "flex";
    h2c.parentNode.style.display = "flex";
    h2a.parentNode.style.display = "flex";
    h3.parentNode.style.display = "flex";
    h3c.parentNode.style.display = "flex";
    h3a.parentNode.style.display = "flex";
    ah1.parentNode.style.display = "flex";
    ah1c.parentNode.style.display = "flex";
    ah1a.parentNode.style.display = "flex";
    ah2.parentNode.style.display = "flex";
    ah2c.parentNode.style.display = "flex";
    ah2a.parentNode.style.display = "flex";
    ah3.parentNode.style.display = "flex";
    ah3c.parentNode.style.display = "flex";
    ah3a.parentNode.style.display = "flex";

    h1m.parentNode.style.display = "flex";
    h2m.parentNode.style.display = "flex";
    h3m.parentNode.style.display = "flex";
    ah1m.parentNode.style.display = "flex";
    ah2m.parentNode.style.display = "flex";
    ah3m.parentNode.style.display = "flex";

    tabela.style.minHeight = "2400px";
    tabela.style.height = "auto";
    tabela.style.gridTemplateRows = "repeat(8, 1fr)";

}

pos.onclick = function(){
    pos.style.borderColor = "white";
    pos.style.boxShadow = "inset 0px 0px 8px 0px white";
    all.style.borderColor = "rgb(98, 98, 98)";
    all.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    neg.style.borderColor = "rgb(98, 98, 98)";
    neg.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    neu.style.borderColor = "rgb(98, 98, 98)";
    neu.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    radi.style.borderColor = "rgb(98, 98, 98)";
    radi.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    nrad.style.borderColor = "rgb(98, 98, 98)";
    nrad.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    mat.style.borderColor = "rgb(98, 98, 98)";
    mat.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    ant.style.borderColor = "rgb(98, 98, 98)";
    ant.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";

    h1.parentNode.style.display = "none";
    h1c.parentNode.style.display = "flex";
    h1a.parentNode.style.display = "none";
    h2.parentNode.style.display = "none";
    h2c.parentNode.style.display = "flex";
    h2a.parentNode.style.display = "none";
    h3.parentNode.style.display = "none";
    h3c.parentNode.style.display = "flex";
    h3a.parentNode.style.display = "none";
    ah1.parentNode.style.display = "none";
    ah1c.parentNode.style.display = "none";
    ah1a.parentNode.style.display = "flex";
    ah2.parentNode.style.display = "none";
    ah2c.parentNode.style.display = "none";
    ah2a.parentNode.style.display = "flex";
    ah3.parentNode.style.display = "none";
    ah3c.parentNode.style.display = "none";
    ah3a.parentNode.style.display = "flex";

    h1m.parentNode.style.display = "none";
    h2m.parentNode.style.display = "none";
    h3m.parentNode.style.display = "none";
    ah1m.parentNode.style.display = "none";
    ah2m.parentNode.style.display = "none";
    ah3m.parentNode.style.display = "none";

    tabela.style.minHeight = "600px";
    tabela.style.height = "auto";
    tabela.style.gridTemplateRows = "repeat(2, 1fr)";
}

neg.onclick = function(){
    neg.style.borderColor = "white";
    neg.style.boxShadow = "inset 0px 0px 8px 0px white";
    pos.style.borderColor = "rgb(98, 98, 98)";
    pos.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    all.style.borderColor = "rgb(98, 98, 98)";
    all.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    neu.style.borderColor = "rgb(98, 98, 98)";
    neu.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    radi.style.borderColor = "rgb(98, 98, 98)";
    radi.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    nrad.style.borderColor = "rgb(98, 98, 98)";
    nrad.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    mat.style.borderColor = "rgb(98, 98, 98)";
    mat.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    ant.style.borderColor = "rgb(98, 98, 98)";
    ant.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";

    h1.parentNode.style.display = "none";
    h1c.parentNode.style.display = "none";
    h1a.parentNode.style.display = "flex";
    h2.parentNode.style.display = "none";
    h2c.parentNode.style.display = "none";
    h2a.parentNode.style.display = "flex";
    h3.parentNode.style.display = "none";
    h3c.parentNode.style.display = "none";
    h3a.parentNode.style.display = "flex";
    ah1.parentNode.style.display = "none";
    ah1c.parentNode.style.display = "flex";
    ah1a.parentNode.style.display = "none";
    ah2.parentNode.style.display = "none";
    ah2c.parentNode.style.display = "flex";
    ah2a.parentNode.style.display = "none";
    ah3.parentNode.style.display = "none";
    ah3c.parentNode.style.display = "flex";
    ah3a.parentNode.style.display = "none";

    h1m.parentNode.style.display = "none";
    h2m.parentNode.style.display = "none";
    h3m.parentNode.style.display = "none";
    ah1m.parentNode.style.display = "none";
    ah2m.parentNode.style.display = "none";
    ah3m.parentNode.style.display = "none";

    tabela.style.minHeight = "600px";
    tabela.style.height = "auto";
    tabela.style.gridTemplateRows = "repeat(2, 1fr)";
}

neu.onclick = function(){
    neu.style.borderColor = "white";
    neu.style.boxShadow = "inset 0px 0px 8px 0px white";
    pos.style.borderColor = "rgb(98, 98, 98)";
    pos.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    neg.style.borderColor = "rgb(98, 98, 98)";
    neg.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    all.style.borderColor = "rgb(98, 98, 98)";
    all.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    radi.style.borderColor = "rgb(98, 98, 98)";
    radi.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    nrad.style.borderColor = "rgb(98, 98, 98)";
    nrad.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    mat.style.borderColor = "rgb(98, 98, 98)";
    mat.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    ant.style.borderColor = "rgb(98, 98, 98)";
    ant.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";

    h1.parentNode.style.display = "flex";
    h1c.parentNode.style.display = "none";
    h1a.parentNode.style.display = "none";
    h2.parentNode.style.display = "flex";
    h2c.parentNode.style.display = "none";
    h2a.parentNode.style.display = "none";
    h3.parentNode.style.display = "flex";
    h3c.parentNode.style.display = "none";
    h3a.parentNode.style.display = "none";
    ah1.parentNode.style.display = "flex";
    ah1c.parentNode.style.display = "none";
    ah1a.parentNode.style.display = "none";
    ah2.parentNode.style.display = "flex";
    ah2c.parentNode.style.display = "none";
    ah2a.parentNode.style.display = "none";
    ah3.parentNode.style.display = "flex";
    ah3c.parentNode.style.display = "none";
    ah3a.parentNode.style.display = "none";

    h1m.parentNode.style.display = "flex";
    h2m.parentNode.style.display = "flex";
    h3m.parentNode.style.display = "flex";
    ah1m.parentNode.style.display = "flex";
    ah2m.parentNode.style.display = "flex";
    ah3m.parentNode.style.display = "flex";

    tabela.style.minHeight = "1200px";
    tabela.style.height = "auto";
    tabela.style.gridTemplateRows = "repeat(4, 1fr)";

}

radi.onclick = function(){
    radi.style.borderColor = "white";
    radi.style.boxShadow = "inset 0px 0px 8px 0px white";
    pos.style.borderColor = "rgb(98, 98, 98)";
    pos.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    neg.style.borderColor = "rgb(98, 98, 98)";
    neg.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    neu.style.borderColor = "rgb(98, 98, 98)";
    neu.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    all.style.borderColor = "rgb(98, 98, 98)";
    all.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    nrad.style.borderColor = "rgb(98, 98, 98)";
    nrad.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    mat.style.borderColor = "rgb(98, 98, 98)";
    mat.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    ant.style.borderColor = "rgb(98, 98, 98)";
    ant.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";

    h1.parentNode.style.display = "none";
    h1c.parentNode.style.display = "none";
    h1a.parentNode.style.display = "none";
    h2.parentNode.style.display = "none";
    h2c.parentNode.style.display = "none";
    h2a.parentNode.style.display = "none";
    h3.parentNode.style.display = "flex";
    h3c.parentNode.style.display = "flex";
    h3a.parentNode.style.display = "flex";
    ah1.parentNode.style.display = "none";
    ah1c.parentNode.style.display = "none";
    ah1a.parentNode.style.display = "none";
    ah2.parentNode.style.display = "none";
    ah2c.parentNode.style.display = "none";
    ah2a.parentNode.style.display = "none";
    ah3.parentNode.style.display = "flex";
    ah3c.parentNode.style.display = "flex";
    ah3a.parentNode.style.display = "flex";

    h1m.parentNode.style.display = "none";
    h2m.parentNode.style.display = "none";
    h3m.parentNode.style.display = "flex";
    ah1m.parentNode.style.display = "none";
    ah2m.parentNode.style.display = "none";
    ah3m.parentNode.style.display = "flex";

    tabela.style.minHeight = "900px";
    tabela.style.height = "auto";
    tabela.style.gridTemplateRows = "repeat(3, 1fr)";

}

nrad.onclick = function(){
    nrad.style.borderColor = "white";
    nrad.style.boxShadow = "inset 0px 0px 8px 0px white";
    pos.style.borderColor = "rgb(98, 98, 98)";
    pos.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    neg.style.borderColor = "rgb(98, 98, 98)";
    neg.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    neu.style.borderColor = "rgb(98, 98, 98)";
    neu.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    radi.style.borderColor = "rgb(98, 98, 98)";
    radi.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    all.style.borderColor = "rgb(98, 98, 98)";
    all.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    mat.style.borderColor = "rgb(98, 98, 98)";
    mat.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    ant.style.borderColor = "rgb(98, 98, 98)";
    ant.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";

    h1.parentNode.style.display = "flex";
    h1c.parentNode.style.display = "flex";
    h1a.parentNode.style.display = "flex";
    h2.parentNode.style.display = "flex";
    h2c.parentNode.style.display = "flex";
    h2a.parentNode.style.display = "flex";
    h3.parentNode.style.display = "none";
    h3c.parentNode.style.display = "none";
    h3a.parentNode.style.display = "none";
    ah1.parentNode.style.display = "flex";
    ah1c.parentNode.style.display = "flex";
    ah1a.parentNode.style.display = "flex";
    ah2.parentNode.style.display = "flex";
    ah2c.parentNode.style.display = "flex";
    ah2a.parentNode.style.display = "flex";
    ah3.parentNode.style.display = "none";
    ah3c.parentNode.style.display = "none";
    ah3a.parentNode.style.display = "none";

    h1m.parentNode.style.display = "flex";
    h2m.parentNode.style.display = "flex";
    h3m.parentNode.style.display = "none";
    ah1m.parentNode.style.display = "flex";
    ah2m.parentNode.style.display = "flex";
    ah3m.parentNode.style.display = "none";

    tabela.style.minHeight = "1800px";
    tabela.style.height = "auto";
    tabela.style.gridTemplateRows = "repeat(6, 1fr)";

}

mat.onclick = function(){
    mat.style.borderColor = "white";
    mat.style.boxShadow = "inset 0px 0px 8px 0px white";
    pos.style.borderColor = "rgb(98, 98, 98)";
    pos.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    neg.style.borderColor = "rgb(98, 98, 98)";
    neg.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    neu.style.borderColor = "rgb(98, 98, 98)";
    neu.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    radi.style.borderColor = "rgb(98, 98, 98)";
    radi.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    nrad.style.borderColor = "rgb(98, 98, 98)";
    nrad.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    all.style.borderColor = "rgb(98, 98, 98)";
    all.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    ant.style.borderColor = "rgb(98, 98, 98)";
    ant.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";

    h1.parentNode.style.display = "flex";
    h1c.parentNode.style.display = "flex";
    h1a.parentNode.style.display = "flex";
    h2.parentNode.style.display = "flex";
    h2c.parentNode.style.display = "flex";
    h2a.parentNode.style.display = "flex";
    h3.parentNode.style.display = "flex";
    h3c.parentNode.style.display = "flex";
    h3a.parentNode.style.display = "flex";
    ah1.parentNode.style.display = "none";
    ah1c.parentNode.style.display = "none";
    ah1a.parentNode.style.display = "none";
    ah2.parentNode.style.display = "none";
    ah2c.parentNode.style.display = "none";
    ah2a.parentNode.style.display = "none";
    ah3.parentNode.style.display = "none";
    ah3c.parentNode.style.display = "none";
    ah3a.parentNode.style.display = "none";

    h1m.parentNode.style.display = "flex";
    h2m.parentNode.style.display = "flex";
    h3m.parentNode.style.display = "flex";
    ah1m.parentNode.style.display = "none";
    ah2m.parentNode.style.display = "none";
    ah3m.parentNode.style.display = "none";

    tabela.style.minHeight = "1200px";
    tabela.style.height = "auto";
    tabela.style.gridTemplateRows = "repeat(4, 1fr)";

}

ant.onclick = function(){
    ant.style.borderColor = "white";
    ant.style.boxShadow = "inset 0px 0px 8px 0px white";
    pos.style.borderColor = "rgb(98, 98, 98)";
    pos.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    neg.style.borderColor = "rgb(98, 98, 98)";
    neg.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    neu.style.borderColor = "rgb(98, 98, 98)";
    neu.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    radi.style.borderColor = "rgb(98, 98, 98)";
    radi.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    nrad.style.borderColor = "rgb(98, 98, 98)";
    nrad.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    mat.style.borderColor = "rgb(98, 98, 98)";
    mat.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";
    all.style.borderColor = "rgb(98, 98, 98)";
    all.style.boxShadow = "inset 0px 0px 8px 0px rgb(98, 98, 98)";

    h1.parentNode.style.display = "none";
    h1c.parentNode.style.display = "none";
    h1a.parentNode.style.display = "none";
    h2.parentNode.style.display = "none";
    h2c.parentNode.style.display = "none";
    h2a.parentNode.style.display = "none";
    h3.parentNode.style.display = "none";
    h3c.parentNode.style.display = "none";
    h3a.parentNode.style.display = "none";
    ah1.parentNode.style.display = "flex";
    ah1c.parentNode.style.display = "flex";
    ah1a.parentNode.style.display = "flex";
    ah2.parentNode.style.display = "flex";
    ah2c.parentNode.style.display = "flex";
    ah2a.parentNode.style.display = "flex";
    ah3.parentNode.style.display = "flex";
    ah3c.parentNode.style.display = "flex";
    ah3a.parentNode.style.display = "flex";

    h1m.parentNode.style.display = "none";
    h2m.parentNode.style.display = "none";
    h3m.parentNode.style.display = "none";
    ah1m.parentNode.style.display = "flex";
    ah2m.parentNode.style.display = "flex";
    ah3m.parentNode.style.display = "flex";

    tabela.style.minHeight = "1200px";
    tabela.style.height = "auto";
    tabela.style.gridTemplateRows = "repeat(4, 1fr)";

}


//Função geral do atomo :3

document.addEventListener('click', function(event){
  const botao = event.target.closest('button');
  
  if (botao) {

    radio.style.opacity = "0.2";

    eletro.style.opacity = "1";

    e0.style.borderColor = "blue";
    e0.style.boxShadow = "inset 0px 0px 8px 0px blue";
    e1.style.borderColor = "blue";
    e1.style.boxShadow = "inset 0px 0px 8px 0px blue";
    e1.style.borderColor = "blue";
    e1.style.boxShadow = "inset 0px 0px 8px 0px blue";
    e2.style.borderColor = "blue";
    e2.style.boxShadow = "inset 0px 0px 8px 0px blue";

    n0.style.borderColor = "blue";
    n0.style.boxShadow = "inset 0px 0px 8px 0px blue";
    n1.style.borderColor = "blue";
    n1.style.boxShadow = "inset 0px 0px 8px 0px blue";
    n2.style.borderColor = "blue";
    n2.style.boxShadow = "inset 0px 0px 8px 0px blue";

    antimatter.style.borderColor = "red";
    antimatter.style.boxShadow = "inset 0px 0px 8px 0px red";

    matter.style.borderColor = "red";
    matter.style.boxShadow = "inset 0px 0px 8px 0px red";


    if(n == 0){

        n0.style.borderColor = "white";
        n0.style.boxShadow = "inset 0px 0px 8px 0px white";

        if(anti == true){
            neutro.style.content = "url('nucleo_ap.png')";
        }else{
            neutro.style.content = "url('nucleo_p.png')";
        }

    }else if(n == 1){

        n1.style.borderColor = "white";
        n1.style.boxShadow = "inset 0px 0px 8px 0px white";

        if(anti == true){
            neutro.style.content = "url('nucleo_apan.png')";
        }else{
            neutro.style.content = "url('nucleo_pn.png')";
        }

    }else{
        
        radio.style.opacity = "1";
        n2.style.borderColor = "white";
        n2.style.boxShadow = "inset 0px 0px 8px 0px white";

        if(anti == true){
            neutro.style.content = "url('nucleo_apanan.png')";
        }else{
            neutro.style.content = "url('nucleo_pnn.png')";
        }

    }


    if(anti == true){

        antimatter.style.borderColor = "white";
        antimatter.style.boxShadow = "inset 0px 0px 8px 0px white";

    }else{

        matter.style.borderColor = "white";
        matter.style.boxShadow = "inset 0px 0px 8px 0px white";

    }


    if(e == 0){
        e0.style.borderColor = "white";
        e0.style.boxShadow = "inset 0px 0px 8px 0px white";
        eletro.style.opacity  = "0";
        if(anti == true){
            net.style.content = "url('neg.png')";
            if(n == 0){
                hydro.textContent = "Anti-Hidrogênio(Cátion)";
                massa.textContent = "Massa ≈ 1,007 u";
            }else if(n == 1){
                hydro.textContent = "Anti-Hidrogênio-2(Cátion)";
                massa.textContent = "Massa ≈ 2,0135 u";
            }else{
                hydro.textContent = "Anti-Hidrogênio-3(Cátion)";
                massa.textContent = "Massa ≈ 3,0155 u";
            }
        }else{
            net.style.content = "url('pos.png')";
            if(n == 0){
                hydro.textContent = "Hidrogênio(Cátion)";
                massa.textContent = "Massa ≈ 1,007 u";
            }else if(n == 1){
                hydro.textContent = "Hidrogênio-2(Cátion)";
                massa.textContent = "Massa ≈ 2,0135 u";
            }else{
                hydro.textContent = "Hidrogênio-3(Cátion)";
                massa.textContent = "Massa ≈ 3,0155 u";
            }
        }

    }else if(e == 1){
        net.style.content = "url('neu.png')";
        e1.style.borderColor = "white";
        e1.style.boxShadow = "inset 0px 0px 8px 0px white";
        if(anti == true){
            
            eletro.style.content = "url('one_pos.png')";

            if(n == 0){
                hydro.textContent = "Anti-Hidrogênio";
                massa.textContent = "Massa ≈ 1,008 u";
            }else if(n == 1){
                hydro.textContent = "Anti-Hidrogênio-2";
                massa.textContent = "Massa ≈ 2,0141 u";
            }else{
                hydro.textContent = "Anti-Hidrogênio-3";
                massa.textContent = "Massa ≈ 3,0155 u";
            }

        } else{

            eletro.style.content = "url('one_e.png')";

            if(n == 0){
                hydro.textContent = "Hidrogênio";
                massa.textContent = "Massa ≈ 1,008 u";
            }else if(n == 1){
                hydro.textContent = "Hidrogênio-2";
                massa.textContent = "Massa ≈ 2,0141 u";
            }else{
                hydro.textContent = "Hidrogênio-3";
                massa.textContent = "Massa ≈ 3,0155 u";
            }
    
        }

    }else if(e == -1){
        net.style.content = "url('neu.png')";
        if(anti == true){
            
            eletro.style.content = "url('cloud_pos.png')";

            if(n == 0){
                hydro.textContent = "Anti-Hidrogênio(Metálico)";
                massa.textContent = "Massa ≈ 1,008 u";
            }else if(n == 1){
                hydro.textContent = "Anti-Hidrogênio-2(Metálico)";
                massa.textContent = "Massa ≈ 2,0141 u";
            }else{
                hydro.textContent = "Anti-Hidrogênio-3(Metálico)";
                massa.textContent = "Massa ≈ 3,0155 u";
            }

        } else{

            eletro.style.content = "url('cloud_e.png')";

            if(n == 0){
                hydro.textContent = "Hidrogênio(Metálico)";
                massa.textContent = "Massa ≈ 1,008 u";
            }else if(n == 1){
                hydro.textContent = "Hidrogênio-2(Metálico)";
                massa.textContent = "Massa ≈ 2,0141 u";
            }else{
                hydro.textContent = "Hidrogênio-3(Metálico)";
                massa.textContent = "Massa ≈ 3,0155 u";
            }
    
        }
    }else{
        e2.style.borderColor = "white";
        e2.style.boxShadow = "inset 0px 0px 8px 0px white";
        if(anti == true){
            net.style.content = "url('pos.png')";
            eletro.style.content = "url('two_pos.png')";

            if(n == 0){
                hydro.textContent = "Anti-Hidrogênio(Ânion)";
                massa.textContent = "Massa ≈ 1,008 u";
            }else if(n == 1){
                hydro.textContent = "Anti-Hidrogênio-2(Ânion)";
                massa.textContent = "Massa ≈ 2,0146 u";
            }else{
                hydro.textContent = "Anti-Hidrogênio-3(Ânion)";
                massa.textContent = "Massa ≈ 3,0165 u";
            }

        } else{
            net.style.content = "url('neg.png')";
            eletro.style.content = "url('two_e.png')";

            if(n == 0){
                hydro.textContent = "Hidrogênio(Ânion)";
                massa.textContent = "Massa ≈ 1,008 u";
            }else if(n == 1){
                hydro.textContent = "Hidrogênio-2(Ânion)";
                massa.textContent = "Massa ≈ 2,0146 u";
            }else{
                hydro.textContent = "Hidrogênio-3(Ânion)";
                massa.textContent = "Massa ≈ 3,0165 u";
            }
    
        }
    }

}});