import React,{Component, Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import {MODI} from '../../utils/enums';
import {observer} from "mobx-react";
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

class ModeHeader extends Component {
  handleChange = event => {
    DomainStore.currentTerminal.props.modi = event.target.value;
  };

  render() {
    const {classes} = this.props;
    return (
      <Fragment>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="device">I bims im modus</InputLabel>
          <Select
            value={DomainStore.currentTerminal && DomainStore.currentTerminal.props.modi}
            onChange={this.handleChange}
            inputProps={{
              name: 'mode',
              id: 'mode'
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {MODI.map((modus, ix) => <MenuItem key={modus} value={ix}>{modus}</MenuItem>)}
          </Select>
        </FormControl>
      </Fragment>
    )
  }
}

export default withStyles(styles)(observer(ModeHeader));