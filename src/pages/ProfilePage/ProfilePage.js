import React from "react";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./index.scss";
import { useTitle } from "../../hooks/useTitle";
import { Button, Form, Input } from "antd";

const ProfilePage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useTitle("Account");
  return (
    <main className="profile">
      <div className="content">
        <h3>Thông tin tài khoản</h3>
        <Form
          className="form-account"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          labelAlign="left"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 12 }}
        >
          <Form.Item label="Họ và tên" name="username">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="SĐT" name="phone">
            <Input size="large" disabled />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input size="large" disabled />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="btn-save">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
};

export default ProfilePage;