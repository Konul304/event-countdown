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
                        onFinish={onFinish}
                        autoComplete="off"
                        layout='vertical'
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Surname"
                            name="surname"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email">
                            <Input
                                suffix={email_icon} />
                        </Form.Item>
                        <Form.Item
                            label="Company"
                            name="company">
                            <Input
                                suffix={company_icon} />
                        </Form.Item>
                        <Form.Item name="terms" valuePropName="checked">
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