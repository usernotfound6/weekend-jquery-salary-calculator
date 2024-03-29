$(document).ready(onReady);

function onReady() {
  console.log("Hey jQuery!");

  // Handlers go here
  $(".submit-button").on("click", handleSubmit);
  $("#table").on("click", "#deleteButton", handleDelete);
}
function handleDelete() {
  console.log("this is:", $(this));
  $(this).parent().parent().remove();
}

// functions go here
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

  // Clear input fields
  
  $('form')[0].reset();

  calculateAndAppendSum();
}

function calculateAndAppendSum() {
  let sum = 0;

  // Add salarys to monthly cost
  $("#table td:nth-child(5)").each(function () {
    const annualSalary = parseInt($(this).text(), 10);
     sum += Math.floor(annualSalary /12);
    });

  // Append the sum to the footer
  const footer = $("footer");
  footer.html(`<h5>Total Monthly Cost: $${sum}</h5>`);

  // Add red background color if total annual salary exceeds $20,000
  if (sum > 20000) {
    footer.css("background-color", "red");
  } else {
    footer.css("background-color", "grey");
  }
}
