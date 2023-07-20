import { Button, Card, Space, Typography } from "antd"
import { HistoryOutlined, 
    ExclamationCircleOutlined, 
    CheckCircleOutlined,
    GiftOutlined, 
    InsertRowLeftOutlined, 
    UserOutlined, 
    EnvironmentOutlined,
    Loading3QuartersOutlined,
    CompressOutlined
 } from '@ant-design/icons'

export type OrderProp = {
    orderId: string,
    item:string,
    model:string,
    status: 'In Progress' | 'Shipping Now' | 'Late' | 'Completed',
    customer:string,
    address:string,
    country:string,
    processlevel:number
}

export const Order = ({orderId, item, status, customer, address, country, processlevel, model}: OrderProp) => {

    const {Title, Text} = Typography

    return(
        <Card style={{margin: '1rem 0 1rem', width:'40vw'}}>
            <Space direction="vertical" style={{ lineHeight:'0'}}>
               <Space align="center" size={"middle"}>
                    <Title type="secondary" level={2}>#{orderId} - </Title><Title style={{margin:'0'}} level={2}>{item}</Title><Button ghost type="primary" 
                        icon={
                            status == 'In Progress' ? <HistoryOutlined/> 
                            : status == 'Shipping Now' ? <GiftOutlined/> 
                            : status == 'Late' ? <ExclamationCircleOutlined/> 
                            : <CheckCircleOutlined/>
                        }>{status}</Button>
               </Space>
               <br />
                <Space size={"large"} >
                    <Text type="secondary"><InsertRowLeftOutlined />{address}</Text>
                    <Text type="secondary"><UserOutlined />{customer}</Text>
                    <Text type="secondary"><EnvironmentOutlined />{country}</Text>
                    <Text type="secondary"><CompressOutlined /> {model}</Text>
                </Space>
                <hr />
                <Space>
                    <Button icon={<Loading3QuartersOutlined style={{color:"blue"}} />}></Button>
                    <Text>({processlevel}/6) - {
                        processlevel == 0 ? 'Pending'
                        :processlevel == 1 ? 'Confirm Payment' 
                        : processlevel == 2 ? 'Quality testing'
                        : processlevel == 3 ? 'Package and Prepare'
                        : processlevel == 4 ? 'Address and Label'
                        : processlevel == 5 ? 'Customs Declaration'
                        : 'Ready to ship'
                    }</Text>
                </Space>
            </Space>
        </Card>
    )
}