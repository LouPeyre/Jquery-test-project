$(function() {
    
    var $mainMenuitems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuitems.lenght,
    openedIndex = -1,
    init = function () {
        $mainMenuitems.children(".images").click(function () {
            var newIndex = $(this).parent().index(),
            $item = $mainMenuitems.eq(newIndex),
            $colorImage = $item.find(".color");

            $colorImage.animate({left:"0px"},250);
            $item.animate({width:"420px"},250);

            openedIndex = newIndex;
        })
    };

    init();
    
})