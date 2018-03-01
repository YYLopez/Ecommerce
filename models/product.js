var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Creacion de Array Subdocumentos

var proveedorSchema = new Schema({razonSocial: 'string', email: 'string'});
var indicadorSchema = new Schema({porc_rent: 'string');

var schema = new Schema({
    codigo: {type: String, required: true},
    nombre: {type: String, required: true},
    description: {type: String, required: true},
    imagePath: {type: String, required: true},
    categoria: {type: String, required: true},
    estado: {type: String, required: true},
    proveedores: [proveedorSchema],
    stock: {type: Number, required: true},
    valorCompra: {type: Double, required: true},
    ivaCompra: {type: Double, required: true},
    totalCompra: {type: Double, required: true},
    valorVenta: {type: Double, required: true},
    ivaVenta: {type: Double, required: true},
    totalVenta: {type: Double, required: true},
    rentabilidad: [indicadorSchema],
    observaciones: {type: String, required: true},
});

module.exports = mongoose.model('Product', schema);