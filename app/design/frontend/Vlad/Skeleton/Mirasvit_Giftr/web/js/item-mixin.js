define(['jquery',
        'uiComponent',
        'underscore',
        'Magento_Customer/js/customer-data',
        'mage/translate',
    ],
    function ($, Component, _, customerData, $t) {
        'use strict';

        var mixin = {


            defineBehaviour: function (data, event) {
                this.initRegistries();

                if (this.registries().length == 1) {
                    event.stopPropagation();
                    this.addProduct();
                }
            },

            getMessage: function () {
                var message = '';

                if (!this.isLoggedIn()) {
                    $('#addto-giftr.link-giftr').on('click', () => {
                        $('.giftr-list').remove();
                        location.href = this.loginUrl;
                    })

                } else if (!this.hasRegistries()) {
                    $('#addto-giftr.link-giftr').on('click', () => {
                        $('.giftr-list').remove();
                        location.href = this.newRegistryUrl;
                    });
                }

                return message;
            }
        };

        return function (target) {
            return target.extend(mixin);
        };
    });















