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

            addProduct: function() {
                if (!$('#product_addtocart_form').valid()) {
                    return false;
                }

                $.ajax({
                    url: this.url,
                    method: 'POST',
                    data: this.getData(),
                    dataType: 'json',
                    showLoader: true,
                    success: function (response) {
                        $('.giftr-list').modal('closeModal'); //modal close on add to giftr functionality
                        if (response.status == this.login) {
                            setLocation(response.message);
                        }
                    }
                });
            },

            getMessage: function () {

                if (!this.isLoggedIn()) {
                    $('#addto-giftr.link-giftr').on('click', () => {
                        $('.giftr-list').remove();
                        location.href = this.loginUrl;
                    })
                }

            }
        };

        return function (target) {
            return target.extend(mixin);
        };
    });















