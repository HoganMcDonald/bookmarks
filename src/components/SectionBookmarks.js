import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, focus } from '../styles';
import { withBookmark } from '../utils/withBookmarks';
import BookmarkModal from './BookmarkModal';

const BookmarkContainer = styled(Container)`
  background-color: ${props => props.theme.colors.fg};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const Bookmark = styled.div`
  width: 100%;
  padding-top: 60%;
  border: solid 3px ${props => props.theme.colors.yellow};
  border-radius: 8px;
  position: relative;
`;

const AddBookmark = styled(Bookmark)`
  border-color: ${props => props.theme.colors.red};
  font-size: 4rem;
  color: ${props => props.theme.colors.red};
  cursor: pointer;
  user-select: none;
`;

const BookmarkLink = styled.a`
  ${focus};
`;

const BookmarkButton = styled.button`
  ${focus};
  display: inline;
  background: none;
  border: none;
  padding: 0;
  border-radius: 8px;
`;

const BookmarkContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: currentcolor;
`;

class SectionBookmarks extends Component {
  state = {
    modalOpen: true
  };

  closeModal = () => this.setState({ modalOpen: false });

  addBookmark = () => {
    debugger;
    this.closeModal();
  };

  render() {
    const { bookmarks = [] } = this.props.bookmarks;
    return (
      <BookmarkContainer>
        <BookmarkModal
          open={this.state.modalOpen}
          newBookmark={this.addBookmark}
          close={this.closeModal}
        />
        {bookmarks.map(bookmark => (
          <Bookmark />
        ))}
        <BookmarkButton onClick={() => this.setState({ modalOpen: true })}>
          <AddBookmark>
            <BookmarkContent>+</BookmarkContent>
          </AddBookmark>
        </BookmarkButton>
      </BookmarkContainer>
    );
  }
}

export default withBookmark(SectionBookmarks);
