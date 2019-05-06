
const wayPointContainer = document.querySelector('.wayPointContainer');
const img = document.querySelector('.imgContainer');

img.addEventListener('click', function(event){
    console.log(event);
   const newWayPoint = document.createElement('div')
   newWayPoint.classList.add('wayPointContainer');
   const wayPoint = document.createElement('div');
   wayPoint.classList.add('wayPoint');
   newWayPoint.append(wayPoint);
   newWayPoint.style.position = 'absolute';
   newWayPoint.style.left = event.pageX - 10 + 'px';
//    newWayPoint.style.right = 300
   newWayPoint.style.top = event.pageY - 10 + 'px'
//    newWayPoint.style.down = event.clientX + 'px'
   document.body.append(newWayPoint);
})