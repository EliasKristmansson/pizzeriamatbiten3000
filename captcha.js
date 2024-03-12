'use strict';

const e = React.createElement;

class CaptchaButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You are not a robot.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Are you human?'
    );
  }
}

const domContainer = document.querySelector('#captchaButton');
const root = ReactDOM.createRoot(domContainer);
root.render(e(CaptchaButton));