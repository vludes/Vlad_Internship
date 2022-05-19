define(['jquery',
        'uiComponent',
        'underscore',
        'Magento_Customer/js/customer-data',
        'mage/translate'],
    function ($, Component, _, customerData, $t) {
        'use strict';

        var mixin = {

            getMessage: function () {
                var message = '';

                if (!this.isLoggedIn()) {
                    $('#addto-giftr.link-giftr').on('click', () => {
                        $('.giftr-dropdown').remove();
                        location.href = this.loginUrl;
                    })

                } else if (!this.hasRegistries()) {
                    message = $t('You have no Gift Registries yet.') +
                        ' <a href="' + this.newRegistryUrl + '">' + $t('Create Gift Registry') + '</a>';

                } else if (this.isLoggedIn() && this.hasRegistries()) {

                }

                return message;
            }


        };

        return function (target) { // target == Result that Magento_Ui/.../columns returns.
            return target.extend(mixin); // new result that all other modules receive
        };
    });















