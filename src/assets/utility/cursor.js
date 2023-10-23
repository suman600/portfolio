
let cursor = document.getElementById('customCursor')

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('mouseout', hideCursor);

function onMouseMove(e) {
  cursor.style.transition = 'transform 0.1s';
  cursor.style.transform = `translate(${e.pageX - 10}px, ${e.pageY - 10}px)`;
  cursor.style.opacity = 1;
}
function hideCursor() {
  cursor.style.transition = 'transform 0.5s';
  cursor.style.opacity = 0;
}
