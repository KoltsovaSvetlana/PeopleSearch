 $(function() {

     function initializeMap() {
         var mapCanvas = $('.map');
         var mapOptions = {
             center: new google.maps.LatLng(46.9, 30),
             zoom: 5,
             mapTypeId: google.maps.MapTypeId.ROADMAP
         }

         for (var i = 0; i < mapCanvas.length; i++) {
             var map = new google.maps.Map(mapCanvas[i], mapOptions);
         }
     }

     google.maps.event.addDomListener(window, 'load', initializeMap);

});

 // Tooltips
 $(function() {
     $('[data-toggle="popover"]').popover()
 });

 // Scrolling page
 $(function() {
     $(".scrollBtn").click(function() {
         $("html, body").animate({scrollTop: 0}, 5000);
         return false;
     });
 });

 // Accordion for Address data
 $(function() {
     var accordionTitle = $("#address ._accordionTitle");
     accordionTitle.click( function() {

         var self = $(this);
         var index = accordionTitle.index(self);

         accordionTitle.show();
         if(index%2 === 0) {
             self.hide();
             self.next().next().hide();
         } else {
             self.hide();
             self.prev().prev().hide();
         }

         var accordionContent = $("#address ._accordionContent");
         self.closest(".addressData").next().slideUp(300);

         if(accordionContent.is(':visible')) {
             accordionContent.slideUp(300);
         }
         self.closest(".addressData").next().slideDown(300);
     });

     accordionTitle[0].click();
 });

 // Show/hide Person Data
 $(function() {
     var showPhoneBtn = $("#showPhone");
     var hidePhoneBtn = $("#hidePhone");
     var showAddressBtn = $("#showAddress");
     var hideAddressBtn = $("#hideAddress");
     var showRelativeBtn = $("#showRelatives");
     var hideRelativeBtn = $("#hideRelatives");
     var showNeighborBtn = $("#showNeighbors");
     var hideNeighborBtn = $("#hideNeighbors");

     showPhoneBtn.click( togglePhone );
     hidePhoneBtn.click( togglePhone );

     showAddressBtn.click( function() {
         toggleData(showAddressBtn);
     });
     hideAddressBtn.click( function() {
         toggleData(showAddressBtn);
     });

     showRelativeBtn.click( function() {
         toggleData(showRelativeBtn);
     });
     hideRelativeBtn.click( function() {
         toggleData(showRelativeBtn);
     });

     showNeighborBtn.click( function() {
         toggleData(showNeighborBtn);
     });
     hideNeighborBtn.click( function() {
         toggleData(showNeighborBtn);
     });

     function togglePhone() {
         showPhoneBtn.parent().toggle();
         showPhoneBtn.parent().prev().toggleClass("hidden-lg hidden-md hidden-sm");
         showPhoneBtn.parent().next().toggle();
     }

     function toggleData(btnId) {
         btnId.parent().toggle();
         btnId.parent().next().toggle();
     }
 });