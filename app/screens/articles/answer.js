import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';


class App extends React.Component {
  render() {
    return <ReactTypeformEmbed url="https://douglas409385.typeform.com/to/mBrgQw" />;
  }
}

const styles = RkStyleSheet.create(theme => ({
    container: {
      backgroundColor: theme.colors.screen.scroll,
      paddingVertical: 8,
      paddingHorizontal: 14,
    },
    card: {
      marginVertical: 8,
    },
    time: {
      marginTop: 5,
    },
  }));