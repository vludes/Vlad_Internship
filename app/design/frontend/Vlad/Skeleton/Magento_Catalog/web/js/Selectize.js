define([
    "jquery",
    "selectize"
], function ($) {
    $.widget("vlad.Selectize", {
        _create: function () {
            $("#sorter").selectize({
                create: true,
                sortField: "text",
            });
        }
    })

    return $.vlad.Selectize;
})

