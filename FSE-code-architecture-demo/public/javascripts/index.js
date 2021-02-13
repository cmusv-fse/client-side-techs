$(function () {
  $("#join_form").submit(function (event) {
    event.preventDefault();
    let username = $("#username").val();
    $.ajax({
      type: "POST",
      url: "/users/" + username,
      complete: function (xhr) {
        switch (xhr.status) {
          case 200:
            alert(xhr.responseText);
        }
      },
    });
  });
});
