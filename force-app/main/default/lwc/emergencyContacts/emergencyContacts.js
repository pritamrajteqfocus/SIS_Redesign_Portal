import { LightningElement, api } from 'lwc';

export default class EmergencyContacts extends LightningElement {
@api fields;
    get features() {
        return [
            {
                label: 'Edit the name and description of your component.',
                icon: 'utility:edit',
            },
            {
                label:
                    'Create permanent, shareable URLs that anyone can view within your org.',
                icon: 'utility:save',
            },
            
        ];
    }
}