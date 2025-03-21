$(document).ready(function () {
    $("#binoy_button").click(function () {
        $("#tptList ul ul").slideUp("slow");
        $("#binoy_list:visible").slideUp("slow");
        $("#binoy_list:hidden").slideDown("slow");
    });
    $("#sutro_button").click(function () {

        $("#tptList ul ul").slideUp("slow");
        $("#sutro_list:visible").slideUp("slow");
        $("#sutro_list:hidden").slideDown("slow");

    });
    $("#dirgha_button").click(function () {
        $("#tptList ul ul ul:visible").slideUp("slow");
        $("#dirgha_list:visible").slideUp("slow");
        $("#dirgha_list:hidden").slideDown("slow");
    });
    $("#modhyom_button").click(function () {
        $("#tptList ul ul ul:visible").slideUp("slow");
        $("#modhyom_list:visible").slideUp("slow");
        $("#modhyom_list:hidden").slideDown("slow");
    });
    $("#songjukto_button").click(function () {
        $("#tptList ul ul ul:visible").slideUp("slow");
        $("#songjukto_list:visible").slideUp("slow");
        $("#songjukto_list:hidden").slideDown("slow");
    });
    $("#anguttor_button").click(function () {
        $("#tptList ul ul ul:visible").slideUp("slow");
        $("#anguttor_list:visible").slideUp("slow");
        $("#anguttor_list:hidden").slideDown("slow");
    });
    $("#khuddok_button").click(function () {
        $("#tptList ul ul ul:visible").slideUp("slow");
        $("#khuddok_list:visible").slideUp("slow");
        $("#khuddok_list:hidden").slideDown("slow");
    });
    $("#avidharma_button").click(function () {
        $("#tptList ul ul").slideUp("slow");
        $("#avidharma_list:visible").slideUp("slow");
        $("#avidharma_list:hidden").slideDown("slow");
    });
    $("#onnanno_button").click(function () {

        $("#tptList ul ul").slideUp("slow");
        $("#onnanno_list:visible").slideUp("slow");
        $("#onnanno_list:hidden").slideDown("slow");

    });
    $("#deshona_button").click(function () {
        $("#tptList ul ul ul:visible").slideUp("slow");
        $("#deshona_list:visible").slideUp("slow");
        $("#deshona_list:hidden").slideDown("slow");
    });
    $('#pitak_selection').on('change', function () {
        if (this.value == "1") {
            $("#pitok1").slideDown("slow");
            $("#pitok2").slideUp("slow");
            $("#pitok3").slideUp("slow");
            $("#pitok4").slideUp("slow");
        } else if (this.value == "2") {
            $("#pitok2").slideDown("slow");
            $("#pitok1").slideUp("slow");
            $("#pitok3").slideUp("slow");
            $("#pitok4").slideUp("slow");
        } else if (this.value == "3") {
            $("#pitok3").slideDown("slow");
            $("#pitok2").slideUp("slow");
            $("#pitok1").slideUp("slow");
            $("#pitok4").slideUp("slow");
        } else if (this.value == "4") {
            $("#pitok4").slideDown("slow");
            $("#pitok1").slideUp("slow");
            $("#pitok2").slideUp("slow");
            $("#pitok3").slideUp("slow");
        }
    });
    $('input[type=radio][name=searchType]').change(function () {
        if (this.value == 'whole_collection') {
            $("#tripitak_search").slideDown("slow");
            $("#specific_search").slideUp("slow");
        }
        else if (this.value == 'one_book') {
            $("#tripitak_search").slideUp("slow");
            $("#specific_search").slideDown("slow");
        }
    });

});
// footeradjustment
function footerAdjustment() {
    console.log('screen.height :' + screen.height);
    console.log('window.innerHeight :' + screen.availHeight);
    console.log('screen.availHeight :' + screen.availHeight);

    var footer = document.getElementById('footer');
    var tptlist = document.getElementById('tptList');
    console.log('tptList top =>' + tptlist.getBoundingClientRect().top)
    console.log('footer height =>' + footer.clientHeight)
    console.log('tptList clientHeight =>' + tptlist.clientHeight)
    var ftop = screen.availHeight - (10 + tptlist.getBoundingClientRect().top +
        footer.clientHeight +
        tptlist.clientHeight);
    // console.log(tptlist.);
    console.log("top " + ftop)
    //footer.style.top = ftop + 'px';
    //homecontent Height adjustment
    var hcheight = (screen.availHeight - 50) + 'px';
   // $('#homeContent').css({ 'height': hcheight });
    $('body').css({ 'opacity': '1' });
}
// footer adjst ment  end 
function heightAdjustment() {
    console.log(document.querySelector('#noteLeftNav h3').clientHeight);
    console.log(document.querySelector('#bookmarkPage h3').clientHeight);
    var divHeight = screen.availHeight - document.querySelector('#noteLeftNav h3').clientHeight;
    document.getElementById('noteNavBody').style.height = divHeight + 'px';
    document.getElementById('bookmarkBody').style.height = divHeight + 'px';
}
//theme Selection start
theme1 = {
    legend1Clr: '#435761', legend1BG: '#d3d3d3',
    legend2Clr: 'white', legend2BG: '#6f6f6f',
    bg1Clr: '#435761', bg1BG: '#ffffe4',
    bg2Clr: '#435761', bg2BG: '#f9f9f9',
    bg3Clr: '#435761', bg3BG: '#e5e5e5',
    viewport: 'black'
}
theme2 = {
    legend1Clr: '#f2dacf', legend1BG: '#6f391f ',
    legend2Clr: '#fbf4f1', legend2BG: '#a0522d',
    bg1Clr: '#502916', bg1BG: '#fbf4f1',
    bg2Clr: '#502916', bg2BG: '#f2dacf',
    bg3Clr: '#502916', bg3BG: '#e4b5a0',
    viewport: 'black'
}
theme3 = {
    legend1Clr: 'white', legend1BG: 'black',
    legend2Clr: 'white', legend2BG: 'black',
    bg1Clr: 'black', bg1BG: 'white',
    bg2Clr: 'black', bg2BG: '#e6e6e6 ',
    bg3Clr: 'black', bg3BG: '#cccccc',
    viewport: 'black'
}
theme4 = {
    legend1Clr: '#e9fffd', legend1BG: '#00766a',
    legend2Clr: '#e9fffd', legend2BG: '#009688',
    bg1Clr: 'black', bg1BG: '#e9fffd',
    bg2Clr: '#004a43', bg2BG: '#b7fff8',
    bg3Clr: '#004a43', bg3BG: '#6efff1',
    viewport: 'black'
}
theme5 = {
    legend1Clr: '#fef9f1', legend1BG: '#de8e0c',
    legend2Clr: '#fef9f1', legend2BG: '#f5b041',
    bg1Clr: '#7c4f07', bg1BG: '#fdebd0',
    bg2Clr: '#7c4f07', bg2BG: '#fad8a0',
    bg3Clr: '#7c4f07', bg3BG: '#f8c471',
    viewport: 'black'
}
theme6 = {
    legend1Clr: '#eff2f4 ', legend1BG: '#607890',
    legend2Clr: '#eff2f4', legend2BG: '#93a5b7',
    bg1Clr: '#8d97a1', bg1BG: '#181e24',
    bg2Clr: '#eff2f4', bg2BG: '#3c4b5b',
    bg3Clr: '#eff2f4', bg3BG: '#607890',
    viewport: '#929ca6'
}
$('input[type=radio][name=themeRadio]').change(function () {
    var startData = JSON.parse(localStorage.getItem('tptStartData'));

    if (this.value == 'Default') {
        changeTheme(theme1);
    }
    else if (this.value == 'Chocolate') {
        changeTheme(theme2);
    }
    else if (this.value == 'Plain') {
        changeTheme(theme3);
    }
    else if (this.value == 'Teal') {
        changeTheme(theme4);
    }
    else if (this.value == 'Orange') {
        changeTheme(theme5);
    }
    else if (this.value == 'Night-Blue') {
        changeTheme(theme6);
    }
    startData.theme = this.value;
    localStorage.setItem('tptStartData', JSON.stringify(startData));
});
function changeTheme(theme) {
    selectedTheme = theme;
    $('#leftNav p').css({ 'color': selectedTheme.bg2Clr });
    var legend1 = $('.legend-shade1');
    for (var i = 0; i < legend1.length; i++) {
        $(legend1[i]).css({
            'background-color': theme.legend1BG,
            'color': theme.legend1Clr,
        });
    }
    var legend2 = $('.legend-shade2');
    for (var i = 0; i < legend2.length; i++) {
        $(legend2[i]).css({
            'background-color': theme.legend2BG,
            'color': theme.legend2Clr,
        });
    }
    var bg1 = $('.bg-shade1');
    for (var i = 0; i < bg1.length; i++) {
        $(bg1[i]).css({
            'background-color': theme.bg1BG,
            'color': theme.bg1Clr,
        });
    }
    var bg2 = $('.bg-shade2');
    for (var i = 0; i < bg2.length; i++) {
        $(bg2[i]).css({
            'background-color': theme.bg2BG,
            'color': theme.bg2Clr,
        });
    }
    var bg3 = $('.bg-shade3');
    for (var i = 0; i < bg3.length; i++) {
        $(bg3[i]).css({
            'background-color': theme.bg3BG,
            'color': theme.bg3Clr,
        });
    }
    // var power=$('.power');
    // for(var i=0;i<power.length;i++){
    //     $(power[i]).css({
    //         'background-color':theme.legend2BG,
    //         // 'color':theme.legend2Clr,
    //     });
    // }
    $('#bookmark,#discussion,#search,#cog').css({
        'background-color': theme.legend2BG
    })
    $('#viewport').css({ color: theme.viewport })
}
//theme selection end
//start config
function startConfig() {
    footerAdjustment();
    heightAdjustment();
    if (localStorage.getItem("tptStartData") === null) {
        if (screen.width > 420) {
            fontSize = 26;
            //alert(fontSize + '' + 420)
        }
        else {
            fontSize = 28;
            //alert(fontSize + ' small than ' + 420)
        }
        startData = {
            fontsize: fontSize,
            theme: 'Default'
        };
        localStorage.setItem('tptStartData', JSON.stringify(startData));//saving in local storage                    
    }
    var startData = JSON.parse(localStorage.getItem('tptStartData'));
    $('#fontSize').text(startData.fontsize);
    if (startData.theme == 'Default') {
        changeTheme(theme1);
        // $('input[type=radio][name=themeRadio]')[0].checked = true;   
        $('input:radio[name=themeRadio]:nth(0)').attr('checked', 'checked');
    }
    else if (startData.theme == 'Chocolate') {
        changeTheme(theme2);
        $('input:radio[name=themeRadio]:nth(1)').attr('checked', 'checked');
    }
    else if (startData.theme == 'Plain') {
        changeTheme(theme3);
        $('input:radio[name=themeRadio]:nth(2)').attr('checked', 'checked');
    }
    else if (startData.theme == 'Teal') {
        changeTheme(theme4);
        $('input:radio[name=themeRadio]:nth(3)').attr('checked', 'checked');
    }
    else if (startData.theme == 'Orange') {
        changeTheme(theme5);
        $('input:radio[name=themeRadio]:nth(4)').attr('checked', 'checked');
    }
    else if (startData.theme == 'Night-Blue') {
        changeTheme(theme6);
        $('input:radio[name=themeRadio]:nth(5)').attr('checked', 'checked');
    }
    setTimeout(function () { $('#tptCover').hide() }, 3000);
    console.log($('#tptCover').css('background-color'));
    // $('body').addClass('body-theme2');
    // $('header').addClass('header-theme2');
    // $('#viewport').addClass('viewport-theme2');
}
// alert($('#tptCover').css('background-color'));
//document.addEventListener("deviceready", startConfig, false);
startConfig()

