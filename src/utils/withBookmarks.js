import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

const BOOKMARKS = 'BOOKMARKS';

class BookmarkProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: this.getBookmarks(),
      add: this.add,
      remove: this.remove
    };
  }

  getBookmarks = () => window.localStorage.getItem(BOOKMARKS) || [];

  setBookmarks = bookmarks =>
    this.setState({ bookmarks }, () =>
      window.localStorage.setItem(BOOKMARKS, this.state.bookmarks)
    );

  add = (url, thumbnail, title) =>
    this.setBookmarks([
      ...this.state.bookmarks,
      {
        url,
        thumbnail,
        title
      }
    ]);

  remove = index =>
    this.setBookmarks(
      this.state.bookmarks.filter((bookmark, i) => i !== index)
    );

  render() {
    return <Provider value={this.state.device}>{this.props.children}</Provider>;
  }
}

const withBookmark = Component => {
  return function withBookmarks(props) {
    return (
      <Consumer>{state => <Component {...props} bookmarks={state} />}</Consumer>
    );
  };
};

export { BookmarkProvider, withBookmark };
