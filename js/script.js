$('#submit').click(function() {
    var g = $('#newInput').val();
    $('#mainList').append("<li>" + g + "<button>X</button></li>");
    $("button").last().addClass("delete");
    $('#newInput').focus();
    }
);