import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'app/core/App';
import registerServiceWorker from './registerServiceWorker';
import 'assets/index.less';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
