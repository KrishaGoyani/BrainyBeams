const DropArea = document.getElementById("drop-area");
const InpFile = document.getElementById("input-file");
const Imgview = document.getElementById("img-view");

InpFile.addEventListener("change",uploadImg);

function uploadImg(){
    let imgLink = URL.createObjectURL(InpFile.files[0]);
    Imgview.style.backgroundImage = `url(${imgLink})`;
    Imgview.textContent = "";
    Imgview.style.border=0;
    Imgview.style.borderRadius=0;
}

DropArea.addEventListener("dragover", function(e){
    e.preventDefault();
});

DropArea.addEventListener("drop",function(e){
    e.preventDefault();
    InpFile.files = e.dataTransfer.files;
    uploadImg();
});