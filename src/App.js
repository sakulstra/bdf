import React, {Component} from 'react';
import { MainLayout } from './ui/layouts';
import { ColorPicker, BrightnessPicker } from './ui/components';
import CssBaseline from '@material-ui/core/CssBaseline';
import DevTools from 'mobx-react-devtools'

class App extends Component {
  render() {
    return (
        <MainLayout>
          <CssBaseline />
          <ColorPicker />
          <BrightnessPicker />
          <DevTools />
        </MainLayout>
    );
  }
}

export default App;
