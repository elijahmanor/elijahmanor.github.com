// Alert module
(function($) {
    var alerts = [];

    $.alert = function (text) {
        var alert, idx, alertWrapper = (!$('.alertWrapper').length) ? $('<div/>').addClass('alertWrapper').appendTo('body') : $('.alertWrapper');

        idx = alerts.length;
        alert = $('<div/>')
            .hide()
            .addClass('ui-state-error')
            .addClass('ui-corner-all')
            .appendTo(alertWrapper)
            .html('<p>'+text+'</p>')
            .fadeIn(300)
            .delay(6000)
            .fadeOut(300, function() {
                $(this).remove();
                alerts[idx] = null;
            });
        alerts[idx] = alert;
    };

    $.clearAlerts = function () {
        $.each(alerts, function(idx, alert) {
            if (alert !== null) {
                alert.stop(true).remove();
            }
        });
        alerts = [];
    };
}(jQuery));

