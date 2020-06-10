import React from "react";
import './ContentItem.css'
import Content from './Content'
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1,
      disabledNext: false,
      disabledPrev: false
    };
  }

  togglePrev(e) {
    let index = this.state.index - 1;
    let disabledPrev = index === 0;

    this.setState({
      index: index,
      disabledPrev: disabledPrev,
      disabledNext: false
    });
  }

  toggleNext(e) {
    let index = this.state.index + 1;
    let disabledNext = index === this.props.contents.length - 1;

    this.setState({
      index: index,
      disabledNext: disabledNext,
      disabledPrev: false
    });
  }

  render() {
    const { index, disabledNext, disabledPrev } = this.state;
    const content = this.props.contents ? this.props.contents[index] : null;

    if (content) {
      return (
        <>
        <div>

          <Content {...content} />
      
        <Prev toggle={e => this.togglePrev(e)} active={disabledPrev} />
        <Next toggle={e => this.toggleNext(e)} active={disabledNext} />        
        </div>
        </>
      );
    } else {
      return <span>error </span>;
    }
  }
}

function Prev(props) {
  return (
    <button onClick={props.toggle} disabled={props.active} className="prev-button">
      ←
    </button>
  );
}

function Next(props) {
  return (
    <button onClick={props.toggle} disabled={props.active} className="next-button">
      →	
    </button>
  );
}

export default Main;
