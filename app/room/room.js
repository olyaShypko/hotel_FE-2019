let rooms = [];

// Take date json
$.getJSON( 'cabinet.json', function(data){
    rooms = data.rooms;
    renderRooms();
});

// Take date json
function renderRooms() {
    const roomsContainer = $('#rooms_items');
    roomsContainer.empty();

    rooms.forEach((room) => {
      console.log(room)
        roomsContainer.append(createRoom(room));
    });
}


function createRoom(room) {

    const item = document.createElement('div');
    item.classList.add('rooms_item');


    const image = document.createElement('div');
    image.classList.add('rooms-item__img');
    image.style['background-image'] = `url(${ room.img })`;

    const name = document.createElement('p');
    name.classList.add('room_name');
    name.innerText = room.name;

    const price = document.createElement('p');
    price.classList.add('room_price');
    price.innerHTML = `Price:<span>${ room.price }UAH</span>`;

    const showBtn =document.createElement('div');
    showBtn.dataset.id = room.id;
    showBtn.onclick = function(e){
        var data_id = e.target.getAttribute('data-id');

        findRoom(data_id,rooms);
    }
    showBtn.classList.add('room_bttn');
    showBtn.innerText = 'Show room';

    item.append(image);
    item.append(name);
    item.append(price);
    item.append(showBtn);

    return item;
}


//---------------Sort

function biggestPrise(){
    rooms.sort(function(roomA,roomB){
        return (roomA.price - roomB.price);
    });

    renderRooms();
}

function lowerPrice(){
    rooms.sort(function(roomA,roomB){
        return (roomB.price - roomA.price);
    });

    renderRooms();
}

//-------------------------


//---------------------PopUp

function findRoom(id,rooms){
    let itemRomm = rooms.find(x => x.id == id); //find object for popup
   document.body.append(createPopUp(itemRomm));
}

function createPopUp(item) {

    const popUp = document.createElement('div');
    popUp.classList.add('pop-up__wrapp','show_room');

    const mainImg = document.createElement('div');
    mainImg.classList.add('show_room-main_img');
    mainImg.style['background-image'] = `url(${ item.img })`;

    const closeBtn = document.createElement('div');
    closeBtn.classList.add('pop-up__close');
    closeBtn.onclick = function(){
      closePopUP();
    }

    const popName = document.createElement('p');
    popName.classList.add('room_name');
    popName.innerText = item.name;

    const popPrice = document.createElement('p');
    popPrice.classList.add('room_price');
    popPrice.innerHTML = `Price:<span>${ item.price }UAH</span>`;


    popUp.append(mainImg);
    popUp.append(closeBtn);
    popUp.append(popName);
    popUp.append(popPrice);

    return popUp;
}

function closePopUP(){
  $(document).ready(function() {
    $('.pop-up__wrapp').remove();


  });
}

//---------------
