import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropdownComponent = (props) => {
  const menuClick = (e) => {
    console.log(e);
  };

  const menu = (
    <Menu onClick={menuClick}>
      <Menu.Item key="1">typeA</Menu.Item>
      <Menu.Item key="2">typeB</Menu.Item>
      <Menu.Item key="3">typeC</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu}>
        <Button>
          Button <DownOutlined />
        </Button>
      </Dropdown>
    </>
  );
};

export default DropdownComponent;
