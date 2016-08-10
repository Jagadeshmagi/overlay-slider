import React from 'react';
import _ from 'lodash';

import Ga from '../functions/Ga';

import OverlaySliderData from '../data/overlay-slide-data';

export default class OverlaySlider extends React.Component {	
	constructor(){
		super();
		this.state = {
			open: false,
			ImagesLoades: false
		}
	}

	overlayButtonStyle(){
		let style = {
			position: 'absolute',
			fontSize: 18,
			top: 0,
			right: 0,
			backgroundColor:'hsla(0,0%,0%,0.4)',
			width: 20,
			height: '100%',
			color: '#fff',
			textAlign: 'center',
			fontWeight:600
		}
		return style;
	}

	render() {
		return(
			<div class="wrap-container">
				<div style={{position:'relative'}} class="container">
					<img style={{width:'100%'}} src= {this.props.data.masterimage} alt="Master Image" />
					<div  style={this.overlayButtonStyle()}>
						<div style={{display: 'table', height:'100%'}}>
							<div style={{width:20, display:'table-cell', verticalAlign: 'middle'}}>&#60;</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}