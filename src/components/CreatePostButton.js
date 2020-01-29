import React from 'react';
import { Modal, Button, message } from 'antd';
import { CreatePostForm } from './CreatePostForm';
import {
  POSITION_KEY,
  TOKEN_KEY,
  POSITION_NOISE,
  API_ROOT,
  AUTH_HEADER,
} from '../constants';

export class CreatePostButton extends React.Component {
  state = {
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });

    this.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const position = JSON.parse(localStorage.getItem(POSITION_KEY));
        const token = localStorage.getItem(TOKEN_KEY);
        const formData = new FormData();
        formData.append('lat', position.latitude + Math.random() * POSITION_NOISE * 2 - POSITION_NOISE);
        formData.append('lon', position.longitude + Math.random() * POSITION_NOISE * 2 - POSITION_NOISE);
        formData.append('message', values.message);
        formData.append('image', values.image[0].originFileObj);
        fetch(`${API_ROOT}/post`, {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: `${AUTH_HEADER} ${token}`,
          },
          dataType: 'text',
        }).then((response) => {
          if (response.ok) {
            message.success('Create post succeed!');
            this.form.resetFields();
            this.setState({
              visible: false,
              confirmLoading: false,
            });
          } else {
            message.error('Create post failed.');
            this.setState({
              confirmLoading: false,
            });
          }
        })
      } else {
        this.setState({
          confirmLoading: false,
        });
      }
    });
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  saveFormRef = (formIntance) => {
    this.form = formIntance;
  }

  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Create New Post
        </Button>
        <Modal
          title="Create New Post"
          okText="Create"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <CreatePostForm ref={this.saveFormRef} />
        </Modal>
      </div>
    );
  }
}
