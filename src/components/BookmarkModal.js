import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import ReactModal from 'react-modal';
import validUrl from 'valid-url';

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

const Error = styled.p`
  color: ${props => props.theme.colors.red};
  margin: 0;
  margin-bottom: 1rem;
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
    url: '',
    title: '',
    errorMessage: ''
  };

  fetchBookmark = async e => {
    e.preventDefault();
    const { url, title } = this.state;
    const { addBookmark } = this.props;
    let errorMessage = '';

    if (!url) {
      errorMessage = 'Url is required.';
    } else if (!validUrl.isUri(url)) {
      errorMessage = 'Url is not valid.';
    } else if (!title) {
      errorMessage = 'Title is required.';
    }

    this.setState({ errorMessage });

    if (errorMessage) return;

    addBookmark({
      url,
      title
    });

    this.setState({
      url: '',
      title: ''
    });
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
            maxHeight: '80%',
            height: 'auto',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            top: 'auto',
            bottom: 'auto',
            border: 'none',
            overflowY: 'scroll'
          }
        }}
      >
        {!this.state.submitted && (
          <>
            <Heading>Add Bookmark</Heading>
            <Content>
              <form onSubmit={this.fetchBookmark}>
                <Label>
                  URL:
                  <Input
                    value={this.state.url}
                    onChange={e => this.setState({ url: e.target.value })}
                  />
                </Label>
                <Label>
                  Title:
                  <Input
                    value={this.state.title}
                    onChange={e => this.setState({ title: e.target.value })}
                  />
                </Label>
                {this.state.errorMessage && (
                  <Error>{this.state.errorMessage}</Error>
                )}
                <Submit onClick={this.fetchBookmark}>Add</Submit>
                <Close onClick={close}>Cancel</Close>
              </form>
            </Content>
          </>
        )}
      </ReactModal>
    );
  }
}

export default withTheme(BookmarkModal);
