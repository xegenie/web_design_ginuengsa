$(function () {
    $(".main-menu").on("mouseover", function () {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu").on("mouseout", function () {
        $(this).find(".sub-menu").stop().slideUp()
    })

    const speed = 500;
    const time = 3000;
    const $container = $(".slides");
    const $slides = $(".slide");
    const size = $slides.width();
    const count = $slides.length;
    $container.width(size * count);

    setInterval(function () {
        $container.animate({
            left: -size
        }, speed, function () {
            $container.css('left', '0');
            $container.append($(".slide").first());
        });
    }, time);

    $("#btn-modal").click(function() {
        $("#modal").show()
    })
    $(".close").click(function() {
        $("#modal").hide()
    })
})