const button=document.getElementById("button_qr");
const input=document.getElementById("input_qr");
const qc_code=document.getElementById("img_qr");


button.addEventListener('click', function() {
    if(input.value===''){
        alert("Please enter URL");
    }else{
        qc_code.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=google.com/${input.value}
        `
        qc_code.alt =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=google.com/${input.value}
        `
    }
})