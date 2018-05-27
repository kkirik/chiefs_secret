import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { observer } from 'mobx-react';

import { HeaderFlex, LogoProject } from 'app/core/styled/general';

const { Content, Sider } = Layout;

const MenuItems = [
  {
    title: 'Главная страница',
  },
  {
    title: 'Блюдо не выбрано',
  },
  {
    title: 'Создание рецепта',
  },
];

const TypeDishes = [
  {
    title: 'Горячее',
  },
  {
    title: 'Холодное',
  },
  {
    title: 'Супы',
  },
  {
    title: 'Десерты',
  },
];

interface IProps {
  breadcrumbs?: string[];
}

@observer
class BaseLayout extends React.Component<IProps> {
  render() {
    const { children } = this.props;

    return (
      <Layout>
        <HeaderFlex>
          <LogoProject>Сhief's Secret</LogoProject>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            {MenuItems.map((item, index) => (
              <Menu.Item key={index}>{item.title}</Menu.Item>
            ))}
          </Menu>
        </HeaderFlex>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['0']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {TypeDishes.map((item, index) => (
                <Menu.Item key={index}>{item.title}</Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export { BaseLayout };
