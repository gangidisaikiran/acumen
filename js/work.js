var $main = $('#pt-main'),
    $pages = $main.children('div.pt-page'),
    //$iterate = $( '#iterateEffects' ),
    //animcursor = 1,
    pagesCount = $pages.length,
    current = 0,
    backupnext = 0,
    isAnimating = false,
    endCurrPage = false,
    endNextPage = false,
    inClass = '',
    outClass = '',
    animEndEventNames = {
        'WebkitAnimation': 'webkitAnimationEnd',
        'OAnimation': 'oAnimationEnd',
        'msAnimation': 'MSAnimationEnd',
        'animation': 'animationend'
    },
    // animation end event name
    animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
    // support css animations
    support = Modernizr.cssanimations;

$pages.each(function() {
    var $page = $(this);
    $page.data('originalClassList', $page.attr('class'));
});

$pages.eq(current).addClass('pt-page-current');

function pageTransition(next, animNum) {

    if (next == current) {
        return;
    }

    if (isAnimating) {
        return false;
    }
    isAnimating = true;

    if (animNum > 0 && animNum < 68) {
        setAnimation(animNum);
    } else {
        setAnimation(Math.floor((Math.random() * 67) + 1));
    }

    backupnext = next;
    var $currPage = $pages.eq(current);
    var $nextPage = $pages.eq(next).addClass('pt-page-current');

    $currPage.addClass(outClass).on(animEndEventName, function() {
        $currPage.off(animEndEventName);
        endCurrPage = true;
        if (endNextPage) {
            onEndAnimation($currPage, $nextPage);
        }
    });

    $nextPage.addClass(inClass).on(animEndEventName, function() {
        $nextPage.off(animEndEventName);
        endNextPage = true;
        if (endCurrPage) {
            onEndAnimation($currPage, $nextPage);
        }
    });

    if (!support) {
        onEndAnimation($currPage, $nextPage);
    }
    current = backupnext;
}

function onEndAnimation($outpage, $inpage) {
    endCurrPage = false;
    endNextPage = false;
    resetPage($outpage, $inpage);
    isAnimating = false;

}

function resetPage($outpage, $inpage) {
    $outpage.attr('class', $outpage.data('originalClassList'));
    $inpage.attr('class', $inpage.data('originalClassList') + ' pt-page-current');
}

