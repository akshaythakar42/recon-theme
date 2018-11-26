import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Layout, Tag, Button, Drawer, Divider } from 'antd';
import ThemeColor from './ThemeColor';
import BlockChecbox from './BlockChecbox';
import NavigationBar from './sidebar';
import Body from './body';
import Routes from './../pages/routes/Routes';

const { Sider } = Layout;

class LandingPage extends Component {

  render() {

    console.log("WINDOW ::: ",window);

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>{/*  collapsible */}
          <NavigationBar />
        </Sider>  
        <Layout>
         <Body/>
        </Layout>
      </Layout>
    );
  }
}
export default LandingPage;