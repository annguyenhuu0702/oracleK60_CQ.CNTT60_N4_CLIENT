import React from "react";
import "./index.scss";
import { Button, Form, Input } from "antd";
import { useTitle } from "../../hooks/useTitle";

const RegisterPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useTitle("Register");

  return (
    <main className="register">
      <div className="p-50">
        <div className="container-auth">
          <div className="title">
            <span>Đăng ký</span>
          </div>
          <div className="group-input">
            <Form
              name="Login"
              initialValues={{ fullname: "", email: "", password: "" }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="form-custom"
              labelAlign="left"
            >
              <Form.Item
                label="Họ và tên"
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: "Please fill in this field!",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter a password",
                  },
                ]}
              >
                <Input.Password size="large" />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Button type="primary" htmlType="submit" className="btn-auth">
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;