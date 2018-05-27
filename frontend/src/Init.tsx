import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'app/core/App';
// import registerServiceWorker from './registerServiceWorker';
import 'assets/index.less';

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.insertBefore(root, document.body.children[0]);

ReactDOM.render(<App />, root);

// registerServiceWorker();
