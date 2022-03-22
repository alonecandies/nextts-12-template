import React from 'react';
import PropTypes from 'prop-types';
import NotFound from 'pages/404';

export default class ErrorBoundary extends React.Component {
	state: any;

	static propTypes = {
		children: PropTypes.node,
	};

	constructor(props: any) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.error(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <NotFound />;
		}

		return this.props.children;
	}
}