function showBook(dir, todata, toElem) {
    var SBStart = new Date();
    var startData = JSON.parse(localStorage.getItem('tptStartData'));
    var style = $(`<style>#viewport p,#viewport h1,#viewport h2,#viewport h3,#tikabody {font-size: ${startData.fontsize}px}</style>`);
    $('html > head').append(style);
    // $('#viewport p,#viewport h1,#viewport h2,#viewport h3').css({'font-size':'30px'});
    $('#powerDiv,#leftNavButton').css('display', 'none');
    viewportElem = document.getElementById('viewport')
    viewportElem.innerHTML = '';
    $('#homeContent').hide();
    viewportElem.style.display = 'block';
    $('.bkloader').css('display', 'block');

    // import data from file
    

    $.get(dir, function (rdata) {
       // console.log(rdata)
        if (toElem != null) {
            data = rdata.slice(0, toElem.toI) + `<span class='srchword'>${toElem.word}</span>` + rdata.slice((+toElem.toI + +toElem.word.length));
        }
        else {
            data = rdata;
        }
        bookcnt = document.createElement('div');
        bookcnt.innerHTML = data;
        // document.getElementById('viewport').innerHTML=bookcnt.querySelector('#viewport').innerHTML;
        // $('#viewport').html($(bookcnt).children('#viewport').html());        
        // $('#leftNavBody').html(bookcnt.querySelector('#leftNav').innerHTML);
        viewportElem.innerHTML = bookcnt.querySelector('#viewport').innerHTML;
        document.getElementById('leftNavBody').innerHTML = bookcnt.querySelector('#leftNav').innerHTML;
        document.getElementById('ftnDiv').innerHTML = bookcnt.querySelector('#ftnDiv').innerHTML;
        document.getElementById('booknameDiv').innerHTML = bookcnt.querySelector('#booknameDiv').innerHTML;
        console.log('get started');
        setTimeout(function () {
            console.log('get fin');
            addAllSlides();
            swiperConfig();
            headerConfig();
            TOCConfig();
            saveBookmarkConfig();
            tikaConfig();
            IPSCleanOpen();
            document.getElementById('leftNav').scrollTop = 0;
            //change OnIndex
            state = 'book';
            //custom scrollspy start
            var toctsIDs = $('#leftNav p a');
            // console.log('length of '+toctsIDs.length);
            for (i = 0; i < toctsIDs.length; i++) {
                $($(toctsIDs[i]).attr('href')).attr('data-spy', i + 1);
                // console.log($(toctsIDs[i]).attr('href')+"for href "+$($(toctsIDs[i]).attr('href')).data('spy'));
            }
            //custom scrollspy ends                        
            console.log('time to ' + mySwiper.slides.length * 200);
            $('#viewport').ready(function () {
                // alert('Viewport Loaded ready');
                setTimeout(function () {
                    $('.bkloader').css('display', 'none');
                    $('#powerDiv').fadeIn();
                    $('#leftNavButton').fadeIn();
                    // mySwiper.allowTouchMove=true; 
                    //from showbook jump to section handler start
                    if (todata != null) {
                        setTimeout(function () {
                            mySwiper.slideTo(todata.slide, 2500);
                            mySwiper.slides[todata.slide].scrollTop = (document.getElementById(todata.id).offsetTop) - 100;
                        }, 5);
                    } else if (toElem != null) {
                        setTimeout(function () {
                            var srchElem = document.querySelector('.srchword');
                            var parentElem = srchElem.parentElement;
                            while (!parentElem.classList.contains("swiper-slide")) {
                                // console.log(parentElem.nodeName);
                                parentElem = parentElem.parentElement;
                            }
                            parentElem.classList.add("srchslide");
                            for (i = 0; i < mySwiper.slides.length; i++) {
                                if (mySwiper.slides[i].classList.contains('srchslide')) { break; }
                                // console.log(i);
                            }
                            mySwiper.slideTo(i, 2500);
                            mySwiper.slides[i].scrollTop = (srchElem.offsetTop) - 50;
                        }, 5);
                    }
                    var SBEnd = new Date();
                    console.log('finished loading');
                    //jump to section handler ends 
                    onScrollNTouch();
                }, 500);
                console.log('Its ready');
            });
        }, 10);
    });

}
 // Implements by ajax xhr

