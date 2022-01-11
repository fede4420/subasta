 function activarOferta() {
    
    var dinero = document.getElementById('dinero').value;

if (dinero > 1300)
{
    Swal.fire({
        title: 'ES TUYO!',
        text: 'increible adquisicion!',
        icon: 'success'
      })
}

else if (dinero < 1300)

Swal.fire({
    position: 'bottom-start',
    icon: 'error',
    title: 'lo siento, perdiste la apuesta',
    showConfirmButton: false,
    timer: 1500
    
  })
 }


 function noQuiso (){
    Swal.fire({
        position: 'bottom-start',
        icon: 'info',
        title: 'es bueno saber cuando retirarse',
        showConfirmButton: false,
        timer: 1500
        
      })
 }