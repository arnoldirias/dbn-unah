jQuery(document).ready(function($) {

    //Modal-6
    $(".selectboxitForm").selectBoxIt({
        showFirstOption: false
    }).on('open', function() {
        // Adding Custom Scrollbar
        $(this).data('selectBoxSelectBoxIt').list.perfectScrollbar();
    });

    $(".multi-select").multiSelect({
        afterInit: function() {
            // Add alternative scrollbar to list
            this.$selectableContainer.add(this.$selectionContainer).find('.ms-list').perfectScrollbar();
        },
        afterSelect: function() {
            // Update scrollbar size
            this.$selectableContainer.add(this.$selectionContainer).find('.ms-list').perfectScrollbar('update');
        }
    });

    $(".selectboxit").selectBoxIt().on('open', function() {
        // Adding Custom Scrollbar
        $(this).data('selectBoxSelectBoxIt').list.perfectScrollbar();
    });

    var states = ['EMPLEADO 1', 'EMPLEADO 2', 'EMPLEADO 3', 'EMPLEADO 4']

    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
            var matches, substrRegex;
            matches = [];
            substrRegex = new RegExp(q, 'i');

            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    matches.push({
                        value: str
                    });
                }
            });

            cb(matches);
        };
    };

    $("#typeahead-1").typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'states',
            displayKey: 'value',
            source: substringMatcher(states)
        })
        .bind('typeahead:opened', function() {
            $(this).data('ttTypeahead').dropdown.$menu.addClass('overflow-hidden').perfectScrollbar();
        })
        .on('keyup', function() {
            $(this).data('ttTypeahead').dropdown.$menu.perfectScrollbar('update');
        });

    toastr.success('Números de solicitud: 00115012021, 00215012021, 00316012021, 00417012021, 00518012021<br> Oficio: DRC-0234-2021<br> Empleado: 1, 2<br>Bienes: E-1234, E-1235, E-1236, E-1237, E-1238, E-1239', +
        'Datos de prueba modulo de descargo', {
            "positionClass": "toast-bottom-right",
            "showDuration": "4000",
            "hideDuration": "1000",
            "timeOut": "10000"
        });
});