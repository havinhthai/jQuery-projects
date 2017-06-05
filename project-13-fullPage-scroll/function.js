/**
 * Created by PC on 05/06/2017.
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
//                dragAndMove: false,
//                fadingEffect: true,
//                lazyLoading: false,
        verticalCentered: false,
        loopBottom: true,
        loopTop: true,

        navigation: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#myMenu',
        navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage']
    });
});