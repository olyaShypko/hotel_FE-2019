$(document).ready(function() {
    $('.main-slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        infinite: true
    });

    $('.testimonial__slider').slick({

        autoplay: true,
        infinite: true,
        dots: true
    });
});




//pagination

var current_page = 1;
var records_per_page = 9;

var objJson = [{
        adName: "img/1.jpg"
    },
    {
        adName: "img/1 (1).jpg"
    },
    {
        adName: "img/2_2.jpg"
    },
    {
        adName: "img/2_3.jpg"
    },
    {
        adName: "img/2_4.jpg"
    },
    {
        adName: "img/2_BymTpk7.jpg"
    },
    {
        adName: "img/3_giiiTs6.jpg"
    },
    {
        adName: "img/4_rQitiNy.jpg"
    },
    {
        adName: "img/5_6AvEgsa.jpg"
    },
    {
        adName: "img/6_r4oQd0M.jpg"
    },
    {
        adName: "img/8_cduDbhK.jpg"
    },
    {
        adName: "img/crown-064.jpg"
    },
    {
        adName: "img/hotel-zolota-korona-truskavets-06.jpg"
    },
    {
        adName: "img/hotel-zolota-korona-truskavets-10.jpg"
    },
    {
        adName: "img/restaurant-22.jpg"
    },
    {
        adName: "img/8_cduDbhK.jpg"
    },
    {
        adName: "img/crown-064.jpg"
    },
    {
        adName: "img/hotel-zolota-korona-truskavets-06.jpg"
    },
    {
        adName: "img/hotel-zolota-korona-truskavets-10.jpg"
    },
    {
        adName: "img/restaurant-22.jpg"
    },
    {
        adName: "img/1.jpg"
    },
    {
        adName: "img/1 (1).jpg"
    },
    {
        adName: "img/2_2.jpg"
    },
    {
        adName: "img/2_3.jpg"
    },
    {
        adName: "img/2_4.jpg"
    },
    {
        adName: "img/2_BymTpk7.jpg"
    },
    {
        adName: "img/3_giiiTs6.jpg"
    },
    {
        adName: "img/4_rQitiNy.jpg"
    },
    {
        adName: "img/5_6AvEgsa.jpg"
    },
    {
        adName: "img/6_r4oQd0M.jpg"
    },
    {
        adName: "img/8_cduDbhK.jpg"
    }
]; // Can be obtained from another source, such as your objJson variable

function prevPage() {
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage() {
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page) {
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page - 1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {

      var test = "getElement(this, objJson["+i+"].adName)"
        listing_table.innerHTML += '<div class="gallery__item" onclick="'+test+'" style="background-image: url(' + objJson[i].adName + ');"></div>';
    }
    page_span.innerHTML = page + "/" + numPages();

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
};

function numPages() {
    return Math.ceil(objJson.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};

function getElement(element,imgsrc){
  $('body').append('<div class="pop-up__wrapp" style="background-image:url(\''+imgsrc+'\');"><span id="pop-up__close" onclick="closePopUP()"></span></div>');
}

function closePopUP(){
  $(document).ready(function() {
    $('.pop-up__wrapp').remove();


  });
}

