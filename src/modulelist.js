import _ from 'lodash';
import Module from 'module';

module.exports = class ModuleList {
	constructor() {
		this._modules = {};
	}
	addModule(name, module, overwrite = false) {
		if (!(module instanceof Module)) {
			throw new Error("`module` isn't an instance of `Module`.");
		}

		if (this._modules[name] != null && !overwrite) {
			throw new Error(`Module with name ${name} is already added.`);
		}

		this._modules[name] = new Module(/* TODO: args */);
	}
	restartModule(name) {
		const module = this._modules[name];
		module.restart();
	}
}
