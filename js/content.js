// const dialogWrapper = document.createElement("div");
// body = document.querySelector("body");
// body.insertAdjacentElement("afterend", dialogWrapper);

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const closeBtn = document.querySelector('.close');

const computerBtn = document.getElementById("computer-button");
const elearningBtn = document.getElementById("elearning-button")

// Events
computerBtn.addEventListener('click', openModal);
elearningBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);
// window.addEventListener('click', outsideClick);

// Open
function openModal() {
    modal.style.display = 'block';
    const contentWrapper1 = document.getElementById("placeholder-loading");
    const contentWrapper2 = document.getElementById("placeholder-complete");
    setTimeout(() => {
        contentWrapper1.style.display = "none";
        contentWrapper2.style.display = "block";
    }, 5000)
}

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}