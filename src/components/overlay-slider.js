import React from 'react';
import _ from 'lodash';
import { TweenLite, TimelineLite } from 'gsap';


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

	componentDidMount() {
		this.timeline = new TimelineLite({ paused: true });
		
		// console.log(this.refs.img1);
		this.timeline
			.to(this.refs.overlay, 0.5,{ x: '-94%', ease: Power1.easeInOut, y: 0 })
			.from(this.refs.img0, 0.5, { y: '100%' }, '-=0.25')
			.from(this.refs.img1, 0.5, { y: '100%' }, '-=0.25')
			.from(this.refs.img2, 0.5, { y: '100%' }, '-=0.25')
			.from(this.refs.openArrow, 1, {x:+2,rotation: '+=180', ease:  Back.easeOut.config(1)}, '-=1')
			.to(this.refs.openArrow, 1, {x:+3,rotation: '+=180', ease:  Back.easeOut.config(1)}, '-=1');
	}





	animateStyle(){
		let style={
			width: '100%',
			height:'100%',
			background:'hsla(0,0%,0%,0.7)',
			position:'absolute',
			top: 0,
			left: '94%'
		}
		return style;
	}

	clickmaster(e){
	console.log(e.target.closest('a'));

		if (e.target.closest('a')) {

				this.setState({
					open: true
				});
				this.timeline.play();
		}
	
		else{
			if (this.state.open) {
				this.setState({
					open: false
				});
				this.timeline.reverse();
			} else {
				this.setState({
					open: true
				});
				this.timeline.play();
			}
		}
	}


	OverlayContentImageStyle(){
		let style = {
			display: 'block',
			width:'33.3%', 
			height: 'auto', 
			float:'left', 
			padding: '12px 5px', 
			padding:'32px 5px 0px 19px'
		}
		return style;
	}

	// showOverlayText(){
	// 	let overlayTex;

	// 	if (this.state.open) {
	// 		overlayTex = '>';
	// 	}else{
	// 		overlayTex = '<';		
	// 	}
	// 	return overlayTex;
	// }

	render() {
// console.log(this.props.data.overlayItems.map(val, key));
		const cnotentImages = this.props.data.overlayItems.map((val, key)=>{
					// console.log('img'+key);
			return(
					<a key={key} href={val.shopLink} target="_blank"><img ref={'img'+key}  style={this.OverlayContentImageStyle()} src={val.imgURL} /></a>
				)
		});

		return(
			<div class="wrap-container">
				<div style={{position:'relative', overflow: 'hidden'}} class="container">
					<img onClick={this.clickmaster.bind(this)} style={{display: 'block',width:'100%'}} src= {this.props.data.masterimage} alt="Master Image" />
		
					

					<div ref="overlay" onClick={this.clickmaster.bind(this)} style={this.animateStyle()} ref="overlay">
						<div ref="openArrow" style={{color:'#fff', fontWeight: 'bold', fontSize: 22, padding: '4px 0px' ,top:'40%',position:'absolute',zIndex:1}}>></div>
						{cnotentImages}
						
					</div>
			
					
				</div>

			</div>
		);
	}
}