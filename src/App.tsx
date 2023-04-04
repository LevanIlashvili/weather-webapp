import type { FC } from "react";
import { ConfigProvider, Layout, Menu, Typography } from "antd";
import "antd/dist/reset.css";
import { Header, Content } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { GlobalSearch } from "./pages/global-search";
import { SessionProvider } from "./providers/session.provider";
import { ClientProvider } from "./providers/client.provider";
import { HistoryProvider } from "./providers/search-history.provider";

const App: FC = () => (
  <SessionProvider>
    <ClientProvider>
      <HistoryProvider>
      <ConfigProvider>
        <BrowserRouter>
          <Layout style={{ minHeight: "100vh" }}>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
              <div className="logo">
                <Link to="/">
                  <Typography.Title level={4}>weather</Typography.Title>
                </Link>
              </div>
              <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">
                  <Link to="/">
                    <span>Home</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/queries">
                    <span>Global History</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content
              className="site-layout"
              style={{ padding: "0 50px", marginTop: 64 }}
            >
              <div className="" style={{ padding: 24 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/queries" element={<GlobalSearch />} />
                </Routes>
              </div>
            </Content>
          </Layout>
        </BrowserRouter>
      </ConfigProvider>
      </HistoryProvider>
    </ClientProvider>
  </SessionProvider>
);

export default App;
