define([
    "jquery",
    'Magento_Ui/js/modal/modal'
], function ($, modal) {
    $.widget("vlad.GiftModal", {
        _create: function () {
            var options = {
                type: 'popup',
                responsive: true,
                title: 'Add to the following registries:',
                buttons: []
            };
            var popup = modal(options, $('.giftr-list'));
            $(".togiftr").click(function() {
                $('.giftr-list').modal('openModal');
            });
        }
    })

    return $.vlad.GiftModal;
})
