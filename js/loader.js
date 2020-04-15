$(document).ready( () => {
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({
        fullWidth: true
    })
})

const toggleModal = () => {
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}
