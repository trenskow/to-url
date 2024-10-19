const toUrl = (url) => {
	try {
		return new URL(url);
	} catch (_) {
		return;
	}
};

toUrl.withError = (options) => {
	return (url) => {
		try {
			return new URL(url);
		} catch (_) {
			throw Object.assign(new Error('Invalid URL'), options);
		}
	};
};

export default toUrl;
