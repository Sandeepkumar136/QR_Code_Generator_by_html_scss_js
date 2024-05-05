const button=document.getElementById("button_qr");
const input=document.getElementById("input_qr");
const qc_code=document.getElementById("img_qr");
const download_button=document.getElementById("download_qr");


button.addEventListener('click', function() {
    if(!input.value){
        alert("Please enter URL");
    }else{
        qc_code.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=google.com/${input.value}
        `
        qc_code.alt =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=google.com/${input.value}
        `
    }
})
download_button.addEventListener('click', ()=>{
    if(!download_button.href){
        alert("Please enter URL for download an QR Code");
    }else{
        let src_fo_code=qc_code.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=google.com/${input.value}
        `
        download_button.href=src_fo_code;
    }
})


