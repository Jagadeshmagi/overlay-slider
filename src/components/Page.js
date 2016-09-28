import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Element } from 'react-scroll';
import 'normalize.css/normalize.css';
import '../css/main.css';
import OverlaySlider from './overlay-slider';
import KurtaSolids from '../data/ethinic/kurta-solids';
import KurtaPrints from '../data/ethinic/kurta-prints';
import KurtaIndoWestern from '../data/ethinic/kurta-indo-western';
import KurtaSets from '../data/ethinic/kurta-sets';
import Tops from '../data/westren/tops';
import Shirts from '../data/westren/shirts';
import DressesNJumpsuit from '../data/westren/dresses-n-jumpsuit';
import Jackets from '../data/westren/jackets';
// import WestrenSliderData from '../data/westren-slide-data';
// import PowerSliderData from '../data/power-slide-data';
import Ga from '../functions/Ga';
import Carousel from './carousel';

export default class Page extends React.Component {
	handelScrollLink(e){

		Ga({ action: 'scrollTo', label: e.target.alt});
	}
	shopProduct(e){
		Ga({ action: 'shopProduct', label: e.target.closest('a').href});
	}
	shopBrand(e){
		Ga({ action: 'shopBrand', label: e.target.closest('a').href});
	}
	lookBook(e){
		Ga({ action: 'shopLook', label: e.target.closest('a').href});
	}
	viewall(e){
		Ga({action:'shopAll', label:e.target.closest('a').href});
	}
	render() {

		return(


		<div className="mainWrapper">
				
				<img onClick={this.handelScrollLink} src="http://assets.myntassets.com/v1474104195/radium/office-men/business-casual-blank-banner.jpg" />
				<div style={{width:"76%",position:'absolute',top:'19%',left:'15%'}}>
					<Link to="ethinic" smooth={true} duration={500}>
						<img  alt="ethinic" onClick={this.handelScrollLink} src="http://assets.myntassets.com/assets/images/lookbook/2016/9/21/11474440635433-workwear-women-ethnic-casual-button.png" style={{width:'33.3%',float:'left',position: 'relative',}} />
					</Link>

					<Link to="westren" smooth={true} duration={500}>
						<img  alt="westren" onClick={this.handelScrollLink} src="http://assets.myntassets.com/assets/images/lookbook/2016/9/21/11474440635349-workwear-women-western-casual-button.png" style={{width:'33.3%',float:'left',position: 'relative',left:'-4%'}} />
					</Link>

					<Link to="power" smooth={true} duration={500}>
						<img  alt="power" onClick={this.handelScrollLink} src="http://assets.myntassets.com/assets/images/lookbook/2016/9/21/11474440635363-workwear-women-power-dressing-button.png" style={{width:'33.3%',float:'left',position: 'relative',left:'-8%'}} />
					</Link>

				</div>

			<Element name="ethinic">
				<img src="http://assets.myntassets.com/assets/images/lookbook/2016/9/22/11474541363522-workwear-women-mock-01_02.jpg" style={{width:'100%'}} />
				<div>
				
					<OverlaySlider isOpen={true} data={KurtaSolids} />
					<img src="http://assets.myntassets.com/v1474550980/radium/office-women/workwear-women-divider.png" style={{margin:'3% 0%'}} />
					<OverlaySlider isOpen={true} data={KurtaPrints} />
					<img src="http://assets.myntassets.com/v1474550980/radium/office-women/workwear-women-divider.png"  style={{margin:'3% 0%'}}/>
					<OverlaySlider isOpen={true} data={KurtaIndoWestern} />
					<img src="http://assets.myntassets.com/v1474550980/radium/office-women/workwear-women-divider.png"  style={{margin:'3% 0%'}}/>
					<OverlaySlider isOpen={true} data={KurtaSets} />
					<div className="KurtaBottomWear" >
						<img src ='http://assets.myntassets.com/v1474541970/radium/office-women/workwear-women-mock-01_04.jpg' />
						<div style={{width:'100%'}} onClick={this.shopProduct}>
							<a href='http://www.myntra.com/leggings-churidar-salwar-menu?src=tNav&f=Length_article_attr%3Aankle%2520length%2Cchuridar%2520length%3A%3APattern_article_attr%3Asolid%3A%3Acategories%3ALeggings' target='_blank'>
								<img src = "http://assets.myntassets.com/assets/images/lookbook/2016/9/22/11474540451952-bottomwear-leggings.jpg"style={{width:'33.3%',float:'left',padding:'3%'}}  />
							</a>
							<a href='http://www.myntra.com/leggings-churidar-salwar-menu?src=tNav&f=categories%3AChuridar' target='_blank'>
								<img src = "http://assets.myntassets.com/assets/images/lookbook/2016/9/22/11474540452004-bottomwear-churidar.jpg"style={{width:'33.3%',float:'left',padding:'3%'}}  />
							</a>
							<a href='http://www.myntra.com/fusion-skirts-trousers-menu?f=Length_article_attr%3Aankle%2Clong%3A%3AType_article_attr%3Apalazzos%3A%3Acategories%3ATrousers' target='_blank'>
								<img src = "http://assets.myntassets.com/assets/images/lookbook/2016/9/22/11474540451925-bottomwear-palazzos.jpg"style={{width:'33.3%',float:'left',padding:'3%'}}  />
							</a>
						</div>
						<div style={{width:'100%'}} onClick={this.shopProduct}>
							<a href='http://www.myntra.com/fusion-skirts-trousers-menu?f=Fit_article_attr%3Aregular%2Cskinny%2Cslim%3A%3APattern_article_attr%3Asolid%2520%252F%2520plain%3A%3AType_article_attr%3Aflat%2520front%2520trousers%3A%3Acategories%3ATrousers' target='_blank'>
								<img src = "http://assets.myntassets.com/assets/images/lookbook/2016/9/22/11474540451881-bottomwear-trousers.jpg"style={{width:'33.3%',float:'left',padding:'3%'}}  />
							</a>
							<a href='http://www.myntra.com/leggings-churidar-salwar-menu?src=tNav&f=Base_Design_article_attr%3Asolid%2520%252F%2520plain%3A%3AOccasion_article_attr%3Adaily%2520wear%2Cwork%2520wear%3A%3Acategories%3ASalwar' target='_blank'>
								<img src = "http://assets.myntassets.com/assets/images/lookbook/2016/9/22/11474540451908-bottomwear-salwar.jpg"style={{width:'33.3%',float:'left',padding:'3%'}}  />
							</a>
							<a href='http://www.myntra.com/jeans-and-jeggings-menu?src=tNav&f=Denim_Fade_article_attr%3Ano%2520fade%3A%3ADenim_Shade_article_attr%3Adark%2Clight%2Cmedium%3A%3ADistress%252FTorn_article_attr%3Aclean%2520look%3A%3AFit_article_attr%3Aregular%2520fit%2Crelaxed%2520fit%2Cskinny%2520fit%2Cslim%2520fit%2Csuper%2520skinny%2520fit%3A%3ALength_article_attr%3Aankle%2520length%2Cfull%2520length%3A%3Acategories%3AJeans' target='_blank'>
								<img src = "http://assets.myntassets.com/assets/images/lookbook/2016/9/22/11474540451980-bottomwear-jeans.jpg"style={{width:'33.3%',float:'left',padding:'3%'}}  />
							</a>
							<a href='http://www.myntra.com/women-work-dress-material' target='_blank'>
								<img src = "http://assets.myntassets.com/v1475053327/radium/office-women/workwear-women-dress-material.jpg"style={{width:'100%',float:'left',padding:'3%'}}  />
							</a>
						</div>
					</div>
				</div>	

				<div className="ethinicFeatures" onClick={this.shopBrand}>
					<img src='http://assets.myntassets.com/v1474541970/radium/office-women/workwear-women-mock-01_06.jpg' />
					<div style={{minHeight:'100%'}}>
					<Carousel decorators={[]} autoplay={true} style={{minHeight:'100%'}}>
						<a href='http://www.myntra.com/women-ethnic-casual-w' target='_blank'>
							<img src="http://assets.myntassets.com/v1474545296/radium/office-women/W.jpg"style={{minHeight:'100%'}} />
						</a>
						<a href='http://www.myntra.com/women-ethnic-casual-gerua' target='_blank'>
							<img src="http://assets.myntassets.com/v1474545294/radium/office-women/gerua.jpg"style={{minHeight:'100%'}} />
						</a>
						<a href='http://www.myntra.com/women-ethnic-casual-anouk' target='_blank'>
							<img src="http://assets.myntassets.com/v1474545294/radium/office-women/anouk.jpg"style={{minHeight:'100%'}} />
						</a>
					</Carousel>
					</div>
				</div>			
			</Element>

			<Element name="westren">
				<img src="http://assets.myntassets.com/assets/images/lookbook/2016/9/22/11474541363510-workwear-women-mock-01_08.jpg" style={{width:'100%'}} />
				<div>
				
					<OverlaySlider isOpen={true} data={Tops} />
					<img src="http://assets.myntassets.com/v1474550980/radium/office-women/workwear-women-divider.png" style={{margin:'3% 0%'}} />

					<OverlaySlider isOpen={true} data={Shirts} />
					<img src="http://assets.myntassets.com/v1474550980/radium/office-women/workwear-women-divider.png" style={{margin:'3% 0%'}} />

					<OverlaySlider isOpen={true} data={DressesNJumpsuit} />
					<img src="http://assets.myntassets.com/v1474550980/radium/office-women/workwear-women-divider.png" style={{margin:'3% 0%'}} />

					<OverlaySlider isOpen={true} data={Jackets} />
					<img src='http://assets.myntassets.com/v1474547400/radium/office-women/workwear-women-mock-01_10.jpg' />
					
					<div className ='westren-bottom' style={{width:'100%'}} onClick={this.shopProduct}>
						<a href='http://www.myntra.com/jeans-and-jeggings-menu?src=tNav&f=Denim_Fade_article_attr%3Ano%2520fade%3A%3ADenim_Shade_article_attr%3Adark%2Clight%2Cmedium%3A%3ADistress%252FTorn_article_attr%3Aclean%2520look%3A%3AFit_article_attr%3Aregular%2520fit%2Crelaxed%2520fit%2Cskinny%2520fit%2Cslim%2520fit%2Csuper%2520skinny%2520fit%3A%3ALength_article_attr%3Aankle%2520length%2Cfull%2520length%3A%3Acategories%3AJeans' target='_blank'>
							<img src = "http://assets.myntassets.com/v1474547218/radium/office-women/western-jeans.jpg"style={{width:'33.3%',float:'left',padding:'0% 3%'}}  />
						</a>
						<a href='http://www.myntra.com/women-western-casual-skirts' target='_blank'>
							<img src = "http://assets.myntassets.com/v1474547218/radium/office-women/western-skirts.jpg"style={{width:'33.3%',float:'left',padding:' 0% 3%'}}  />
						</a>
						<a href='http://www.myntra.com/women-western-casual-trousers' target='_blank'>
							<img src = "http://assets.myntassets.com/v1474547218/radium/office-women/western-trousers.jpg"style={{width:'33.3%',float:'left',padding:'0% 3%'}}  /></a>
					</div>					
				</div>
				<div className="westrenFeatures" onClick={this.shopBrand}>
					<img src='http://assets.myntassets.com/v1474541970/radium/office-women/workwear-women-mock-01_06.jpg' />
					<Carousel decorators={[]} autoplay={true}>
						<a href='http://www.myntra.com/women-western-casual-allensolly' target='_blank'>
							<img src="http://assets.myntassets.com/v1474549524/radium/office-women/allen-solly.jpg" />
						</a>
						<a href='http://www.myntra.com/women-western-casual-vanheusen' target='_blank'>
							<img src="http://assets.myntassets.com/v1474549524/radium/office-women/van-huesen.jpg" />
						</a>
						<a href='http://www.myntra.com/women-western-casual-mango' target='_blank'>
							<img src="http://assets.myntassets.com/v1474549524/radium/office-women/mango.jpg" />
						</a>
					</Carousel>	
				</div>				
			</Element>

			<Element name="power">
				<img src="http://assets.myntassets.com/assets/images/lookbook/2016/9/22/11474541363490-workwear-women-mock-01_14.jpg" style={{width:'100%'}} />
				<div onClick={this.lookBook}>
					<Carousel decorators={[]} autoplay={true} >
						<a href='http://www.myntra.com/women-work-wear-lookbook-monday' target='_blank'>
							<img src="http://assets.myntassets.com/v1474543152/radium/office-women/power-dressing-monday.jpg" />
						</a>
						<a href='http://www.myntra.com/women-work-wear-lookbook-tuesday' target='_blank'>
							<img src="http://assets.myntassets.com/v1474543152/radium/office-women/power-dressing-tuesday.jpg" />
						</a>
						<a href='http://www.myntra.com/women-work-wear-lookbook-wednesday' target='_blank'>
							<img src="http://assets.myntassets.com/v1474543152/radium/office-women/power-dressing-wednesday.jpg" />
						</a>
						<a href='http://www.myntra.com/women-work-wear-lookbook-thursday' target='_blank'>
							<img src="http://assets.myntassets.com/v1474543151/radium/office-women/power-dressing-thursday.jpg" />
						</a>
						<a href='http://www.myntra.com/women-work-wear-lookbook-friday' target='_blank'>
							<img src="http://assets.myntassets.com/v1474543152/radium/office-women/power-dressing-friday.jpg" />
						</a>
					</Carousel>
				</div>
				<div className='sarees' style={{width:'100%'}} onClick={this.shopProduct}>
				<img src = "http://assets.myntassets.com/v1475053327/radium/office-women/workwear-women-sarees.jpg" />
					<a href='http://www.myntra.com/women-work-cotton-sarees' target='_blank'>
						<img src = "http://assets.myntassets.com/v1475053327/radium/office-women/workwear-women-cotton-saree.jpg"style={{width:'33.3%',float:'left',padding:'3%'}}  />
					</a>
					<a href='http://www.myntra.com/women-work-silk-sarees' target='_blank'>
						<img src = "http://assets.myntassets.com/v1475053327/radium/office-women/workwear-women-silk-saree.jpg"style={{width:'33.3%',float:'left',padding:'3%'}}  />
					</a>
					<a href='http://www.myntra.com/women-work-chiffon-sarees' target='_blank'>
						<img src = "http://assets.myntassets.com/v1475053327/radium/office-women/workwear-women-chiffon-saree.jpg"style={{width:'33.3%',float:'left',padding:'3%'}}  />
					</a>
				</div>

			</Element>
			<div onClick={this.shopProduct}>
				<img src ='http://assets.myntassets.com/v1474544030/radium/office-women/workwear-women-mock-2_01.jpg' />
				<div className='shoes' style={{width:'100%'}}>
					<a href='http://www.myntra.com/women-work-sbba-peep-toe' target='_blank'>
						<img src = "http://assets.myntassets.com/v1474544040/radium/office-women/workwear-women-mock-2_02.jpg"style={{width:'32.3%',float:'left'}}  />
					</a>
					<a href='http://www.myntra.com/women-work-sbba-kitten-heels' target='_blank'>
						<img src = "http://assets.myntassets.com/v1474544041/radium/office-women/workwear-women-mock-2_03.jpg"style={{width:'32.3%',float:'left'}}  />
					</a>
					<a href='http://www.myntra.com/women-work-sbba-wedges' target='_blank'>
						<img src = "http://assets.myntassets.com/v1474544041/radium/office-women/workwear-women-mock-2_04.jpg"style={{width:'33.3%',float:'left'}}  />
					</a>
				</div>
				<div className='shoes' style={{width:'100%'}} onClick={this.shopProduct}>
					<a href='http://www.myntra.com/women-work-sbba-ballerinas' target='_blank'>
						<img src = "http://assets.myntassets.com/v1474544041/radium/office-women/workwear-women-mock-2_05.jpg"style={{width:'32.3%',float:'left'}}  />
					</a>
					<a href='http://www.myntra.com/women-work-sbba-sandals' target='_blank'>
						<img src = "http://assets.myntassets.com/v1474544041/radium/office-women/workwear-women-mock-2_06.jpg"style={{width:'32.3%',float:'left'}}  />
					</a>
					<a href='http://www.myntra.com/women-work-sbba-loafers' target='_blank'>
						<img src = "http://assets.myntassets.com/v1474544041/radium/office-women/workwear-women-mock-2_07.jpg"style={{width:'32.3%',float:'left'}}  />
					</a>
				</div>
			</div>	
			<a href='http://www.myntra.com/women-work-sbba-watches' target='_blank' onClick={this.shopProduct}>
				<img src='http://assets.myntassets.com/v1474544042/radium/office-women/workwear-women-mock-2_08.jpg'/>
			</a>		
			<div className ='bags' style={{width:'100%'}} onClick={this.shopProduct}>
				<a href='http://www.myntra.com/handbags-and-bags-menu?src=tNav&f=Bag_Type_article_attr%3Ahandheld%2520bag%2Chobo%2520bag%2Csatchel%3A%3AMaterial_article_attr%3Aleather%2Cpu%2Csynthetic%2Csynthetic%2520leather%3A%3AOccasion_article_attr%3Acasual%2Cwork%3A%3APattern_article_attr%3Aself%2520design%2Csolid%2Ctextured%3A%3Acategories%3AHandbags%3A%3Acolour%3Abeige%2Cblack%2Cblue%2Cbrown%2Cburgundy%2Ccharcoal%2Ccoffee%2520brown%2Ccream%2Cgrey%2Cmaroon%2Cnavy%2Cnavy%2520blue%2Ctan%2Ctaupe' target='_blank'>
					<img src = "http://assets.myntassets.com/v1474544499/radium/office-women/workwear-women-mock-2_09.jpg"style={{width:'33.3%',float:'left'}}  />
				</a>
				<a href='http://www.myntra.com/women-work-sbba-backpacks' target='_blank'>
					<img src = "http://assets.myntassets.com/v1474544499/radium/office-women/workwear-women-mock-2_10.jpg"style={{width:'33.3%',float:'left'}}  />
				</a>
				<a href='http://www.myntra.com/women-work-sbba-laptop-bags' target='_blank'>
					<img src = "http://assets.myntassets.com/v1474544500/radium/office-women/workwear-women-mock-2_11.jpg"style={{width:'33.3%',float:'left'}}  />
				</a>
			</div>
			<a href='http://www.myntra.com/women-work-jewellery' target='_blank' onClick={this.shopProduct}>
			<img src='http://assets.myntassets.com/v1474544779/radium/office-women/workwear-women-mock-2_12.jpg'/>
			</a>
			<div style={{width:'100%'}} onClick={this.shopProduct}>
				<a href='http://www.myntra.com/women-work-wear-make-up' target='_blank'>
					<img src = "http://assets.myntassets.com/v1474544779/radium/office-women/workwear-women-mock-2_13.jpg"style={{width:'50%',float:'left'}}  />
				</a>
				<a href='http://www.myntra.com/women-work-wear-lingerie' target='_blank'>
					<img src = "http://assets.myntassets.com/v1474544779/radium/office-women/workwear-women-mock-2_14.jpg"style={{width:'50%',float:'left'}}  />
				</a>
			</div>	
			<a href='http://www.myntra.com/women-work-viewall' target='_blank' onClick={this.viewall}>
				<img src='http://assets.myntassets.com/v1474544780/radium/office-women/workwear-women-mock-2_15.jpg' onClick={this.shopProduct}/>
			</a>
		</div>


		
		);

	}

}