var size = 0
var color = 0
var variant = 0
console.log("Salom")
$(".size_class li").on("click", function () {
    size = $(this).text();

});

$("#color_class li").on("click", function () {
    color = $(this).text();

});

$(".variant_class li").on("click", function () {
    variant = $(this).text();
});

$('.addToCartBtn').on('click', function () {
    var product_id = $('.prod_id').val()
    var quantity = $('.qty-input').val()
    var token = $("input[name=csrfmiddlewaretoken]").val();

    $.ajax({
        method: 'POST',
        url: "/order/add-to-cart/",
        data: {
            "product_id": product_id,
            "quantity": quantity,
            "size": size,
            "variant": variant,
            "color": color,
            csrfmiddlewaretoken: token
        },
        success: function (response) {
            if (response.status) {
                alertify.success(response.msg)

            } else {
                alertify.error(response.msg)
            }
        }
    })

})

