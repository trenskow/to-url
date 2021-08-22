'use strict';

exports = module.exports = (url) => {
	try {
		return new URL(url);
	} catch (_) {
		return;
	}
};
