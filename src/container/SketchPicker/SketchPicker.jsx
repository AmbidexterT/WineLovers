import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import reactCSS from 'reactcss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SketchPicker } from 'react-color';

class SketchExample extends React.Component {
  state = {
    displayColorPicker: false,
    // eslint-disable-next-line react/no-unused-state
    color: {
      r: 241,
      g: 112,
      b: 19,
      a: 1,
    },
  };

  handleClick = () => {
    // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ color: color.rgb });
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: 'rgba(241, 112, 19, 1)',
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        { this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            {/* eslint-disable-next-line react/destructuring-assignment */}
            <SketchPicker color={this.state.color} onChange={this.handleChange} />
          </div>
        ) : null }
      </div>
    );
  }
}

export default SketchExample;
