function mostrarEditar(){

    document.querySelector('#contformu .ola')?.classList.add('formumostrado');
}



function ValidarRut(valor:any){
    var tmp=valor.split('-');
    let digito=tmp[1];
    let rut=tmp[0];
    if(digito=='K') digito='k';
    var M=0,S=1;
    for(;rut;rut=Math.floor(rut/10))
      S=(S+rut%10*(9-M++%6))%11;
      console.log(S?S-1:'k');

   return S?S-1:'k';
}

function ValidarCheckbox(){
    let checkboxes:any = document.getElementsByName("lenguajes");  
    let numberOfCheckedItems:number = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(numberOfCheckedItems >= 1)  
    {  
        return true;  
    } 

    return false;
}

function LimpiarDatos(){
    let reset:any=document.getElementById("limpiar");
    reset.type="reset";
    
}


(function () {

    let reset:any=document.getElementById("limpiar");
    let nombreCompleto:any=document.getElementById("nombrecompleto");
    let telefono:any=document.getElementById("telefono");
    let rut:any=document.getElementById("rut");
    let email:any=document.getElementById("email");

    telefono.maxLength="9";

    

    rut.pattern="^[0-9]{8}-[0-9Kk]{1}$";

    let campos:any=document.getElementById("campos");

    console.log(nombreCompleto.value);


    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')
    

    reset.addEventListener("click",LimpiarDatos);

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {
        
          if (!form.checkValidity()) {
            if(nombreCompleto.value=="") {
                campos.children[0].getElementsByClassName("invalid-feedback")[0].innerHTML="Campo requerido";
            }

            if(rut.value==""){
                campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML="Campo requerido";
            }

            if(ValidarRut(rut.value)>1){
                campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML="Rut no válido";
            }

           
            
       
            
            event.preventDefault();
            event.stopPropagation();

          }else{
            form.style.display="none";
            let mensaje:any=document.getElementById("mensaje");
            mensaje.style.display="block";


          }
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated')
        }, false)
      })
  })()
