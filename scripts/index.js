var hotel = {
    rooms: [
        {
            name: "Double Bed",
            price: "$75.00",
            available: 40
        },
        {
            name: "King Bed",
            price: "$120.00",
            available: 20
        },
        {
            name: "Luxery Suite",
            price: "$250.00",
            available: 5
        },
        
        {
            name: "Penthouse w Pool",
            price: "6.00",
            available: 2
        }
    ],
    name: "CareerDevs Innt"
}

// // console.log(hotel.rooms[1].price);

// console.log(document.getElementById("radio").nodeName);
// console.log(document.getElementById("label").nodeName);

function displayDetails(room) {
    console.log(room);
    document.getElementById("price").innerHTML = hotel.rooms[room].price;
    document.getElementById("available").innerHTML = hotel.rooms[room].available;
}

for (var i = 0; i < hotel.rooms.length; i++) {
    console.log("start");
   var radioBtn = document.createElement("INPUT");
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name", "roomType");
    radioBtn.setAttribute("value", i);
    radioBtn.setAttribute("id", "room" + i);
    // radioBtn.onclick = displayDetails(i);
    radioBtn.setAttribute("onclick", "displayDetails(" + i + ")")
    var radioLbl = document.createElement("LABEL");
    radioLbl.innerHTML = hotel.rooms[i].name;
    document.getElementById("radialSection").appendChild(radioBtn);
    document.getElementById("radialSection").appendChild(radioLbl);
    console.log("stop");
}


document.getElementById("reservationForm").onsubmit = function(event) {
    event.preventDefault();
if (!document.getElementById("confirmation").checked)  {
    alert("Please agree to terms");
    return; //stops code//
    
}    


var radios = document.getElementsByName("roomType");
var roomSelected = "";
for (var i = 0; i < radios.length; i++) {
    
    if (radios[i].checked) {
        roomSelected = radios[i].value;
        break;
    }
}

if(roomSelected == "") {
    alert("Pick a room");
    return;
    
}

alert("You have reserved a room " + hotel.rooms[parseInt(roomSelected)].name + ".");
}