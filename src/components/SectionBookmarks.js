import React, { Component } from 'react';
import styled from 'styled-components';

import { Container } from '../styles';
import { withBookmark } from '../utils/withBookmarks';

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
`;

const AddBookmark = styled(Bookmark)`
  border-color: ${props => props.theme.colors.red};
`;

class SectionBookmarks extends Component {
  state = {
    staging: {
      url: '',
      thumbnail: '',
      title: ''
    }
  };

  render() {
    // const { bookmarks = [] } = this.props.bookmarks;
    return (
      <BookmarkContainer>
        {/* {bookmarks.bookmarks.map(bookmark => (
          <Bookmark />
        ))} */}
        <AddBookmark />
      </BookmarkContainer>
    );
  }
}

export default withBookmark(SectionBookmarks);
