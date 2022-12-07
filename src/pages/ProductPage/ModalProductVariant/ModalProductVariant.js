import {
  Badge,
  Button,
  Checkbox,
  Col,
  Form,
  Grid,
  Input,
  InputNumber,
  Modal,
  notification,
  Row,
  Space,
  Upload,
} from "antd";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import instance, { apiCallerWithToken } from "../../../config/configAxios";
import { authSelector } from "../../../redux/slices/authSlice";
const { useBreakpoint } = Grid;
const ModalProductVariant = ({ row, open, onClose, onAdd, onEdit }) => {
  const [form] = Form.useForm();
  const screens = useBreakpoint();
  const { accessToken } = useSelector(authSelector);
  const [variantValues, setVariantValues] = useState([]);
  const [checked, setChecked] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get("variant-value/all");
        const { code, message, data } = res.data;
        if (code === 200 || message === "Success") {
          setVariantValues(data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleFinish = async (values) => {
    try {
      const res = await apiCallerWithToken(accessToken, dispatch).post(
        "product-variant",
        { ...values, productId: row.id, variantValues: checked }
      );
      const { code, message, data } = res.data;
      if (code === 200 || message === "Success") {
        notification.success({ message: "Thêm biến thể thành công" });
      }
    } catch (error) {
      console.log(error);
      notification.error({ message: "Đã có lỗi xảy ra, vui lòng thử lại sau" });
    }
  };
  const handleCheck = (variantValue) => {
    setChecked((prev) => {
      return [
        ...prev.filter((i) => i.variant.name !== variantValue.variant.name),
        variantValue,
      ];
    });
  };
  return (
    <Modal
      open={open}
      width={screens.md ? "40vw" : "90vw"}
      onCancel={onClose}
      onOk={() => form.submit()}
      title={"Thêm biến thể"}
      destroyOnClose={true}
    >
      <Form
        initialValues={{
          inventory: 0,
          productId: row.id,
        }}
        wrapperCol={{ span: 24 }}
        labelCol={{ span: 24 }}
        onFinish={handleFinish}
        form={form}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24}>
            <Form.Item name="inventory" label="Tồn kho">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item label="Biến thể">
              <Space wrap="wrap">
                {variantValues.map((variantValue) => {
                  return (
                    <Checkbox
                      key={variantValue.id}
                      onChange={(e) => handleCheck(variantValue)}
                      checked={
                        checked.findIndex((i) => i.id === variantValue.id) !==
                        -1
                      }
                    >
                      {variantValue.variant.name}: {variantValue.value}
                    </Checkbox>
                  );
                })}
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default memo(ModalProductVariant);
