$(document).ready(function () {
  $(".buy-btn").on("click", function () {
    const section = $(this).closest("section");

    const balanceContainer = section.find(".balance");

    balanceContainer.append(" 💰 ");
  });
});
