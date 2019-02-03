import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { TypographyStyle, GoogleFont } from 'react-typography';

import SectionBookmarks from './components/SectionBookmarks';
import { theme } from './styles/theme';
import { typography } from './styles/typography';
import { BookmarkProvider } from './utils/withBookmarks';

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.bg};
  padding: 2rem;
`;

class App extends Component {
  render() {
    return (
      <BookmarkProvider>
        <ThemeProvider theme={theme}>
          <Main>
            <TypographyStyle typography={typography} />
            <GoogleFont typography={typography} />
            <SectionBookmarks />
          </Main>
        </ThemeProvider>
      </BookmarkProvider>
    );
  }
}

export default App;
