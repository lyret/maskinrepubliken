
/* Load a hi resoulution image in the background and add it to the body when done */
$("#hi-res-background-image").off().on("load", function() {
    $("body").css({
        "background-image" : "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1) ), url(img/forest_hi_res.jpg)"
    });
});