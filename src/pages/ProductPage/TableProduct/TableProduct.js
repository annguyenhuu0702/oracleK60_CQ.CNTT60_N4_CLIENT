import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Form,
  Input,
  Popconfirm,
  Row,
  Select,
  Space,
  Table,
} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const TableProduct = ({
  onOpenModal,
  data,
  onSearch,
  onDelete,
  onOpenModalImage,
  onOpenModalProductVariant,
}) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "thumbnail",
      width: 50,
      render: (text, row) => (
        <Avatar
          src={row.thumbnail}
          alt=""
          style={{ width: 72, height: 72 }}
          shape="square"
        />
      ),
    },
    {
      title: "Tên",
      dataIndex: "name",
    },
    // {
    // 	title: "Slug",
    // 	dataIndex: "slug",
    // },
    {
      title: "Bí danh",
      dataIndex: "alias",
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      render: (text, row) => row.productCategory.name,
    },
    {
      title: "Giá",
      dataIndex: "price",
    },
    {
      title: "Giá bán",
      dataIndex: "salePrice",
    },
    {
      title: "",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <>
            <Dropdown
              menu={{
                items: [
                  {
                    label: "Thêm biến thể",
                    key: "item-1",
                    onClick: () => {
                      onOpenModalProductVariant(record);
                    },
                  },
                  {
                    label: "Quản lý hình ảnh",
                    key: "item-3",
                    onClick: () => {
                      handleImage(record);
                    },
                  },
                  {
                    label: "Sửa sản phẩm",
                    key: "item-4",
                    onClick: () => {
                      handleEdit(record);
                    },
                  },
                  {
                    label: "Xóa sản phẩm",
                    key: "item-5",
                    onClick: () => {
                      confirm(record);
                    },
                  },
                ],
                selectable: true,
              }}
            >
              <Button>
                Hành động <DownOutlined />
              </Button>
            </Dropdown>
          </>
        );
      },
    },
  ];

  const handleImage = (record) => {
    onOpenModalImage(record);
  };

  const onFinish = (values) => {
    onSearch(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function confirm(record) {
    onDelete(record.id);
  }

  const handleAdd = () => {
    // navigate("/admin/product/new");
    onOpenModal(null);
  };

  const handleEdit = (record) => {
    // navigate("/admin/product/edit/" + record.id);
    onOpenModal(record);
  };

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
                  <Select.Option value="name">Tên</Select.Option>
                  <Select.Option value="alias">Bí danh</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="search">
                <Input placeholder="Tìm kiếm" />
              </Form.Item>
              <Form.Item shouldUpdate style={{ marginLeft: 8 }}>
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(false) ||
                      form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length > 0
                    }
                  >
                    Tìm
                  </Button>
                )}
              </Form.Item>
            </div>
          </Form>
        </Col>
        <Col
          xl={6}
          style={{
            textAlign: "right",
          }}
        >
          <Button type="primary" onClick={handleAdd}>
            Thêm mới
          </Button>
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

export default TableProduct;
