import { Space, Card, Typography, Input, Button, Checkbox } from "antd"
import { Link } from "react-router-dom";
import { useFormik } from "formik"
import * as Yup from 'yup'

type FormProps = {
    username: string,
    email: string,
    password: string,
    confirmpassword: string | undefined,
    confirm: boolean
}


export const Signup: React.FC = () => {

    const { Title, Paragraph, Text } = Typography
    const formik = useFormik<FormProps>({
        initialValues:{
            username:'',
            email:'',
            password:'',
            confirmpassword:'',
            confirm: false
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            email: Yup.string().email().required('Email is required'),
            password: Yup.string().min(8).required('Password is required'),
            confirmpassword:Yup.string()
            .oneOf([Yup.ref('password'), undefined], 'Passwords do not match')
            .nullable(),
            confirm:Yup.boolean().required('You must agree to our terms and conditions')
        }),
        onSubmit:(values) => {
            console.log(values)
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
                    <Title level={3}>Signup</Title>
                    <Paragraph strong>To get started</Paragraph>
                </Space>

                <form onSubmit={formik.handleSubmit} action="" style={{
                    display:"flex",
                    flexDirection:'column',
                    gap:'15px'
                }}>
                    <Space direction="vertical">
                        <Input 
                            size="large" 
                            style={{ boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }} 
                            bordered={false} 
                            placeholder="Username"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <Text style={{fontSize:'0.8rem' }} type="danger">
                            {formik.touched.username && formik.errors.username ? formik.errors.username : ""}
                        </Text>
                    </Space>
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
                        <Text style={{fontSize:'0.8rem' }} type="danger">
                            {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                        </Text>
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
                        <Text style={{fontSize:'0.8rem' }} type="danger">
                            {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
                        </Text>
                    </Space>
                    <Space direction="vertical">
                        <Input.Password 
                            size="large" 
                            style={{ boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }} 
                            bordered={false} 
                            placeholder="Confirm Password"
                            name="confirmpassword"
                            value={formik.values.confirmpassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </Input.Password>
                        <Text style={{fontSize:'0.8rem' }} type="danger">
                            {formik.touched.confirmpassword && formik.errors.confirmpassword ? formik.errors.confirmpassword : ''}
                        </Text>
                    </Space>
                    <Space direction="vertical">
                        <Checkbox 
                            name="confirm"
                            checked={formik.values.confirm} 
                            onChange={formik.handleChange}
                        >
                            Agree to Our terms and Conditions
                        </Checkbox>
                        <Text style={{fontSize:'0.8rem' }} type="danger">
                            {formik.touched.confirm && formik.errors.confirm ? formik.errors.confirm : ''}
                        </Text>
                    </Space>
                    <Button style={{width:'100%'}} type="primary" htmlType="submit">Continue</Button>
                </form>

                <Space.Compact block style={{
                   justifyContent:'center',
                   alignItems:'center'
                }}>
                    <Paragraph>Already registered?</Paragraph>
                    <Link to={'/login'}>
                        <Paragraph strong>Login</Paragraph>                        
                    </Link>
                </Space.Compact>
           </Space>
        </Card>
    </Space>
    )
}