//addallSlide
function addAllSlides() { document.querySelector('.swiper-wrapper').innerHTML += bookcnt.querySelector('#slidesAll').innerHTML; console.log('finished adding slides'); }
// allslides added
// swiper config
function swiperConfig() {
    mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        // lazy: true,
        // allowTouchMove:false,
        direction: 'horizontal',
        loop: false,
        spaceBetween: 20,
        // slidesOffsetBefore:10,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        longSwipesMs: 1000,
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    console.log('finished my swiper');
}
//up display header config
function headerConfig() {
    var topX = 0;
    viewportElem.addEventListener("touchstart", function (event) {
        // console.log("touch started client X "+event.touches[0].clientX+" client Y "+event.changedTouches[0].pageY );
        topX = event.touches[0].clientY;
        hideNavsnModals();
        state = 'book';
        // $('#tikaModal').fadeOut();$('#bkmrkModal').fadeOut();                            
    }, true);
    viewportElem.addEventListener("touchend", function (e) {
        // console.log("touch ended    client X "+e.changedTouches[0].pageX+" client Y "+e.changedTouches[0].pageY );
        // console.log(topX);
        if ((topX - e.changedTouches[0].pageY) > 20) {

            // if viewportElem.style.top 0 or 0++ reading probleming thats why disabled it.  
           // viewportElem.style.top = "0px";
            console.log(document.getElementById('head').style.top)
            document.getElementById('booknameDiv').style.opacity = "1";
           // document.getElementById('booknameDiv').style.top = '0px'
            if (document.getElementById('booknameDiv').style.opacity == '1') {
                setTimeout(function () {
                    var themeData = JSON.parse(localStorage['tptStartData']);

                    document.getElementById('booknameDiv').style.opacity = "0";
                 //   document.getElementById('booknameDiv').style.background = `${themeData.theme}`;

                }, 1500);
            }
            document.getElementById('head').style.top = "-70px";
        }
        if ((e.changedTouches[0].pageY - topX) >= 0) {
            document.getElementById('head').style.top = "0px";
            document.getElementById('booknameDiv').style.opacity = "0";
           // document.getElementById('booknameDiv').style.top = '-70px'
            //viewportElem.style.top = "70px";
        }

    }, true);

    console.log('finished up display');
}

//header config end
//toc and slide jump
function TOCConfig() {
    allTocs = document.querySelectorAll('.MsoToc1 a,.MsoToc2 a,.MsoToc3 a ');
    allTocs.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            closeNav('leftNav', 'left');
            mySwiper.slideTo(e.target.getAttribute('data-slide'), 2000, false);
            mySwiper.slides[e.target.getAttribute('data-slide')].scrollTop = (document.querySelector(e.target.getAttribute('href')).offsetTop) - 100;
            console.log('finished TOCconfig');
        });
    });
}

