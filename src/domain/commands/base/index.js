import Events from 'events';


export default class BaseCommand extends Events {
    constructor(){
        super();
    }

    async execute() {

    }
}