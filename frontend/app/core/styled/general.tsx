import styled, { css } from 'styled-components';
import { Layout } from 'antd';

import { colors } from 'app/core/styled/variables';

export const HeaderFlex = styled(Layout.Header)`
  display: flex;
`;

export const LogoProject = styled.div`
  color: ${colors['color-orange']};
  font-family: 'NexaScriptHeavy', Fallback, sans-serif;
  font-size: 30px;
  height: 100%;
  margin-right: 50px;
`;

export const loginBackgroundCss = css`
  height: 100vh;
  position: relative;
  transition: all 1s;
  width: 100vw;
`;

export const loginBackgroundLoadingCss = css`
  filter: blur(30px);
`;

export const LoginCustomForm = styled('div')`
  background: #fff;
  border: 1px solid #555;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  & .ant-form-item-control-wrapper {
    width: 100%;
  }
`;

export const Spinner = styled.div`
  left: 600px;
  height: 100px;
  position: absolute;
  top: 250px;
  width: 100px;
  z-index: 100;
  i {
    font-size: 100px;
  }
`;
