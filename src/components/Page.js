import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import '../css/main.css';


import OverlaySlider from './overlay-slider';
import OverlaySliderData from '../data/overlay-slide-data';

import Ga from '../functions/Ga';

export default class Page extends React.Component {

	render() {

		return(
			<div>
			
				<OverlaySlider data={OverlaySliderData} />
			</div>			
		);

	}

}