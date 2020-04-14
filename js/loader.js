$(document).ready( () => {
    $('.modal').modal();
    $('.parallax').parallax();
})

const toggleModal = () => {
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}
