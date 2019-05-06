
const wayPointContainer = document.querySelector('.wayPointContainer');
const img = document.querySelector('.imgContainer');
let counter = 0;

img.addEventListener('click', function(event){
    counter += 1;
    console.log(event);
    const newWayPoint = document.createElement('div')
    newWayPoint.classList.add('wayPointContainer');
    newWayPoint.dataset.id = counter;
    const wayPoint = document.createElement('div');
    wayPoint.classList.add('wayPoint');
    newWayPoint.append(wayPoint);
    newWayPoint.style.position = 'absolute';
    newWayPoint.style.left = event.pageX - 10 + 'px';
    newWayPoint.style.top = event.pageY - 10 + 'px'
    document.body.append(newWayPoint);
})