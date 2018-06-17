import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FlashFooter, ModeHeader, DeviceSelector } from '../components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BluetoothConnected from '@material-ui/icons/BluetoothConnected';
import BluetoothTerminal from 'bluetooth-terminal';
import {observer} from "mobx-react";
import DomainStore from '../../env/DomainStore';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1,
  },
});

class MainLayout extends Component{
  addDevice = () => {
    const terminal = new BluetoothTerminal();
    terminal.connect().then(() => {
      DomainStore.addTerminal(terminal);
    });
  }

  render() {
    const {children, classes} = this.props;
    return (
      <div className={classes.root}>
      <Grid container direction="column" justify="space-around" alignItems="center">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              BDF
            </Typography>
              <div>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.addDevice}
                  color="inherit"
                >
                  <BluetoothConnected />
                </IconButton>
              </div>
          </Toolbar>
        </AppBar>
        <Grid item xs={12}>
          <DeviceSelector />
        </Grid>
        {DomainStore.currentTerminal && <>
          <Grid item xs={12}>
            <ModeHeader />
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
          <Grid item xs={12}>
            <FlashFooter />
          </Grid>
        </>}
      </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(observer(MainLayout));