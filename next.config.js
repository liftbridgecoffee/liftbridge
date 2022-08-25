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
			config.node = {
				fs: "empty",
			};
		}
	},
};
