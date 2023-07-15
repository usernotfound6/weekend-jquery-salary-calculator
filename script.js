$(document).ready(onReady);

function onReady() {
  console.log("Hey jQuery!");

  $(".submit-button").on("click", handleSubmit);
  $("#table").on("click", "#deleteButton", handleDelete);
}
function handleDelete() {
  console.log("this is:", $(this));
  $(this).parent().parent().remove();
}

function handleSubmit(event) {
  event.preventDefault();
  console.log("inside handleSubmit");

  const firstnameText = $("#firstnameInput").val();
  console.log("firstnameText", firstnameText);

  const lastnameText = $("#lastnameInput").val();
  console.log("lastnameText", lastnameText);

  const idText = $("#idInput").val();
  console.log("idText", idText);

  const titleText = $("#titleInput").val();
  console.log("titleText", titleText);

  const annualsalaryText = $("#annualsalaryInput").val();
  console.log("annualsalaryText", annualsalaryText);

  $("#table").append(`
  <tr>
    <td>${firstnameText}</td>
    <td>${lastnameText}</td>
    <td>${idText}</td>
    <td>${titleText}</td>
    <td>${annualsalaryText}</td>
    <td><button id="deleteButton">💰</button></td>
    </tr>`);
}
