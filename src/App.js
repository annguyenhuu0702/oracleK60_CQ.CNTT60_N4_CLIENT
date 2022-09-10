import { Spin } from "antd";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
const App = () => {
  function showRoutes(routes) {
    return (
      <React.Fragment>
        {routes.map((route, index) => {
          let Layout = route.layout;
          const Page = route.element;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </React.Fragment>
    );
  }
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <Spin />
        </div>
      }
    >
      <Routes>{showRoutes(publicRoutes)}</Routes>
    </Suspense>
  );
};

export default App;
