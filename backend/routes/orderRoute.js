import express from "express"
import {verifyStripe,placeOrderCOD,placeOrderStripe,allOrders,userOrders,updateStatus} from "../controllers/orderController.js"
import adminAuth from "../middlewares/adminAuth.js"
import authUser from "../middlewares/auth.js"

const orderRouter=express.Router()

//admin feature
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//payment featues
orderRouter.post('/place',authUser,placeOrderCOD)
orderRouter.post('/stripe',authUser,placeOrderStripe)

//user featues
orderRouter.post('/userorders',authUser,userOrders)

//verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)
export default orderRouter