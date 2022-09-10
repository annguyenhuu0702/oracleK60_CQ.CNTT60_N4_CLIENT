import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";
import { Affix, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Header = () => {
  const navlist = [
    {
      display: "Trang chủ",
      href: "/",
    },
    {
      display: "Nike",
      href: "/nike",
    },
    {
      display: "adidas",
      href: "/adidas",
    },
    {
      display: "Jordan",
      href: "/jordan",
    },
    {
      display: "Yeezy",
      href: "/yeezy",
    },
    {
      display: "other brands",
      href: "/otherbrands",
    },
    {
      display: "Sale",
      href: "/sale",
    },
  ];

  const [page, setPage] = useState("Trang chủ");

  return (
    <Affix offsetTop={0}>
      <header>
        <div className="header-logo">
          <Link to="/" title="Home Page">
            <img
              src="https://res.cloudinary.com/diot4imoq/image/upload/v1662692378/osbgjw8tetsfdcpsrs0q.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="header-menu">
          <ul>
            {navlist.map((item, index) => (
              <li key={index}>
                <Link
                  to="/"
                  className={
                    page === item.display ? "header-menu-active" : null
                  }
                  onClick={() => setPage(item.display)}
                >
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-search">
          <Input
            placeholder="Bạn cần tìm gì....."
            prefix={<SearchOutlined />}
            allowClear
          />
        </div>
        <div className="header-group-icon">
          <Link to="/profile/wish-list">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMiAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjUzMDMgMTYuODY0TDE5LjEyNzEgOS4yNjcyQzIwLjk5MzcgNy40MDA2IDIxLjI2OTEgNC4zMjk3NiAxOS41MDI3IDIuMzY4MTFDMTkuMDYwMiAxLjg3NTMzIDE4LjUyMiAxLjQ3Nzg2IDE3LjkyMDggMS4xOTk5N0MxNy4zMTk3IDAuOTIyMDY4IDE2LjY2ODIgMC43Njk1NjUgMTYuMDA2MiAwLjc1MTc2MkMxNS4zNDQxIDAuNzMzOTU5IDE0LjY4NTQgMC44NTEyMjkgMTQuMDcwMiAxLjA5NjQyQzEzLjQ1NSAxLjM0MTYxIDEyLjg5NjIgMS43MDk1NyAxMi40Mjc5IDIuMTc3ODZMMTEgMy42MDU3MUw5Ljc2NzIgMi4zNzI5QzcuOTAwNiAwLjUwNjMwMSA0LjgyOTc2IDAuMjMwOTEzIDIuODY4MTEgMS45OTczNUMyLjM3NTMzIDIuNDM5ODEgMS45Nzc4NiAyLjk3ODA0IDEuNjk5OTcgMy41NzkxOUMxLjQyMjA3IDQuMTgwMzQgMS4yNjk1NiA0LjgzMTgxIDEuMjUxNzYgNS40OTM4NEMxLjIzMzk2IDYuMTU1ODggMS4zNTEyMyA2LjgxNDYgMS41OTY0MiA3LjQyOTgxQzEuODQxNjEgOC4wNDUwMyAyLjIwOTU3IDguNjAzODQgMi42Nzc4NiA5LjA3MjE1TDEwLjQ2OTcgMTYuODY0QzEwLjYxMDMgMTcuMDA0NiAxMC44MDExIDE3LjA4MzYgMTEgMTcuMDgzNkMxMS4xOTg5IDE3LjA4MzYgMTEuMzg5NyAxNy4wMDQ2IDExLjUzMDMgMTYuODY0VjE2Ljg2NFoiIHN0cm9rZT0iIzMzM0Y0OCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
              alt=""
            />
          </Link>
          <Link to="/profile">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIxQzE2Ljk3MDYgMjEgMjEgMTYuOTcwNiAyMSAxMkMyMSA3LjAyOTQ0IDE2Ljk3MDYgMyAxMiAzQzcuMDI5NDQgMyAzIDcuMDI5NDQgMyAxMkMzIDE2Ljk3MDYgNy4wMjk0NCAyMSAxMiAyMVoiIHN0cm9rZT0iIzMzM0Y0OCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMiAxNUMxNC4wNzExIDE1IDE1Ljc1IDEzLjMyMTEgMTUuNzUgMTEuMjVDMTUuNzUgOS4xNzg5MyAxNC4wNzExIDcuNSAxMiA3LjVDOS45Mjg5MyA3LjUgOC4yNSA5LjE3ODkzIDguMjUgMTEuMjVDOC4yNSAxMy4zMjExIDkuOTI4OTMgMTUgMTIgMTVaIiBzdHJva2U9IiMzMzNGNDgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNS45ODEyIDE4LjY5MTNDNi41NDYxNSAxNy41ODA2IDcuNDA3NDQgMTYuNjQ3OCA4LjQ2OTczIDE1Ljk5NjNDOS41MzIwMiAxNS4zNDQ4IDEwLjc1MzkgMTUgMTIgMTVDMTMuMjQ2MiAxNSAxNC40NjggMTUuMzQ0OCAxNS41MzAzIDE1Ljk5NjNDMTYuNTkyNiAxNi42NDc4IDE3LjQ1MzkgMTcuNTgwNiAxOC4wMTg5IDE4LjY5MTMiIHN0cm9rZT0iIzMzM0Y0OCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
              alt=""
            />
          </Link>
          <Link to="/cart">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjI1MDcgNi43NUgzLjc1MDczQzMuMzM2NTIgNi43NSAzLjAwMDczIDcuMDg1NzkgMy4wMDA3MyA3LjVMMy43NTA3MyAxOS41QzMuNzUwNzMgMTkuOTE0MiA0LjA4NjUyIDIwLjI1IDQuNTAwNzMgMjAuMjVIMTkuNTAwN0MxOS45MTQ5IDIwLjI1IDIwLjI1MDcgMTkuOTE0MiAyMC4yNTA3IDE5LjVMMjEuMDAwNyA3LjVDMjEuMDAwNyA3LjA4NTc5IDIwLjY2NDkgNi43NSAyMC4yNTA3IDYuNzVaIiBzdHJva2U9IiMzMzNGNDgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTUuNzUgOS43NVY1LjI1QzE1Ljc1IDQuODUyMTggMTUuNTkyIDQuNDcwNjQgMTUuMzEwNyA0LjE4OTM0QzE1LjAyOTQgMy45MDgwNCAxNC42NDc4IDMuNzUgMTQuMjUgMy43NUg5Ljc1QzkuMzUyMTggMy43NSA4Ljk3MDY0IDMuOTA4MDQgOC42ODkzNCA0LjE4OTM0QzguNDA4MDQgNC40NzA2NCA4LjI1IDQuODUyMTggOC4yNSA1LjI1VjkuNzUiIHN0cm9rZT0iIzMzM0Y0OCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
              alt=""
            />
          </Link>
        </div>
      </header>
    </Affix>
  );
};

export default Header;
