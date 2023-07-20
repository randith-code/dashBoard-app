import { OrderList } from "./InProgress"
import { lateordersArray } from "../data/LateData"


export const Late = () => {
    return(
        <OrderList items={lateordersArray}/>
    )
}