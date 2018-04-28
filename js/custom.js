$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: 3830094623,
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '3830094623.1677ed0.b249c1ba12444b81ab2226ec81fe8cb3',
        sortBy: 'most-recent',
        template: '<div class="col-sm-2 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});
