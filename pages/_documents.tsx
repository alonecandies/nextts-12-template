import Document, { Html, Head, Main, NextScript } from 'next/document';
import { metaConfig } from 'configs';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
	render() {
		return (
			<Html lang={metaConfig.lang}>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
