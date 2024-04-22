//kavicsoks

const valasztasok = ["kő", "papír", "olló"];
const játékosDisplay = document.getElementById("játékosDisplay");
const jancsiDisplay = document.getElementById("jancsiDisplay");
const eredményDisplay = document.getElementById("eredményDisplay");
const pontokDisplay = document.getElementById("pontokDisplay");
const játékosPontokDisplay = document.getElementById("játékosPontokDisplay");
const jancsiPontokDisplay = document.getElementById("jancsiPontokDisplay");
const életerő = document.getElementById("hp");
let jatekosPont = 0;
let jancsiPont = 0;
let hp = 3;
let ell=1;

function reset(){

    hp=3;
    jatekosPont =0;
    jancsiPont=0;
    ell=1

    játékosPontokDisplay.textContent = jatekosPont;
    jancsiPontokDisplay.textContent = jancsiPont;
    életerő.textContent = hp;
}

function elenorzes(hp){
    if(hp<=0)
    {
        ell--;
        életerő.textContent = "VESZTETTÉL";

        játékosDisplay.textContent = "JÁTÉKOS VESZTETT";
        jancsiDisplay.textContent = "JANCSI AI NYERT";

    }
    

}


function jatek(valasztas){

    
    if(ell==1){
        const jancsiValaszt = valasztasok[Math.floor(Math.random() * 3)];
        let eredmeny = "";

        if(jancsiValaszt === valasztas){

            eredmeny = "DÖNTETLEN! :/"

        }
        else{
            switch(valasztas){
                case "kő":
                    eredmeny = (jancsiValaszt === "olló") ? "NYERTÉL! :O" : "VESZTETTÉL! XDDDD";
                    break;
                case "olló":
                    eredmeny = (jancsiValaszt === "papír") ? "NYERTÉL! :O" : "VESZTETTÉL! XDDDD";
                    break;
                case "papír":
                    eredmeny = (jancsiValaszt === "kő") ? "NYERTÉL! :O" : "VESZTETTÉL! XDDDD";
                    break;
            
            }
        }

        játékosDisplay.textContent = `JÁTÉKOS: ${valasztas}`;
        jancsiDisplay.textContent = `JANCSI AI: ${jancsiValaszt}`;
        eredményDisplay.textContent = eredmeny;

        eredményDisplay.classList.remove("zöld","piros");

        switch(eredmeny){
            case "NYERTÉL! :O":
                eredményDisplay.classList.add("zöld");
                jatekosPont++;
                játékosPontokDisplay.textContent = jatekosPont;
                hp=hp+1;
                életerő.textContent = hp;
                break;
            case "VESZTETTÉL! XDDDD":
                eredményDisplay.classList.add("piros");
                jancsiPont++;
                jancsiPontokDisplay.textContent = jancsiPont;
                hp=hp-1;
                életerő.textContent = hp;
                break;
        }
    }
    
    elenorzes(hp);

}

function konnyujatek(valasztas){

    if(ell==1){
    let rnd = Math.floor(Math.random() * 99);

    switch(valasztas){
        case "kő":
            if(rnd<50)
            {rnd = 2}
            else if(rnd>75)
            {rnd = 0}
            else
            {rnd = 1}
            break;
        case "olló":
            if(rnd<50)
            {rnd = 1}
            else if(rnd>75)
            {rnd = 0}
            else
            {rnd = 2}
            break;
        case "papír":
            if(rnd<50)
            {rnd = 0}
            else if(rnd>75)
            {rnd = 2}
            else
            {rnd = 1}
            break;
    
    }


    const jancsiValaszt = valasztasok[rnd];
    let eredmeny = "";

    if(jancsiValaszt === valasztas){

        eredmeny = "DÖNTETLEN! :/"

    }
    else{
        switch(valasztas){
            case "kő":
                eredmeny = (jancsiValaszt === "olló") ? "NYERTÉL! :O" : "VESZTETTÉL! XDDDD";
                break;
            case "olló":
                eredmeny = (jancsiValaszt === "papír") ? "NYERTÉL! :O" : "VESZTETTÉL! XDDDD";
                break;
            case "papír":
                eredmeny = (jancsiValaszt === "kő") ? "NYERTÉL! :O" : "VESZTETTÉL! XDDDD";
                break;
        
        }
    }

    játékosDisplay.textContent = `JÁTÉKOS: ${valasztas}`;
    jancsiDisplay.textContent = `JANCSI AI: ${jancsiValaszt}`;
    eredményDisplay.textContent = eredmeny;

    eredményDisplay.classList.remove("zöld","piros");

    switch(eredmeny){
        case "NYERTÉL! :O":
            eredményDisplay.classList.add("zöld");
            jatekosPont++;
            játékosPontokDisplay.textContent = jatekosPont;
            hp=hp+1;
            életerő.textContent = hp;
            break;
        case "VESZTETTÉL! XDDDD":
            eredményDisplay.classList.add("piros");
            jancsiPont++;
            jancsiPontokDisplay.textContent = jancsiPont;
            hp=hp-1;
            életerő.textContent = hp;
            break;
    }
    }
elenorzes(hp);

}


function nehezjatek(valasztas){

    if(ell==1){
    let rnd = Math.floor(Math.random() * 99);

    switch(valasztas){
        case "kő":
            if(rnd<50)
            {rnd = 1}
            else if(rnd>75)
            {rnd = 0}
            else
            {rnd = 2}
            break;
        case "olló":
            if(rnd<50)
            {rnd = 0}
            else if(rnd>75)
            {rnd = 1}
            else
            {rnd = 2}
            break;
        case "papír":
            if(rnd<50)
            {rnd = 2}
            else if(rnd>75)
            {rnd = 0}
            else
            {rnd = 1}
            break;
    
    }


    const jancsiValaszt = valasztasok[rnd];
    let eredmeny = "";

    if(jancsiValaszt === valasztas){

        eredmeny = "DÖNTETLEN! :/"

    }
    else{
        switch(valasztas){
            case "kő":
                eredmeny = (jancsiValaszt === "olló") ? "NYERTÉL! :O" : "VESZTETTÉL! XDDDD";
                break;
            case "olló":
                eredmeny = (jancsiValaszt === "papír") ? "NYERTÉL! :O" : "VESZTETTÉL! XDDDD";
                break;
            case "papír":
                eredmeny = (jancsiValaszt === "kő") ? "NYERTÉL! :O" : "VESZTETTÉL! XDDDD";
                break;
        
        }
    }

    játékosDisplay.textContent = `JÁTÉKOS: ${valasztas}`;
    jancsiDisplay.textContent = `JANCSI AI: ${jancsiValaszt}`;
    eredményDisplay.textContent = eredmeny;

    eredményDisplay.classList.remove("zöld","piros");

    switch(eredmeny){
        case "NYERTÉL! :O":
            eredményDisplay.classList.add("zöld");
            jatekosPont++;
            játékosPontokDisplay.textContent = jatekosPont;
            hp=hp+1;
            életerő.textContent = hp;
            break;
        case "VESZTETTÉL! XDDDD":
            eredményDisplay.classList.add("piros");
            jancsiPont++;
            jancsiPontokDisplay.textContent = jancsiPont;
            hp=hp-1;
            életerő.textContent = hp;
            break;
    }
}   

elenorzes(hp);

}