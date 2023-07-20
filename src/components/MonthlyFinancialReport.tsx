import { Layout, Col, Row, Statistic, Card, Typography } from 'antd';
import { Formatter, FormatConfig, valueType } from 'antd/lib/statistic/utils';
import CountUp from 'react-countup';
import { RiseOutlined, FileOutlined, AimOutlined } from '@ant-design/icons'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';


const formatter: Formatter = (value: valueType, _config?: FormatConfig) => (
    <CountUp end={Number(value)} separator="," />
  );


export const MonthlyFinancialReport:React.FC = () => {

    const { Text, Title, Paragraph} = Typography
    const data = [
        {
          product: 'Electric Iron',
          totalItems: 2000,
          cost: 400,
          price: 480,
          profit: 80,
        },
        {
          product: 'LED TV',
          totalItems: 1500,
          cost: 800,
          price: 1000,
          profit: 200,
        },
        {
          product: 'Smartphone',
          totalItems: 3000,
          cost: 250,
          price: 350,
          profit: 100,
        },
        {
          product: 'Laptop',
          totalItems: 1000,
          cost: 600,
          price: 800,
          profit: 200,
        },
        {
          product: 'Vacuum Cleaner',
          totalItems: 800,
          cost: 200,
          price: 300,
          profit: 100,
        },
      ];
      


    return(
        <Layout style={{
            width: '100%',
            height: '100%'
        }}>

            <Row style={{margin: '2rem'}}>
                <Col>
                    <FileOutlined style={{
                        color:'white',
                        backgroundColor:'#1677FF',
                        padding: '0.5rem',
                        borderRadius: '0.5rem'
                    }} />

                    <Title level={2}>Monthly Financial Report</Title>
                    <Text strong><AimOutlined style={{color:'red'}}/> Current targets</Text><br />
                    <Text type='secondary' >Targeting a 20% increase in earnings from domestic products</Text>
                </Col>
            </Row>

            <Row gutter={16} style={{margin:'0 2rem 0'}}>
                <Col span={6}>
                    <Card>
                        <Statistic title="Expense" value={112893} formatter={formatter} prefix={'$'} />
                        <Text style={{color: 'red',}}><RiseOutlined/>2.567%</Text><Text> vs Last Year</Text>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic title="Income" value={112893} precision={2} formatter={formatter} prefix={'$'}/>
                        <Text style={{color: 'green',}}><RiseOutlined/>6.846%</Text><Text> vs Last Year</Text>
                    </Card>
                </Col>
            </Row>

            <Row style={{
                margin:'4rem 2rem 2rem'
            }}>
                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="product" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="totalItems" fill="#8884d8" barSize={30} />
                </BarChart>
            </Row>

            <Row style={{
                margin: '2rem'
            }}>
                <Paragraph>
                    The generated dataset comprises an array of five objects, each representing a distinct product and its relevant attributes. Each object encapsulates data pertaining to products like "Electric Iron," "LED TV," "Smartphone," "Laptop," and "Vacuum Cleaner." For every product, the dataset contains information about the total number of items in stock denoted by the `totalItems` property. <br /><br /> Additionally, the `cost` property signifies the purchase cost of each product, while the `price` property represents the selling price. The `profit` attribute showcases the financial gain achieved from selling one unit of the respective product. This dataset serves as a practical and informative resource for analyzing and comparing the performance and profitability of these products within the finance company's inventory.
                </Paragraph>
            </Row>
        </Layout>
    )
}

// formatter={formatter}