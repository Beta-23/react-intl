import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage, FormattedDate } from 'react-intl';

import { Context } from './components/Wrapper';

function App(props) {
  const context = useContext(Context);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <select value={context.locale} onChange={context.selectLang}>
          <option value="en-US">ENGLISH</option>
          <option value="es-ES">SPANISH</option>
        </select>
        <br />
        <FormattedMessage id="app.content" defaultMessage="What is Lorem" />
        <br />
        <FormattedMessage id="app.header" 
        defaultMessage="Edit <code>src/App.js</code> and save to reload."
        values={{fileName: "src/App.js", code: (word) => <code>{word}</code> }}
        />
        <p></p>
        <FormattedMessage id="app.channel.plug" 
        defaultMessage="Code brought to you by Coding with ad" 
        values={{channelName:"AD"}}
        />
        <a
          className="App-link"
          href="https://github.com/Beta-23/react-intl"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <br />
        <FormattedDate
          value={props.date}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </header>
    </div>
  );
}

export default App;
