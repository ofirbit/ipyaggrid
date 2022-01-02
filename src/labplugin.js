import * as base from '@jupyter-widgets/base';
import { version } from './index';
import * as myWidget from './widget';

const id = 'ipyaggrid';
const requires = [base.IJupyterWidgetRegistry];
const autoStart = true;

const activate = (app, widgets) => {
    console.log('JupyterLab extension ipyaggrid is activated!');

    widgets.registerWidget({
        name: 'ipyaggrid',
        version,
        exports: myWidget,
    });
};

export default {
    id,
    requires,
    activate,
    autoStart,
};
