// Wait for jQuery to be ready
$(document).ready(function () {
  let hidden = false;
  let $alert = $("#test-alert");
  let $hideButton = $("#hide-button");
  let $listToFill = $("#listToFill");
  let $addElementsButton = $("#addElementsButton");
  let $numberOfElements = $("#numberOfElements");

  $hideButton.click(() => {
    if (hidden === false) {
      $alert.hide();
      $hideButton.html("Show the alert...");
      $hideButton.removeClass("btn-danger");
      $hideButton.addClass("btn-success");
    } else {
      $alert.show();
      $hideButton.html("Hide the alert!");
      $hideButton.removeClass("btn-success");
      $hideButton.addClass("btn-danger");
    }
    hidden = !hidden;
  });

  $addElementsButton.click(() => {
    let numberOfElementsToAppend = $numberOfElements.val();
    for (let i = 0; i < numberOfElementsToAppend; i++) {
      $listToFill.append("<li>Element" + i + "</li>");
    }
  });
});
