var LetrasDeNombres = ["R", 4, "M", "I", "R", 0, "M"];
let voca = ["A","E","I","O","U"]
let cons = ["B","C","D","F","G","H","J","K","L","Ñ","M","N","P","Q","R","S","T","V","W","X","Y","Z"]
for (var i=0; i<LetrasDeNombres.length;i++) {

    if(voca.includes(LetrasDeNombres[i])){
        console.log (`He trobat la VOCAL: ${LetrasDeNombres[i]}`);
    } else if (cons.includes(LetrasDeNombres[i])){
        console.log (`He trobat la CONSONTANT: ${LetrasDeNombres[i]}`);
    } else if (LetrasDeNombres[i] !== typeof(String)){
        console.log (`Els noms de persones no contenen el número: ${LetrasDeNombres[i]}`)
    }
}
