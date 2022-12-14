import { Layout, notification, Pagination, Tabs } from "antd";
import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiCallerWithToken } from "../../config/configAxios";
import { useTitle } from "../../hooks/useTitle";
import { authSelector } from "../../redux/slices/authSlice";
import InventoryPage from "../InventoryPage";
import "./index.scss";
import ModalForm from "./ModalForm";
import ModalImage from "./ModalImage/ModalImage";
import ModalProductVariant from "./ModalProductVariant/ModalProductVariant";
import TableProduct from "./TableProduct";

const { Content } = Layout;
const initState = {
  data: {
    items: [],
    count: 0,
  },
  page: 1,
  pageSize: 7,
  option: "",
  search: "",
  openModal: false,
  row: null,
  openModalImage: false,
  openModalProductVariant: false,
};

const actionTypes = {
  FETCH: "FETCH",
};

const reducers = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    default:
      return {
        ...state,
        ...payload,
      };
  }
};
const ProductPage = () => {
  useTitle("Products");
  const [
    {
      data,
      page,
      pageSize,
      option,
      search,
      openModal,
      row,
      openModalImage,
      openModalProductVariant,
    },
    dispatch1,
  ] = useReducer(reducers, initState);
  const { accessToken } = useSelector(authSelector);
  const dispatch2 = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const res = await apiCallerWithToken(accessToken, dispatch2).get(
          "product",
          { params: { limit: 7, p: 1, sort_by: "id", sort_type: "desc" } }
        );
        dispatch1({
          type: actionTypes.FETCH,
          payload: { data: res.data.data, page: 1, pageSize: 7 },
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [accessToken, dispatch2]);

  const handlePageChange = async (page, pageSize) => {
    try {
      const res = await apiCallerWithToken(accessToken, dispatch2).get(
        "product",
        {
          params: {
            limit: pageSize,
            p: page,
            ...(option && search ? { [option]: search } : {}),
          },
        }
      );
      dispatch1({
        type: actionTypes.FETCH,
        payload: { data: res.data.data, page, pageSize },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async ({ option: _option, search: _search }) => {
    try {
      const res = await apiCallerWithToken(accessToken, dispatch2).get(
        "product",
        {
          params: {
            limit: pageSize,
            p: 1,
            ...(_option && _search ? { [_option]: _search } : {}),
          },
        }
      );
      dispatch1({
        type: actionTypes.FETCH,
        payload: {
          data: res.data.data,
          page: 1,
          pageSize,
          ...(_option && _search
            ? { option: _option, search: _search }
            : { search: "" }),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res1 = await apiCallerWithToken(accessToken, dispatch2).delete(
        "product/" + id
      );
      const { code, message } = res1;
      if (code === 200 || message === "Success") {
        const res = await apiCallerWithToken(accessToken, dispatch2).get(
          "product",
          {
            params: {
              limit: pageSize,
              p:
                data.items.length === 1
                  ? data.count > 1
                    ? page - 1
                    : 1
                  : page,
              ...(option && search ? { [option]: search } : {}),
            },
          }
        );
        dispatch1({
          type: actionTypes.FETCH,
          payload: {
            data: res.data.data,
            page:
              data.items.length === 1 ? (data.count > 1 ? page - 1 : 1) : page,
            pageSize,
            ...(option && search ? { option, search } : {}),
          },
        });
        notification.success({ message: `Successfully` });
      }
    } catch (error) {
      console.log(error);
      notification.error({ message: `C?? l???i x???y ra, vui l??ng th??? l???i sau` });
    }
  };

  const handleCloseModal = () => {
    dispatch1({
      type: "Close Modal",
      payload: { openModal: false, row: null },
    });
  };
  const handleCloseModalImage = (_data) => {
    dispatch1({
      type: "Close Modal Image",
      payload: {
        openModalImage: false,
        row: null,
        ...(_data
          ? {
              items: data.items.map((item) =>
                item.id === _data.id ? _data : item
              ),
              count: data.count,
            }
          : {}),
      },
    });
  };
  const handleCloseModalProductVariant = () => {
    dispatch1({
      type: "Close Modal Product Variant",
      payload: { openModalProductVariant: false, row: null },
    });
  };

  const handleEdit = async (record) => {
    try {
      console.log("edit ", record);
      const res = await apiCallerWithToken(accessToken, dispatch2).patch(
        "product/" + record.id,
        record
      );
      const { code, message, data: _data } = res.data;
      if (code === 200 || message === "Success") {
        dispatchEditProduct(_data);
        notification.success({ message: `Successfully` });
        handleCloseModal();
      }
    } catch (error) {
      console.log(error);
      notification.error({ message: `C?? l???i x???y ra, vui l??ng th??? l???i sau` });
    }
  };

  const dispatchEditProduct = (_data) => {
    dispatch1({
      type: "Edit Product",
      payload: {
        data: {
          items: data.items.map((item) =>
            item.id === _data.id ? _data : item
          ),
          count: data.count,
        },
      },
    });
  };

  const handleAdd = async (record) => {
    try {
      const res = await apiCallerWithToken(accessToken, dispatch2).post(
        "product",
        record
      );
      const { code, message, data: _data } = res.data;
      if (code === 201 || message === "Success") {
        if (page === 1) {
          if (data.count === pageSize) {
            dispatch1({
              type: "Add Product (Count = Page Size)",
              payload: {
                data: {
                  items: [
                    _data,
                    ...data.items.filter((_, index) => index !== pageSize - 1),
                  ],
                  count: data.count + 1,
                },
              },
            });
          } else {
            dispatch1({
              type: "Add Product (Count != Page Size)",
              payload: {
                data: { items: [_data, ...data.items], count: data.count + 1 },
              },
            });
          }
        } else {
          await handlePageChange(1, pageSize);
        }
        notification.success({ message: `Successfully` });
        handleCloseModal();
      }
    } catch (error) {
      console.log(error);
      notification.error({ message: `C?? l???i x???y ra, vui l??ng th??? l???i sau` });
    }
  };
  const onChange = (key) => {
    // navigate(key)
    console.log(key);
  };
  return (
    <>
      <Tabs
        onChange={onChange}
        type="card"
        items={[
          {
            label: `Th??ng tin chung`,
            key: "1",
            children: (
              <>
                <Content className="common-layout-content-cus">
                  <div className="common-content-wrap">
                    <div className="common-content">
                      <TableProduct
                        onOpenModal={(row) =>
                          dispatch1({
                            type: "Open Modal",
                            payload: { openModal: true, row },
                          })
                        }
                        onOpenModalImage={(row) =>
                          dispatch1({
                            type: "Open Modal Image",
                            payload: { openModalImage: true, row },
                          })
                        }
                        onOpenModalProductVariant={(row) =>
                          dispatch1({
                            type: "Open Modal Product Variant",
                            payload: { openModalProductVariant: true, row },
                          })
                        }
                        data={data}
                        onSearch={handleSearch}
                        onDelete={handleDelete}
                      />
                    </div>
                  </div>
                </Content>
                <div className="common-pagination-cus">
                  <Pagination
                    onChange={(page, pageSize) =>
                      handlePageChange(page, pageSize)
                    }
                    pageSize={pageSize}
                    total={data.count}
                    current={page}
                    showSizeChanger={true}
                    pageSizeOptions={[7, 20, 100, 200]}
                  />
                </div>
                {openModal && (
                  <ModalForm
                    row={row}
                    open={openModal}
                    onClose={handleCloseModal}
                    onEdit={handleEdit}
                    onAdd={handleAdd}
                  />
                )}
                {openModalImage && (
                  <ModalImage
                    row={row}
                    open={openModalImage}
                    onClose={handleCloseModalImage}
                    onUpdateThumbnail={dispatchEditProduct}
                  />
                )}
                {openModalProductVariant && (
                  <ModalProductVariant
                    row={row}
                    open={openModalProductVariant}
                    onClose={handleCloseModalProductVariant}
                  />
                )}
              </>
            ),
          },
          {
            label: "Bi???n th???",
            key: "2",
            children: <InventoryPage />,
          },
        ]}
      />
    </>
  );
};

export default ProductPage;
