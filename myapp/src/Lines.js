import React, { Component } from 'react';
import lineData from './line-data';

class Lines extends Component {
    render() {
        return (
            <div>
              {
                lineData.map((line, index) => (
                  <div
                    key={index}
                    style={{ color: '#3C3C3C' }}
                  >
                    {line.line_name}
                  </div>
                ))
              }
            </div>
        );
    }
}

export default Lines;