//toc and jump slide ends
//action button start
cogMoving = false;
$('#cog').on('touchstart', function () {
    console.log('touch cog start');
    $('#discussion').css({ 'opacity': '.8', 'bottom': '10px', 'right': '130px' });
    $('#search').css({ 'opacity': '.8', 'bottom': '100px', 'right': '100px' });
    $('#bookmark').css({ 'opacity': '.8', 'bottom': '130px', 'right': '10px' });
});
$('#cog').on('touchmove', function () {
    cogMoving = true;
    mySwiper.slides[mySwiper.activeIndex].style.overflow = "hidden";
    $('body').css({ 'overflow': 'hidden' });
    var cogHouse = document.querySelector("#cog");
    var discussion = document.getElementById("discussion");
    var search = document.getElementById("search");
    var bookmark = document.getElementById("bookmark");
    // console.log(event.touches[0].clientX);
    // console.log(event.touches[0].clientX);        
    cogHouse.style.left = (event.touches[0].clientX - 30) + "px";
    cogHouse.style.top = (event.touches[0].clientY - 30) + "px";
    if (
        Math.abs(discussion.offsetLeft - cogHouse.offsetLeft) < 25 &&
        Math.abs(discussion.offsetTop - cogHouse.offsetTop) < 25
    ) { discussion.classList.add("focusIcon"); }
    else { discussion.classList.remove("focusIcon"); }
    if (
        Math.abs(search.offsetLeft - cogHouse.offsetLeft) < 25 &&
        Math.abs(search.offsetTop - cogHouse.offsetTop) < 25
    ) { search.classList.add("focusIcon"); }
    else { search.classList.remove("focusIcon"); }
    if (
        Math.abs(bookmark.offsetLeft - cogHouse.offsetLeft) < 25 &&
        Math.abs(bookmark.offsetTop - cogHouse.offsetTop) < 25
    ) { bookmark.classList.add("focusIcon"); }
    else { bookmark.classList.remove("focusIcon"); }
});
$('#cog').on('touchend', function () {
    mySwiper.slides[mySwiper.activeIndex].style.overflow = "auto";
    var cogHouse = document.getElementById("cog");
    var discussion = document.getElementById("discussion");
    var search = document.getElementById("search");
    var bookmark = document.getElementById("bookmark");
    bookmark.classList.remove("focusIcon");
    search.classList.remove("focusIcon");
    discussion.classList.remove("focusIcon");
    if (cogMoving) {
        //discussion
        if (
            Math.abs(discussion.offsetLeft - cogHouse.offsetLeft) < 25 &&
            Math.abs(discussion.offsetTop - cogHouse.offsetTop) < 25
        ) {
            $('#noteModal textarea').val(''); $('#noteModalTitle').val('');
            $('#noteModal').fadeIn(200);
            state = 'bcover';
        }
        //search   
        if (
            Math.abs(search.offsetLeft - cogHouse.offsetLeft) < 25 &&
            Math.abs(search.offsetTop - cogHouse.offsetTop) < 25
        ) {
            openNav('IPSModal', 'top');
            state = 'bcover';
            console.log('state bc');
        }
        //bookmark  
        if (
            Math.abs(bookmark.offsetLeft - cogHouse.offsetLeft) < 25 &&
            Math.abs(bookmark.offsetTop - cogHouse.offsetTop) < 25
        ) {
            myBookmarks.marks.push(bookmarkObj);
            localStorage.setItem('bookmarks', JSON.stringify(myBookmarks));
            console.log(bookmarkObj);

            $('#bkmrkModal p').text(bookmarkObj.title);
            $('#bkmrkModal').fadeIn(200, 'linear', function () {
                setTimeout(function () {
                    $('#bkmrkModal').fadeOut(200);
                }, 2000);
            });

        }
    }

    $('#discussion').css({ 'opacity': '0', 'bottom': '10px', 'right': '10px' });
    $('#search').css({ 'opacity': '0', 'bottom': '10px', 'right': '10px' });
    $('#bookmark').css({ 'opacity': '0', 'bottom': '10px', 'right': '10px' });
    //I am confused why it does not work on right thats why we set it to left;
    var cleft = screen.width - 60 + "px"; var ctop = window.innerHeight - 60 + "px";

    console.log(cleft)
    console.log(cleft)

    $("#cog").animate({ left: cleft, top: ctop }, 500, function () {
        console.log("ended");
    });
    // document.querySelector(".topBar").innerHTML=cogHouse.offsetTop; 
    console.log("inactivated");
    cogMoving = false;
});
//action button ends
// saving bookmark &  start
onScrollNTouch = function () {
    // var anchors=e.target.querySelectorAll("p a,h1 a, h2 a,h3 a");
    var anchors = mySwiper.slides[mySwiper.activeIndex].querySelectorAll("p a,h1 a, h2 a,h3 a");
    console.log(anchors.length);
    // console.log("anchors in slide"+anchors.length);
    // console.log(document.getElementById(e.target.id).innerHTML);
    for (var i = 0; i < anchors.length; i++) {
        var rect = anchors[i].getBoundingClientRect();
        console.log()
        // console.log(rect.top, rect.right, rect.bottom, rect.left);
        if (anchors[i].parentElement.innerText.length < 60 && rect.top > 0 && rect.top < 350) {
            console.log(anchors[i].id);
            var allTCT = document.querySelectorAll('#leftNav p');
            allTCT.forEach(element => {
                element.style.color = selectedTheme.bg2Clr;
            });
            // $('#leftNav p').css({'color':selectedTheme.bg2Clr});
            $('#leftNav p:nth-of-type(' + $(anchors[i]).data('spy') + ')').css({ 'color': 'cornflowerblue' });
            console.log($(anchors[i]).data('spy'));
            console.log(anchors[i].parentElement.innerText);
            bookmarkObj = {
                location: $('#bookname').data('location'),
                slide: mySwiper.activeIndex,
                id: anchors[i].id,
                bookname: document.getElementById('bookname').innerText,
                title: anchors[i].parentNode.innerText
            };
            break;
        }
    }
}
function saveBookmarkConfig() {
    if (localStorage.getItem("bookmarks") === null) {
        bookmarks = {
            marks: [],
        };
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));//saving in local storage                    
    }
    bookmarkObj = {};
    myBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    console.log(myBookmarks);
    var normal = document.querySelectorAll(".swiper-slide");
    console.log(normal.length);

    for (i = 0; i < normal.length; i++) {
        normal[i].addEventListener('scroll', () => { onScrollNTouch() });
        normal[i].addEventListener('touchstart', () => { onScrollNTouch() })
    }
    mySwiper.on('transitionEnd', () => { onScrollNTouch() });
    console.log('finished bkmrk config');
}
// bookmarkend
// foontnote handler starts
function tikaConfig() {
    ftnRefs = document.querySelectorAll('.ftnRef');
    for (var i = 0; i < ftnRefs.length; i++) {
        ftnRefs[i].addEventListener('click', function () {
            // alert('clicked');
            if ($($(this).attr('href')).parent().parent().text() != null) {
                console.log('true');
                val = $($(this).attr('href')).parent().parent().html();
                console.log(val);
                document.getElementById('tikabody').innerHTML = val;
                setTimeout(function () {
                    document.getElementById('tikaModal').style.display = 'block';
                    state = 'bcover';
                }, 100);
            }
            // console.log($($(this).attr('href')).parent().text());
        })
    }
    console.log('finished tika');
}

