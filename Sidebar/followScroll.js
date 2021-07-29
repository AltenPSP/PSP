$(function() {

    var $sidebar   = $("#sidebarContents"), 
        $sidebarShow   = $("#sidebarShow"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 56;
  
    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
            $sidebarShow.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
            $sidebarShow.stop().animate({
                marginTop: 0
            });
        }
    });
  
    });