const OrderModel = require('./../models').Order;
console.log(OrderModel)

class OrderController {
    static getAll = async (req, res, next) => {
        try {
            const orderData = await OrderModel.findAll();
            res.status(200).json(orderData)
        } catch (error) {
            next(error)
        }
    }
    static createOrder = async (req, res, next) => {
        try {
            const { orderCode, orderDate, userId } = req.body;

            const newOrderData = {
                orderCode: orderCode,
                orderDate: orderDate,
                userId: userId
            }

            const newOrder = await OrderModel.create(newOrderData)

            res.status(201).json({
                message: "New Barang has been added",
                User: newOrder
            })

        } catch (error) {
            next(error)
        }
    }
    static getDetail = async (req, res, next) => {
        try {
            const { orderId } = req.params
            const orderData = await OrderModel.findOne({
                where : {
                    id: orderId
                }
            });
            if(!orderData) {
                res.status(404).json({
                    message: "barang tidak ditemukan"
                })
            }
            res.status(200).json(orderData)
        } catch (error) {
            next(error)
        }
    }
    static patchOrder = async (req, res, next)=> {
        try {
            const { orderId } = req.params
            const { orderCode, orderDate, userId } = req.body;
            const orderData = await OrderModel.findOne({
                where : {
                    id: orderId
                }
            });
            if(!orderData) {
                res.status(404).json({
                    message: "barang tidak ditemukan"
                })
            }

            orderData.orderCode = orderCode || orderData.orderCode;
            orderData.orderDate = orderDate || orderData.orderDate,
            orderData.userId = userId || orderData.userId

            await orderData.save()

            res.status(200).json({
                message: "update successful",
                order: orderData
            })
        } catch (error) {
            next(error)
        }
    }
    static removeBarang = async (req, res, next) => {
        try {
            const { orderId } = req.params
            const orderData = await OrderModel.findOne({
                where : {
                    id: orderId
                }
            });
            if(!orderData) {
                res.status(404).json({
                    message: "barang tidak ditemukan"
                })
            }

            await orderData.destroy()

            res.status(204).json({
                message: "Data has been deleted"
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = OrderController