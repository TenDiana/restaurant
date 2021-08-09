let button = document.getElementById("button");
button.addEventListener('click', function (e) {
    e.preventDefault();
    swal("Стол забронирован!", "спасибо за заказ", "success");
});

let message = document.getElementById("message");
message.addEventListener('click', function (e) {
    e.preventDefault();
    swal("Благодарим за Ваш отзыв!");
});