$(function() {
    $('div.serviceMenu a').mouseover( function() {
        let value = $(this).attr('data-src')
        $('.serviceUi img').attr('src', value)
    })
    $('div.serviceMenu a').mouseout( function() {
        $('.serviceUi img').attr('src','images/service 1.jpeg')
    })
})
function scroll_to_top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}