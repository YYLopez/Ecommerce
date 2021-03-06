var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Creacion de Array Subdocumentos

var proveedorSchema = new Schema({razonSocial: 'string', email: 'string'});
var indicadorSchema = new Schema({porc_rent: 'string'});

// Creacion campos asociados al Producto

var schema = new Schema({
    codigo: {type: String, required: true},
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    rutaImagen: {type: String, required: true},
    categoria: {type: String, required: true},
    estado: {type: String, required: true},
    proveedores: [proveedorSchema],
    stock: {type: Number, required: true},
    valorCompra: {type: Number, required: true},
    ivaCompra: {type: Number, required: true},
    totalCompra: {type: Number, required: true},
    valorVenta: {type: Number, required: true},
    ivaVenta: {type: Number, required: true},
    totalVenta: {type: Number, required: true},
    rentabilidad: [indicadorSchema],
    observaciones: {type: String, required: true}
});

module.exports = mongoose.model('Product', schema);