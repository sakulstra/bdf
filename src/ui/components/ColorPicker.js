import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import {observer} from "mobx-react";
import DomainStore from '../../env/DomainStore';

const styles = theme => ({

});

class ColorPicker extends Component {
  render() {
    return (
      <div>
        <ChromePicker disableAlpha onChangeComplete={(color) => {
          DomainStore.currentTerminal.props.primaryColor = color.rgb;
        }} color={DomainStore.currentTerminal.props.primaryColor}/>
        <ChromePicker disableAlpha onChangeComplete={(color) => DomainStore.currentTerminal.props.secondaryColor = color.rgb} color={DomainStore.currentTerminal.props.secondaryColor}/>
      </div>
    )
  }
}

export default withStyles(styles)(observer(ColorPicker));