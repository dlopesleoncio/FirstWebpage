

function ampaci(){
    //ref 1: ao ar livre ou sobre superficie; embutidos; em conduto fechado;

    let Ia = {1:1.0 , 2:0.8 , 3:0.7 , 4:0.65};
    let B1_2 = {9:0.5 , 11:0.75 ,14:1 , 17.5:1.5 ,24:2.5 , 32:4 ,41:6, 57:10 , 76:16 };
    let Txlpe = {10:1.15,15:1.12,20:1.08,25:1.04,35:0.96,40:0.91,45:0.87,50:0.82,55:0.76,60:0.71};
    let Ip = parseInt(document.getElementById("Ip").value);
    let n = parseInt(document.getElementById("n").value);
    let t = parseInt(document.getElementById("T").value);
    
    let r = Ip/(Ia[n]*Txlpe[t]);
    let Smp;
    for(let k in B1_2){
        if(r < k){
            Smp = B1_2[k];
            break;
        }
    }
    //alert(I[n])
    document.getElementById("Res").innerHTML = Smp;
}