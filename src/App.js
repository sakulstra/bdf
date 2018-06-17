import React, {Component} from 'react';
import { MainLayout } from './ui/layouts';
import { ColorPicker, BrightnessPicker, SpeedPicker, ModeHeader, FlashFooter } from './ui/components';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
        <MainLayout>
          <ModeHeader />
          <CssBaseline />
          <ColorPicker />
          <BrightnessPicker />
          <SpeedPicker/>
          <FlashFooter />
        </MainLayout>
    );
  }
}

export default App;
