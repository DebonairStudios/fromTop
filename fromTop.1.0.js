//fromTop() Version 1.0 jQuery function. 
jQuery(function(a) {
  a.fn.fromTop = function(c, d) {
    var b = a(window).scrollTop(), b = a(this).offset().top - b;
    window.scrollActivated = !1;
    window.scrollActivated = b <= c ? !0 : !1;
    d();
    return this;
  };
});