function setAnimation(animation) {


    switch (animation) {

        case 1:
            outClass = 'pt-page-moveToLeft';
            inClass = 'pt-page-moveFromRight';
            break;
        case 2:
            outClass = 'pt-page-moveToRight';
            inClass = 'pt-page-moveFromLeft';
            break;
        case 3:
            outClass = 'pt-page-moveToTop';
            inClass = 'pt-page-moveFromBottom';
            break;
        case 4:
            outClass = 'pt-page-moveToBottom';
            inClass = 'pt-page-moveFromTop';
            break;
        case 5:
            outClass = 'pt-page-fade';
            inClass = 'pt-page-moveFromRight pt-page-ontop';
            break;
        case 6:
            outClass = 'pt-page-fade';
            inClass = 'pt-page-moveFromLeft pt-page-ontop';
            break;
        case 7:
            outClass = 'pt-page-fade';
            inClass = 'pt-page-moveFromBottom pt-page-ontop';
            break;
        case 8:
            outClass = 'pt-page-fade';
            inClass = 'pt-page-moveFromTop pt-page-ontop';
            break;
        case 9:
            outClass = 'pt-page-moveToLeftFade';
            inClass = 'pt-page-moveFromRightFade';
            break;
        case 10:
            outClass = 'pt-page-moveToRightFade';
            inClass = 'pt-page-moveFromLeftFade';
            break;
        case 11:
            outClass = 'pt-page-moveToTopFade';
            inClass = 'pt-page-moveFromBottomFade';
            break;
        case 12:
            outClass = 'pt-page-moveToBottomFade';
            inClass = 'pt-page-moveFromTopFade';
            break;
        case 13:
            outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
            inClass = 'pt-page-moveFromRight';
            break;
        case 14:
            outClass = 'pt-page-moveToRightEasing pt-page-ontop';
            inClass = 'pt-page-moveFromLeft';
            break;
        case 15:
            outClass = 'pt-page-moveToTopEasing pt-page-ontop';
            inClass = 'pt-page-moveFromBottom';
            break;
        case 16:
            outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
            inClass = 'pt-page-moveFromTop';
            break;
        case 17:
            outClass = 'pt-page-scaleDown';
            inClass = 'pt-page-moveFromRight pt-page-ontop';
            break;
        case 18:
            outClass = 'pt-page-scaleDown';
            inClass = 'pt-page-moveFromLeft pt-page-ontop';
            break;
        case 19:
            outClass = 'pt-page-scaleDown';
            inClass = 'pt-page-moveFromBottom pt-page-ontop';
            break;
        case 20:
            outClass = 'pt-page-scaleDown';
            inClass = 'pt-page-moveFromTop pt-page-ontop';
            break;
        case 21:
            outClass = 'pt-page-scaleDown';
            inClass = 'pt-page-scaleUpDown pt-page-delay300';
            break;
        case 22:
            outClass = 'pt-page-scaleDownUp';
            inClass = 'pt-page-scaleUp pt-page-delay300';
            break;
        case 23:
            outClass = 'pt-page-moveToLeft pt-page-ontop';
            inClass = 'pt-page-scaleUp';
            break;
        case 24:
            outClass = 'pt-page-moveToRight pt-page-ontop';
            inClass = 'pt-page-scaleUp';
            break;
        case 25:
            outClass = 'pt-page-moveToTop pt-page-ontop';
            inClass = 'pt-page-scaleUp';
            break;
        case 26:
            outClass = 'pt-page-moveToBottom pt-page-ontop';
            inClass = 'pt-page-scaleUp';
            break;
        case 27:
            outClass = 'pt-page-scaleDownCenter';
            inClass = 'pt-page-scaleUpCenter pt-page-delay400';
            break;
        case 28:
            outClass = 'pt-page-rotateRightSideFirst';
            inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
            break;
        case 29:
            outClass = 'pt-page-rotateLeftSideFirst';
            inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
            break;
        case 30:
            outClass = 'pt-page-rotateTopSideFirst';
            inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
            break;
        case 31:
            outClass = 'pt-page-rotateBottomSideFirst';
            inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
            break;
        case 32:
            outClass = 'pt-page-flipOutRight';
            inClass = 'pt-page-flipInLeft pt-page-delay500';
            break;
        case 33:
            outClass = 'pt-page-flipOutLeft';
            inClass = 'pt-page-flipInRight pt-page-delay500';
            break;
        case 34:
            outClass = 'pt-page-flipOutTop';
            inClass = 'pt-page-flipInBottom pt-page-delay500';
            break;
        case 35:
            outClass = 'pt-page-flipOutBottom';
            inClass = 'pt-page-flipInTop pt-page-delay500';
            break;
        case 36:
            outClass = 'pt-page-rotateFall pt-page-ontop';
            inClass = 'pt-page-scaleUp';
            break;
        case 37:
            outClass = 'pt-page-rotateOutNewspaper';
            inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
            break;
        case 38:
            outClass = 'pt-page-rotatePushLeft';
            inClass = 'pt-page-moveFromRight';
            break;
        case 39:
            outClass = 'pt-page-rotatePushRight';
            inClass = 'pt-page-moveFromLeft';
            break;
        case 40:
            outClass = 'pt-page-rotatePushTop';
            inClass = 'pt-page-moveFromBottom';
            break;
        case 41:
            outClass = 'pt-page-rotatePushBottom';
            inClass = 'pt-page-moveFromTop';
            break;
        case 42:
            outClass = 'pt-page-rotatePushLeft';
            inClass = 'pt-page-rotatePullRight pt-page-delay180';
            break;
        case 43:
            outClass = 'pt-page-rotatePushRight';
            inClass = 'pt-page-rotatePullLeft pt-page-delay180';
            break;
        case 44:
            outClass = 'pt-page-rotatePushTop';
            inClass = 'pt-page-rotatePullBottom pt-page-delay180';
            break;
        case 45:
            outClass = 'pt-page-rotatePushBottom';
            inClass = 'pt-page-rotatePullTop pt-page-delay180';
            break;
        case 46:
            outClass = 'pt-page-rotateFoldLeft';
            inClass = 'pt-page-moveFromRightFade';
            break;
        case 47:
            outClass = 'pt-page-rotateFoldRight';
            inClass = 'pt-page-moveFromLeftFade';
            break;
        case 48:
            outClass = 'pt-page-rotateFoldTop';
            inClass = 'pt-page-moveFromBottomFade';
            break;
        case 49:
            outClass = 'pt-page-rotateFoldBottom';
            inClass = 'pt-page-moveFromTopFade';
            break;
        case 50:
            outClass = 'pt-page-moveToRightFade';
            inClass = 'pt-page-rotateUnfoldLeft';
            break;
        case 51:
            outClass = 'pt-page-moveToLeftFade';
            inClass = 'pt-page-rotateUnfoldRight';
            break;
        case 52:
            outClass = 'pt-page-moveToBottomFade';
            inClass = 'pt-page-rotateUnfoldTop';
            break;
        case 53:
            outClass = 'pt-page-moveToTopFade';
            inClass = 'pt-page-rotateUnfoldBottom';
            break;
        case 54:
            outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
            inClass = 'pt-page-rotateRoomLeftIn';
            break;
        case 55:
            outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
            inClass = 'pt-page-rotateRoomRightIn';
            break;
        case 56:
            outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
            inClass = 'pt-page-rotateRoomTopIn';
            break;
        case 57:
            outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
            inClass = 'pt-page-rotateRoomBottomIn';
            break;
        case 58:
            outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
            inClass = 'pt-page-rotateCubeLeftIn';
            break;
        case 59:
            outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
            inClass = 'pt-page-rotateCubeRightIn';
            break;
        case 60:
            outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
            inClass = 'pt-page-rotateCubeTopIn';
            break;
        case 61:
            outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
            inClass = 'pt-page-rotateCubeBottomIn';
            break;
        case 62:
            outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
            inClass = 'pt-page-rotateCarouselLeftIn';
            break;
        case 63:
            outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
            inClass = 'pt-page-rotateCarouselRightIn';
            break;
        case 64:
            outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
            inClass = 'pt-page-rotateCarouselTopIn';
            break;
        case 65:
            outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
            inClass = 'pt-page-rotateCarouselBottomIn';
            break;
        case 66:
            outClass = 'pt-page-rotateSidesOut';
            inClass = 'pt-page-rotateSidesIn pt-page-delay200';
            break;
        case 67:
            outClass = 'pt-page-rotateSlideOut';
            inClass = 'pt-page-rotateSlideIn';
            break;

    }

}

