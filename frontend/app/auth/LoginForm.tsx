import React from 'react';
import { observer } from 'mobx-react';
import { FormComponentProps } from 'antd/lib/form';
import { Button, Form, Input } from 'antd';

import { routerStore } from 'app/core/App';
import { LoginCustomForm } from 'app/core/styled/general';
import { CenterBox, FlexBox, FlexItem } from 'app/core/styled/grid';

interface IProps {
  onSave: (name: string) => void;
}

export const LoginForm = Form.create<IProps>()(
  observer(
    class extends React.Component<IProps & FormComponentProps> {
      save = (event) => {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.onSave(values.name);
            routerStore.push('/');
          }
        });
      };

      render() {
        const { getFieldDecorator } = this.props.form;

        return (
          <Form onSubmit={this.save}>
            <CenterBox height="100vh">
              <LoginCustomForm>
                <Form.Item>
                  {getFieldDecorator('name')(<Input placeholder="Введите ваше имя" />)}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password')(<Input placeholder="Введите ваш пароль" />)}
                </Form.Item>
                <FlexBox>
                  <FlexItem grow="1" margin="0 20px 0 0">
                    <Form.Item>
                      <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Войти
                      </Button>
                    </Form.Item>
                  </FlexItem>
                  <FlexItem grow="0">
                    <Form.Item>
                      <Button style={{ width: '100%', marginRight: 20 }}>Регистрация</Button>
                    </Form.Item>
                  </FlexItem>
                </FlexBox>
              </LoginCustomForm>
            </CenterBox>
          </Form>
        );
      }
    },
  ),
);
