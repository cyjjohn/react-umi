import styles from './login.css';
import {Row,Col,Form,Input,Icon,Button} from 'antd';

export default function() {
  const { getFieldDecorator } = this.props.form;
  return (
    <div className={styles.normal}>
      <Row type="flex" justify="center" align="middle">
        <Col span={4}>
          <Form onSubmit={this.loginSubmit}>
            <h3>登录</h3>
            <Form.Item>
              {getFieldDecorator('username',{
                rules: [{ required: true, message: '请输入用户名' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password',{
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
