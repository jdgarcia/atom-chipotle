'use babel';

import { CompositeDisposable } from 'atom';
import ChipotleButton from './chipotle-button';

export default {

  disposables: null,

  activate() {
    this.disposables = new CompositeDisposable();

    this.disposables.add(atom.commands.add('atom-workspace', {
      'chipotle:order': this.openChipotlePage
    }));
  },

  deactivate() {
    this.disposables.dispose();
  },

  consumeStatusBar(statusBar) {
    if (!this.statusBarButton) {
      this.disposables.add(new ChipotleButton(statusBar, this.openChipotlePage));
    }
  },

  openChipotlePage() {
    require('electron').shell.openExternal('https://order.chipotle.com/');
  }

};
