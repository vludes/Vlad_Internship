define(["jquery"], function ($) {
    $.widget("vlad.SkeletonQtyControls", {
        _create: function () {
            this._initQty();
        },
        _initQty: function () {

            // jQuery
            var buttonPlus = $(this.element).find('.qty__button__increment'),
                buttonMinus = $(this.element).find('.qty__button__decrement'),
                elCurrentQty = $(this.element).find('input.qty');

            buttonPlus.on('click', (e) => {
                e.preventDefault();
                elCurrentQty.val(parseInt(elCurrentQty.val()) + 1);

            })

            buttonMinus.on('click', (e) => {
                e.preventDefault();
                if (elCurrentQty.val() > 1) {
                    elCurrentQty.val(parseInt(elCurrentQty.val()) - 1);
                }
            })
        }
    })

    return $.vlad.SkeletonQtyControls;
})

               // JavaScript

//             var buttonPlus = document.querySelector('.qty__button__increment'),
//                 buttonMinus = document.querySelector('.qty__button__decrement'),
//                 elCurrentQty = document.querySelector('#qty');
//
//             buttonPlus.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 elCurrentQty.value = parseInt(elCurrentQty.value) + 1;
//             })
//
//             buttonMinus.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 if (elCurrentQty.value > 1) {
//                     elCurrentQty.value = parseInt(elCurrentQty.value) - 1;
//                 }
//             });
//         }
//     })
// });



