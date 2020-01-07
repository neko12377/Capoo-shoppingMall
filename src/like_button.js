'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return (
        <div class = "nav-link">
          <i className = "icon far fa-thumbs-up finger thumbUp" 
             onClick={() => this.setState({liked: false}) }>
          </i>
        </div>  
      );
    }

    return (
      <div class = "nav-link">
        <i className = "icon far fa-thumbs-up finger" 
           onClick={() => this.setState({ liked: true }) }>
        </i>
      </div>  
    );
  }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);