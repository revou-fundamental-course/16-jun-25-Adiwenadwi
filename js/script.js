console.log("Javascript is working");
function greet(){
const welcomeSpeech = document.getElementById("welcome-speech");
console.log(welcomeSpeech);
welcomeSpeech.innerHTML = "Selamat Datang di Website Matematik";
}

//function to calculate luas
//formula luas segitiga = alas * tinggi / 2
function calcLuas(){
    const alas = document.getElementById('alas').value;
    const tinggi = document.getElementById('tinggi').value;

    console.log(alas, tinggi);
    if (alas != '' && tinggi != ''){
        const luas = (alas * tinggi) / 2;
        alert("Luas segitiga adalah " + luas);
    }else{
        alert("Masukkan nilai alas dan tinggi terlebih dahulu");
    }
}

//function to calculate keliling
//formula keliling segitiga = 3 * s
function calcKeliling(){
    const sisiA = document.getElementById('sisiA').value;
    const sisiB = document.getElementById('sisiB').value;
    const sisiC = document.getElementById('sisiC').value;
    console.log(sisiA, sisiB, sisiC);
    if (sisiA != '' && sisiB != '' && sisiC != ''){
        const keliling = (sisiA + sisiB + sisiC);
        alert("Keliling segitiga adalah " + keliling);
    }else{
        alert("Masukkan nilai semua sisi segitiga terlebih dahulu");
    }
}
