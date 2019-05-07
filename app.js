

const img = document.querySelector('.imgContainer');
let counter = 0;

$(img).on('click', function(e){
    const htmlString = `<div data-id=${counter} class="wayPoint" style="left: ${e.pageX - 10}px; top: ${e.pageY - 10}px;"></div>`
    counter += 1;
    $(img).append(htmlString);
    $('.wayPoint').on('click', function(){
        $('.wayPoint').attr('data-target', '#myModal');
        $('.wayPoint').attr('data-toggle', 'modal');
    });
});

    




// $('.wayPoint').on('click', function(e){
//     console.log(e);
// })