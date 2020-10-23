const menuBtn = document.getElementById(`menu-toggle`);
const sidebar = document.querySelector(`.sidebar`);

const menuBtnClickHandler = (evt) => {
    evt.preventDefault();
    sidebar.classList.toggle(`visible`);
}

menuBtn.addEventListener(`click`, menuBtnClickHandler);