import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link rel="preconnect" href="https://fonts.gstatic.com"></link>

				<link
					href="https://fonts.googleapis.com/css2?family=Aldrich&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				></link>
				<link
					href="'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap'"
					rel='stylescheet'
				></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
