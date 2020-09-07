import React from 'react';
import service1 from '../images/1.png';
import service2 from '../images/2.png';
import service3 from '../images/3.png';
import service4 from '../images/4.png';
import './Header.css';

const Header = () => {
	return (
		<header>
			<div className='header__bar d-none d-lg-block '>
				<div className='container'>
					<div className='header__barLinks'>
						<a href='#home'>Home</a>
						<a href='#shop'>Shop</a>
						<a href='#product'>Product</a>
						<a href='#feature'>Feature</a>
						<a href='#pages'>Pages</a>
						<a href='#blog'>Blog</a>
						<a href='#mega'>Mega Menu</a>
					</div>
				</div>
			</div>
			<div className='header__hero'>
				<div className='header__heroInfo'>
					<h1>
						<span>ECOMMERCE</span>
						<br /> FOR A NEW ERA
					</h1>
					<p>Check out our latest products to get the best deal.</p>
					<button>Shop Now</button>
				</div>
			</div>
			<div className='header__medias'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3 col-md-6'>
							<div className='header__media'>
								<img src={service1} alt='service 1' />
								<div className='header__mediaInfo'>
									<span>Free Shipping</span>
									<span>Shipping On Order Over $99</span>
								</div>
							</div>
						</div>
						<div className='col-lg-3 col-md-6'>
							<div className='header__media'>
								<img src={service2} alt='service 1' />
								<div className='header__mediaInfo'>
									<span>Online Payment</span>
									<span>Service For New Payment</span>
								</div>
							</div>
						</div>
						<div className='col-lg-3 col-md-6'>
							<div className='header__media'>
								<img src={service3} alt='service 1' />
								<div className='header__mediaInfo'>
									<span>24 X 7 Service</span>
									<span>Flexible Service For User</span>
								</div>
							</div>
						</div>
						<div className='col-lg-3 col-md-6'>
							<div className='header__media'>
								<img src={service4} alt='service 1' />
								<div className='header__mediaInfo'>
									<span>Festival Offer</span>
									<span>100% Easy Replacement</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
