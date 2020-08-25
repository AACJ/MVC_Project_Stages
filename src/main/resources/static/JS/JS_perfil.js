    var $file = document.getElementById('file');
    var $btnFile = document.getElementById('btnfile');
    var $img = document.getElementById("imagem");
    
    $btnFile.addEventListener("click", function(){
        $file.click();
    });
    
    $file.addEventListener("change",function(){
       var file = this.files[0];
        
        if(file){
            const reader = new FileReader();
            reader.addEventListener("load",function(){
                $img.setAttribute("src", this.result);
            })
            
            reader.readAsDataURL(file);
        
        }
    });
 
