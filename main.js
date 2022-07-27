const cuotas = [
    {
        id: 1,
        cantidad: 3,
        interes: 1.1
    },
    {
        id: 2,
        cantidad: 6,
        interes: 1.15
    },
    {
        id: 3,
        cantidad: 9,
        interes: 1.20
    },
    {
        id: 4,
        cantidad: 12,
        interes: 1.40
    },
    {
        id: 5,
        cantidad: 24,
        interes: 1.80
    }
]

const clientes = [
    {
        id: '28123456',
        nombre: "juan",
        email: "123@123",
        tel: 456
    }
]

const operaciones = [
    {
        dni: "28123456",
        montoInicial: 5000,
        cuota: 3,
        montoFinal: 5500
    }
]

const formCliente = document.getElementById('formCliente')
const formOperacion = document.getElementById('formOperacion')
const tablaOperaciones = document.getElementById('tablaOperaciones')
const tablaClientes = document.getElementById('tablaClientes')
const tablaBodyOperaciones = document.getElementById('tablaBodyOperaciones')
const tablaBodyClientes = document.getElementById('tablaBodyClientes')

const inputNombre = document.getElementById('inputNombre')
const inputDni = document.getElementById('inputDni')
const inputEmail = document.getElementById('inputEmail')
const inputTel = document.getElementById('inputTel')
const btnBuscarCliente = document.getElementById('btnBuscarCliente')

const btnSolicitarPrestamo = document.getElementById('btnSolicitarPrestamo')
const btnConfirmarCliente = document.getElementById('btnConfirmarCliente')
const btnCrearCliente = document.getElementById('btnCrearCliente')
const btnModificarCliente = document.getElementById('btnModificarCliente')
const btnVerOperaciones = document.getElementById('btnVerOperaciones')
const btnVerClientes = document.getElementById('btnVerClientes')
const btnCerrarClientes = document.getElementById('btnCerrarClientes')
const btnCerrarOperaciones = document.getElementById('btnCerrarOperaciones')
const btnCancelarSolicitud = document.getElementById('btnCancelarSolicitud')
const buscarOperacion=document.getElementById('buscarOperacion')
const buscarClientes=document.getElementById('buscarClientes')

const idUsuario = document.getElementById('idUsuario')
const inputMontoInicial = document.getElementById('inputMontoInicial')
const inputMontoFinal = document.getElementById('inputMontoFinal')
const inputMontoCuota = document.getElementById('inputMontoCuota')
const selectCuotas = document.getElementById('selectCuotas')
const solicitudCredito = document.getElementById('solicitudCredito')
const spanCuotas = document.getElementById('spanCuotas')

