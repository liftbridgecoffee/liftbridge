// module.exports = {
// 	reactStrictMode: true,
// 	eslint: {
// 		ignoreDuringBuilds: true,
// 	},
// };
module.exports = {
	webpack: (config, { isServer }) => {
		// Fixes npm packages that depend on `fs` module
		if (!isServer) {
			config.resolve.fallback = {
				fs: false,
				child_process: false,
				net: false,
				dns: false,
				tls: false,
				http2: false,
			};
		}

		return config;
	},
};
