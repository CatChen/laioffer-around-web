import React from 'react';
import { Tabs, Button } from 'antd';
import '../styles/Home.css';

const { TabPane } = Tabs;

export class Home extends React.Component {
  render() {
    const operations = <Button>Create New Post</Button>;
    return (
      <Tabs tabBarExtraContent={operations} className="main-tabs">
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
    );
  }
};
