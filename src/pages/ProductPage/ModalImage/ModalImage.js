import {
  Avatar,
  Button,
  Col,
  Form,
  Grid,
  Input,
  InputNumber,
  Modal,
  notification,
  Popconfirm,
  Row,
  Space,
  Upload,
} from "antd";
import { memo, useEffect, useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import instance, { apiCallerWithToken } from "../../../config/configAxios";
import { authSelector } from "../../../redux/slices/authSlice";
const { useBreakpoint } = Grid;
const ModalImage = ({
  row,
  open,
  onClose,
  onAdd,
  onEdit,
  onUpdateThumbnail,
}) => {
  const [form] = Form.useForm();
  const screens = useBreakpoint();
  const [urls, setUrls] = useState([]);
  const { accessToken } = useSelector(authSelector);
  const [productImages, setProductImages] = useState([]);
  const dispatch = useDispatch();
  const handleFinish = async () => {
    if (urls.length > 0) {
      try {
        const res = await apiCallerWithToken(accessToken, dispatch).post(
          "product-image/many",
          urls.map((i) => ({ productId: row.id, path: i }))
        );
        const { code, message } = res.data;
        if (code === 200 || message === "Success") {
          notification.success({ message: "Thêm hình ảnh thành công" });
          onClose();
        }
      } catch (error) {
        console.log(error);
        notification.error({
          message: "Đã có lỗi xảy ra, vui lòng thử lại sau",
        });
      }
    } else {
      onClose();
    }
  };
  const props = {
    name: "images",
    action: "http://localhost:8080/api/upload/image/multiple",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjMwIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNjY0Njk3OTUzLCJleHAiOjE2NjQ3MTU5NTN9.nkek8VbImz-8JOSpvmIlPqnIcAhn2rwuuKhtr_M4XjM",
    },
    multiple: true,
    onChange(info) {
      console.log(info);
      if (info && info.file && info.file.status !== "uploading") {
        setUrls(
          info?.fileList
            .map((file) => {
              console.log(file);
              const { code, message, data } = file.response;
              if (code === 200 || message === "Success") {
                return data[0];
              } else {
                return "";
              }
            })
            .filter((i) => i !== "")
        );
      }
    },
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get("product-image", {
          params: { productId: row.id },
        });
        const { code, message, data } = res.data;
        if (code === 200 || message === "Success") {
          setProductImages(data.items);
        }
      } catch (error) {
        console.log("Fetch all product image by product error", error);
      }
    })();
  }, [row]);

  const handleUpdateThumbnail = async (productImage) => {
    try {
      const res = await apiCallerWithToken(accessToken, dispatch).patch(
        "product/" + productImage.productId,
        { ...row, thumbnail: productImage.path }
      );
      const { code, message } = res.data;
      if (code === 200 || message === "Success") {
        onUpdateThumbnail({ ...row, thumbnail: productImage.path });
        notification.success({
          message: "Cập nhật ảnh đại diện thành công",
        });
      }
    } catch (error) {
      console.log("Delete product image error", error);
      notification.error({
        message: "Đã có lỗi xảy ra, vui lòng thử lại",
      });
    }
  };

  const handleDelete = async (productImage) => {
    try {
      const res = await apiCallerWithToken(accessToken, dispatch).delete(
        "product-image/" + productImage.id
      );
      const { code, message } = res.data;
      if (code === 200 || message === "Success") {
        notification.success({
          message: "Xóa ảnh sản phẩm thành công",
        });
      }
    } catch (error) {
      console.log("Delete product image error", error);
      notification.error({
        message: "Đã có lỗi xảy ra, vui lòng thử lại",
      });
    }
  };

  return (
    <Modal
      open={open}
      width={screens.md ? "70vw" : "90vw"}
      onCancel={onClose}
      onOk={() => form.submit()}
      title={"Hình ảnh sản phẩm"}
      destroyOnClose={true}
    >
      <Form
        wrapperCol={{ span: 24 }}
        labelCol={{ span: 24 }}
        onFinish={handleFinish}
        form={form}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24}>
            <Form.Item label="Hình ảnh">
              <Upload {...props}>
                <Button icon={<AiOutlineUpload />}>Chọn hình ảnh</Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Row gutter={[16, 16]}>
              {productImages.map((item) => (
                <Col xs={4} key={item.id}>
                  <Avatar
                    alt=""
                    src={item.path}
                    style={{ width: "100%", height: "auto" }}
                    shape="square"
                  />
                  <div
                    style={{
                      marginTop: 8,
                      display: "flex",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <Popconfirm
                      title="Bạn có chắc chắn chọn ảnh này làm ảnh đại diện sản phẩm?"
                      onConfirm={() => handleUpdateThumbnail(item)}
                      okText="Có"
                      cancelText="Không"
                    >
                      <Button type="primary">Ảnh đại diện</Button>
                    </Popconfirm>
                    <Popconfirm
                      title="Bạn có chắc chắn xóa ảnh này?"
                      onConfirm={() => handleDelete(item)}
                      okText="Có"
                      cancelText="Không"
                    >
                      <Button type="primary" danger>
                        Xóa
                      </Button>
                    </Popconfirm>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default memo(ModalImage);
