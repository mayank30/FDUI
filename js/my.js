jQuery(document).ready(function() {
    //alert(window.innerWidth+"  :  "+ window.innerHeight);
    jQuery("img.lazy").lazy(
        {
            appendScroll    : window,
            scrollDirection : "both",
            effect: "fadeIn",
            effectTime: 1000,
            delay:500,
            enableQueueing  : true
        }
    );
});

function imgError(image) {
    image.onerror = "";
    var hostName = window.location.host;
    image.src = "http://localhost:9090/no-product.png";
    return true;
}