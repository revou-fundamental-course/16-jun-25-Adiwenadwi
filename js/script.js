form.addeventlistener('submit', function(e){
    e.preventDefault();


    if(!nama||!alas||!tinggi){
        output.innerHTML = 
        <strong>'Data belum lengkap'</strong>
        alert('Data belum lengkap')
        return false
    }
})

output.innerHTML = `Luas segitiga adalah ${luas}`

try {
    
} catch (error) {
    
}