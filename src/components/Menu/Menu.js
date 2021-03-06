import BaseComponent from 'components/BaseComponent';
import EventBus from 'services/EventBus';
import Events from 'consts/Events';
import menuItems from 'consts/Menu';
import Routes from 'consts/Routes';
import template from 'components/Menu/Menu.hbs';

export default class Menu extends BaseComponent {
    constructor(context = {}) {
        super(context);
        this._template = template;

        this._onGoToUploadToIPFSBlockHandler = this._onGoToUploadToIPFSBlock.bind(this);
        EventBus.on(Events.GoToUploadToIPFSBlock, this._onGoToUploadToIPFSBlockHandler);

        this._context.menuItems = menuItems;
    }

    _onGoToUploadToIPFSBlock(data) {
        EventBus.emit(Events.ChangePath, {path: Routes.UploadToIPFS, blockID: data.id});
    }

    off() {
        EventBus.off(Events.GoToUploadToIPFSBlock, this._onGoToUploadToIPFSBlockHandler);
    }
}
