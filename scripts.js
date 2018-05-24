var contacts = [];
$(document).ready(function () {

    $("form").submit(function (event) {
        var complete = true;
        $("input").each(function () {
            if ($(this).val() === "" || $("textarea").val() === "") {
                complete = false;
            }
        });
        if (!complete) {
            alert("All fields must be filled out!");
            return false;
        }
        event.preventDefault();
        contacts.push({
            firstName: $("input[name='first-name']").val(),
            lastName: $("input[name='last-name']").val(),
            description: $("textarea").val()
        });
        var lastContact = contacts[contacts.length - 1];
        $("#card-container").append("<div class='card' id='" +
            contacts.indexOf(lastContact) +
            "'><h1>" +
            lastContact.firstName +
            " " +
            lastContact.lastName +
            "</h1>" +
            "<p class='click-text'>Click for a description!</p>" +
            "</div>"
        );
    });
});

$(document).on('click', "div.card", function () {
    var lastCard = $("#description-text").parent();
    console.log(lastCard.length);
    if (lastCard.length){
        var lastIndex = lastCard.attr("id");
        lastCard.html("<h1>" +
            contacts[lastIndex].firstName +
            " " +
            contacts[lastIndex].lastName +
            "</h1>" +
            "<p class='click-text'>Click for a description!</p>");
    }
    $(this).html("<p id='description-text'>" + contacts[$(this).attr("id")].description + "</p>");
});