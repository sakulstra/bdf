import React,{Component} from 'react';
import {observer} from "mobx-react";
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import DomainStore from '../../env/DomainStore';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 180,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class DeviceSelector extends Component{
  handleChange = event => {
    DomainStore.selectTerminal(event.target.value)
  };

  render() {
    const {classes} = this.props;
    return (
      <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="device">Device</InputLabel>
        <Select
          value={(DomainStore.currentTerminal && DomainStore.currentTerminal.name) || ''}
          onChange={this.handleChange}
          inputProps={{
            name: 'device',
            id: 'device'
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {DomainStore.terminals.map((terminal, ix) => <MenuItem key={ix} value={terminal.name}>{terminal.name}</MenuItem>)}
        </Select>
      </FormControl>
      </div>
    )
  }
}

export default withStyles(styles)(observer(DeviceSelector));