define(["jquery"], function ($) {
    $.widget("vlad.SkeletonQtyControls", {
        _create: function () {
            this._initQty();
        },
        _initQty: function () {

            var buttonPlus = document.querySelector('.qty__button__increment'),
                buttonMinus = document.querySelector('.qty__button__decrement'),
                elCurrentQty = document.querySelector('#qty');

            buttonPlus.addEventListener('click', (e) => {
                e.preventDefault();
                elCurrentQty.value = parseInt(elCurrentQty.value) + 1;
            })

            buttonMinus.addEventListener('click', (e) => {
                e.preventDefault();
                if (elCurrentQty.value > 1) {
                    elCurrentQty.value = parseInt(elCurrentQty.value) - 1;
                }
            });
        }
    })
});
