$(document).ready( () => {
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({
        fullWidth: true
    })
    $('.myreviews').carousel({
        numVisible: 7,
        shift: 55,
        padding: 55
    })
})

const toggleModal = () => {
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}
