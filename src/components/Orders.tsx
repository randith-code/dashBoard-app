import { Menu, MenuProps, Layout, Space } from 'antd'
import { HistoryOutlined, ExclamationCircleOutlined, CheckCircleOutlined, GiftOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { InProgress } from './InProgress'
import { Shipping } from './Shipping'
import { Late } from './Late'
import { Completed } from './Completed'

const items:MenuProps['items'] = [
    {
        key:'1',
        label:'In progress',
        icon: <HistoryOutlined />
    },
    {
        key:'2',
        label:'Shipping Now',
        icon: <GiftOutlined />
    },
    {
        key:'3',
        label:'Late',
        icon: <ExclamationCircleOutlined />
    },
    {
        key:'4',
        label:'Completed',
        icon: <CheckCircleOutlined />
    }
]

  
export const Orders: React.FC = () => {

    const [current, setCurrent] = useState<string>()

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key)
      };

    return(
        <Layout style={{width:'40vw', margin:'2rem', borderRadius: '10px'}}>
            <Menu
                mode='horizontal'
                items={items}
                onClick={onClick}
            />
            <Space>
                {
                    current == '1' ? <InProgress/>
                    : current == '2' ? <Shipping/>
                    : current == '3' ? <Late/>
                    : <Completed/>
                }
            </Space>
        </Layout>
    )
}