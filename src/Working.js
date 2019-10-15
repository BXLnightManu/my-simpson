import React, {Component} from 'react';
import logo from './logo.svg';
import Avatar from './Avatar';

const hommerWorking = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2249-homer-simpson-the-incredible-homer.png",
  firstName: "Hommer",
  lastName: "Simpson"
};

class Working extends Component {
  state = {
    working: this.props.working,
    logo: this.props.logo,
    homerImage: this.props.homerImage
  };
  handleClick = () => {
    this.setState({ working: !this.state.working });
    this.setState({ logo: !this.state.logo });
    this.setState({ homerImage: !this.state.homerImage });
  };
  render() {
    const work = this.state.working ? "working!": "having a break...";
    const appLogo = this.state.logo ? "App-logo": "App-logo-off";
    const homerWorkImage = "https://www.stickees.com/files/cartoon/the-simpsons/2249-homer-simpson-the-incredible-homer.png";
    const homerBreakImage = "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png";
    const homerWork = this.state.homerImage ? homerWorkImage: homerBreakImage;

    return (
      [
      <header className="App-header">
        <img src={logo} className={appLogo} alt="logo" />
      </header>,
      <div>
        <button onClick={this.handleClick}>{work.toUpperCase()}</button>
      </div>,
      <img src={homerWork} alt="Homer" />
      ]
    );
  }
}

export default Working;