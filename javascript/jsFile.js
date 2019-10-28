// $('').html()
// $('').text()





$('p').each(function() {

    var length= $(this).text().length;
    //console.log(length);
    $(this).append(length)
    
});

