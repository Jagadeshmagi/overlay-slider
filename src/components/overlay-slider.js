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
			fontSize: this.props.data.overlayButtonStyle.FontSize,
			backgroundColor: this.props.data.overlayButtonStyle.bgColor,
			color: this.props.data.overlayButtonStyle.color,
			transition:this.props.data.overlayButtonStyle.trans,
			position: 'absolute',
			textAlign: 'center',
			top: 0,
			height: '100%',
			width: '100%',
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
			width: window.innerWidth - 20,
			zIndex: 9,
			transition:'all .5s ease-in-out',
		}


		if (this.state.open) {
			_.assignIn(style, {
				display:'block'
				// width:window.innerWidth - 20,
			})
		}

		return style;
	}

	OverlayContentImageStyle(){
		let style = {
			display: 'block',
			width:'100%', 
			height: 'auto', 
			float:'left', 
			padding: '12px 5px', 
			padding:5
		}
		return style;
	}

	cnotentImageStyle(){
		let style = {
			width: '33%', 
			padding: '14px 3px',
			height:'100%', 
			float:'left', 
			display:'block'
		}
		return style;
	}

	ShowOverlayContent(){

		const cnotentImages = this.props.data.overlayItems.map((val, key)=>{
			return(
					<a style={this.cnotentImageStyle()} key={key} href={val.shopLink} target="_blank">
						<div style={{display:'table', height:'100%'}}>
							<div  style={{display:'table-cell', verticalAlign: 'middle'}}>
								<img style={this.OverlayContentImageStyle()} src={val.imgURL} alt='Look1' />
							</div>
						</div>
					</a>
				)
		});
		return cnotentImages;
	}
	render() {
		return(
			<div class="wrap-container">
				<div style={{position:'relative', overflow: 'hidden'}} class="container">
					<img onClick={this.clickmaster.bind(this)} style={{display: 'block',width:'100%'}} src= {this.props.data.masterimage} alt="Master Image" />
					<div style={this.overlayButtonStyle()}>
						<div onClick={this.clickmaster.bind(this)} style={{display: 'table', height:'100%', zIndex: 99}}>

							<div style={{width:20, display:'table-cell', verticalAlign: 'middle', fontWeight: 'bold', fontSize: 22, padding: 4}}>
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