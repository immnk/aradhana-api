(function($) {
  $(function() {
    $(".sidenav").sidenav();
    $(".datepicker").datepicker();

    const END_POINT = "/api";

    var settings = {
      async: true,
      crossDomain: true,
      url: `${END_POINT}/events?permission=admin`,
      method: "GET"
    };

    $.ajax(settings).done(function(response) {
      console.log(response);
      let events = "";
      if (response.success) {
        response.body.forEach(event => {
          events += `
          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">${event.eventName}</span>
                  <img src="${event.eventPicture}" class="card-picture"/>
                </div>
              </div>
            </div>
          </div>`;
        });
        $("#events").html(events);
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
