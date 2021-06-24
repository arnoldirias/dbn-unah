angular.module("dbn-app", []).controller("mi_app", function($scope) {
    //$scope.modalDescargo = 1;

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
                // { tabname: "Solicitudes", iconname: "fa-files-o" },
                { tabname: "Comprobantes", iconname: "fa-paste" },
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
                //{ tabname: "Expedientes", iconname: "fa-folder-open" },
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
        ubicacion: 0
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
        //Descargo: 0.Busqueda 2.Comprobantes 3.Reportes
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
                description: "Buscar comprobante de recepción por:",
                value: 5,
                numEmpleado: true,
                numSolicitud: true,
                numComprobante: true,
                centro: true,
                dep: true,
                unidad: true
            },
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
    $scope.selected = 1;
    $scope.totalBienes = [
        { numInv: "E-1234", descripcion: "CPU", numFicha: "1234", marca: "HP", modelo: "PAVILON", color: "BLANCO", valor: 14567.91, razon: 1, obs: "", estado: 0, numEmpleado: 1 },
        { numInv: "E-1235", descripcion: "CPU", numFicha: "1235", marca: "HP", modelo: "PAVILON", color: "BLANCO", valor: 14567.91, razon: 1, obs: "", estado: 0, numEmpleado: 1 },
        { numInv: "E-1236", descripcion: "CPU", numFicha: "1236", marca: "HP", modelo: "PAVILON", color: "BLANCO", valor: 14567.91, razon: 1, obs: "", estado: 0, numEmpleado: 2 },
        { numInv: "E-1237", descripcion: "CPU", numFicha: "", marca: "HP", modelo: "PAVILON", color: "BLANCO", valor: 14567.91, razon: 1, obs: "", estado: 0, numEmpleado: 2 },
        { numInv: "E-1238", descripcion: "CPU", numFicha: "1238", marca: "HP", modelo: "PAVILON", color: "BLANCO", valor: 14567.91, razon: 1, obs: "", estado: 0, numEmpleado: 2 },
        { numInv: "E-1239", descripcion: "CPU", numFicha: "1239", marca: "HP", modelo: "PAVILON", color: "BLANCO", valor: 14567.91, razon: 1, obs: "", estado: 0, numEmpleado: 2 }
    ];
    //solicitudes guardadas
    $scope.solicitudes = [];

    //nueva solicitud
    $scope.s = { centro: 0, dep: 0, unidad: 0, numDoc: "", fechaDoc: "", nombre: "", numEmpleado: "", bienes: [], obs: "", estado: 0 };
    //reset solicitud
    $scope.s2 = { centro: 0, dep: 0, unidad: 0, numDoc: "", fechaDoc: "", nombre: "", numEmpleado: "", bienes: [], obs: "", estado: 0 };

    //Solicitudes encontradas en la busqueda 
    $scope.s_array = [];
    //Solicitudes encontradas en la busqueda 
    $scope.totalSolicitudes = [{
            num: "1-2021",
            centro: "CIUDAD UNIVERSITARIA",
            dep: "SECRETARIA EJECUTIVA DE ADMINISTRACION Y FINANZAS",
            unidad: "DIRECCION DE COMPRAS",
            numDoc: "DRC 0234-2021",
            fechaDoc: "01/01/2021",
            nombre: "JOSE RODRIGUEZ CASTELLANOS",
            numEmpleado: "1",
            bienes: [
                { numInv: "E-1234", descripcion: "CPU", numFicha: "1234", marca: "HP", modelo: "PAVILON", color: "BLANCO", valor: 14567.91, razon: 1, obs: "", estado: 1 },
                { numInv: "E-1235", descripcion: "CPU", numFicha: "1235", marca: "HP", modelo: "PAVILON", color: "BLANCO", valor: 14567.91, razon: 1, obs: "", estado: 1 },
                { numInv: "E-1236", descripcion: "CPU", numFicha: "1236", marca: "HP", modelo: "PAVILON", color: "BLANCO", valor: 14567.91, razon: 1, obs: "", estado: 1 }
            ],
            obs: "",
            estado: 1,
            fecha: "10/01/2021"
        },
        {
            num: "2-2021",
            centro: "CIUDAD UNIVERSITARIA",
            dep: "SECRETARIA EJECUTIVA DE ADMINISTRACION Y FINANZAS",
            unidad: "DIRECCION DE COMPRAS",
            numDoc: "DRC 0234-2021",
            fechaDoc: "01/01/2021",
            nombre: "JOSE RODRIGUEZ CASTELLANOS",
            numEmpleado: "2",
            bienes: [],
            obs: "",
            estado: 2,
            fecha: "10/01/2021"
        },
        {
            num: "3-2021",
            centro: "CIUDAD UNIVERSITARIA",
            dep: "SECRETARIA EJECUTIVA DE ADMINISTRACION Y FINANZAS",
            unidad: "DIRECCION DE COMPRAS",
            numDoc: "DRC 0234-2021",
            fechaDoc: "01/01/2021",
            nombre: "JOSE RODRIGUEZ CASTELLANOS",
            numEmpleado: "2",
            bienes: [],
            obs: "",
            estado: 3,
            fecha: "10/01/2021"
        },
        {
            num: "4-2021",
            centro: "CIUDAD UNIVERSITARIA",
            dep: "SECRETARIA EJECUTIVA DE ADMINISTRACION Y FINANZAS",
            unidad: "DIRECCION DE COMPRAS",
            numDoc: "234-2021",
            fechaDoc: "01/01/2021",
            nombre: "JOSE RODRIGUEZ CASTELLANOS",
            numEmpleado: "1",
            bienes: [],
            obs: "",
            estado: 4,
            fecha: "10/01/2021"
        },
        {
            num: "5-2021",
            centro: "CIUDAD UNIVERSITARIA",
            dep: "SECRETARIA EJECUTIVA DE ADMINISTRACION Y FINANZAS",
            unidad: "DIRECCION DE COMPRAS",
            numDoc: "DRC 0234-2021",
            fechaDoc: "01/01/2021",
            nombre: "JOSE RODRIGUEZ CASTELLANOS",
            numEmpleado: "1",
            bienes: [],
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

    $scope.incr = function() {
            $scope.modalDescargo++;
            tabsModalDescargo.children[$scope.modalDescargo - 1].children[0].click();
        } //no used

    $scope.decr = function() {
            $scope.modalDescargo--;
            tabsModalDescargo.children[$scope.modalDescargo - 1].children[0].click();
        } //no used

    $scope.back = function() {
            return $scope.modalDescargo > 1;
        } //no used

    $scope.next = function() {
            return $scope.modalDescargo < 4;
        } //no used

    $scope.activar = function(index) {
            if (index == $scope.modalDescargo) {
                $scope.modalDescargo = index;
                // tabsModalDescargo.children[$scope.modalDescargo - 1].children[0].click();
                return "active enabled";
            } else if (index < $scope.modalDescargo) {
                return "enabled";
            }
            return "disabled";
        } //no used

    $scope.tabClick = function(index) {} //no used

    //Guarda la nueva solicitud de descargo
    $scope.guardarSolicitud = function(i) {
        $scope.s.estado = i;
        $scope.s.bienes = $scope.bienesArray;
        $scope.solicitudes.push($scope.s);
        $scope.s = $scope.s2;
        $scope.bienesArray = [];
        $("#tabUnidad").click();
        cerrarModalDescargo.click();
    }

    //Muestra el modal adecuado segun el modulo
    $scope.mostrarModal = function() {
        if ($scope.value == 0) {
            jQuery('#modal-6').modal('show', {
                backdrop: 'static'
            });
        }
        if ($scope.value == 1) {
            jQuery('#modalPropp').modal('show', {
                backdrop: 'static'
            });
        }

    }

    //Muestra el modal adecuado segun el modulo y la tab seleccionada
    $scope.mostrarModal2 = function(index) {

        if ($scope.value == 0 && index == 1) {
            jQuery('#modal-6').modal('show', {
                backdrop: 'static'
            });
        } else if ($scope.value == 1 && index == 1) {
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

    }

    $scope.busqGeneral = function() {
        $scope.selected = 0;
        $scope.s_array = [];

        //numEmpleado
        if ($scope.tipoBusqueda == 2) {
            for (var index = 0; index < $scope.totalSolicitudes.length; index++) {
                if ($scope.busqOptions.text == $scope.totalSolicitudes[index].numEmpleado) {
                    $scope.s_array.push($scope.totalSolicitudes[index]);
                    $scope.selected = 1;
                }

            }
        }

        //Numero de solicitud
        if ($scope.tipoBusqueda == 3) {
            for (var index = 0; index < $scope.totalSolicitudes.length; index++) {
                if ($scope.busqOptions.text == $scope.totalSolicitudes[index].num) {
                    $scope.s_array.push($scope.totalSolicitudes[index]);
                    $scope.selected = 1;
                    return;
                }

            }
        }

        //Numero de oficio
        if ($scope.tipoBusqueda == 4) {
            for (var index = 0; index < $scope.totalSolicitudes.length; index++) {
                if ($scope.busqOptions.text == $scope.totalSolicitudes[index].numDoc) {
                    $scope.s_array.push($scope.totalSolicitudes[index]);
                    $scope.selected = 1;

                    console.log($scope.busqOptions.text == $scope.totalSolicitudes[index].numDoc);
                }

            }
        }



    }

});