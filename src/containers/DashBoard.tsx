import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Typography, theme, Button, Menu, MenuProps, Avatar, Popover } from 'antd'
import { LineChartOutlined, ExceptionOutlined, MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { MonthlyFinancialReport } from '../components/MonthlyFinancialReport'
import { Orders } from '../components/Orders'



export const DashBoard:React.FC = () => {

    const navigate = useNavigate()
    const { Header, Content, Sider } = Layout
    const { Text } = Typography
    const { token: { colorBgContainer }} = theme.useToken()
    const [iscollapsed, setCollapsed] = useState(false)
    const [current, setCurrent] = useState<string>()
    const [userDetails, setUserDetails] = useState<{ [key: string]: string } | null>(null)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if ("user" in localStorage) {
          const user:{ [key: string]: string } = JSON.parse(localStorage.getItem("user") || '{}')
          setUserDetails(user)
          console.log(user)
        } else {
          navigate("/login");
        }
      }, []);


      const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('userDetails')
        navigate('/login')
      }

      const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key)
      };

      const hide = () => {
        setOpen(false);
      }

      const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
      }

      const l =  userDetails ? userDetails['email'] : ''


    return(
        <Layout style={{
            width:'100vw',
            height:'100vw',
        }}>

            <Header style={{
                    width:'100vw',
                    backgroundColor:colorBgContainer,
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    top:'0',
                }}
            >
                <Text style={{color:'#1677FF'}} strong > Finance </Text>
                <span>
                    <Popover
                        content={<a onClick={hide}>Close</a>}
                        title={l}
                        trigger="click"
                        open={open}
                        onOpenChange={handleOpenChange}
                    >
                        <Avatar icon={<UserOutlined />}/>
                    </Popover>

                     | <Button type='primary' onClick={() => logout()} icon={<LogoutOutlined />} shape='circle' ></Button>
                </span>

            </Header>
            <Layout>

                <Sider theme='light' collapsed={iscollapsed} >
                    <Menu
                        theme='light'
                        items={[
                            {
                                key:'1',
                                icon: <LineChartOutlined/>,
                                label: 'Monthly Financial Report',
                            },
                            {
                                key:'2',
                                icon: <ExceptionOutlined/>,
                                label: 'Orders'
                            }
                        ]}
                        onClick={onClick}
                    >
                    </Menu>
                </Sider>

                <Content >

                    <Button icon={ iscollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
                        onClick={() => setCollapsed(!iscollapsed)}
                    ></Button>

                    <Layout style={{
                        position: 'relative',
                    }}>
                        {current == '1' ? <MonthlyFinancialReport/> : <Orders/>}
                    </Layout>
                </Content>
            </Layout>
        </Layout>
    )
}