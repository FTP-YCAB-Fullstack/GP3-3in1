const OrderBarangModel = require('../models').orderBarang

class OrderBarang {
    static getAll = async (req,res,next) => {
        try {
            const data = await OrderBarangModel.findAll()

            if(!data) {
                return next({code: 404, message: 'Order Barang not found'})
            }
            status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static createOrderBarang = async (req,res,next) => {
        try {
            const { barangId, orderId } = req.body;

            const newOrderBarangData = {
                barangId: barangId,
                orderId: orderId,
            }

            const newData = await OrderBarangModel.create(newOrderBarangData)

            res.status(201).json({
                message: "New Barang has been added",
                User: newData
            })
        } catch (error) {
            next(error)
        } 
    }
    static getDetail = async (req, res, next) => {
        try {
            const { orderBarangId } = req.params
            const data = await OrderBarangModel.findOne({
                where : {
                    id: orderBarangId
                }
            });
            if(!data) {
                res.status(404).json({
                    message: "barang tidak ditemukan"
                })
            }
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static deleteOrderBarang = async (req, res, next) => {
        try {
            const { orderBarangId } = req.params
            const data = await OrderBarangModel.findOne({
                where : {
                    id: orderBarangId
                }
            });
            if(!data) {
                res.status(404).json({
                    message: "barang tidak ditemukan"
                })
            }

            await data.destroy()

            res.status(204).json({
                message: "order has been deleted"
            })
        } catch (error) {
            next(error)
        }

    }
}

module.exports = OrderBarang