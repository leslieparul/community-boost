
$('.dropdown, .faqs .tab').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
  
    if ($this.hasClass('active')) {
        $this.removeClass('active');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().removeClass('active');
        $this.parent().parent().find('li .dropdown-menu').slideUp(350);
        $this.parent().parent().find('li .panel').slideUp(350);
        $this.toggleClass('active');
        $this.next().slideToggle(350);
    }
});

//navbar toggle mobile
    $("#nav-mobile-toggle").on("click", function () {
      $("#nav-mobile").slideToggle();
    });

    //mobile sidebar toggler
    $("#sidebar_toggler").on("click", function () {
      $("body").toggleClass("sidebar-toggled");
    });
