import BaseComponent from 'components/BaseComponent';
import Events from 'consts/Events';
import ExtractFromStorageFormItems from 'consts/ExtractFromStorageItems';
import Routes from 'consts/Routes';
import StandardButton from 'components/BaseComponents/StandardButton/StandardButton';
import template from 'components/ExtractFromStorageForm/ExtractFromStorageForm.hbs';
import TextInput from 'components/BaseComponents/TextInput/TextInput';

export default class ExtractFromStorageForm extends BaseComponent {
    constructor(context = {}) {
        super(context);
        this._template = template;
        this._context.input = [];

        for (const i in ExtractFromStorageFormItems) {
            if (Object.prototype.hasOwnProperty.call(ExtractFromStorageFormItems, i)) {
                this._context.input.push((new TextInput(ExtractFromStorageFormItems[i])).render());
            }
        }

        this._context.RegisterPath = Routes.ExtractFromStorage;
        this._context.RegisterEvent = Events.ChangePath;

        this._context.StandardButton = (new StandardButton({
            buttonName: 'Extract license',
            event: Events.ExtractFromStorageSubmit,
        })).render();
    }
}
