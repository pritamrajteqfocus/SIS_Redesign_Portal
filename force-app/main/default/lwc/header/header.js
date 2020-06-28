import { LightningElement, track, api} from 'lwc';

export default class Header extends LightningElement {
    @api user;
    @api username;
    @api useremail;
}