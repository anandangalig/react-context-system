import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ButtonContext from '../contexts/ButtonContext';

class Button extends React.Component {
  // contextType + this.context only works with single context. ANything more, needs Provider and Consumer
  // static contextType = LanguageContext;

  render() {
    return (
      <ButtonContext.Consumer>
        {buttonColor => {
          return (
            <button className={`ui button ${buttonColor}`}>
              <LanguageContext.Consumer>
                {value => {
                  return value === 'english' ? 'Submit' : 'Voorlaggen';
                }}
              </LanguageContext.Consumer>
            </button>
          );
        }}
      </ButtonContext.Consumer>
    );
  }
}

export default Button;
