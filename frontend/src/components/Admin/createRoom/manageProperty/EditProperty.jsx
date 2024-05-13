import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

const EditProperty = ({ property, onCancel, getAllProperty }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue(property);
  }, [property]);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.put(
        `${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/updateProperty/${property._id}`,
        values
      );
      // Update property data in parent component immediately
      getAllProperty();
      onCancel(); // Close the modal
    } catch (error) {
      console.error("Error while updating property:", error);
      // Handle error here
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={property}
    >
      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please enter the address" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Heading"
        name="heading"
        rules={[{ required: true, message: "Please enter the heading" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please enter the price" }]}
      >
        <Input />
      </Form.Item>
      {/* Add more fields as needed */}

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Update
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Form.Item>
    </Form>
  );
};

export default EditProperty;
