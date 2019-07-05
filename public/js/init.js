(function ($) {
    $(function () {
        $('.sidenav').sidenav();
        $('.datepicker').datepicker();

        const LOCAL_END_POINT = "http://localhost:5001/aradhana-api/us-central1/app";
        const REMOTE_END_POINT = "https://us-central1-aradhana-api.cloudfunctions.net/app";

        $("#eventForm").on("submit", function (e) {
            e.preventDefault(); // cancel the actual submit

            $("#submitButton").prop("disabled", true);

            generatePreview();

            var formData = {
                eventName: $("#eventName").val(),
                eventDate: new Date($("#eventDate").val()).getTime(),
                permission: $("#permission").prop("checked") ? "admin" : "all",
                eventPicture: $("#eventPicture").val()
            }

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": `${LOCAL_END_POINT}/create`,
                "method": "POST",
                "headers": {
                    "content-type": "application/json"
                },
                "processData": false,
                "data": JSON.stringify(formData)
            }

            $.ajax(settings).done(function (response) {
                $("#submitButton").prop("disabled", false);
                console.log(response);
                alert(response.message);
            });

            console.log(formData);
        });

        $("#previewButton").on("click", function () {
            console.log("button clicked");
            generatePreview();
        });

        function generatePreview() {
            $("#previewImage").attr({
                "src": $("#eventPicture").val()
            });
        }

    }); // end of document ready
})(jQuery); // end of jQuery name space