// build time:Sun Jan 28 2024 00:25:59 GMT+0800 (China Standard Time)
if(!!$.prototype.justifiedGallery){var e={rowHeight:140,margins:4,lastRow:"justify"};$(".article-gallery").justifiedGallery(e)}$(document).ready(function(){$("#header > #nav > ul > .icon").click(function(){$("#header > #nav > ul").toggleClass("responsive")});if($(".post").length){var e=$("#menu");var i=$("#menu > #nav");var o=$("#menu-icon, #menu-icon-tablet");if($(document).width()>=1440){e.show();o.addClass("active")}o.click(function(){if(e.is(":hidden")){e.show();o.addClass("active")}else{e.hide();o.removeClass("active")}return false});if(e.length){$(window).on("scroll",function(){var o=e.offset().top;if(!i.is(":visible")&&o<50){i.show()}else if(i.is(":visible")&&o>100){i.hide()}if(!$("#menu-icon").is(":visible")&&o<50){$("#menu-icon-tablet").show();$("#top-icon-tablet").hide()}else if(!$("#menu-icon").is(":visible")&&o>100){$("#menu-icon-tablet").hide();$("#top-icon-tablet").show()}})}if($("#footer-post").length){var t=0;$(window).on("scroll",function(){var e=$(window).scrollTop();if(e>t){$("#footer-post").hide()}else{$("#footer-post").show()}t=e;$("#nav-footer").hide();$("#toc-footer").hide();$("#share-footer").hide();if(e<50){$("#actions-footer > #top").hide()}else if(e>100){$("#actions-footer > #top").show()}})}}});
//rebuild by hrmmi 