import {
  DeleteOutlined,
  EditOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Popconfirm,
  Row,
  Select,
  Space,
  Table,
  handleDownload,
} from "antd";
import React, { useState } from "react";
import { formatDate, formatDateTime } from "../../../utils";
import "./index.scss";

const TableOrder = ({
  onOpenModal,
  data,
  onSearch,
  onDelete,
  onFilter,
  onViewAll,
  onOpenDownload,
}) => {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    begin: formatDate(new Date()),
    end: formatDate(new Date()),
  });

  const columns = [
    {
      title: "Họ tên",
      dataIndex: "fullName",
      render: (text, row) => <div>{row.account.fullName}</div>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      render: (text, row) => <div>{row.account.phone}</div>,
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      render: (text, row) => <div>{formatDateTime(row.createdAt)}</div>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
    },

    {
      title: "",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <Space size="middle" align="center">
            <DownloadOutlined
              className="common-icon-edit"
              onClick={() => {
                onOpenDownload(record);
              }}
            />
            <EditOutlined
              className="common-icon-edit"
              onClick={() => {
                handleEdit(record);
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

  const onFinish = (values) => {
    onSearch(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function confirm(record) {
    onDelete(record.id);
  }

  // const handleAdd = () => {
  //   // navigate("/admin/order/new");
  //   onOpenModal(null);
  // };

  const handleEdit = (record) => {
    // navigate("/admin/order/edit/" + record.id);
    onOpenModal(record);
  };

  return (
    <React.Fragment>
      <Row className="common-row-cus">
        <Col xl={18} style={{ paddingInline: "5px" }}>
          <Form
            form={form}
            initialValues={{ option: "full_name", search: "" }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ display: "flex", gap: "16px" }}
          >
            <Form.Item
              name="option"
              style={{
                paddingRight: "10px",
              }}
            >
              <Select style={{ width: 120, borderRadius: "5px" }}>
                <Select.Option value="full_name">Họ và tên</Select.Option>
                <Select.Option value="phone">Số điện thoại</Select.Option>
                <Select.Option value="address">Địa chỉ</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="search">
              <Input placeholder="Tìm kiếm" />
            </Form.Item>
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
                  Tìm
                </Button>
              )}
            </Form.Item>
            <Form.Item>
              <DatePicker.RangePicker
                placeholder={["Từ ngày", "Đến ngày"]}
                format="YYYY-MM-DD"
                onChange={([begin, end]) => {
                  setState({
                    begin: formatDate(begin.toDate()),
                    end: formatDate(end.toDate()),
                  });
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                onClick={() => {
                  const { begin, end } = state;
                  onFilter({ begin, end });
                }}
              >
                Xem
              </Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={onViewAll}>Xem tất cả</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col
          xl={6}
          style={{
            textAlign: "right",
          }}
        >
          {/* <Button type="primary" onClick={handleAdd}>
            Add new
          </Button> */}
        </Col>
      </Row>
      <Row className="common-content-table">
        <Col xl={24} md={24} xs={24}>
          <Table
            columns={columns}
            pagination={false}
            dataSource={data.items.map((item) => ({ ...item, key: item.id }))}
            expandable={{ showExpandColumn: false }}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TableOrder;
