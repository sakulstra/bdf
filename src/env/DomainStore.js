import { observable, decorate } from "mobx"

class DeviceStore{
  modi = 0;
  brightness = 0;
  primaryColor = observable({r: 50, g: 105, b: 102, a: 1});
  secondaryColor = observable({r: 131, g: 58, b: 139, a: 1});
}

decorate(DeviceStore, {
  modi: observable,
  brightness: observable
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