

 function datos() {
    var mail= document.getElementById ("mailUsuario").value
    var confirmacionMail= document.getElementById ("confirmacionMail").value
    var contraseña= document.getElementById ("contraseña").value
    var confirmacionContra= document.getElementById ("confirmacionContra").value

    if (mail != confirmacionMail || contraseña != confirmacionContra ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'introdujiste datos erroneos',
          })
    }
    else if (mail === confirmacionMail && contraseña === confirmacionContra){
      
        const acceso = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              acceso.addEventListener('mouseenter', Swal.stopTimer)
              acceso.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          accesos.fire({
            icon: 'success',
            title: 'registro exitoso'
          })
    }

}