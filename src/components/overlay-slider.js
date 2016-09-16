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

		console.log(this.refs.img1);
		this.timeline
			.to(this.refs.overlay, 0.5, { x: '-95%', ease: Power1.easeInOut, y: 0 })
			.from(this.refs.img0, 0.5, { y: '100%' }, '-=0.25')
			.from(this.refs.img1, 0.5, { y: '100%' }, '-=0.25')
			.from(this.refs.img2, 0.5, { y: '100%' }, '-=0.25');
	}

	animateStyle(){
		let style={
			width: '100%',
			height:'100%',
			background:'hsla(0,0%,0%,0.7)',
			position:'absolute',
			top: 0,
			left: '95%'
		}
		return style;
	}

	clickmaster(){
		console.log(this.refs.overlay);

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

	// overlayButtonStyle(){
	// 	let style = {
	// 		fontSize: this.props.data.overlayButtonStyle.FontSize,
	// 		backgroundColor: this.props.data.overlayButtonStyle.bgColor,
	// 		color: this.props.data.overlayButtonStyle.color,
	// 		transition:this.props.data.overlayButtonStyle.trans,
	// 		position: 'absolute',
	// 		textAlign: 'center',
	// 		top: 0,
	// 		height: '100%',
	// 		width: '100%',
	// 	}


	// 	if (this.state.open) {
	// 		_.assignIn(style, {
	// 			// width: '100%'
	// 			left: 0
	// 		})
	// 	}else{
	// 		_.assignIn(style, {
	// 			left: window.innerWidth - 20
	// 			// width: 20
	// 		})			
	// 	}

	// 	return style;
	// }

	// showOverlayText(){
	// 	let overlayTex;

	// 	if (this.state.open) {
	// 		overlayTex = '>';
	// 	}else{
	// 		overlayTex = '<';		
	// 	}
	// 	return overlayTex;
	// }


	// overlayContentStyle(){
		// let style = {
		// 	position: 'absolute',
		// 	top: 0,
		// 	left: 0,
		// 	marginLeft: 20,
		// 	height: '100%',
		// 	width: window.innerWidth - 20,
		// 	zIndex: 9,
		// 	transition:'all .5s ease-in-out',
		// }


		// if (this.state.open) {
		// 	_.assignIn(style, {
		// 		display:'block'
		// 		// width:window.innerWidth - 20,
		// 	})
		// }



		// return style;
	// }

	OverlayContentImageStyle(){
		let style = {
			display: 'block',
			width:'33.3%', 
			height: 'auto', 
			float:'left', 
			padding: '12px 5px', 
			padding:5
		}
		return style;
	}

	// cnotentImageStyle(){
	// 	let style = {
	// 		width: '33%', 
	// 		padding: '14px 3px',
	// 		height:'100%', 
	// 		float:'left', 
	// 		display:'block'
	// 	}
	// 	return style;
	// }

	// ShowOverlayContent(){

	// 	const cnotentImages = this.props.data.overlayItems.map((val, key)=>{
	// 		return(
	// 				<a style={this.cnotentImageStyle()} key={key} href={val.shopLink} target="_blank">
	// 					<div style={{display:'table', height:'100%'}}>
	// 						<div  style={{display:'table-cell', verticalAlign: 'middle'}}>
	// 							<img style={this.OverlayContentImageStyle()} src={val.imgURL} alt='Look1' />
	// 						</div>
	// 					</div>
	// 				</a>
	// 			)
	// 	});
	// 	return cnotentImages;
	// }

	ShowOverlayContent(){

		
	}

	render() {

		const cnotentImages = this.props.data.overlayItems.map((val, key)=>{
					console.log('img'+key);
			return(
					<img ref={'img'+key} key={key} style={this.OverlayContentImageStyle()} src={val.imgURL} />
				)
		});

		return(
			<div class="wrap-container">
				<div style={{position:'relative', overflow: 'hidden'}} class="container">
					<img onClick={this.clickmaster.bind(this)} style={{display: 'block',width:'100%'}} src= {this.props.data.masterimage} alt="Master Image" />
					{/*<div style={this.overlayButtonStyle()}>
						<div onClick={this.clickmaster.bind(this)} style={{display: 'table', height:'100%', zIndex: 99}}>
							<div style={{width:20, display:'table-cell', verticalAlign: 'middle', fontWeight: 'bold', fontSize: 22, padding: 4}}>
								{this.showOverlayText()}
							</div>
						</div>
						<div ref="overlay" style={this.overlayContentStyle()}>
							{this.ShowOverlayContent()}
						</div>
					</div>*/}
					<div ref="overlay" onClick={this.clickmaster.bind(this)} style={this.animateStyle()} ref="overlay">
						{cnotentImages}
						{/*<div ref="img1" style={{ display: 'inline-block',width: '33.3%', height: '100%', backgroundColor: 'indigo'}}></div>
						<div ref="img2" style={{display: 'inline-block', width: '33.3%', height: '100%', backgroundColor: 'green'}}></div>
						<div ref="img3" style={{display: 'inline-block', width: '33.3%', height: '100%', backgroundColor: 'yellow'}}></div>*/}
					</div>
				</div>

			</div>
		);
	}
}