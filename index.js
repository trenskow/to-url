'use strict';

exports = module.exports = (url) => {
	try {
		return new URL(url);
	} catch (_) {
		return;
	}
};

exports.withError = (options) => {
	return (url) => {
		try {
			return new URL(url);
		} catch (_) {
			throw Object.assign(new Error('Invalid URL'), options);
		}
	};
};
