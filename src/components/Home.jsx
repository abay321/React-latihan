import '../App.css'

// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { SideNav } from './SideNav';
import React from 'react';
import EmployeeData from '../pages/Employee-data';
const { Header, Content, /*Footer,*/ Sider } = Layout;



export const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className='container'>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        {/* <div className="logo" /> */}
        <div className="logo" style={{ color: "white", textAlign: "center" }}>
          <img src="./logo192.png" alt="logo" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          // items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
          //   (icon, index) => ({
          //     key: String(index + 1),
          //     icon: React.createElement(icon),
          //     label: `nav ${index + 1}`,
          //   }),
          // )}
          items={SideNav.map((data) => {
            return {
                key: data.key,
                label: data.label,
                icon: data.icon
            };
        })}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content className="content-container">
          <div className="content">
            <EmployeeData />
          </div>
        </Content>
        
      </Layout>
    </Layout>
  );
};
