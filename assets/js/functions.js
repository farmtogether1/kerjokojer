
$(document).ready(function() {
    // Cache objects
    var objectsCache = {
        frame1: $('.frame1'),
        frame2: $('.frame2 '),
        frame3: $('.frame3 '),
        frame4: $('.frame4 '),
        frame5: $('.frame5 '),
        frame6: $('.frame6 '),
        frame6: $('.frame7 ')
    };
    
    // Prepare the storyline
    $.storyline({
        frames: {
            '.frame1' : {
                onActive: function(coords, event) {
                 
                    if ( $(window).width() > 739) {     
                           // Scale by screen played
                    objectsCache.frame1.css({
                        transform: `scale(${(coords.percent.screenPlayed/110 + 0.5)-0.05124})`
                    });
                      }
                }
            }, 
         
            '.frame2' : {
                onActive: function(coords, event){
                    // Rotate by uncentered percent
                    var asd=(coords.percent.frameUnCentered/20)-8
                    objectsCache.frame2.css({
                        transform: `rotate(${(asd)}deg)`
                    });
                    // console.log('====================================');
                    // console.log(asd);
                    // console.log('====================================');
                }
            }, 
            '.frame4' : {
                onActive: function(coords, event){
                    // Rotate by uncentered percent
                    var asd=(coords.percent.frameUnCentered/20)-5
                    objectsCache.frame4.css({
                        transform: `rotate(${(asd)}deg)`
                    });
                    // console.log('====================================');
                    // console.log(asd);
                    // console.log('====================================');
                }
            }, 
         
            '.frame3' : {
                onActive: function(coords, event) {
                    // Translate by uncentered percent
                    var asd = (coords.percent.frameUnCentered/3)
                    if(asd >=0){
                        $(this).css({
                            transform: `translate(${asd}%, 0)`
                        });
                        console.log('====================================');
                        console.log(asd);
                        console.log('====================================');
                    }
                }
            }, 
            // '.frame4' : {
            //     onEnter: function() {
            //         objectsCache.frame4.addClass('active');
            //     },
            //     onLeave: function() {
            //         objectsCache.frame4.removeClass('active');
            //     }
            // }, 
            '.frame5' : {
                onActive: function(coords, event) {
                    // Invert by uncentered percent
                    $(this).css({
                        filter: `invert(${(1 - coords.percent.frameUnCentered/50)/2}) sepia(${(1 - coords.percent.frameUnCentered/50)/2})`
                    });
                }
            }, 
            '.frame6' : {
                onEnter: function() {
                    objectsCache.frame6.addClass('pulse');
                },
                onLeave: function() {
                    objectsCache.frame6.removeClass('pulse');
                }
            }
        },
       
    });
    
  
});

/*EOF*/