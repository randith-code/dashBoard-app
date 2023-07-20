import { Space, Card, Typography, Input, Button } from "antd"
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup'

type formikProp = {
    email: string,
    password: string,
}


export const Login: React.FC = () =>{

    const { Title, Paragraph, Text } = Typography
    const navigate = useNavigate()
    const [alert, setAlert] = useState('');

    const formik = useFormik<formikProp>({
        initialValues:{
            email: '',
            password: ''
        },
        validationSchema: Yup.object(
            {
                email: Yup.string().email().required('Email is required'),
                password: Yup.string().min(8).required('Password is required'),
            }
        ),
        onSubmit:(values) => {
            if (
                values.email === "sample@gmail.com" &&
                values.password === "p@ssw0rd"
              ) {
                localStorage.setItem("user", JSON.stringify(values));
                navigate("/");
              } else {
                setAlert("Wrong credentials...!");
              }
        }
    })

    return(
        <Space
        style={{
            display:'grid',
            placeItems: 'center',
            width:'100vw',
            height:' 100vh'
        }}  
    >
        <Card style={{
            width:'25vw',
            display:'grid',
            placeItems: 'center',
            padding:'0px'
        }}>
           <Space size={"middle"} direction="vertical">
                <Space direction="vertical">
                    <Title level={3}>Login</Title>
                    <Paragraph strong>To get started</Paragraph>
                </Space>

                <form onSubmit={formik.handleSubmit} action="" style={{
                    display:"flex",
                    flexDirection:'column',
                    gap:'15px'
                }}>
                    <Text style={{fontSize:'0.8rem'}} type="danger">{alert}</Text>
                    <Space direction="vertical">
                        <Input 
                            size="large" 
                            style={{ boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }} 
                            bordered={false} 
                            placeholder="itsnaeemanjum@gmail.com"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <Text style={{fontSize:'0.8rem' }} type="danger">{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</Text>
                    </Space>

                    <Space direction="vertical">
                        <Input.Password 
                            size="large" 
                            style={{ boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }} 
                            bordered={false} 
                            placeholder="Password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </Input.Password>
                        <Text style={{fontSize:'0.8rem' }} type="danger">{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</Text>
                    </Space>

                    <Paragraph >Forgot Password?</Paragraph>            
                    <Button style={{width:'100%'}} type="primary" htmlType="submit" >Continue</Button>
                </form>


                <Space.Compact block style={{
                    justifyContent:'center',
                    alignItems:'center'
                    }}
                >

                    <Paragraph>New User?</Paragraph>
                    <Link to={'/signup'}>
                        <Paragraph strong>Register</Paragraph>                        
                    </Link>
                </Space.Compact>
           </Space>
        </Card>
    </Space>
    )
}