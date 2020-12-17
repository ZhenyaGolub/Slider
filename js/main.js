let position = 0;
let slidesToShow = 1;
let slidesToScroll = 1;
let container = document.querySelector('.slider_container');
let track = document.querySelector('.slider_track');
let items = document.querySelectorAll('.slider_item');
let left = document.querySelector('.slider_button_left');
let right = document.querySelector('.slider_button_right');
let dotes = document.querySelectorAll('.dotes');
let itemsCount = items.length;
let itemWidth = container.clientWidth / slidesToShow;
let totalLength = itemWidth * itemsCount;
let moveLength = slidesToScroll * itemWidth;
let itemsToLeft = itemsCount;


items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

let startingX;
let change;

items.forEach((item) => {
    item.addEventListener('touchstart', (event) =>{
        let itemCoords = item.getBoundingClientRect();
        startingX = event.touches[0].clientX - itemCoords.left;
    });
    item.addEventListener('touchmove', (event) =>{
        let itemCoords = item.getBoundingClientRect();
        change = Math.round(startingX - (event.touches[0].clientX - itemCoords.left));
        event.preventDefault();
    });
    item.addEventListener('touchend', (event) =>{
        if(change > 100){
            position += 1;
            setDotes(position);
            if(position > itemsCount - 1){
                position = 0;
                setDotes(position);
                track.style.transform = `translateX(${-moveLength * position}px)`;
            }
            track.style.transform = `translateX(${-moveLength * position}px)`;
        }
        if(change < -100){
            position -= 1;
            setDotes(position);
            if(position < 0){
                position = itemsCount -1;
                setDotes(position);
                track.style.transform = `translateX(${-moveLength * position}px)`;
            }
            track.style.transform = `translateX(${-moveLength * position}px)`;
        }
    });
});

items.forEach((item) => {
    item.addEventListener('mousedown', (event) =>{
        let itemCoords = item.getBoundingClientRect();
        startingX = event.clientX - itemCoords.left;
    });
    item.addEventListener('mousemove', (event) =>{
        let itemCoords = item.getBoundingClientRect();
        change = Math.round(startingX - (event.clientX - itemCoords.left));
        event.preventDefault();
    });
    item.addEventListener('mouseup', (event) =>{
        if(change > 100){
            position += 1;
            setDotes(position);
            if(position > itemsCount - 1){
                position = 0;
                setDotes(position);
                track.style.transform = `translateX(${-moveLength * position}px)`;
            }
            track.style.transform = `translateX(${-moveLength * position}px)`;
        }
        if(change < -100){
            position -= 1;
            setDotes(position);
            if(position < 0){
                position = itemsCount -1;
                setDotes(position);
                track.style.transform = `translateX(${-moveLength * position}px)`;
            }
            track.style.transform = `translateX(${-moveLength * position}px)`;
        }
    });
});

right.addEventListener('click', () =>{
    position++;
    setDotes(position);
    if(position > itemsCount - 1){
        position = 0;
        setDotes(position);
        track.style.transform = `translateX(${-moveLength * position}px)`;
    }
    track.style.transform = `translateX(${-moveLength * position}px)`;
});

left.addEventListener('click', () =>{
    position--;
    setDotes(position);
    if(position < 0){
        position = itemsCount -1;
        setDotes(position);
        track.style.transform = `translateX(${-moveLength * position}px)`;
    }
    track.style.transform = `translateX(${-moveLength * position}px)`;
});

dotes.forEach((item, index, array) =>{
    item.addEventListener('click', () =>{
        position = index;
        for(let i = 0; i < array.length; i++){
            if(i === position){
                array[i].classList.add('active');
            } else {
                array[i].classList.remove('active');
            }
        }
        track.style.transform = `translateX(${-moveLength * position}px)`;
    });
});


const setDotes = (number) =>{
    position = number;
    for(let i = 0; i < dotes.length; i++){
        if(i === position){
            dotes[i].classList.add('active');
        } else {
            dotes[i].classList.remove('active');
        }
    }
}