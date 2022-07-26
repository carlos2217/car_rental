import Swal from 'sweetalert2';

const modalPostion = (position,icon,title) =>{
    Swal.fire({
        position: position,
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1500
      })
}
const modalCenter = (icon,title,text="") =>{
    Swal.fire({
        icon:icon,
        title:title,
        text: text
    })
}
const modalMixin = (icon,title) =>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: icon,
        title: title
      })
}
const takeActionModal = (icon,title,text='',confirmButtonColor="#3085d6",cancelButtonColor='#d33',confirmButtonText="Yes, Update !it",action) =>{
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    showCancelButton: true,
    confirmButtonColor: confirmButtonColor,
    cancelButtonColor: cancelButtonColor,
    confirmButtonText: confirmButtonText
  }).then((result) => {
    if (result.isConfirmed) {
      // try {
        action()
      // } catch (ex) {
      //   console.log(ex.message);
      // }
    }
  })
}
export {
    modalPostion,
    modalCenter,
    modalMixin,
    takeActionModal
}