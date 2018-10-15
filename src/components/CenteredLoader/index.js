import React, {PureComponent} from 'react';
import styled from 'styled-components';
import ProgressBar from 'react-toolbox/lib/progress_bar';

export const LoaderWrapper = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
`;

export default class  CenteredLoader extends PureComponent {
  render() {
    return (
      <LoaderWrapper>
        <ProgressBar type="circular" mode="indeterminate" />
      </LoaderWrapper>
    )
  }
}
