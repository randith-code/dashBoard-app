import { Layout } from "antd"
import { OrderProp } from "./Order"
import { Order } from "./Order"
import { inProgressOrdersArray } from "../data/InprogressData"

export type OrdersProp = {
    items:OrderProp[],
}

export const OrderList = ({items}:OrdersProp) => {
    return (
       <Layout>
            {items.map((item, i) => {
                return(
                    <Order
                        orderId={item.orderId}
                        item={item.item}
                        model={item.model}
                        status={item.status}
                        customer={item.customer}
                        address={item.address}
                        country={item.country}
                        processlevel={item.processlevel}

                        key={i}
                    />
                )
            })}
       </Layout>
    )
}

export const InProgress = () => {
    return(
        <OrderList items={inProgressOrdersArray}/>
    )
}