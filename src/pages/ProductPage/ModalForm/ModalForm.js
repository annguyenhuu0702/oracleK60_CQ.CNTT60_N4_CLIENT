import {
  Button,
  Col,
  Form,
  Grid,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Upload,
} from "antd";
import { memo, useEffect, useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import instance from "../../../config/configAxios";
const { useBreakpoint } = Grid;
const ModalForm = ({ row, open, onClose, onAdd, onEdit }) => {
  const [form] = Form.useForm();
  const screens = useBreakpoint();
  const [thumbnail, setThumbnail] = useState("");
  const [productCategories, setProductCategories] = useState([]);

  const handleFinish = (values) => {
    row
      ? onEdit({
          ...row,
          ...values,
          productCategory: productCategories.find(
            (item) => item.id === values.productCategoryId
          ),
          ...(thumbnail === "" ? {} : { thumbnail }),
        })
      : onAdd({ ...values, thumbnail });
  };
  const props = {
    name: "image",
    action: "http://localhost:8080/api/upload/image/single",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjMwIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNjY0Njk3OTUzLCJleHAiOjE2NjQ3MTU5NTN9.nkek8VbImz-8JOSpvmIlPqnIcAhn2rwuuKhtr_M4XjM",
    },
    onChange(info) {
      console.log("info uploaded file: ", info);
      if (info?.file?.response) {
        const { code, message, data: url } = info.file.response;
        if (code === 200 || message === "Success") {
          setThumbnail(url);
        }
      }
    },
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get("product-category");
        const { code, message, data } = res.data;
        if (code === 200 || message === "Success") {
          setProductCategories(data.items);
        }
      } catch (error) {
        console.log("Fetch all categories error", error);
      }
    })();
  }, []);

  return (
    <Modal
      open={open}
      width={screens.md ? "70vw" : "90vw"}
      onCancel={onClose}
      onOk={() => form.submit()}
      title={row ? "Sửa sản phẩm" : "Thêm mới sản phẩm"}
      destroyOnClose={true}
    >
      <Form
        initialValues={{
          name: row ? row.name : "",
          alias: row ? row.alias : "",
          description: row ? row.description : "",
          price: row ? row.price : "",
          salePrice: row ? row.salePrice : "",
          productCategoryId: row ? row.productCategoryId : "",
        }}
        wrapperCol={{ span: 24 }}
        labelCol={{ span: 24 }}
        onFinish={handleFinish}
        form={form}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Form.Item
              name="productCategoryId"
              label="Danh mục sản phẩm"
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Select
                options={productCategories.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item
              name="name"
              label="Tên sản phẩm"
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item name="alias" label="Bí danh">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item name="price" label="Giá bán">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item name="salePrice" label="Giá bán khuyến mãi">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item name="description" label="Mô tả">
              <Input.TextArea rows={5} />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item label="Ảnh đại diện">
              <Upload {...props}>
                <Button icon={<AiOutlineUpload />}>Tải lên</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default memo(ModalForm);
