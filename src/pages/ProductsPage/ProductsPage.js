import React from "react";
import "./index.scss";
import { Row, Select } from "antd";
import Product from "../../components/Product/Product";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const ProductsPage = () => {
  return (
    <main>
      <div className="header_filter">
        <div className="select_option">
          <p className="title_select">Chọn Size Giày</p>
          <Select
            defaultValue="Chọn Size Giày"
            style={{
              width: 300,
            }}
            onChange={handleChange}
          >
            <Option value="37">37</Option>
            <Option value="38">38</Option>
            <Option value="39">39</Option>
            <Option value="40">40</Option>
            <Option value="41">41</Option>
            <Option value="42">42</Option>
          </Select>
        </div>
        <div className="select_option">
          <p className="title_select">Khoảng giá</p>
          <Select
            defaultValue="Tất cả"
            style={{
              width: 300,
            }}
            onChange={handleChange}
          >
            <Option value="Below 3">Dưới 3 Triệu</Option>
            <Option value="3 Upto 5">Từ 3 đến 5 Triệu</Option>
            <Option value="5 upto 10">Từ 3 đến 5 Triệu</Option>
          </Select>
        </div>
        <div className="select_option">
          <p className="title_select">Sắp xếp theo</p>
          <Select
            defaultValue="Giá thấp đến cao"
            style={{
              width: 300,
            }}
            onChange={handleChange}
          >
            <Option value="Low to Hight">Giá thấp đến cao</Option>
            <Option value="Hight to Low">Giá cao đến thấp</Option>
            <Option value="A-Z">Tên A-Z</Option>
            <Option value="Z-A">Tên Z-A</Option>
          </Select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "40px 100px",
        }}
      >
        <Row gutter={[16, 16]}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Row>
      </div>
    </main>
  );
};

export default ProductsPage;
