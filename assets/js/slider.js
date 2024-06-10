function initializeSlider(nav, nav_pagination, button_left, button_right, mob_button_left, mob_button_right, width_to_change, item_active) {
  let margin_left = 0;

  const prev_slide = (x) => {
    if (margin_left <= 0) {
      margin_left += width_to_change * x;
      nav.style.transform = `translateX(-20.2px)`;
      nav.style.transition = '0.5s all';
      nav.style.margin = `0px ${margin_left}px`;
      nav.style.width = '100%';
  
      for (let i = 0; i < nav_pagination.children.length; i++) {
        nav_pagination.children[i].children[0].classList.remove('carousel__pagination-button--active');
        nav.children[i].classList.remove('item-selected');
      }
  
      nav_pagination.children[item_active].children[0].classList.add('carousel__pagination-button--active');
      nav.children[item_active].classList.add('item-selected');
    }
  }
  
  const next_slide = (x) => {
    if (margin_left > -width_to_change * (nav.children.length -1)) {
      margin_left -= width_to_change * x;
      nav.style.transform = `translateX(-20.2px)`;
      nav.style.transition = '0.5s all';
      nav.style.margin = `0px ${margin_left}px`;
      nav.style.width = '100%';
  
      for (let i = 0; i < nav_pagination.children.length; i++) {
        nav_pagination.children[i].children[0].classList.remove('carousel__pagination-button--active');
        nav.children[i].classList.remove('item-selected');
      }
  
      nav_pagination.children[item_active].children[0].classList.add('carousel__pagination-button--active');
      nav.children[item_active].classList.add('item-selected');
    }
  }

  button_left.addEventListener('click', () => {
    if (item_active < 1) {
      item_active = nav.children.length-1;
      next_slide(item_active);
    } else {
      item_active -= 1;
      prev_slide(1);
    }
  });

  button_right.addEventListener('click', () => {
    if (item_active >= nav.children.length - 1) {
      item_active = -1;
      prev_slide(nav.children.length - 1);
    } else {
      item_active += 1.25;
      next_slide(1);
    }
  });
  mob_button_left.addEventListener('click', () => {
    if (item_active < 1) {
      item_active = nav.children.length-1;
      next_slide(item_active);
    } else {
      item_active -= 1;
      prev_slide(1);
    }
  });

  mob_button_right.addEventListener('click', () => {
    if (item_active >= nav.children.length - 1) {
      item_active = -1;
      prev_slide(nav.children.length - 1);
    } else {
      item_active += 1.25;
      next_slide(1);
    }
  });

  nav_pagination.addEventListener('click', (e) => {
    let num = findElement(nav_pagination.children, e.target);
    if (num > item_active) {
      let temp = item_active;
      item_active = num;
      next_slide(num - temp);
    } else {
      let temp = item_active;
      item_active = num;
      prev_slide(temp - num);
    }
  });
}

function findElement(arr, sing) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    for (let prop in element) {
      if (element[prop] == sing) return i;
    }
  }
  return -1;
}
let nav_1 = document.getElementById('nav-slider');
let nav_pagination_1 = document.getElementById('nav-slider-pagination');
let button_left_1 = document.getElementById('slider-button-left');
let button_right_1 = document.getElementById('slider-button-right');
let mob_button_left_1 = document.getElementById('mob-slider-button-left');
let mob_button_right_1 = document.getElementById('mob-slider-button-right');
let width_to_change_1 = (Number(window.innerWidth) < 1001) ? 830 : 360;
let item_active_1 = 1;

initializeSlider(nav_1, nav_pagination_1, button_left_1, button_right_1, mob_button_left_1, mob_button_right_1, width_to_change_1, item_active_1);

let nav_2 = document.getElementById('nav-slider_2');
let nav_pagination_2 = document.getElementById('nav-slider-pagination_2');
let button_left_2 = document.getElementById('slider-button-left_2');
let button_right_2 = document.getElementById('slider-button-right_2');
let mob_button_left_2 = document.getElementById('mob-slider-button-left_2');
let mob_button_right_2 = document.getElementById('mob-slider-button-right_2');
let width_to_change_2 = (Number(window.innerWidth) < 1001) ? 840 : 390;
let item_active_2 = 1;

initializeSlider(nav_2, nav_pagination_2, button_left_2, button_right_2, mob_button_left_2, mob_button_right_2, width_to_change_2, item_active_2);