$("#opc").click(function(){
 
BootstrapDialog.show({
            title: 'Online Programming Contest',
            message: 'Click buttons below.',
            buttons: [{
                label: 'show details',
                action: function(dialog) {
                    dialog.setMessage('<b>First Round: Online round. </b>This round is open to all. Participants will be given certain questions and hey would have to code the solutions. The problems will test your ingenuity, insight and your ability to optimize. All you need is a favourite text editor, a basic knowledge of C, C++/JAVA and the satisfaction of seeing your code work first time.. '+"\n\n"+'<b>Second Round:</b> This round is on campus event. The participants shortlisted from the first round will have to come down to Vasavi Campus for the second round. This round has some debugging questions here the team will be given an erroneous code and they will have to remove all the errors to produce the desired output.'+'\n'+' Also other questions where the team has to produce the desired output given a code snippet. The team solving these questions correctly in minimum time wins!!'+'\n\n'+'Each team can hold two participants. The participation for the first round is free. The winner gets a merit certificate and prize money. Participation certificates will be awarded to all attending Round 2 at Vasavi College of Engineering.'+'\n\n'+
'For More Details : Sone one : (999999999999999) '+"\n"+'Sone one : (999999999999999) ');
                }
            }]
        });
        });
$("#oth").click(function(){
 BootstrapDialog.show({
            title: 'Online Treasure Hunt',
            message:'<p>The Event is of two Phases: \n'+
'<b>Phase - 1</b> Pure Online Event. \n'+
'<b>Phase - 2</b> The Teams that win the first round will have to attend Phase - 2 at Vasavi College of Engineering, Hyderabad. Teams winning phase 2 at College level are given Prize Money as well as Merit Certificate. Since the Event is Online, you have to use your greatest weapon i.e., Your Brain to Clear the Levels.\n\n'+
'<a HREF="http://www.vcefest.in/oth2014"><b>Participate Now</b></a>\n\n'+
'Each team can hold two participants. The participation for the first round is free. The winner gets a merit certificate and prize money. Participation certificates will be awarded to all attending Round 2 at Vasavi College of Engineering.\n\n'+
'For details contact, \n'+
'Someone: 999999999 \n'+
'Someone: : 999999999</p>'});
}); 
$("#pe").click(function(){
 BootstrapDialog.show({
            title: 'Project Expo',
            message:'Eager to get your projects officially appreciated?! This event provides you with a platform to present your projects and win prizes. Prepare one on spot or showcase your existing one!<br><br>'+

'Participants are requested to get any additional software or hardware needed for the implementation of their projects. Technical support and guidance will be provided up to a limit.'});
});





 function onReady(callback) {
        var intervalID = window.setInterval(checkReady, 1000);

        function checkReady() {
            if (document.getElementsByTagName('body')[0] !== undefined) {
                document.getElementById('loading').innerHTML = "100%";
                window.clearInterval(intervalID);
                callback.call(this);
            }
        }
    }

    function show(id, value) {
        document.getElementById(id).style.display = value ? 'block' : 'none';
    }

    onReady(function() {
        show('navbartop', true);
        show('pt-main', true);
        show('loading', false);
    });