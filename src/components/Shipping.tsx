import { OrderList } from "./InProgress"
import { shippingordersArray } from "../data/ShippingData"

export const Shipping = () => {
    return(
        <OrderList items={shippingordersArray}/>
    )
}