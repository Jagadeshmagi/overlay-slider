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
			// right: 0,
			backgroundColor:'hsla(0,0%,0%,0.4)',
			height: '100%',
			color: '#fff',
			textAlign: 'center',
			fontWeight:600,
			width: '100%',
			transition:'all .9s ease-in-out',
		}


		if (this.state.open) {
			_.assignIn(style, {
				// width: '100%'
				left: 0
			})
		}else{
			_.assignIn(style, {
				left: window.innerWidth - 20
				// width: 20
			})			
		}

		return style;
	}
	clickmaster(){
		console.log('clicked')

		if (this.state.open) {
			this.setState({
				open: false
			});
		} else {
			this.setState({
				open: true
			});
		}
	}

	showOverlayText(){
		let overlayTex;

		if (this.state.open) {
			overlayTex = '>';
		}else{
			overlayTex = '<';		
		}
		return overlayTex;
	}


	overlayContentStyle(){
		let style = {
			position: 'absolute',
			top: 0,
			left: 0,
			marginLeft: 20,
			height: '100%',
			// display:'none'
			width: window.innerWidth - 20,
			zIndex: 9,
			transition:'all .9s ease-in-out',
		}


		if (this.state.open) {
			_.assignIn(style, {
				display:'block'
				// width:window.innerWidth - 20,
			})
		}

		return style;
	}


	ShowOverlayContent(){

		const cnotentImages = this.props.data.overlayItems.map((val, key)=>{
			// console.log(val, key);
			// console.log(val.imgURL);
			return(
					<a style={{width: '33%', height:'100%', float:'left', display:'block'}} key={key} href={val.shopLink} target="_blank">
						<img style={{display: 'block',width:'100%', height: '100%', float:'left', padding: '12px 5px', padding:5}} src={val.imgURL} alt='Look1' />
					</a>
				)
		});
		return cnotentImages;
	}
	render() {
		return(
			<div class="wrap-container">
				<div style={{position:'relative'}} class="container">
					<img onClick={this.clickmaster.bind(this)} style={{display: 'block',width:'100%', height: 300}} src= {this.props.data.masterimage} alt="Master Image" />
					<div style={this.overlayButtonStyle()}>
						<div onClick={this.clickmaster.bind(this)} style={{display: 'table', height:'100%', zIndex: 99}}>

							<div style={{width:20, display:'table-cell', verticalAlign: 'middle'}}>
								{this.showOverlayText()}
							</div>
						</div>
						<div style={this.overlayContentStyle()}>
							{this.ShowOverlayContent()}
						</div>
					</div>
				</div>

			</div>
		);
	}
}