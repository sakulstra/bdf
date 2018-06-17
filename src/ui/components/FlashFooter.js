import React,{Component, Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FlashOn from '@material-ui/icons/FlashOn'
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

const sendTillReceived = async (terminal, message) => {
  await terminal.send(message);
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000);
  })
}

const spaceExtend = (num) => {
  num = num.toString();
  if (num.length < 3) return spaceExtend(`0${num}`);
  return num;
}

const colorToString = ({r,g,b}) => `${spaceExtend(r)}${spaceExtend(g)}${spaceExtend(b)}`;

class FlashFooter extends Component {
  flash = async () => {
    const terminal = DomainStore.currentTerminal.terminal;
    const props = DomainStore.currentTerminal.props;
    await sendTillReceived(terminal,`b${props.brightness}`);
    await sendTillReceived(terminal,`p${colorToString(props.primaryColor)}`);
    await sendTillReceived(terminal,`s${colorToString(props.secondaryColor)}`);
    await sendTillReceived(terminal,`m${props.modi}`);
  }

  render() {
    const {classes} = this.props;
    return (
      <Fragment>
        <FormControl className={classes.formControl}>
          <Button className={classes.button} variant="raised" color="primary" onClick={this.flash}>
            Flash
            <FlashOn className={classes.rightIcon} />
          </Button>
        </FormControl>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  devices: state.devices,
  brightness: state.brightness,
  colors: state.colors
});

export default withStyles(styles)(FlashFooter);