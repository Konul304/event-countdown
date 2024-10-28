import { Button, Checkbox, Form, FormProps, Input, Modal } from 'antd'
import React from 'react';
import styles from "../styles/RegisterModal.module.scss";
import { company_icon, email_icon } from '../images/icons';

const RegisterModal = ({ isOpen, setIsOpen }: any) => {

    const onFinish: FormProps<any>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    return (
        <>
            <Modal width={664} open={isOpen} onCancel={() => setIsOpen(false)} footer={false} closeIcon={false}>
                <div className={styles.modal_container}>
                    <div className={styles.modal_header}>Register COP29 form</div>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        validateTrigger="onSubmit"
                        onFinish={onFinish}
                        autoComplete="off"
                        layout='vertical'
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please enter your name' }]}
                            required={false}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Surname"
                            name="surname"
                            rules={[{ required: true, message: 'Please enter your surname' }]}
                            required={false}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please enter your email' }]}
                            required={false}>

                            <Input
                                suffix={email_icon} type='email' />
                        </Form.Item>
                        <Form.Item
                            label="Company"
                            name="company"
                            rules={[{ required: true, message: 'Please enter your company' }]}
                            required={false}>
                            <Input
                                suffix={company_icon} />
                        </Form.Item>
                        <Form.Item
                            name="terms"
                            valuePropName="checked"
                            rules={[{ required: true, message: 'Please accept our Terms of use and Privacy Policy' }]}
                            required={false}>
                            <Checkbox>I agree to our Terms of use and Privacy Policy </Checkbox>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                            <Button style={{ backgroundColor: 'rgba(48, 70, 115, 1)', width: '478px', height: '64px', borderRadius: '12px' }} type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default RegisterModal