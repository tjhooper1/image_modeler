
// MAKE MODAL FORM SAVE INFORMATION
    //modal can save info to an object
    //that object can then be used later to pull from in order to display dynamically into a box

    // DISPLAY INFORMATION FOR EACH WAYPOINT WHEN MOUSE HOVERS OVER IT IN A FLOATING BOX
// -------------------------------------------------------------------------


const img = document.querySelector('.imgContainer');
let counter = 0;

//This event adds a wayPoint when clicked in the image
$(img).on('click', function(e){
    const htmlString = `<div data-id=${counter} class="wayPoint" style="left: ${e.pageX - 10}px; top: ${e.pageY - 10}px;"></div>`;
    counter += 1;
    $(img).append(htmlString);
    showForm();
    $('.wayPoint').on('click', function(){
        console.log($(this).data('id'));
        showForm($(this).data('id'));
    });
});

//Function that displays the modal form
function showForm(id) {
    $('.modalContainer').css('display', 'block');
    $('#title').attr("placeholder", id); //TODO: change this later

}    

//Function that closes the modal form.
$('#close').on('click', function(){
    $('.modalContainer').css('display', 'none');
    $('#title').attr("value", "");
})
