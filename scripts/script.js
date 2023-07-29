$(document).ready(function () {
  $(".header-burger").click(function () {
    $(".header-burger,.header-menu").toggleClass(
      "active"
    ); /*тоггл - при клике добавляет/убирает класс active*/
  });
});
