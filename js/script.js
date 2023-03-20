let dropdown = document.getElementById("dropdown");
let open1 = document.getElementById("open");
let close1 = document.getElementById("close");

let flag = false;
const dropdownHandler = () => {
    if (!flag) {
        dropdown.classList.add("hidden");
        open1.classList.add("hidden");
        close1.classList.remove("hidden");
        flag = true;
    } else {
        dropdown.classList.remove("hidden");
        close1.classList.add("hidden");
        open1.classList.remove("hidden");
        flag = false;
    }
};
