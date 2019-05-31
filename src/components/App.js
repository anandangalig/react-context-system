import React from 'react';
import UserForm from './UserForm';
import LanguageContext from '../contexts/LanguageContext';
import ButtonContext from '../contexts/ButtonContext';

class App extends React.Component {
  state = { language: 'english' };

  setLanguage = lang => {
    this.setState({ language: lang });
  };

  render() {
    return (
      <div className="ui container">
        <h3>Select a language:</h3>
        <i
          onClick={() => {
            this.setLanguage('english');
          }}
          className="flag us"
        />
        <i
          onClick={() => {
            this.setLanguage('dutch');
          }}
          className="flag nl"
        />
        <LanguageContext.Provider value={this.state.language}>
          <ButtonContext.Provider value="red">
            <UserForm />
          </ButtonContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
