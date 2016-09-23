import React from 'react';
import _ from 'lodash';
import { TweenLite, TimelineLite } from 'gsap';
import { Link, Element } from 'react-scroll';
import Ga from '../functions/Ga';
// import KurtaSolids from '../data/ethinic/kurta-solids';
// import KurtaPrints from '../data/ethinic/kurta-prints';
// import KurtaIndoWestern from '../data/ethinic/kurta-indo-western';
// import KurtaSets from '../data/ethinic/kurta-sets';
// import Tops from '../data/westren/tops';
// import Shirts from '../data/westren/shirts';
// import DressesNJumpsuit from '../data/westren/dresses-n-jumpsuit';
// import Jackets from '../data/westren/jackets';
export default class OverlaySlider extends React.Component {	
	constructor(props){
		super(props);
		this.state = {
			open:false,
			ImagesLoades: false
		}
	}

	componentDidMount() {
		this.windowHeight = window.innerHeight;

		window.addEventListener('scroll', this.handelScroll.bind(this));
		this.timeline = new TimelineLite({ paused: true });
		
		// console.log(this.refs.img1);
		this.timeline
			.to(this.refs.overlay, 0.5,{ x: '-100%', ease: Power1.easeInOut, y: 0 },0)
			// .from(this.refs.img0, 0.5, { y: +350 }, '-=0.25')
			// .from(this.refs.img1, 0.5, { y: +350 }, '-=0.25')
			// .from(this.refs.img2, 0.5, { y: +350 }, '-=0.25')
			.from(this.refs.openArrow, 0.1, {x:-1,rotation: '+=180'}, 0)
			.to(this.refs.openArrow, 0.1, {x:+16,rotation: '+=180'}, 0)
			.from(this.refs.viewAll, 0.6, { y: +150 }, '-=0.25');

		// if (this.props.isOpen) {
		// 	this.timeline.play();
		// }
	}
	componentWillUnmount(){
		window.removeEventListener('scroll', this.handelScroll.bind(this));

	}

	handelScroll(){
		const windowTopOffset = window.pageYOffset;
		const windowBottomOffset = windowTopOffset + this.windowHeight;
		const topOffset = this.refs.wrapper.offsetTop;
		const bottomOffset = topOffset + this.refs.wrapper.offsetHeight;
		// console.log('hi scroll',windowBottomOffset, bottomOffset);

		if(windowBottomOffset >= bottomOffset + this.windowHeight * 0.11 && windowTopOffset <= topOffset + this.windowHeight * 0.11){
			// setTimeout(()=>{
				this.setState({
					open: true
				});
				this.timeline.play();
				
			// }, 500);
		}
		else if(windowTopOffset >= bottomOffset  || windowBottomOffset <= topOffset){
				this.setState({
					open: false
				});
				this.timeline.reverse();
			
		}
	}

	animateStyle(){
		let style={
			width: '100%',
			height:'100%',
			// background:'hsla(0,0%,0%,0.7)',
			position:'absolute',
			top: 0,
			left: '100%'
		}
		return style;
	}



	clickmaster(e){
	console.log(e.target.closest('a'));
	// Ga({action:'overShop', label: e.target.closest('a').href});
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
			// padding: 8,
			padding: '6.8px 4px', 
			// padding:'5px 3px 0px 22px'
		}
		return style;
	}
	clickArrow(){

		let styleArrow = {
			lineHeight: '1em',
			background:'#FFCF44',
    		borderBottomRightRadius: '50%',
    		borderTopRightRadius: '50%',
    		color:'#fff', 
    		fontWeight: 'bold',
    		fontSize: 15, 
    		padding: '7px 4px',
    		bottom:0,
    		position:'absolute',
    		zIndex:1,
    		left: '-16px'
		}
		return styleArrow;
	}
	handelScrollLink(e) {
		Ga({ action: 'scrollTo', label: e.target.alt});
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
		// console.log(this.props.data.link);
		const cnotentImages = this.props.data.overlayItems.map((val, key)=>{
					// console.log('img'+key);
		return(
				<div key={key}>
				<a  href={val.shopLink} target="_blank"><img ref={'img'+key}  style={this.OverlayContentImageStyle()} src={val.imgURL} /></a>
				{/*<a key={key} href={val.viewAll}>View</a>*/}
				</div>
		)
	});

	// const viewAllB= this.props.data.overlayItems.map((val, key)=>{
	// 	return(				
	// 		<a key={key} href={val.viewAll} target="_blank">						
	// 		</a>
	// 	)
	// });
	return(
		
		<div ref = 'wrapper' className="wrap-container">
		
			<div style={{position:'relative', overflow: 'hidden'}} class="container">
				<img className={(this.state.open)?'blurImg transition':'transition'} onClick={this.clickmaster.bind(this)} style={{display: 'block',width:'100%'}} src= {this.props.data.masterimage} alt="Master Image" />
	
				

				<div ref="overlay" onClick={this.clickmaster.bind(this)} style={this.animateStyle()} ref="overlay">
					<div ref="openArrow" style={this.clickArrow()}>></div>
					<div style={{width:'100%', background:'#efefef',height: '56%', bottom: 0, position: 'absolute'}}>{cnotentImages}</div>
					{/*<a href="https://www.myntra.com" target="_blank" style={{color:'#fff'}}>*/}
						<a href={this.props.data.link} target="_blank"><div ref="viewAll" style={{background:'rgb(101, 98, 98)',fontSize:'12px',color:'#fff', padding: '1% 5%',position:'absolute',bottom:'2%',left:'37%', textAlign:'center'}}>
						VIEW ALL</div></a>
					{/*</a>*/}

				</div>

			</div>
		</div>

	);
	}
}