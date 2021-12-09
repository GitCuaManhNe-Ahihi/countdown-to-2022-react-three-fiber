
const widthh = window.innerWidth;
if(widthh > 768){
   var play2 = document.getElementById('play');
   window.addEventListener('click', async function () {
   await play2.play();
});
}
window.addEventListener('resize', function () {
   widthh = window.innerWidth;
})
