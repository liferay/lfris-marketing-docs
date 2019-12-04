import {withPrefix} from 'gatsby';
import React from 'react';

const ErrorPage = ({location}) => (
	<img alt='not found' src={withPrefix('images/404_Illustration.jpg')}></img>
);

export default ErrorPage;
