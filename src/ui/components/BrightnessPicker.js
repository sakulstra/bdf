import React, {Component} from 'react';
import Slider from '@material-ui/lab/Slider';
import {observer} from "mobx-react";
import DomainStore from '../../env/DomainStore';

class BrightnessPicker extends Component{
  render() {
    return (
      <Slider min={0} max={8} step={1} reverse value={DomainStore.currentTerminal.props.brightness} onChange={(e,v) => DomainStore.currentTerminal.props.brightness = v} />
    )
  }
}

export default observer(BrightnessPicker);