const BAR_HEIGH = 100
var   CURR_POS_TOP = 0

const menuBtn = document.querySelector('.adding');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  // CURR_POS_TOP = CURR_POS_TOP + BAR_HEIGH;
  console.log(CURR_POS_TOP);

  const html = `
  <div class="box showbox"></div>
`;

var orderList = document.querySelector('.container')
orderList.innerHTML += html

  // var box = document.querySelector('.box');
  // if (!menuOpen) {
  //   box.classList.add('showbox');
  //   menuOpen = true;
  // } else {
  //   box.classList.remove('showbox');
  //   menuOpen = false;
  // }
})