// footnote handler ends
//openbookmark deletebookmark start
function openBookmarkPage() {
    openNav('bookmarkPage', 'left');
    closeNav('leftNav', 'left'); closeNav('rightNav', 'right');
    // var newHtml=document.querySelector('#bookmarkBody ul').innerHTML;
    if (state == 'index') { state = 'icover'; }
    else if (state == 'book') { state = 'bcover'; }
    if (localStorage.getItem("bookmarks") === null) {
        bookmarks = {
            marks: [],
        };
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));//saving in local storage                    
    }
    function showBookmarkList() {
        var newHtml = "";
        var bookmarklist = JSON.parse(localStorage.getItem('bookmarks'));
        for (var i = bookmarklist.marks.length - 1; i >= 0; i--) {
            newHtml += "<li><p><b>" + bookmarklist.marks[i].bookname + " : </b>" + bookmarklist.marks[i].title + "</p><span><i data-index='" + i + "' class='material-icons'>delete</i></span></li>";
        }
        // newHtml+="<li><p>বুকমার্ক </p><span>&times;</span></li>";
        document.querySelector('#bookmarkBody ul').innerHTML = newHtml;

        var bookmarkBins = document.querySelectorAll('#bookmarkBody ul li span i');
        var allbookmarks = document.querySelectorAll('#bookmarkBody ul li p');
        for (i = 0; i < bookmarkBins.length; i++) {

            bookmarkBins[i].addEventListener('click', function (e) {
                console.log("clicked trash and index" + e.target.dataset.index);
                // console.log("clicked trash and index"+e.target.innerHTML);
                console.log(i);
                bookmarklist.marks.splice(e.target.dataset.index, 1);
                $(e.target.parentElement.parentElement).slideUp("slow", function () {
                    showBookmarkList();
                });
                localStorage.setItem('bookmarks', JSON.stringify(bookmarklist));
            });

            allbookmarks[i].addEventListener('click', function (e) {
                var selectedIndex;
                console.log(e.target.parentElement.innerHTML);
                if (e.target.nodeName == 'B') {
                    selectedIndex = e.target.parentElement.parentElement.querySelector('span i').dataset.index;
                }
                else {
                    selectedIndex = e.target.parentElement.querySelector('span i').dataset.index;
                }
                console.log(bookmarklist.marks[selectedIndex].location);
                todata = {
                    slide: bookmarklist.marks[selectedIndex].slide,
                    id: bookmarklist.marks[selectedIndex].id
                };
                closeNav('bookmarkPage', 'left');
                setTimeout(function () {
                    showBook(bookmarklist.marks[selectedIndex].location, todata);
                }, 800);

                // console.log('index to jump from '+ e.target.parentElement.querySelector('span i').dataset.index);

            });
        }
    }
    showBookmarkList();
}
//bookmark end
//fontmodal handler strt
$('#fontModal div #minus').on('mousedown', function (e) {
    // str.slice
    // console.log($('#viewport p').css('font-size'));
    // $('#fontSize').text($('#viewport p').css('font-size').slice(0,2));
    var size = $('#fontSize').text(); size--;
    $('#fontSize').css({ 'font-size': size });
    $('#fontSize').text(size);

});
$('#fontModal div #plus').on('mousedown', function (e) {
    // str.slice
    // console.log($('#viewport p').css('font-size'));
    // $('#fontSize').text($('#viewport p').css('font-size').slice(0,2));
    var size = $('#fontSize').text(); size++;
    $('#fontSize').css({ 'font-size': size });
    $('#fontSize').text(size);

});
$('#fontModal button').on('click', function (e) {
    var startData = JSON.parse(localStorage.getItem('tptStartData'));
    startData.fontsize = $('#fontSize').text();
    localStorage.setItem('tptStartData', JSON.stringify(startData));
    document.querySelector('#fontModal button').innerHTML = 'অপেক্ষা করুন';
    // document.querySelector('#fontModal button').innerHTML='অপেক্ষা করুন';
    setTimeout(function () {
        var size = $('#fontSize').text() + 'px';
        changeFonts = document.querySelectorAll('#viewport p,#viewport h1,#viewport h2,#viewport h3,#tikabody');
        changeFonts.forEach(element => {
            element.style.cssText += `font-size:${size};`;
        });

        $('#fontModal').fadeOut(100, 'swing', function () {
            $('#fontModal button').html('পরিবর্তন করুন');
        });
    }, 5)

});
//fontmodal end
//note modal handler
$('#noteModal button').on('click', function () {
    console.log($('#noteModal textarea').val());
    if ($('#noteModal textarea').val() != '' && $('#noteModalTitle').val() != '') {
        if (localStorage.getItem("tptnotes") === null) {
            var tptnotes = {
                notes: [],
            };
            localStorage.setItem('tptnotes', JSON.stringify(tptnotes));
        }
        tptnotes = JSON.parse(localStorage.getItem('tptnotes'));
        var mynote = {
            title: $('#noteModalTitle').val(),
            note: $('#noteModal textarea').val(),
        }
        tptnotes.notes.push(mynote);
        localStorage.setItem('tptnotes', JSON.stringify(tptnotes));
        console.log(JSON.stringify(tptnotes));
        $('#noteModal').fadeOut(500);
    }
    else {
        alert("খালি নোট গ্রহণযোগ্য নয়");
    }

});
//note modal ends
//noteNav display
function openNoteNav() {
    closeNav('leftNav', 'left'); closeNav('rightNav', 'right');
    openNav('noteLeftNav', 'left');

    if (state == 'index') { state = 'icover'; }
    else if (state == 'book') { state = 'bcover'; }

    // var newHtml=document.querySelector('#bookmarkBody ul').innerHTML;
    if (localStorage.getItem("tptnotes") === null) {
        var tptnotes = {
            notes: [],
        };
        localStorage.setItem('tptnotes', JSON.stringify(tptnotes));
    }

    function showNoteList() {
        var newHtml = "";
        var tptnotes = JSON.parse(localStorage.getItem('tptnotes'));
        for (var i = tptnotes.notes.length - 1; i >= 0; i--) {
            newHtml += "<li><p>" + tptnotes.notes[i].title + "</p><span><i data-index='" + i + "' class='material-icons'>delete</i></span></li>";
        }
        // newHtml+="<li><p>বুকমার্ক </p><span>&times;</span></li>";
        document.querySelector('#noteNavBody ul').innerHTML = newHtml;

        var noteBins = document.querySelectorAll('#noteNavBody ul li span i');
        var allNotes = document.querySelectorAll('#noteNavBody ul li p');
        for (i = 0; i < noteBins.length; i++) {
            noteBins[i].addEventListener('click', function (e) {
                console.log("clicked trash and index" + e.target.dataset.index);
                // console.log("clicked trash and index"+e.target.innerHTML);
                console.log(i);
                tptnotes.notes.splice(e.target.dataset.index, 1);
                $(e.target.parentElement.parentElement).slideUp("slow", function () {
                    showNoteList();
                });
                localStorage.setItem('tptnotes', JSON.stringify(tptnotes));
            });
            allNotes[i].addEventListener('click', function (e) {
                var selectedIndex;
                console.log(e.target.parentElement.innerHTML);
                selectedIndex = e.target.parentElement.querySelector('span i').dataset.index;
                console.log(tptnotes.notes[selectedIndex].note);
                $('#modifyNoteModalTitle').val(tptnotes.notes[selectedIndex].title);
                $('#modifyNoteModal textarea').val(tptnotes.notes[selectedIndex].note);
                $('#modifyNoteModal button').on('click', function () {
                    if ($('#modifyNoteModal textarea').val() != '' && $('#modifyNoteModalTitle').val() != '') {
                        var mynote = {
                            title: $('#modifyNoteModalTitle').val(),
                            note: $('#modifyNoteModal textarea').val(),
                        }
                        console.log(selectedIndex);
                        tptnotes.notes.splice(selectedIndex, 1, mynote);
                        localStorage.setItem('tptnotes', JSON.stringify(tptnotes));
                        $('#modifyNoteModal').fadeOut(200);
                    } else {
                        alert("খালি নোট গ্রহণযোগ্য নয়");
                    }

                });
                closeNav('noteLeftNav', 'left');
                $('#modifyNoteModal').fadeIn(200);
                if (state == 'index') { state = 'icover'; }
                if (state == 'book') { state = 'bcover'; }
                // console.log('index to jump from '+ e.target.parentElement.querySelector('span i').dataset.index);
            });
        }
    }
    showNoteList();
}
function closeNav(id, side) {

    var elem = document.getElementById(id);
    console.log(elem.style.left);
    switch (side) {
        case "left": document.getElementById(id).style.transform = "translate(-100%,0)"; break;
        case "right": document.getElementById(id).style.transform = "translate(100%,0)"; break;
        case "top": document.getElementById(id).style.top = "-110%"; break;
        case "bottom": document.getElementById(id).style.bottom = "-110%"; break;
    }
    if (state == 'icover') {
        state = 'index';
        console.log('in icover')
    }
    else if (state == 'bcover') {
        state = 'book'
    }
}
function openNav(id, side) {
    var elem = document.getElementById(id);
    console.log('silavanta => ' + id)

    switch (side) {
        case "left": { { elem.style.transform = "translate(0%,0)"; break; } }
        case "right": { { elem.style.transform = "translate(0%,0)"; break; } }
        case "top": { { elem.style.top = "0"; break; } }
        case "bottom": { { elem.style.bottom = "0"; break; } }
        case "update": android.update(); break;
        case "rate": android.rate(); break;
        case "share": android.share(); break;

    }
    console.log(elem.style.right);
    if (state == 'index') {
        state = 'icover';
        console.log('in index')
    }
    else if (state == 'book') {
        state = 'bcover';
    }
    console.log('state ' + state);
}

function openModal(id) {
    closeNav('rightNav', 'right');
    $('#' + id).fadeIn();
    if (state == 'index') { state = 'icover'; }
    else if (state == 'book') { state = 'bcover'; }
}
//homecontent click handler start
document.getElementById('homeContent').addEventListener('click', function () {
    hideNavsnModals();
});
//exit app config
var state = 'index';

// document.addEventListener("backbutton", function(){
//     console.log('back button pressed state '+state);

//     if(state=='index'){

//         if(window.confirm('আপনি কি বের হতে চাচ্ছেন?')){
//             var startData = JSON.parse(localStorage.getItem('tptStartData')); 
//             if(screen.width>420){startData.fontsize=24;}
//             else{startData.fontsize=26;}  
//             localStorage.setItem('tptStartData', JSON.stringify(startData));
//             navigator.app.exitApp();

//         } 
//     }
//     else if(state=='book'){
//         state='index';
//         // window.location.href='index.html';
//         showHomeContent();
//         IPSStop=true;
//         closeNav('IPSModal','top');
//     }
//     else if(state=='icover'){
//         hideNavsnModals();
//         state='index';
//         console.log('state is in icover');
//     }
//     else if(state=='bcover'){
//         hideNavsnModals();
//         state='book';

//     }
// }, false);

// state Implements by siilavanta for native android

