import {FC, useState} from 'react';
import { Form, InputNumber, Button } from 'antd';
import axios from 'axios';
import './styles.css'

interface BoxFormProps {
    onUpdate: (data: number[][]) => void;
}

export const BoxForm: FC<BoxFormProps> = ({ onUpdate }) => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: { length: number; width: number; height: number }) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/box', values);
            onUpdate(response.data.vertices);
        } catch (error) {
            console.error('Error fetching box data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form onFinish={onFinish} layout="vertical" style={{ width: 300, padding: 20 }}>
            <Form.Item name="length" label="Length" rules={[{ required: true }]}>
                <InputNumber min={1} className={"my-input"} />
            </Form.Item>
            <Form.Item name="width" label="Width" rules={[{ required: true }]} >
                <InputNumber min={1} className={"my-input"}/>
            </Form.Item>
            <Form.Item name="height" label="Height" rules={[{ required: true,  }]}>
                <InputNumber min={1} className={"my-input"} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Update Box
                </Button>
            </Form.Item>
        </Form>
    );
};
