const seatStatus = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

function bookSeat(row, col){
    if(seatStatus[row][col] === 0){
        seatStatus[row][col] = 1;
        updateSeatStatus(row, col, 'booked');
        alert(`Seat ${String.fromCharCode(65 + row)}-${col + 1} is booked.`);
    }
    else{
        alert(`Seat ${String.fromCharCode(65 + row)}-${col + 1} already taken!`); 
    }
}

function updateSeatStatus(row, col, status){
    const seats = document.getElementsByClassName("seat");
    const index = row * 3 + col;
    seats[index].classList.remove('available','booked');
    seats[index].classList.add(status);
}

function bookRandomSeat(){
    const availableSeats = [];

    for (let row=0; row<seatStatus.length; row++){
        for(let col=0; col<seatStatus[row].length; col++){
            if(seatStatus[row][col] === 0){
                availableSeats.push({row,col});
            }
        }
    }

    if(availableSeats.length > 0){
        const randomIndex = Math.floor(Math.random() * availableSeats.length);
        const {row, col} = availableSeats[randomIndex];
        bookSeat(row,col);
    }else{
        alert('All seats already booked!');
    }
}