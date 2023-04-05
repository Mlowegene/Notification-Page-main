const mark = document.querySelector(".mark");
const read = document.querySelectorAll(".read");
const notificationNumber = document.querySelector(".notification-number");

function markAll() {
  read.forEach((reads) => {
    reads.classList.remove("notification-item");
    reads.classList.add("notification-item-readed");
    notificationNumber.innerHTML = 0;
  });
}
