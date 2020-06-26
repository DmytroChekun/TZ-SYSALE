// Color pick script
$('.color-pick').click(function () {
    $(this).find('.color-pick__dropdown-content').slideToggle(300);
    $('.color-pick__arrow-ico').toggleClass('rotate');
});
$('.color-pick__color').click(function () {
    $(this).parents('.color-pick').find('.color-pick__selected').text($(this).text());
});
$('.product-card').mouseleave(function(){
    $(this).find('.color-pick__dropdown-content').slideUp(300);
});

// Amount pick script
$('.amount-pick__minus').click(function () {
    let counter = $(this).siblings('.amount-pick__value').text();
    if (counter > 1){
        counter--;
        $(this).siblings('.amount-pick__value').text(counter);
        let price = $(this).parents('.price').find('.price-tag').text();
        console.log(price);
    }
})

$('.amount-pick__plus').click(function () {
    let counter = $(this).siblings('.amount-pick__value').text();
    counter++;
    $(this).siblings('.amount-pick__value').text(counter);
    let price = $(this).parents('.price').find('.price-tag').text();
    console.log(price);
})


// Backet ico changer
$('.product-card__basket').click(function () {
    
    $(this).html('<svg width="13" height="9" viewBox="0 0 13 9" fill="none">'+
    '<path d="M12.5992 0.37656C12.0655 -0.12552 11.1979 -0.12552 10.6642 0.37656L4.78943 5.89559L2.33578 3.5909C1.80209 3.08882 0.934485 3.08882 0.400787 3.5909C-0.133596 4.09298 -0.133596 4.90685 0.400787 5.40893L3.82193 8.62328C4.08878 8.87464 4.4391 9 4.78943 9C5.13975 9 5.49008 8.87464 5.75693 8.62328L12.5992 2.19459C13.1336 1.69251 13.1336 0.878641 12.5992 0.37656Z" fill="#87AC33"/>'+'</svg>')
})