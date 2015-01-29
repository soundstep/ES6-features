import soma from 'soma.js';
import {bootstrap} from './bootstrap';
import {StartupCommand} from './commands/startup';

class MyApplication extends soma.Application {

    constructor() {
        super();
    }

    init() {
        bootstrap();
        console.log('-- INIT');
        this.commands.add('startup', StartupCommand);
        this.dispatcher.dispatch('startup');
    }

}

var app = new MyApplication();
