import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import ReactModal from 'react-modal';
import { lighten } from 'polished';

import { focus } from '../styles';

const Heading = styled.h2`
  color: ${props => props.theme.colors.accent};
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.seafoam};
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  background-color: ${props => props.theme.colors.active};
  color: ${props => props.theme.colors.grey};
  border-radius: 4px;
  border: none;
  padding: 2px 6px;
  ${focus};
`;

const Submit = styled.button`
  display: inline;
  background-color: ${props => props.theme.colors.red};
  color: white;
  border: none;
  border-radius: 4px;
  margin-right: 1rem;
  ${focus};
`;

const Close = styled(Submit)`
  background-color: ${props => props.theme.colors.accent};
`;

class BookmarkModal extends Component {
  state = {
    submitted: false,
    url: '',
    thumbnail: '',
    title: ''
  };

  render() {
    const { open, theme, close } = this.props;
    const { colors } = theme;

    const app = document.getElementById('root');

    return (
      <ReactModal
        isOpen={open}
        contentLabel="Add new bookmark"
        appElement={app}
        ariaHideApp={true}
        shouldFocusAfterRender={true}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={true}
        onRequestClose={close}
        style={{
          overlay: {
            backgroundColor: colors.bg,
            display: 'flex',
            alignItems: 'center'
          },
          content: {
            backgroundColor: colors.fg,
            maxWidth: 800,
            height: 'auto',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            top: 'auto',
            bottom: 'auto',
            marginTop: '40px',
            border: 'none'
          }
        }}
      >
        {!this.state.submitted && (
          <>
            <Heading>Add Bookmark</Heading>
            <Content>
              <Label>
                URL:
                <Input
                  value={this.state.url}
                  onChange={e => this.setState({ url: e.target.value })}
                />
              </Label>
              <Submit onClick={this.submitUrl}>Add</Submit>
              <Close onClick={close}>Cancel</Close>
            </Content>
          </>
        )}
      </ReactModal>
    );
  }
}

export default withTheme(BookmarkModal);
