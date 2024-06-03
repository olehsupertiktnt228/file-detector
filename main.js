function chekFileType (source){
    let dotPosition = source.lastIndexOf(`.`);
    let ext = source.slice(dotPosition + 1);
    if (ext == `png` || ext == `jpeg` || ext == `svg`){
        return `This file  is pictures`
    }else if (ext == 'stl'||  ext == 'obj'||  ext == 'fbx' || ext == 'dae' || ext == 'blend' || ext == 'gltf'){
       
    } return `This file  is 3D object`
    }
    
    console.log(`воіфшвофі.png`)

fileName.onchange = function(){
    alert(chekFileType(fileName.value))
}
    

bt1.onclick = function(btn){
 alert `я ж сказав не клікай!!!`
}



 
