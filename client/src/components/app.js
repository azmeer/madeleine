import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import View from './view';

injectTapEventPlugin();

const App = () =>
    (
      <MuiThemeProvider>
        <View />
      </MuiThemeProvider>
    );

export default App;
