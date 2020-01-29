import React from 'react';
import { Form, Input, Upload, Icon } from 'antd';

const FormItem = Form.Item;

class NormalCreatePostForm extends React.Component {
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <Form {...formItemLayout}>
        <Form.Item label="Message">
          {getFieldDecorator('message', {
            rules: [
              {
                required: true,
                message: 'Please input your message!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Image">
          {getFieldDecorator('image', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
            rules: [
              {
                required: true,
                message: 'Please select an image!',
              },
            ],
          })(
            <Upload.Dragger name="files" beforeUpload={() => false}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>,
          )}
        </Form.Item>
      </Form>
    );
  }
}

export const CreatePostForm = Form.create()(NormalCreatePostForm);
