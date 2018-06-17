import React, {Component} from 'react';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import {observer} from "mobx-react";
import DomainStore from '../../env/DomainStore';

class SpeedPicker extends Component{
  render() {
    return (
      <div>
        <Typography id="label">Delay x {DomainStore.currentTerminal.props.speed}</Typography>
        <Slider min={1} max={25} step={1} aria-labelledby="label" value={DomainStore.currentTerminal.props.speed} onChange={(e,v) => DomainStore.currentTerminal.props.speed = v} />
      </div>
    )
  }
}

export default observer(SpeedPicker);