/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,

	env: {
		APP_URL: process.env.REACT_APP_URL
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `http://localhost:4200/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
