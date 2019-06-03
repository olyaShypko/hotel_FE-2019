// /Rooms/
var rooms;
console.log(rooms);
$(document).ready(function() {
    console.log(rooms);
  $.getJSON('cabinet.json', function(data){
      console.log( "success" );
            rooms = data.rooms;
            console.log(rooms.length,'rooms');
            for(i = 0;i < rooms.length;i++){
                console.log('goo');
                $('#rooms_items').append('<div class="rooms_item"><div class="rooms-item__img" style="background-image:url(\''+rooms[i].img+' \');"></div><p class="room_name">'+rooms[i].name+'</p><p class="room_price">Price:<span>'+rooms[i].price+'UAH</span></p><div class="room_bttn" onclick="test(this)">Show room</div></div>');
            }
         });
});


 function test (el){
     console.log(el,'treee');
 };


 function litlePrise(){
     $('.rooms_item').remove();
     var filtrRomms=[];
     var newRooms=[];
     $(document).ready(function() {
        $.getJSON('cabinet.json', function(data){
                    rooms = data.rooms;
                for(i=0;i< rooms.length;i++){
                   filtrRomms.push(rooms[i].price);
                }
                filtrRomms.sort(function(a,b){ 
                    return (a - b);
                });
               for(j = 0;j< filtrRomms.length;j++){
                   for(k = 0;k < rooms.length;k++){
                       if (filtrRomms[j] == rooms[k].price ){
                          newRooms.push(rooms[k]);
                          break;
                       }
                }
               }
                  for(i = 0;i < newRooms.length;i++){
                console.log('goo');
                $('#rooms_items').append('<div class="rooms_item"><div class="rooms-item__img" style="background-image:url(\''+newRooms[i].img+' \');"></div><p class="room_name">'+newRooms[i].name+'</p><p class="room_price">Price:<span>'+newRooms[i].price+'UAH</span></p><div class="room_bttn" onclick="test(this)">Show room</div></div>');
            }
            });
    });
 };

 function biggestPrise(){
     $('.rooms_item').remove();
     var filtrRomms=[];
     var newRooms=[];
     $(document).ready(function() {
        $.getJSON('cabinet.json', function(data){
                    rooms = data.rooms;
                for(i=0;i< rooms.length;i++){
                   filtrRomms.push(rooms[i].price);
                }
                filtrRomms.sort(function(a,b){ 
                    return (a - b);
                });
                filtrRomms.reverse();
               for(j = 0;j< filtrRomms.length;j++){
                   for(k = 0;k < rooms.length;k++){
                       if (filtrRomms[j] == rooms[k].price ){
                          newRooms.push(rooms[k]);
                          break;
                       }
                }
               }
                  for(i = 0;i < newRooms.length;i++){
                console.log('goo');
                $('#rooms_items').append('<div class="rooms_item"><div class="rooms-item__img" style="background-image:url(\''+newRooms[i].img+' \');"></div><p class="room_name">'+newRooms[i].name+'</p><p class="room_price">Price:<span>'+newRooms[i].price+'UAH</span></p><div class="room_bttn" onclick="test(this)">Show room</div></div>');
            }
            });
    });
 }