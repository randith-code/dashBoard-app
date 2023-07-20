import { OrderList } from "./InProgress"
import { completedordersArray } from "../data/CompletedData"

export const Completed = () => {
    return(
        <OrderList items={completedordersArray}/>
    )
}