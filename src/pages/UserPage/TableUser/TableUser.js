import React from "react";
import "./index.scss";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Input,
  Popconfirm,
  Row,
  Select,
  Space,
  Table,
} from "antd";

const TableUser = () => {
  const [form] = Form.useForm();
  const columns = [
    {
      title: "Full Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <Space size="middle">
            <EditOutlined
              className="common-icon-edit"
              onClick={() => {
                handleEditCategory(record);
              }}
            />
            <Popconfirm
              placement="topRight"
              title={`Do you want to delete this?`}
              onConfirm={() => {
                confirm(record);
              }}
              okText="Yes"
              cancelText="No"
            >
              <DeleteOutlined className="common-icon-delete" />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const onFinish = (values) => {};

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function confirm(record) {}

  const handleAddNewCategory = () => {};

  const handleEditCategory = (record) => {};

  return (
    <React.Fragment>
      <Row className="common-row-cus">
        <Col xl={18} style={{ paddingInline: "5px" }}>
          <Form
            form={form}
            initialValues={{ option: "name", search: "" }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="common-form-cus"
          >
            <div style={{ display: "flex" }}>
              <Form.Item
                name="option"
                style={{
                  paddingRight: "10px",
                }}
              >
                <Select style={{ width: 120, borderRadius: "5px" }}>
                  <Select.Option value="name">Name</Select.Option>
                  <Select.Option value="name">Name</Select.Option>
                  <Select.Option value="email">Email</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="search">
                <Input placeholder="Search" />
              </Form.Item>
            </div>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !form.isFieldsTouched(false) ||
                    form.getFieldsError().filter(({ errors }) => errors.length)
                      .length > 0
                  }
                >
                  Search
                </Button>
              )}
            </Form.Item>
          </Form>
        </Col>
        <Col
          xl={6}
          style={{
            textAlign: "center",
          }}
        >
          <Button
            type="primary"
            onClick={() => {
              handleAddNewCategory();
            }}
          >
            Add new
          </Button>
        </Col>
      </Row>
      <Row className="common-content-table">
        <Col xl={24} md={24} xs={24}>
          <Table
            columns={columns}
            pagination={false}
            expandable={{ showExpandColumn: false }}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TableUser;