function onBackPress() {
    console.log('back button pressed state ' + state);
    if (state == 'book') {
        state = 'index';
        // window.location.href='index.html';
        showHomeContent();
        IPSStop = true;
        closeNav('IPSModal', 'top');
    }
    else if (state == 'icover') {
        hideNavsnModals();
        state = 'index';
        console.log('state is in icover');
    }
    else if (state == 'bcover') {
        hideNavsnModals();
        state = 'book';

    }

}

// this function invoke from abdroid for state status
function getState() {
    return state;
}
function setState(stateName) {
    state = stateName;
}

function onExit() {
    if(window.confirm('আপনি কি বের হতে চাচ্ছেন?')){
        window.close();
        } 
}
//search in this book start
$('#SIPclose').on('click', function () {
    IPSStop = true;
    closeNav('IPSModal', 'top');
});
$('#SIPStop').on('click', function () {
    IPSStop = true;
});
$('#IPSValue').focus(function () {
    $('#SIPLast,#SIPNext').fadeOut(100, 'linear', function () {
        $('#SIPsearch').fadeIn(100);
    });
});
$('#SIPsearch').on('click', function (e) {
    $('#IPSValue').blur();
    $('#IPSValue').attr('disabled', 'disabled');
    $('#SIPLast,#SIPNext,#SIPsearch').fadeOut(100, 'linear', function () {
        $('#SIPStop').fadeIn(100);
    });
    // $('#SPProgress').css({'transition':'2s'});
    IPSStop = false;
    SIP();

});
IPSCleanOpen = function () {
    $('#SIPLast,#SIPNext').fadeOut(10, 'linear', function () {
        $('#SIPsearch').fadeIn(10);
        $('#IPSModal p').html('0/0');
    });
}
//search in this book;
selectedResult = -1;
function SIP() {
    regVal = $('#IPSValue').val();
    resultArr = [];
    // var reg= RegExp(`['"]{0,1}${regVal}[^\x00-\x7F]{0,}\\s`,'gim');
    // var reg= RegExp(`['"]{0,1}${regVal}[^\\w]`,'gim');
    var reg = RegExp(`${regVal}`, 'gim');
    allSlides = document.querySelectorAll('.swiper-slide');
    var i = 0, j = 0;
    function countSs() {
        if (i < allSlides.length) { allTs = allSlides[i].querySelectorAll("h3,h4,p,h1,h2"); }
        var progress = 100 / allSlides.length * (i + 1) - 5;
        $('#IPSProgress').css({ 'width': `${progress}%` })
        // console.log('length allts '+allTs.length);
        function countTs() {
            // console.log('length allts '+allTs.length+' n j '+j +'i '+i);
            targetText = allTs[j].innerHTML;
            // console.log(j);

            // var reg = /ভগবান/gi;
            var result;
            while ((result = reg.exec(targetText)) !== null) {
                obj = {
                    slide: i,
                    top: allTs[j].offsetTop - 100,
                }
                resultArr.push(obj);
                // console.log(result);                
            }
            targetText = targetText.replace(/<mark[\s\w"'=:()#%]{0,}>|<\/mark>/gmi, '');
            allTs[j].innerHTML = targetText.replace(reg, '<mark>' + regVal + '</mark>');
            j++;
            if (j < allTs.length && !IPSStop) {
                setTimeout(function () {
                    $('#IPSModal p').html('খোঁজ চলছে অপেক্ষা করুন : (0/' + resultArr.length + ') ' + ((i + 1) * j));
                    countTs();
                }, 0);
            }
            else if (i < allSlides.length) {
                i++;
                j = 0;
                if (i < allSlides.length && !IPSStop) countSs();
                else {
                    // alert('finish');
                    selectedResult = -1;
                    $('#IPSModal p').html('খোঁজ সমাপ্ত :' + (selectedResult + 1) + '/' + resultArr.length);
                    $('#SIPStop').fadeOut(100, 'linear', function () {
                        $('#SIPLast,#SIPNext').fadeIn(100);
                        $('#IPSValue').removeAttr('disabled');
                    });
                    $('#IPSProgress').css({ 'transition': '.1s', 'width': '0%' });
                    // foontnote handler starts
                    ftnRefs = document.querySelectorAll('.ftnRef');
                    for (var k = 0; k < ftnRefs.length; k++) {
                        ftnRefs[k].addEventListener('click', function () {
                            // alert('clicked');
                            if ($($(this).attr('href')).parent().parent().text() != null) {
                                console.log('true');
                                val = $($(this).attr('href')).parent().parent().html();
                                console.log(val);
                                document.getElementById('tikabody').innerHTML = val;
                                setTimeout(function () {
                                    document.getElementById('tikaModal').style.display = 'block';
                                    state = 'bcover';
                                }, 100);
                            }
                            console.log($($(this).attr('href')).parent().text());
                        })
                    }
                    // footnote handler ends
                }
            }
        }
        countTs();
        // console.log(' IIIIIIIIIIIII   '+ i);
    }
    countSs();
}
$('#SIPNext').on('click', function () {
    if (selectedResult != resultArr.length - 1) {

        $($('mark')[selectedResult]).removeClass('bgColor');
        selectedResult++;
        $($('mark')[selectedResult]).addClass('bgColor');
        mySwiper.slideTo(resultArr[selectedResult].slide);
        mySwiper.slides[resultArr[selectedResult].slide].scrollTop = resultArr[selectedResult].top;
        console.log("res " + selectedResult);
        $('#IPSModal p').html((selectedResult + 1) + '/' + resultArr.length);
    }
});
$('#SIPLast').on('click', function () {
    if (selectedResult != 0) {

        $($('mark')[selectedResult]).removeClass('bgColor');
        selectedResult--;
        $($('mark')[selectedResult]).addClass('bgColor');

        mySwiper.slideTo(resultArr[selectedResult].slide);
        mySwiper.slides[resultArr[selectedResult].slide].scrollTop = resultArr[selectedResult].top;
        console.log("res " + selectedResult);
        $('#IPSModal p').html((selectedResult + 1) + '/' + resultArr.length);
    }
});

//Search in this book end
//search global start
totalSearched = 0;
$('#searchButton').on('click', function () {
    BookNames = [
        [
            'বিনয়পিটকে পারাজিকা', 'বিনয়পিটকে পাচিত্তিয়', 'বিনয়পিটকে ভিক্ষুণী-বিভঙ্গ', 'বিনয়পিটকে মহাবর্গ', 'বিনয়পিটকে চূলবর্গ', 'বিনয়পিটকে পরিবার'
        ],
        [
            'দীর্ঘনিকায় (শীলস্কন্ধ-বর্গ)', 'দীর্ঘনিকায় (মহাবর্গ)', 'দীর্ঘনিকায় (পাথিক-বর্গ)', 'মধ্যমনিকায় (মূল-পঞ্চাশ)', 'মধ্যমনিকায় (মধ্যম-পঞ্চাশ)',
            'মধ্যমনিকায় (উপরি-পঞ্চাশ)', 'সংযুক্তনিকায় (সগাথা-বর্গ)', 'সংযুক্তনিকায় (নিদান-বর্গ)', 'সংযুক্তনিকায় (স্কন্ধ-বর্গ)', 'সংযুক্তনিকায় (ষড়ায়তন-বর্গ)',
            'সংযুক্তনিকায় (মহাবর্গ)', 'অঙ্গুত্তরনিকায় (একক নিপাত)', 'অঙ্গুত্তরনিকায় (দ্বিক নিপাত)', 'অঙ্গুত্তরনিকায় (ত্রিক নিপাত)', 'অঙ্গুত্তরনিকায় (চতুষ্ক নিপাত)',
            'অঙ্গুত্তরনিকায় (পঞ্চক নিপাত)', 'অঙ্গুত্তরনিকায় (ষষ্ঠক নিপাত)', 'অঙ্গুত্তরনিকায় (সপ্তক নিপাত)', 'অঙ্গুত্তরনিকায় (অষ্টক নিপাত)', 'অঙ্গুত্তরনিকায় (নবক নিপাত)',
            'অঙ্গুত্তরনিকায় (দশক নিপাত)', 'অঙ্গুত্তরনিকায় (একাদশক নিপাত)', 'খুদ্দকনিকায়ে খুদ্দকপাঠ', 'ধর্মপদ', 'উদান',
            'ইতিবুত্তক', 'সূত্রনিপাত', 'বিমানকাহিনি', 'প্রেতকাহিনি', 'থেরগাথা',
            'থেরীগাথা', 'অপদান (প্রথম খণ্ড)', 'অপদান (দ্বিতীয় খণ্ড)', 'বুদ্ধবংশ', 'চরিয়াপিটক',
            'জাতক (প্রথম খণ্ড)', 'জাতক (দ্বিতীয় খণ্ড)', 'জাতক (তৃতীয় খণ্ড)', 'জাতক (চতুর্থ খণ্ড)', 'জাতক (পঞ্চম খণ্ড)',
            'জাতক (ষষ্ঠ খণ্ড)', 'মহানির্দেশ ', 'চূলনির্দেশ', 'প্রতিসম্ভিদামার্গ', 'মিলিন্দ-প্রশ্ন', 'নেত্তিপ্রকরণ', 'পিটকোপদেশ'
        ],
        [
            'অভিধর্মপিটকে ধর্মসঙ্গণী', 'অভিধর্মপিটকে বিভঙ্গ', 'অভিধর্মপিটকে ধাতুকথা', 'অভিধর্মপিটকে পুদ্গল-প্রজ্ঞপ্তি', 'অভিধর্মপিটকে কথাৰত্থু',
            'অভিধর্মপিটকে যমক (১ম খণ্ড)', 'অভিধর্মপিটকে যমক (২য় খণ্ড)', 'অভিধর্মপিটকে যমক (৩য় খণ্ড)', 'অভিধর্মপিটকে পট্ঠান (১ম খণ্ড)', 'অভিধর্মপিটকে পট্ঠান (২য় খণ্ড)',
            'অভিধর্মপিটকে পট্ঠান (৩য় খণ্ড)', 'অভিধর্মপিটকে পট্ঠান (৪র্থ খণ্ড)', 'অভিধর্মপিটকে পট্ঠান (৫ম খণ্ড)',
        ],
        [
            'বনভন্তের ধর্মদেশনা (সিরিজ-১)', 'বনভন্তের ধর্মদেশনা (সিরিজ-২)', 'বনভন্তের ধর্মদেশনা (সিরিজ-৩)', 'বনভন্তের ধর্মদেশনা (সিরিজ-৪)', 'বনভন্তের ধর্মদেশনা (সিরিজ-৫)',
            'বনভন্তের ধর্মদেশনা (সিরিজ-৬)', 'বনভন্তের ধর্মদেশনা (সিরিজ-৭)', 'বনভন্তের ধর্মদেশনা (সিরিজ-৮)', 'বনভন্তের ধর্মদেশনা (সিরিজ-৯)', 'শ্রাবকবুদ্ধ বনভন্তে',
            'বিশুদ্ধিমার্গ', 'বিমুক্তিমার্গ', 'ধর্মপদ-অর্থকথা (সমগ্র)', 'বৌদ্ধ ভিক্ষু বিধি (প্রথম খণ্ড)', 'বৌদ্ধ ভিক্ষু বিধি (দ্বিতীয় খণ্ড)',
            'জানা ও দেখা', 'হৃদয়ের দরজা খুলে দিন', 'যে-কেউ স্বর্গে যেতে পারেন', 'একটি বন্য গাছ', 'পট্ঠানুদ্দেস-দীপনী',
            'ভালো? মন্দ? কে জানে?', 'মৃত্যুতে পুনর্জন্ম', 'কুশল প্রশ্নোত্তর', 'মহামানব গৌতম বুদ্ধ', 'পরিত্রাণ সূত্র পঞ্চাশক'
        ]
    ]
    stopsearch = false; totalSearched = 0;
    $('#searchProcess').slideDown();
    $('#SPResearch').slideUp();
    $('#SPProgress').css({ 'width': '1%' });
    if ($('input[name=searchType]:checked').val() == 'one_book') {
        // dir='p'+$('#pitak_selection').val()+'/'+$('#pitok'+$('#pitak_selection').val()).val()+'.html';
        // console.log(dir);
        $('#srchToolBox').slideUp(300);
        $('#srchStats').slideDown(300);
        resultArr = [];
        skipBook = false;
        var srchWord = $('#tptSrchVal').val();
        searchBook($('#pitak_selection').val(), $('#pitok' + $('#pitak_selection').val()).val(), srchWord, () => {
            var allLis = tptSrchResults.querySelectorAll('li');
            console.log(allLis.length);
            allLis.forEach(element => {
                element.addEventListener('click', (e) => {
                    var srchData = { word: srchWord, toI: e.target.dataset.toi }
                    closeNav('searchPage', 'left');
                    setTimeout(function () {
                        
                        showBook(e.target.dataset.book, null, srchData);
                        console.log('searchPage : ' +e.target.dataset.book)
                    }, 1000);
                });
            });
            stopsearch = true;
            $('#searchProcess').slideUp(300);
            $('#SPResearch').slideDown(300);
            $('#srchStats p').html('খোঁজ সমাপ্ত : ' + totalSearched);
        });
    }
    else if ($('input[name=searchType]:checked').val() == 'whole_collection') {
        var p1L, p2L, p3L, p4L, totalP;
        $('#srchToolBox').slideUp(300);
        $('#srchStats').slideDown(300);
        if ($('#p1Check').is(':checked')) { p1L = 6 }
        else { p1L = 0 }
        if ($('#p2Check').is(':checked')) { p2L = 47 }
        else { p2L = 0 }
        if ($('#p3Check').is(':checked')) { p3L = 13 }
        else { p3L = 0 }
        if ($('#p4Check').is(':checked')) { p4L = 25 }
        else { p4L = 0 }
        totalP = p1L + p2L + p3L + p4L;
        resultArr = [];
        var traverse = 0;
        var nxtPL = [p1L, p2L, p3L, p4L];
        var bi = 1, ci = 1, srcingBook = 0;

        // $('#SPProgress').css({'transition':'20s'});

        ci = 1; bi = 1; srchWord = $('#tptSrchVal').val();
        function sqnsrc(ci, bi) {
            if (bi <= nxtPL[ci - 1] && !stopsearch) {
                console.log('bi is ' + bi + 'ci is ' + ci);
                document.querySelector('#srchStats p').innerHTML = 'খোঁজ চলছে ' + BookNames[ci - 1][bi - 1] + ':(' + totalSearched + ')';
                searchBook(ci, bi, srchWord, function () {
                    bi++; srcingBook++;
                    var progress = 100 / totalP * srcingBook;
                    console.log(progress);

                    document.getElementById('SPProgress').style.width = `${progress}%`;
                    sqnsrc(ci, bi);
                });
            }
            else if (ci < 4) {
                ci++; bi = 1;
                // console.log(' In Sec 2 bi is '+bi+'ci is '+ci);
                sqnsrc(ci, bi);
            }
            else {
                srchTime = new Date();
                var allLis = tptSrchResults.querySelectorAll('li');
                console.log(allLis.length);
                allLis.forEach(element => {
                    element.addEventListener('click', (e) => {
                        // alert(`${e.target.dataset.book} ... ${e.target.dataset.toi} .. ${srchWord.length}`);
                        var srchData = { word: srchWord, toI: e.target.dataset.toi }
                        closeNav('searchPage', 'left');
                        setTimeout(function () {
                            showBook(e.target.dataset.book, null, srchData);
                        }, 1000);
                    });
                });
                // finTime=new Date();
                // alert('Srch Required TIme'+((srchTime-startTime12)/1000)+' event time = '+(finTime-srchTime)+' Total length '+allLis.length);
                stopsearch = true;
                $('#searchProcess').slideUp(300);
                $('#SPResearch').slideDown(300);
                $('#srchStats p').html('খোঁজ সমাপ্ত : ' + totalSearched);
            }
        }
        startTime12 = new Date();
        tptSrchResults = document.querySelector('#tptSrchResults ul');
        sqnsrc(ci, bi);
        // alert('finished');
    }
});
$('#SPResearch').on('click', function () {
    $('#srchToolBox').slideDown(300);
    $('#srchStats').slideUp(300);
    $('#tptSrchResults ul').html('');
});
$('#SPstopSearch').on('click', function () {
    stopsearch = true;
});
function searchBook(ci, bi, val, clbck) {
    var reg = RegExp(`${val}|leftNav`, 'gim');
    $.get(`p${ci}/${bi}.html`, function (data) {
        var srchResults = '';
        while ((result = reg.exec(data)) !== null) {
            var tIndex = result.index;
            var space = 0, start = tIndex;
            if (result[0] == 'leftNav') { break; }
            for (i = tIndex; i > result.index - 20 && space < 2; i--) {
                if (data[i] == ' ') { space++; start = i }
                else if (data[i] == '>') { space = 4; start = i + 1; }
            }

            var subreg = RegExp(`${val}| |<`, 'gim');
            var substr = data.slice(tIndex + val.length, tIndex + 150);
            length = 0;

            while ((subResult = subreg.exec(substr)) !== null) {
                if (subResult[0] == ' ') { length = subResult.index }
                else if (subResult[0] == '<') { length = subResult.index; break; }
                else if (subResult[0] == val) {
                    break;
                }
            }
            totalSearched++;
            srchResults += `<li data-book='p${ci}/${bi}.html' data-toi=${tIndex} ><b>${totalSearched}. ${BookNames[ci - 1][bi - 1]} </b>: ${data.slice(start, tIndex + val.length + length)}</li>`;
            reg.lastIndex = tIndex + val.length + length;
        }

        tptSrchResults.innerHTML += srchResults;
        clbck();
        /*
        var thisBook=document.createElement('div'); 
        thisBook.innerHTML=data;
        bookSlides=thisBook.querySelectorAll('.swiper-slide');
        var i=0,j=0;
        // var resultArr=[];
        function srchSlide(){
            if(i<bookSlides.length){
                srchTs();
            }
        }        
        function srchTs(){
            if(i<bookSlides.length){bookTs=bookSlides[i].querySelectorAll('p,h1,h2,h3,h4');}
            targetText=bookTs[j].innerText;
            var result;
            // console.log(thisBook.querySelector('#bookname').dataset.location);
            // console.log(targetText);
            tptSrchResults=document.querySelector('#tptSrchResults ul');
            while((result = reg.exec(targetText)) !== null) {
                // console.log(j); 
                obj={
                    location: thisBook.querySelector('#bookname').dataset.location,                       
                    slide:i,
                    element:j,
                }
                resultArr.push(obj); 
                var start,end;
                if(result.index>25){
                    // console.log('block a');
                    start=result.index-12;
                    do{start--;}while(bookTs[j].innerText[start]!=' '&&bookTs[j].innerText[start]!='\n'&&bookTs[j].innerText[start]!=undefined);                      
                }
                else{start=0}
                if(result.index+220<bookTs[j].innerText.length){
                    end=result.index+200;
                    do{end++;}while(bookTs[j].innerText[end]!=' '&&bookTs[j].innerText[end]!='\n'&&bookTs[j].innerText[end]!=undefined);
                    // console.log('block b');
                }
                else{end=bookTs[j].innerText.length-1}
                var catstr=bookTs[j].innerText.slice(start,end);
                // console.log('block c');
                var nextNode=`<li data-srchresult="${resultArr.length-1}">${resultArr.length}. ${thisBook.querySelector('#bookname').innerHTML} : ... ${catstr} ... </li>`;
                tptSrchResults.innerHTML+=nextNode;
                // console.log(obj);                    
                // console.log(result.index);                                                                 
            }
            j++;
            // console.log( `i=${i} j= ${j}`);
            if(skipBook){
                if(clbck!=null){
                    clbck();
                }
                else{
                    // alert('Search Finished');
                    $('#srchStats p').html('খোঁজ সমাপ্ত : '+resultArr.length);
                    listenerAppoint();
                    console.log('search fin');
                }
            }
            else if(j<bookTs.length &&!stopsearch ){
                setTimeout(function(){
                    $('#srchStats p').html('খোঁজ চলছে '+thisBook.querySelector('#bookname').innerHTML+':('+resultArr.length+') '+((i+1)*j));
                    srchTs();                                                
                },0);
            }
            else if(i<bookSlides.length ){
                i++;
                j=0;
                if(i<bookSlides.length&&!stopsearch)srchSlide();
                else if(clbck!=null){
                    clbck();
                }
                else{
                    // alert('Search Finished');
                    // $('#srchStats p').html('খোঁজ সমাপ্ত : '+resultArr.length);
                    // listenerAppoint();
                    // console.log('search fin');
                    listenerAppoint();
                    stopsearch=true;
                    $('#searchProcess').slideUp(300);
                    $('#SPResearch').slideDown(300);
                    $('#srchStats p').html('খোঁজ সমাপ্ত : '+resultArr.length);
                    $('#SPProgress').css({'transition':'.1s','width':'1%'});
                }
            }            
        }
        listenerAppoint=function(){
            console.log('in here');
            $('#tptSrchResults ul li').each(function(i,elm){
                // console.log(elm.innerHTML);
                $(elm).on('click',function(e){
                    console.log(resultArr[$(elm).data('srchresult')].element);
                    console.log(resultArr[$(elm).data('srchresult')].location);
                    closeNav('searchPage','left');
                    setTimeout(function(){
                        showBook(resultArr[$(elm).data('srchresult')].location,null,resultArr[$(elm).data('srchresult')]);
                    },1000);
                    
                });
            });
            var srchli=document.querySelectorAll('#tptSrchResults ul li');
        } 
        srchSlide();
        */

    });
}
//open homecontent
function showHomeContent() {
    $('#powerDiv,#leftNavButton').css('display', 'none');
    document.getElementById('head').style.top = "0px";
    $('#homeContent').show();
    $('#viewport').hide();
    hideNavsnModals();
    state = 'index';
}
function hideNavsnModals() {
    stopsearch = true;
    closeNav('leftNav', 'left'); closeNav('searchPage', 'left'); closeNav('bookmarkPage', 'left'); closeNav('noteLeftNav', 'left');
    closeNav('rightNav', 'right'); closeNav('seekhelp', 'left'); closeNav('ourinfo', 'left');
    closeNav('IPSModal','top');
    $('#tikaModal , #bkmrkModal, #fontModal, #noteModal, #modifyNoteModal,#themeModal').fadeOut();
}