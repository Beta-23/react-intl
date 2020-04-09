import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Spanish from '../languages/es-ES.json';
import English from '../languages/en-US.json';

const Context = React.createContext();

const local = navigator.language;

// eslint-disable-next-line
let lang

if (local === "en-US") {
  lang = English;
} else {
  lang = Spanish;
}

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    function selectLang(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === "es-ES") {
            setMessages(Spanish);
        } else {
            setMessages(English);
        }
    }

    return (
        <Context.Provider value={{ locale, selectLang }}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
}

export default Wrapper;