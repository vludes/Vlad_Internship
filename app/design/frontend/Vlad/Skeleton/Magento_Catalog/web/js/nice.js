define([
    "jquery",
    "nice-select"
], function ($) {
    $.widget("vlad.nice", {
        _create: function () {
            $("#sorter").niceSelect();
            $("#limiter").niceSelect();
        }
    })

    return $.vlad.nice;
})
