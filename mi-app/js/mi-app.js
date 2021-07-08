angular.module("dbn-app", []).controller("mi_app", function($scope) {
    //Modulo seleccionado
    $scope.value = 0;
    $scope.mi_app = [{
            index: 0,
            name: "Descargo de Bienes",
            description: "Bienes que por su estado de excendente, obsoleto e inservible son almacenados en las bodegas de descargo",
            newBottonText: "Nueva Solicitud",
            btnIconName: "fa-file-text",
            modalTitle: "Nueva solicitud de descargo",
            tabs: [
                { tabname: "Búsqueda", iconname: "fa-search" },
                { tabname: "Nueva solicitud", iconname: "fa-file-text" },
                { tabname: "Reportes", iconname: "fa-book" },
                { tabname: "Gráficos", iconname: "fa-bar-chart" }
            ]
        },
        {
            index: 1,
            name: "Propiedad Perdida",
            description: "Contiene los expedientes reportados de propiedad perdida",
            newBottonText: "Nuevo Expediente",
            btnIconName: "fa-folder-o",
            modalTitle: "Nuevo expediente de propiedad perdida",
            tabs: [
                { tabname: "Búsqueda", iconname: "fa-search" },
                { tabname: "Nuevo Expediente", iconname: "fa-folder-o" },
                { tabname: "Reportes", iconname: "fa-book" },
                { tabname: "Gráficos", iconname: "fa-bar-chart" }
            ]
        },
        {
            index: 2,
            name: "Bienes Inmuebles",
            description: "Terrenos, edificios y adherencias que forman parte del inventario de bienes inmuebles",
            newBottonText: "Nuevo Registro",
            btnIconName: "fa-building",
            modalTitle: "Nuevo registro de bien inmueble",
            tabs: [
                { tabname: "Búsqueda", iconname: "fa-search" },
                { tabname: "Nuevo Registro", iconname: "fa-building" },
                { tabname: "Inventario", iconname: "fa-file-pdf-o" },
                { tabname: "Reportes", iconname: "fa-book" },
                { tabname: "Gráficos", iconname: "fa-bar-chart" }
            ]
        },
        {
            index: 3,
            name: "Activos Biológicos",
            description: "Plantas y animales que forman parte de los bienes biológicos de la UNAH",
            newBottonText: "Nuevo Registro",
            btnIconName: "fa-edit",
            modalTitle: "Nuevo registro de activo biológico",
            tabs: [
                { tabname: "Búsqueda", iconname: "fa-search" },
                { tabname: "Nuevo Registro", iconname: "fa-edit" },
                { tabname: "Inventario", iconname: "fa-file-pdf-o" },
                { tabname: "Reportes", iconname: "fa-book" },
                { tabname: "Gráficos", iconname: "fa-bar-chart" }
            ]
        }
    ];

    //tab sidebar
    $scope.tabSelected = 0;

    //select 
    $scope.busqBienes = 1;
    $scope.busqOptions = {
        text: "",
        centro: 0,
        dep: 0,
        unidad: 0,
        ubicacion: 0,
        anio: 0,
        estado: 0,
        razon: 0
    }

    //Busqueda general
    $scope.tipoBusqueda = 3;
    $scope.searchOptionsArray = [
        { description: "Número de inventario", value: 1, varTxt: "numInv" },
        { description: "Comprobante", value: 5, varTxt: "numComprobante" },
        { description: "Solicitud", value: 3, varTxt: "numSolicitud" },
        { description: "Oficio", value: 4, varTxt: "numDoc" },
        { description: "Expediente", value: 6, varTxt: "numExp" },
        { description: "Ficha", value: 7, varTxt: "numFicha" },
        { description: "Empleado", value: 2, varTxt: "numEmpleado" },
        { description: "Centro", value: 15, varTxt: "centro" },
        { description: "Dependencia", value: 16, varTxt: "dep" },
        { description: "Unidad", value: 17, varTxt: "unidad" },
        { description: "Ubicación", value: 18, varTxt: "ubicacion" }
    ];
    $scope.tableSearch = [
        //Descargo: 0.Busqueda 2.Reportes 3. Graficos
        [{
                hide: false,
                description: "Buscar solicitud de descargo por:",
                value: 3,
                numEmpleado: true,
                numSolicitud: true,
                numDoc: true,
                centro: true,
                dep: true,
                unidad: true
            },
            {},
            {
                hide: false,
                description: "Generar reporte por:",
                value: 15,
                centro: true,
                dep: true,
                unidad: true
            },
            {
                hide: false,
                description: "",
                value: 15,
                centro: true,
                dep: true,
                unidad: true
            }
        ],
        //Propiedad perdida: 0.Busqueda 2.Reportes
        [{
                hide: false,
                description: "Buscar expediente de propiedad perdida por:",
                value: 6,
                numEmpleado: true,
                numExp: true,
                centro: true,
                dep: true,
                unidad: true
            },
            {},
            {
                hide: false,
                description: "Generar reporte por:",
                value: 15,
                centro: true,
                dep: true,
                unidad: true
            },
            {
                hide: true
            }
        ],
        //Bienes inmuebles: 0.Busqueda 2.Inventario 3. Reportes
        [{
                hide: false,
                description: "Buscar bien inmueble por:",
                value: 1,
                numInv: true,
                numEmpleado: true,
                numFicha: true,
                centro: true
            },
            {},
            {
                hide: false,
                description: "Generar inventario de bienes inmuebles por:",
                value: 15,
                numEmpleado: true,
                centro: true
            },
            {
                hide: false,
                description: "Generar reporte por:",
                value: 15,
                centro: true
            },
            {
                hide: true
            }
        ],
        //Activos biológicos: 0.Busqueda 2.Inventario 3. Reportes
        [{
                hide: false,
                description: "Buscar por:",
                value: 1,
                numInv: true,
                numEmpleado: true,
                numFicha: true,
                centro: true,
                dep: true,
                unidad: true,
                ubicacion: true
            },
            {},
            {
                hide: false,
                description: "Generar inventario de activos biológicos por:",
                value: 18,
                numEmpleado: true,
                unidad: true,
                ubicacion: true
            },
            {
                hide: false,
                description: "Generar reporte por:",
                value: 17,
                centro: true,
                dep: true,
                unidad: true,
                ubicacion: true
            },
            {
                hide: true
            }
        ]
    ];
    $scope.searchPlaceholder = ["", "Número de inventario:", "Número de empleado:", "Número de solicitud:", "Número de oficio:", "Número de comprobante:", "Número de expediente:", "Número de ficha:"];

    //Datos
    $scope.centrosr = ["Ciudad Universitaria", "UNAH Valle de Sula", "Centro Tecnológico de Danlí", "Centro Tecnológico del Valle de Aguan", "Centro Universitario Regional del Centro", "Centro Universitario Regional de Litoral Atlántico", "Centro Univesitario Regional del Litoral Pacífico", "Centro Universitario Regional de Occidente", "Centro Universitario Regional Nororiental"];
    $scope.dependencia = ["Rectoría", "Secretaría Ejecutiva de Administración y Finanzas"];
    $scope.unidad = ["Secretaría Ejecutiva de Administración y Finanzas", "Departamento de Bienes Nacionales"];
    $scope.ubicaciones = ["Bodega de descargo #1", "Bodega de descargo #2"];
    $scope.selected = 1;
    $scope.indexSolicitud = 0;
    $scope.razond = ["", "Inservible", "Obsoleto", "Excedente"];
    $scope.columnNames = ["N° Inv.", "Descripción", "Marca", "Color", "Valor", "Razón de descargo", "Obs."];
    $scope.columnNames2 = ["N° Inv.", "Descripción", "Marca", "Color", "Valor"];
    $scope.totalBienes = [
        { numInv: "E-1234", descripcion: "CPU", numFicha: "1234", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DG", valor: 14567.91, razon: 1, obs: "", estado: 0, numEmpleado: 1, centro: 1, dep: 2, unidad: 1, r: 0 },
        { numInv: "E-1235", descripcion: "CPU", numFicha: "1235", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DT", valor: 14567.91, razon: 1, obs: "", estado: 0, numEmpleado: 1, centro: 1, dep: 2, unidad: 1, r: 0 },
        { numInv: "E-1236", descripcion: "CPU", numFicha: "1236", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DR", valor: 14567.91, razon: 1, obs: "", estado: 0, numEmpleado: 2, centro: 1, dep: 2, unidad: 1, r: 0 },
        { numInv: "E-1237", descripcion: "CPU", numFicha: "", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DA", valor: 14567.91, razon: 1, obs: "", estado: 0, numEmpleado: 2, centro: 1, dep: 2, unidad: 1, r: 0 },
        { numInv: "E-1238", descripcion: "CPU", numFicha: "1238", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DD", valor: 14567.91, razon: 1, obs: "", estado: 0, numEmpleado: 2, centro: 1, dep: 2, unidad: 1, r: 0 },
        { numInv: "E-1239", descripcion: "CPU", numFicha: "1239", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DC", valor: 14567.91, razon: 1, obs: "", estado: 0, numEmpleado: 2, centro: 1, dep: 2, unidad: 1, r: 0 }
    ];
    $scope.tableColumns = [];
    $scope.r = {
        centro: 1,
        unidad: 2,
        dep: 2,
        ubicacion: 1,
        nombre: "",
        numEmpleado: 0,
        fecha: "",
        hora: "",
        obs: ""
    };
    $scope.comprobantes = [
        { numComprobante: "00115012021", rfecha: "02/03/2021", rhora: "11:00 AM", rnombre: "JOSE FIGUEROA", rnumEmpleado: 3, obs: "", idSolicitud: 0, centror: 1, unidadr: 2, depr: 2, ubicacionr: 1 },
        { numComprobante: "00215012021", rfecha: "02/03/2021", rhora: "11:00 AM", rnombre: "JOSE FIGUEROA", rnumEmpleado: 3, obs: "", idSolicitud: 1, centror: 1, unidadr: 2, depr: 2, ubicacionr: 1 },
        { numComprobante: "00316012021", rfecha: "02/03/2021", rhora: "11:00 AM", rnombre: "JOSE FIGUEROA", rnumEmpleado: 3, obs: "", idSolicitud: 2, centror: 1, unidadr: 2, depr: 2, ubicacionr: 1 },
        { numComprobante: "00417012021", rfecha: "02/03/2021", rhora: "11:00 AM", rnombre: "JOSE FIGUEROA", rnumEmpleado: 3, obs: "", idSolicitud: 3, centror: 1, unidadr: 2, depr: 2, ubicacionr: 1 },
        { numComprobante: "00518012021", rfecha: "02/03/2021", rhora: "11:00 AM", rnombre: "JOSE FIGUEROA", rnumEmpleado: 3, obs: "", idSolicitud: 4, centror: 1, unidadr: 2, depr: 2, ubicacionr: 1 }
    ];
    $scope.c = {};
    $scope.exp_tipo = ["Pérdida interna", "Pérdida externa"];
    $scope.causa = ["Robo", "Hurto", "Negligencia", "Uso indebido", "Inundación", "Incendio", "Terremoto", "Desastre natural", "Caso fortuito", "Guerra"];
    $scope.institucion = ["Dirección Policial de Investigación", "COPECO", "BOMBEROS", "Colegio de Ingenieros"];
    $scope.exp = {
        numExp: "",
        edit: 0,
        tipo: 0,
        causa: 0,
        fecha: "",
        hora: "",
        interno: { centro: 0, dep: 0, unidad: 0, ubicacion: "" },
        externo: { depto: 0, muni: 0, direccion: "" },
        doc: { institucion: 0, numDoc: "", fecha: "", hora: "", descripcion: "" },
        permiso: { numDoc: "", motivo: "", fecha: "" },
        empleados: [
            { num: 1234, nombre: "JUAN FERNANDO AGUILERA", cargo: "PROFESOR AUXILIAR", ubicacion: "", img: "" },
            { num: 1235, nombre: "ROSSY PAZ", cargo: "PROFESOR TITULAR", ubicacion: "", img: "" }
        ],
        bienes: [],
        obs: ""
    };
    $scope.expedientes = [];

    //nueva solicitud
    $scope.s = { centro: 0, dep: 0, unidad: 0, numDoc: "", fechaDoc: "", nombre: "", numEmpleado: "", bienes: [], obs: "", estado: 0 };
    //reset solicitud
    $scope.s2 = { centro: 0, dep: 0, unidad: 0, numDoc: "", fechaDoc: "", nombre: "", numEmpleado: "", bienes: [], obs: "", estado: 0 };

    //solicitudes guardadas
    $scope.solicitudes = [];
    //Solicitudes encontradas en la busqueda 
    $scope.s_array = [];
    //Solicitudes data 
    $scope.totalSolicitudes = [{
            num: "00115012021",
            idComprobante: 0,
            centro: 1,
            dep: 2,
            unidad: 1,
            numDoc: "DRC-0234-2021",
            fechaDoc: "01/01/2021",
            nombre: "JOSE RODRIGUEZ CASTELLANOS",
            numEmpleado: "1",
            bienes: [
                { numInv: "E-1234", descripcion: "CPU", numFicha: "1234", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DG", valor: 14567.91, razon: 1, obs: "", estado: 1, r: 0 },
                { numInv: "E-1235", descripcion: "CPU", numFicha: "1235", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DS", valor: 14567.91, razon: 1, obs: "", estado: 1, r: 0 }
            ],
            obs: "",
            estado: 1,
            fecha: "10/01/2021"
        },
        {
            num: "00215012021",
            idComprobante: 1,
            centro: 2,
            dep: 2,
            unidad: 1,
            numDoc: "DRC-0234-2021",
            fechaDoc: "01/01/2021",
            nombre: "JOSE RODRIGUEZ CASTELLANOS",
            numEmpleado: "2",
            bienes: [],
            obs: "",
            estado: 2,
            fecha: "10/01/2021"
        },
        {
            num: "00316012021",
            idComprobante: 2,
            centro: 1,
            dep: 2,
            unidad: 2,
            numDoc: "DRC-0234-2021",
            fechaDoc: "01/01/2021",
            nombre: "JOSE RODRIGUEZ CASTELLANOS",
            numEmpleado: "2",
            bienes: [
                { numInv: "E-1234", descripcion: "CPU", numFicha: "1234", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DG", valor: 14567.91, razon: 1, obs: "", estado: 1, r: 0 },
                { numInv: "E-1235", descripcion: "CPU", numFicha: "1235", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DD", valor: 14567.91, razon: 1, obs: "", estado: 1, r: 0 },
                { numInv: "E-1238", descripcion: "CPU", numFicha: "1235", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DC", valor: 14567.91, razon: 1, obs: "", estado: 1, r: 0 },
                { numInv: "E-1239", descripcion: "CPU", numFicha: "1235", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DX", valor: 14567.91, razon: 1, obs: "", estado: 1, r: 0 }

            ],
            obs: "",
            estado: 3,
            fecha: "10/01/2021"
        },
        {
            num: "00417012021",
            idComprobante: 3,
            centro: 1,
            dep: 2,
            unidad: 1,
            numDoc: "DRC-0234-2021",
            fechaDoc: "01/01/2021",
            nombre: "JOSE RODRIGUEZ CASTELLANOS",
            numEmpleado: "1",
            bienes: [
                { numInv: "E-1234", descripcion: "CPU", numFicha: "1234", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DG", valor: 14567.91, razon: 1, obs: "", estado: 1, r: 0 },
                { numInv: "E-1235", descripcion: "CPU", numFicha: "1235", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DC", valor: 14567.91, razon: 1, obs: "", estado: 1, r: 2 },
            ],
            obs: "",
            estado: 4,
            fecha: "10/01/2021"
        },
        {
            num: "00518012021",
            idComprobante: 4,
            centro: 1,
            dep: 2,
            unidad: 2,
            numDoc: "DRC-0234-2021",
            fechaDoc: "01/01/2021",
            nombre: "JOSE RODRIGUEZ CASTELLANOS",
            numEmpleado: "1",
            bienes: [
                { numInv: "E-1234", descripcion: "CPU", numFicha: "1234", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DG", valor: 14567.91, razon: 1, obs: "", estado: 1, r: 0 },
                { numInv: "E-1235", descripcion: "CPU", numFicha: "1235", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DX", valor: 14567.91, razon: 1, obs: "", estado: 1, r: 0 },
                { numInv: "E-1238", descripcion: "CPU", numFicha: "1235", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DZ", valor: 14567.91, razon: 1, obs: "", estado: 1, r: 0 },
                { numInv: "E-1239", descripcion: "CPU", numFicha: "1235", marca: "HP", modelo: "PAVILON", color: "BLANCO", serie: "DUHD37DR", valor: 14567.91, razon: 1, obs: "", estado: 1, r: 0 }

            ],
            obs: "",
            estado: 5,
            fecha: "10/01/2021"
        }
    ];

    //Bienes encontrados en la búsqueda
    $scope.bienes = [];

    //Bienes agregados a la lista
    $scope.bienesArray = [];

    //Segun el modulo seleccionado actualiza tipo de busqueda, tab, radio botton
    $scope.select = function(index) {
        $scope.value = index;
        $scope.tabSelected = 0;
        $scope.tipoBusqueda = $scope.tableSearch[$scope.value][$scope.tabSelected].value;
        $scope.checkBotton();
    }

    //Guarda la nueva solicitud de descargo
    $scope.guardarSolicitud = function(i) {
        $scope.s.estado = i;
        $scope.s.bienes = $scope.bienesArray;
        $scope.solicitudes.push($scope.s);
        $scope.s = $scope.s2;
        $scope.bienesArray = [];
        $scope.bienes = [];
        $("#tabUnidad").click();
        cerrarModal.click();
        toastr.success('<i class="fa-file-text br15"></i> Número de solicitud: <strong>{{result.data}}</strong><br> Notificación enviada a: <br><i class="fa fa-envelope"></i> empleado@unah.edu.hn',
            'Solicitud guardada con éxito', {
                "positionClass": "toast-bottom-right",
                "showDuration": "4000",
                "hideDuration": "1000",
                "timeOut": "10000"
            });
    }

    //Actualiza los datos de la solicitud guardada como borrador
    $scope.actualizarSolicitud = function(i) {
        $scope.s.estado = i;
        $scope.s.bienes = $scope.bienesArray;
        $scope.totalSolicitudes[$scope.indexSolicitud] = $scope.s;
        $scope.s = $scope.s2;
        $scope.bienesArray = [];
        $scope.bienes = [];
        $("#tabUnidad").click();
        btn_modalvermas.click();
        cerrarModal.click();
        toastr.success('<i class="fa-file-text br15"></i> Número de solicitud: <strong>{{result.data}}</strong><br> Notificación enviada a: <br><i class="fa fa-envelope"></i> empleado@unah.edu.hn',
            'Solicitud editada con éxito', {
                "positionClass": "toast-bottom-right",
                "showDuration": "4000",
                "hideDuration": "1000",
                "timeOut": "10000"
            });
    }

    $scope.generarSolicitud = function() {
        window.open("https://drive.google.com/file/d/12sDw--uOY8FSIDvJs_QQUluN4Km8S1dH/view", '_blank');
    }

    //Muestra el modal adecuado segun el modulo
    $scope.mostrarModal = function() {
        $scope.bienesArray = [];
        $scope.bienes = [];

        $scope.resetBusqOptions();

        if ($scope.value == 0) {
            $scope.s = $scope.s2;
            $("#tabUnidad").click();
            jQuery('#modal-6').modal('show', {
                backdrop: 'static'
            });
        }
        if ($scope.value == 1) {
            jQuery('#modalPropp').modal('show', {
                backdrop: 'static'
            });
            $("#tabDetalles").click();

        }

    }

    //Muestra el modal adecuado segun el modulo y la tab seleccionada
    $scope.mostrarModal2 = function(index) {

        $scope.resetBusqOptions();
        $scope.bienesArray = [];
        $scope.bienes = [];

        if ($scope.value == 0 && index == 1) {
            $scope.s = $scope.s2;
            $("#tabUnidad").click();
            jQuery('#modal-6').modal('show', {
                backdrop: 'static'
            });
        } else if ($scope.value == 1 && index == 1) {
            $("#tabDetalles").click();
            jQuery('#modalPropp').modal('show', {
                backdrop: 'static'
            });
        } else if ($scope.value == 2 && index == 1) {
            jQuery('#modalBI').modal('show', {
                backdrop: 'static'
            });
        } else if ($scope.value == 3 && index == 1) {
            jQuery('#modalAB').modal('show', {
                backdrop: 'static'
            });
        } else {
            $scope.tabSelected = index;
            $scope.tipoBusqueda = $scope.tableSearch[$scope.value][$scope.tabSelected].value;
            $scope.checkBotton();
        }

    }

    //Valor total de los bienes agregados a la lista
    $scope.total = function() {
        return $scope.bienesArray.reduce((sum, value) => (sum + value.valor), 0);
    }

    //Valor total de adquisición de los bienes en la solicitud
    $scope.valorTotal = function(index) {
        return $scope.s_array[index].bienes.reduce((sum, value) => (sum + value.valor), 0);
    }

    //Selecciona el radio botton adecuado
    $scope.checkBotton = function() {
        var array = $(".searchOptions");
        for (var index = 0; index < array.length; index++) {
            if (array[index].control.value == $scope.tipoBusqueda) {
                array[index].click();
            }
        }
        $scope.resetBusqOptions();
    }

    //Segun el radio botton que haga clic se actualiza el tipo de busqueda
    $scope.checkBottonValue = function(index) {
        $scope.tipoBusqueda = index;
        $scope.resetBusqOptions();
    }

    //Al cambiar de tipo de busqueda limpia el texto del select
    $scope.resetBusqOptions = function() {
        $scope.selected = 1;
        $scope.busqOptions.text = "";
    }

    //Agrega el bien a la lista (bienesArray)
    $scope.agregarBien = function(index) {
        $scope.bienes[index].estado = 1;
        $scope.bienesArray.unshift($scope.bienes[index]);
    }

    //Quita el bien de la lista (bienesArray) y modifica su estado en los bienes encontrados
    $scope.quitarBien = function(i) {

        for (var index = 0; index < $scope.bienes.length; index++) {
            if ($scope.bienesArray[i].numInv == $scope.bienes[index].numInv) {
                $scope.bienes[index].estado = 0;
            }
        }
        $scope.bienesArray.splice(i, 1);
    }

    //Busqueda
    $scope.buscarBienes = function() {
        $scope.selected = 0;
        $scope.bienes = [];

        //numInv
        if ($scope.busqBienes == 1) {
            for (var index = 0; index < $scope.totalBienes.length; index++) {
                if ($scope.busqOptions.text == $scope.totalBienes[index].numInv) {
                    $scope.bienes.push($scope.totalBienes[index]);
                    $scope.selected = 1;
                    return;
                }

            }
        }

        //numEmpleado
        if ($scope.busqBienes == 2) {
            for (var index = 0; index < $scope.totalBienes.length; index++) {
                if ($scope.busqOptions.text == $scope.totalBienes[index].numEmpleado) {
                    $scope.bienes.push($scope.totalBienes[index]);
                    $scope.selected = 1;
                }

            }
        }

        //Ubicacion
        if ($scope.busqBienes == 18) {
            for (var index = 0; index < $scope.totalBienes.length; index++) {
                if ($scope.busqOptions.ubicacion == $scope.totalBienes[index].ubicacion) {
                    $scope.bienes.push($scope.totalBienes[index]);
                    $scope.selected = 1;
                }

            }
        }
    }

    $scope.busqGeneral = function() {
        $scope.selected = 0;
        $scope.c = [];
        $scope.s_array = [];
        $scope.bienesArray = [];

        //numEmpleado
        if (($scope.value == 0) && ($scope.tipoBusqueda == 2)) {
            for (var index = 0; index < $scope.totalSolicitudes.length; index++) {
                if ($scope.busqOptions.text == $scope.totalSolicitudes[index].numEmpleado) {
                    $scope.s_array.push($scope.totalSolicitudes[index]);
                    $scope.selected = 1;
                }
            }
        }

        //Numero de solicitud
        if (($scope.value == 0) && ($scope.tipoBusqueda == 3)) {
            for (var index = 0; index < $scope.totalSolicitudes.length; index++) {
                if ($scope.busqOptions.text == $scope.totalSolicitudes[index].num) {
                    $scope.s_array.push($scope.totalSolicitudes[index]);
                    $scope.selected = 1;
                    return O;
                }
            }
        }

        //Numero de oficio
        if (($scope.value == 0) && ($scope.tipoBusqueda == 4) && ($scope.tabSelected == 0)) {
            for (var index = 0; index < $scope.totalSolicitudes.length; index++) {
                if ($scope.busqOptions.text == $scope.totalSolicitudes[index].numDoc) {
                    $scope.s_array.push($scope.totalSolicitudes[index]);
                    $scope.selected = 1;

                    console.log($scope.busqOptions.text == $scope.totalSolicitudes[index].numDoc);
                }
            }
        }

        //Centro
        if (($scope.value == 0) && ($scope.tipoBusqueda == 15) && ($scope.tabSelected == 0)) {
            for (var index = 0; index < $scope.totalSolicitudes.length; index++) {
                if ($scope.busqOptions.centro == $scope.totalSolicitudes[index].centro) {
                    $scope.s_array.push($scope.totalSolicitudes[index]);
                    $scope.selected = 1;
                }
            }
        }

        //Dependencia
        if (($scope.value == 0) && ($scope.tipoBusqueda == 16) && ($scope.tabSelected == 0)) {
            for (var index = 0; index < $scope.totalSolicitudes.length; index++) {
                if ($scope.busqOptions.dep == $scope.totalSolicitudes[index].dep) {
                    $scope.s_array.push($scope.totalSolicitudes[index]);
                    $scope.selected = 1;
                }
            }
        }

        //Unidad
        if (($scope.value == 0) && ($scope.tipoBusqueda == 17) && ($scope.tabSelected == 0)) {
            for (var index = 0; index < $scope.totalSolicitudes.length; index++) {
                if ($scope.busqOptions.unidad == $scope.totalSolicitudes[index].unidad) {
                    $scope.s_array.push($scope.totalSolicitudes[index]);
                    $scope.selected = 1;
                }
            }
        }

        //Numero de comprobante
        if (($scope.value == 0) && ($scope.tipoBusqueda == 5) && ($scope.tabSelected == 2)) {
            for (var index = 0; index < $scope.comprobantes.length; index++) {
                if ($scope.busqOptions.text == $scope.comprobantes[index].numComprobante) {
                    $scope.c.push($scope.comprobantes[index]);
                    $scope.bienesArray = $scope.totalSolicitudes[$scope.c.idSolicitud].bienes;
                    $scope.selected = 1;
                    return;
                }
            }
        }

        //numEmpleado vs Comprobantes
        if (($scope.value == 0) && ($scope.tipoBusqueda == 2) && ($scope.tabSelected == 2)) {
            for (var index = 0; index < $scope.comprobantes[index].length; index++) {
                if ($scope.busqOptions.text == $scope.comprobantes[index].numEmpleado) {
                    $scope.c.push($scope.comprobantes[index]);
                    $scope.selected = 1;
                }
            }
        }

    }

    $scope.editarSolicitud = function(i) {
        $scope.indexSolicitud = i;
        $scope.s = $scope.s_array[$scope.indexSolicitud];
        $scope.bienesArray = $scope.s_array[$scope.indexSolicitud].bienes;
        $scope.resetBusqOptions();
        $("#btn_modalvermas").click();

        jQuery('#modal-edicionSolicitud').modal('show', {
            backdrop: 'static'
        });
    }

    $scope.modalVermas = function(i) {
        $scope.indexSolicitud = i;
        $scope.s = $scope.s_array[$scope.indexSolicitud];
        $scope.bienesArray = $scope.s_array[$scope.indexSolicitud].bienes;

        jQuery('#modalVermas').modal('show', {
            backdrop: 'static'
        });
    }

    $scope.modalRecepcion = function(i) {
        $scope.indexSolicitud = i;
        $scope.s = $scope.s_array[$scope.indexSolicitud];
        $scope.bienesArray = $scope.s_array[$scope.indexSolicitud].bienes;

        jQuery('#modal-recepcion').modal('show', {
            backdrop: 'static'
        });

    }

    $scope.confirmarRecepcion = function(i) {
        $scope.bienesArray[i].r = !$scope.bienesArray[i].r;
    }
    $scope.contarBienes = function() {
        var i = 0;
        for (var index = 0; index < $scope.bienesArray.length; index++) {
            if (($scope.bienesArray[index].r == 1) || ($scope.bienesArray[index].r == 2)) {
                i++;
            }
        }
        return i;
    }
    $scope.valorBienes = function() {
        var i = 0;
        for (var index = 0; index < $scope.bienesArray.length; index++) {
            if ($scope.bienesArray[index].r == 1) {
                i += $scope.bienesArray[index].valor;
            }
        }
        return i;
    }
    $scope.generarComprobante = function(i) {

        for (var index = 0; index < $scope.bienesArray.length; index++) {
            if ($scope.bienesArray[index].r == 1) {
                $scope.bienesArray[index].r = 2;
            }
        }

        $scope.s.bienes = $scope.bienesArray;
        if (i == 0) {
            $scope.s.estado = 4;
            $scope.totalSolicitudes[$scope.indexSolicitud] = $scope.s;

            toastr.success('como descargo pendiente.',
                'Solicitud guardada exitosamente', {
                    "positionClass": "toast-bottom-right",
                    "showDuration": "4000",
                    "hideDuration": "1000",
                    "timeOut": "10000"
                });

        } else if (i == 1) {
            $scope.s.estado = 5;
            $scope.totalSolicitudes[$scope.indexSolicitud] = $scope.s;

            toastr.success('<i class="fa-file-text br15"></i> Número de comprobante: <strong>{{result.data}}</strong>',
                'Descargo completado exitosamente', {
                    "positionClass": "toast-bottom-right",
                    "showDuration": "4000",
                    "hideDuration": "1000",
                    "timeOut": "10000"
                });
            window.open("https://drive.google.com/file/d/1yatgL37cSNxQRXxSOac09ZlTPiDpadLk/view?usp=sharing", '_blank');
        } else {
            window.open("https://drive.google.com/file/d/1yatgL37cSNxQRXxSOac09ZlTPiDpadLk/view?usp=sharing", '_blank');
        }
        $scope.s = $scope.s2;
        $scope.bienesArray = [];
        $scope.bienes = [];
        $("#tabUbicacion").click();
        btn_modalvermas.click();
        cerrarModal.click();
    }
    $scope.verComprobante = function(index) {
        console.log(index);
        console.log($scope.s_array[index].idComprobante);
        $scope.c = $scope.comprobantes[$scope.s_array[index].idComprobante];
        console.log($scope.c);
        $scope.bienesArray = $scope.s_array[index].bienes;
        jQuery('#modal-comprobante').modal('show', {
            backdrop: 'static'
        });
    }
    $scope.dropAction = function(i) {
        switch (i) {
            case 0:
                break;
            default:
                break;
        }
    }

    $scope.verFiltroDescargo = function(i) {
        if (i == 0) {
            return !(($scope.value == 0) && ($scope.tabSelected == 2));
        } else if (i == 1) {
            return !(($scope.value == 0) && ($scope.tabSelected == 2 || $scope.tabSelected == 3))
        }

        return !(($scope.value == 0) && ($scope.tabSelected == 3));
    }

    $scope.generarReporte = function(i) {
        if ($scope.value == 0) {
            if (i == 0) {
                window.open("https://drive.google.com/file/d/1XuUwQiHHdBx4_r_8FNKDLbp-lnB0oV0D/view?usp=sharing", '_blank');
            }
            if (i == 1) {
                window.open("https://drive.google.com/file/d/1fB_c3X04f0fVuBP2S9dVYDUBk2rxzO2j/view?usp=sharing", '_blank');
            }
        }

    }

    //Guarda la nueva solicitud de descargo
    $scope.guardarExp = function() {
        $scope.exp.bienes = $scope.bienesArray;
        $scope.expedientes.push($scope.exp);
        $scope.exp = {
            numExp: "",
            edit: 0,
            tipo: 0,
            causa: 0,
            fecha: "",
            hora: "",
            interno: { centro: 0, dep: 0, unidad: 0, ubicacion: "" },
            externo: { depto: 0, muni: 0, direccion: "" },
            doc: { institucion: 0, numDoc: "", fecha: "", hora: "", descripcion: "" },
            permiso: { numDoc: "", motivo: "", fecha: "" },
            empleados: [
                { num: 1234, nombre: "JUAN FERNANDO AGUILERA", cargo: "PROFESOR AUXILIAR", ubicacion: "", img: "" },
                { num: 1235, nombre: "ROSSY PAZ", cargo: "PROFESOR TITULAR", ubicacion: "", img: "" }
            ],
            bienes: [],
            obs: ""
        };
        $scope.bienesArray = [];
        $scope.bienes = [];
        $("#tabDetalles").click();
        cerrarModalExp.click();
        toastr.success('<i class="fa-file-text br15"></i> Número de Expediente: <strong>{{result.data}}</strong>',
            'Expediente guardado con éxito', {
                "positionClass": "toast-bottom-right",
                "showDuration": "4000",
                "hideDuration": "1000",
                "timeOut": "10000"
            });
    }

});