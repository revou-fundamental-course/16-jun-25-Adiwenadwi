console.log("Javascript is working");
function greet(){
const welcomeSpeech = document.getElementById("welcome-speech");
console.log(welcomeSpeech);
welcomeSpeech.innerHTML = "Selamat Datang di Website Matematik";
}

function showAlert_segitiga(message) {
    
document.getElementById("alert-message").textContent = message;
document.getElementById("custom-alert").classList.remove("hidden");

}

function closeAlert_segitiga() {
document.getElementById("custom-alert").classList.add("hidden");
}

function showAlert_jajargenjang(message) {
    
document.getElementById("alert-message-jajargenjang").textContent = message;
document.getElementById("custom-alert-jajargenjang").classList.remove("hidden");

}

function closeAlert_jajargenjang() {
document.getElementById("custom-alert-jajargenjang").classList.add("hidden");
}

//function to calculate luas
//formula luas segitiga = 0.5 * alas * tinggi
function calc_luas_segitiga(){
    //var errorMsg;
    const alasVal = document.getElementById("alas").value.trim();
    const tinggiVal = document.getElementById("tinggi").value.trim();

    if(alasVal === "" || tinggiVal === ""){
        //error message
        showAlert_segitiga("Harap isi semua kolom terlebih dahulu.");
        return;
    }
    
    const alas = parseFloat(alasVal);
    const tinggi = parseFloat(tinggiVal);

    if(alas === 0 || tinggi === 0){
        //error message
        showAlert_segitiga("Nilai tidak boleh 0.");
        return;
    }

    

    const luas_segitiga = 0.5 * alas * tinggi;
    console.log(alas, tinggi, luas_segitiga);
    document.getElementById("result-luas-segitiga").textContent=`Luas Segitiga = ${luas_segitiga}`;
    console.log(luas_segitiga);
    
}

//function to calculate keliling segitiga
//formula keliling segitiga = a + b + c
function calc_keliling_segitiga() {
  const sisiA_val = document.getElementById("sisiA").value.trim();
  const sisiB_val = document.getElementById("sisiB").value.trim();
  const sisiC_val = document.getElementById("sisiC").value.trim();

  // Validasi input kosong
  if (sisiA_val === "" || sisiB_val === "" || sisiC_val === "") {
    showAlert_segitiga("Harap isi semua kolom terlebih dahulu.");
    return;
  }

  const sisiA = parseFloat(sisiA_val);
  const sisiB = parseFloat(sisiB_val);
  const sisiC = parseFloat(sisiC_val);

  const keliling_segitiga = sisiA + sisiB + sisiC;
  document.getElementById("result-keliling-segitiga").textContent = `Keliling Segitiga = ${keliling_segitiga}`;
}

//function to calculate luas jajargenjang
//formula luas jajargenjang = alas * tinggi
function calc_luas_jajargenjang(){
    //var errorMsg;
    const alasVal = document.getElementById("alas-jajargenjang").value.trim();
    const tinggiVal = document.getElementById("tinggi-jajargenjang").value.trim();

    if(alasVal === "" || tinggiVal === ""){
        //error message
        showAlert_jajargenjang("Harap isi semua kolom terlebih dahulu.");
        return;
    }
    
    const alas = parseFloat(alasVal);
    const tinggi = parseFloat(tinggiVal);

    if(alas === 0 || tinggi === 0){
        //error message
        showAlert_jajargenjang("Nilai tidak boleh 0.");
        return;
    }

    

    const luas = alas * tinggi;
    //console.log(alas, tinggi, luas_jajargenjang);
    document.getElementById("result-luas-jajargenjang").textContent=`Luas Jajargenjang = ${luas}`;
    //console.log(luas_jajargenjang);
    
}

//function to calculate keliling segitiga
//formula keliling segitiga = a + b + c
function calc_keliling_jajargenjang() {
  const alasVal = document.getElementById("sisiA-jajargenjang").value.trim();
  const miringVal = document.getElementById("sisiB-jajargenjang").value.trim();

  // Validasi input kosong
  if (alasVal === "" || miringVal === "") {
    showAlert_jajargenjang("Harap isi semua kolom terlebih dahulu.");
    return;
  }

  const alas = parseFloat(alasVal);
  const miring = parseFloat(miringVal);

  const keliling = 2 * (alas + miring);
  document.getElementById("result-keliling-jajargenjang").textContent = `Keliling Segitiga = ${keliling}`;
}


function reset_perhitungan_segitiga(){
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("sisiA").value = "";
    document.getElementById("sisiB").value = "";
    document.getElementById("sisiC").value = "";
    document.getElementById("result-luas-segitiga").textContent="";
    document.getElementById("result-keliling-segitiga").textContent="";
}

function reset_perhitungan_jajargenjang(){
    document.getElementById("alas-jajargenjang").value = "";
    document.getElementById("tinggi-jajargenjang").value = "";
    document.getElementById("sisiA-jajargenjang").value = "";
    document.getElementById("sisiB-jajargenjang").value = "";
    document.getElementById("result-luas-jajargenjang").textContent="";
    document.getElementById("result-keliling-jajargenjang").textContent="";
}

