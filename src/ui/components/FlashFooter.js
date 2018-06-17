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
  // add some extra delay to make sure the transfer is actually finished
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 100);
  });
}

const spaceExtend = (num, length = 3) => {
  num = num.toString();
  if (num.length < length) return spaceExtend(`0${num}`, length);
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
    await sendTillReceived(terminal,`d${spaceExtend(props.speed, 2)}`);
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

export default withStyles(styles)(FlashFooter);