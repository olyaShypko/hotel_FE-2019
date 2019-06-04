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
    showBtn.onclick = function(room){
      console.log(room);
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


function createPopUp(element) {

}
