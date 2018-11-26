import 'antd/dist/antd.css';
import React, { Component } from 'react';
import Headers from '../header';
import Footers from '../footer';
import Breadcumb from '../../components/breadcrumb';
import Routes from './../../pages/routes/Routes';
import MainBoard from '../../pages/main-board/mainBoard';

import { Layout, Tag, Button, Drawer, Divider } from 'antd';
import ThemeColor from '../ThemeColor';
import BlockChecbox from '../BlockChecbox';

const Body1 = ({ children, title, style }) => (
    <div
      
    >
      <h3 >{title}</h3>
      {children}
    </div>
  );

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            visible: false
          };
       this.showDrawar = this.showDrawar.bind(this);   
      }

      onCollapse = (collapsed) => {
        this.setState({ collapsed });
      }
    
      changeSetting = (type,color) => {
    
        window.less
        .modifyVars({
          '@layout-header-background': color,
          '@primary-color': color,
        })
        
      }
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };

      showDrawar(){
        this.setState({
            visible: true,
          });
      }

    render() {
        return (
            <Layout>
                <Headers click = {this.showDrawar}/>
                <Layout>
                  {/*  <Breadcumb /> */}
                   <Routes/>

                   <Layout>
            <div style={{width:"300px"}}>

              <Drawer
                title="Basic Drawer"

                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >

              <Body1 title="Page style setting">
            <BlockChecbox
              list={[
                {
                  key: 'dark',
                  url: 'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
                  title: "Dark",
                },
                {
                  key: 'light',
                  url: 'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
                  title: "Light",
                },
              ]}
              value = "dark"
              onChange={value => this.changeSetting('navTheme', value)}
            />
          </Body1>

            <div className = "content">
                <ThemeColor
                      title="Theme Color"
                      value="#fff000"
                      onChange={color => this.changeSetting('primaryColor', color)}
                />
            </div>

            <Divider />
  
            <Body1 title="Navigation Mode">
              <BlockChecbox
                list={[
                  {
                    key: 'sidemenu',
                    url: 'https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg',
                    title: 'Side Menu',
                  },
                  {
                    key: 'topmenu',
                    url: 'https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg',
                    title: 'Top Menu',
                  },
                ]}
                
                onChange={value => this.changeSetting('layout', value)}
              />
            </Body1>
              </Drawer>
            </div>

          </Layout>

                </Layout>
                <Footers />
            </Layout>
        );
    }
}
export default Body;