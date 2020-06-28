import { LightningElement, track, api } from 'lwc';

export default class Main extends LightningElement {
    @api page;
    @api subpage;
    @api contactid;
    @api campusname;
    @api phonenum;
    @api countrycode;
    
    get myProfile() {
        let retVal = false;
        if(this.subpage === 'my-profile') {
            retVal = true;
        }
        return retVal;
    }
}