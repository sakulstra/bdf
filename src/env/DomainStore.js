import { observable, decorate } from "mobx"

class DeviceStore{
  modi = 0;
  brightness = 0;
  primaryColor = observable({r: 50, g: 105, b: 102, a: 1});
  secondaryColor = observable({r: 131, g: 58, b: 139, a: 1});
  speed = 5;
  lastState = {};

  get changes() {
    const result = {};
    if (this.lastState.modi !== this.modi) result.modi = this.modi;
    if (this.lastState.brightness !== this.brightness) result.brightness = this.brightness;
    if (this.lastState.speed !== this.speed) result.speed = this.speed;
    result.primaryColor = this.primaryColor;
    result.secondaryColor = this.secondaryColor;
    return result;
  }
}

decorate(DeviceStore, {
  modi: observable,
  brightness: observable,
  speed: observable
})

class DomainStore{
  currentTerminal = null;
  terminals = observable([]);

  addTerminal = terminal => {
    this.terminals.push({name: terminal.getDeviceName(), terminal: terminal, props: new DeviceStore()})
  }

  selectTerminal = name => this.currentTerminal = this.terminals.find(terminal => terminal.name === name);
}

decorate(DomainStore, {
  currentTerminal: observable,
});


export default new DomainStore();