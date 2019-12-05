import React from 'react';

import {Card} from 'components/atoms';
import {Search} from 'components/molecules';
import styles from './styles.module.scss';

const Index = ({location}) => {
	return (
		<div className={`${styles.home}`}>
			<section
				className={`${styles.sectionOne} bg-primary-7 full-screen section-padding`}
			>
				<div className='max-width-full margin-horizontal-auto padding-horizontal-1_5'>
					<h1 className='padding-top-3_5 padding-bottom-0_5 margin-vertical-0 text-center'>
						Welcome to Liferay Marketing Docs
					</h1>
					<p className='text-center color-neutral-4 margin-vertical-0 padding-bottom-2'>
						All your marketing documentation needs in one place
					</p>

					<div
						className={`max-width-medium margin-horizontal-auto padding-vertical-3`}
					>
						<Search
							entryNumber={0}
							location={location}
							onPageSearch={true}
						/>
					</div>
				</div>
			</section>
			<section className='section-padding'>
				<h3 className='text-center padding-bottom-1_5'>
					Browser by Marketing Function
				</h3>
				<div className='row'>
					<div className='col-md'>
						<Card
							color='blue'
							direction='horizontal'
							href='/web/General/working-with-web-team'
							icon={<DxpIcon />}
							title='Web'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='blue'
							direction='horizontal'
							href='/portfolio/portfolio-marketing-intro'
							icon={<DxpIcon />}
							title='Portfolio'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='blue'
							direction='horizontal'
							href='/operations/mark-ops-only/funnel-stages-detailed-doc'
							icon={<DxpIcon />}
							title='Operations'
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-md'>
						<Card
							color='blue'
							direction='horizontal'
							href='/demand/best-practices-email-workflow-lists'
							icon={<DxpIcon />}
							title='Demand'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='blue'
							direction='horizontal'
							href='/field/field-marketing-intro'
							icon={<DxpIcon />}
							title='Field'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='blue'
							direction='horizontal'
							href='/general/marketing-documentation-template'
							icon={<DxpIcon />}
							title='General'
						/>
					</div>
				</div>
			</section>
			<section className='section-padding'>
				<h3 className='text-center padding-bottom-1_5'>
					Browse by Topics
				</h3>
				<div className='row'>
					<div className='col-md'>
						<Card
							color='blue'
							direction='vertical'
							href='/search?keywords=hubspot'
							icon={<HomeIcon />}
							title='Hubspot'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='orange'
							direction='vertical'
							href='/search?keywords=events'
							icon={<HeartIcon />}
							title='Events'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='teal'
							direction='vertical'
							href='/search?keywords=landing+pages'
							icon={<MessageIcon />}
							title='Landing Pages'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='green'
							direction='vertical'
							href='/search?keywords=tickets'
							icon={<StarIcon />}
							title='Tickets/Requests'
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-md'>
						<Card
							color='blue'
							direction='vertical'
							href='https://liferay.design/blueprints/'
							icon={<HomeIcon />}
							title='Design'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='orange'
							direction='vertical'
							href='/search?keywords=tableau'
							icon={<HeartIcon />}
							title='Tableau'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='teal'
							direction='vertical'
							href='/search?keywords=resource'
							icon={<MessageIcon />}
							title='Resources'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='green'
							direction='vertical'
							href='/search?keywords=campaign'
							icon={<StarIcon />}
							title='Campaigns'
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Index;

const HomeIcon = () => (
	<svg
		width='40'
		height='40'
		viewBox='0 0 40 40'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<circle opacity='0.15' cx='20' cy='20' r='19.5' stroke='#0B5FFF' />
		<circle opacity='0.15' cx='20' cy='20' r='16' fill='#0B63CE' />
		<path
			d='M20.625 11.2399L27.6201 17.2282C28.0391 17.5867 28.0879 18.2167 27.7285 18.6354C27.5313 18.866 27.252 18.9844 26.9707 18.9844C26.7402 18.9844 26.5098 18.9056 26.3213 18.7445L25.9727 18.4458V25.9708C25.9727 26.522 25.5264 26.9688 24.9746 26.9688C24.4238 26.9688 23.9766 26.522 23.9766 25.9708L24.0342 16.786L19.9766 13.3124L15.9922 16.7304V25.9708C15.9922 26.522 15.5449 26.9688 14.9942 26.9688C14.4434 26.9688 13.9961 26.522 13.9961 25.9708V18.4427L13.6475 18.7414C13.2295 19.1003 12.5996 19.0521 12.2402 18.6337C11.8818 18.2153 11.9297 17.5852 12.3486 17.2263L19.3262 11.2405C19.7002 10.92 20.251 10.9198 20.625 11.2399Z'
			fill='#0053F0'
		/>
		<path
			d='M16.9902 21.9786C16.9902 20.3276 18.333 18.9844 19.9844 18.9844C21.6358 18.9844 22.9785 20.3276 22.9785 21.9786V25.9708C22.9785 26.522 22.5313 26.9688 21.9805 26.9688C21.4297 26.9688 20.9824 26.522 20.9824 25.9708V21.9786C20.9824 21.4282 20.5352 20.9805 19.9844 20.9805C19.4336 20.9805 18.9863 21.4282 18.9863 21.9786C18.9863 23.0628 19.0293 25.9207 19.0303 25.9595C19.0361 26.5107 18.5947 26.9625 18.044 26.9688L18.0322 26.9688C17.4863 26.9688 17.04 26.5294 17.0342 25.982L17.0313 25.8026C17.0225 25.1464 16.9902 22.9338 16.9902 21.9786Z'
			fill='#0053F0'
		/>
	</svg>
);

const HeartIcon = () => (
	<svg
		width='40'
		height='40'
		viewBox='0 0 40 40'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<circle opacity='0.12' cx='20' cy='20' r='19.5' stroke='#E06E31' />
		<circle opacity='0.12' cx='20' cy='20' r='16' fill='#E06E31' />
		<path
			fill-rule='evenodd'
			clip-rule='evenodd'
			d='M23.5056 14.0303C24.1677 14.0303 24.8103 14.1748 25.4119 14.4605C27.6433 15.516 28.6052 18.195 27.5525 20.437C26.6423 22.3799 21.1423 27.3009 20.5173 27.8555C20.3826 27.9765 20.2146 28.0404 20.0398 28.0504H19.9997C19.8113 28.0504 19.6267 27.9799 19.4822 27.8521C18.8572 27.3009 13.3581 22.3765 12.447 20.4336C11.3953 18.195 12.3562 15.516 14.5876 14.4605C15.1902 14.1748 15.8318 14.0303 16.4939 14.0303C17.8689 14.0303 19.1599 14.6723 19.9997 15.7278C20.8367 14.6723 22.1277 14.0303 23.5056 14.0303ZM19.9997 26.2286C22.3464 24.1076 25.5964 20.9412 26.1443 19.7748C26.8298 18.3093 26.2048 16.558 24.7429 15.8723C24.3494 15.6874 23.9324 15.5933 23.5027 15.5933C22.3757 15.5933 21.3406 16.2521 20.8601 17.274C20.8367 17.3278 20.7966 17.4286 20.7527 17.6067C20.6687 17.9563 20.3562 18.2017 19.9968 18.2017C19.6365 18.2017 19.324 17.9563 19.24 17.6067C19.196 17.4286 19.156 17.3278 19.1326 17.274C18.655 16.2521 17.6169 15.5933 16.491 15.5933C16.0603 15.5933 15.6433 15.6874 15.2497 15.8723C13.7947 16.5614 13.1697 18.3126 13.8552 19.7748C14.4031 20.9412 17.6531 24.1076 19.9997 26.2286Z'
			fill='#E06E31'
		/>
	</svg>
);

const MessageIcon = () => (
	<svg
		width='40'
		height='40'
		viewBox='0 0 40 40'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<circle opacity='0.18' cx='20' cy='20' r='19.5' stroke='#42BFC2' />
		<circle opacity='0.15' cx='20' cy='20' r='16' fill='#42BFC2' />
		<path
			d='M26 14.0038H27C27.5498 14.0038 27.9971 14.4538 28 15.0038V22.0038C28 22.5569 27.5527 23.0038 27 23.0038H25V17.9663C25 16.8819 24.1221 16.0038 23.0371 16.0038H16V15.0038C16 14.4507 16.4473 14.0038 17 14.0038H22.5938L24.2939 12.2976C25.0156 11.6132 26.0098 12.2195 26 13.0038V14.0038Z'
			fill='#42BFC2'
		/>
		<path
			d='M15.5254 20.0038H20.5254C21.2246 20.0038 21.125 21.0038 20.5254 21.0038H15.5254C14.8252 21.0038 14.8252 20.0038 15.5254 20.0038Z'
			fill='#42BFC2'
		/>
		<path
			d='M18.5254 22.0038H15.5254C14.8252 22.0038 14.8252 23.0038 15.5254 23.0038H18.5254C19.125 23.0038 19.2246 22.0038 18.5254 22.0038Z'
			fill='#42BFC2'
		/>
		<path
			fill-rule='evenodd'
			clip-rule='evenodd'
			d='M23 17.0038H13C12.4473 17.0038 12 17.4507 12 18.0038V25.0038C12 25.5569 12.4473 26.0038 13 26.0038H14V27.0038C14.0127 27.9476 15.1309 28.3069 15.7061 27.7101L17.4062 26.0038H23C23.5527 26.0038 24 25.5569 24 25.0038V18.0038C24 17.4507 23.5498 17.0038 23 17.0038ZM23 25.0038H13V18.0038H23V25.0038Z'
			fill='#42BFC2'
		/>
	</svg>
);

const StarIcon = () => (
	<svg
		width='40'
		height='40'
		viewBox='0 0 40 40'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<circle opacity='0.15' cx='20' cy='20' r='19.5' stroke='#19AB4F' />
		<circle opacity='0.15' cx='20' cy='20' r='16' fill='#19AB4F' />
		<path
			d='M27.9581 16.9432C27.8559 16.6515 27.5808 16.4554 27.2716 16.4554H22.5451L20.681 11.4738C20.5746 11.1895 20.3028 11.0017 19.9995 11.0017C19.6961 11.0017 19.4244 11.1895 19.3188 11.4738L17.4546 16.4554H12.7274C12.4182 16.4554 12.1431 16.6507 12.0409 16.9432C11.9386 17.2349 12.0325 17.559 12.2744 17.7519L16.0833 20.782L14.3347 25.9107C14.2367 26.1983 14.328 26.5175 14.5641 26.7094C14.7993 26.9014 15.1301 26.9264 15.3927 26.7717L19.9954 24.0574L24.7285 26.8964C24.844 26.9662 24.9736 27.0003 25.1025 27.0003C25.1033 27.0003 25.1049 27.0003 25.1066 27.0003C25.5072 26.987 25.8371 26.6753 25.8371 26.2731C25.8371 26.1518 25.808 26.037 25.7549 25.9365L23.9206 20.7779L27.7246 17.7518C27.9664 17.5598 28.0603 17.2349 27.9581 16.9431V16.9432Z'
			fill='#287D3C'
		/>
	</svg>
);

const DxpIcon = () => (
	<svg
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g clipPath='url(#clip0)'>
			<rect width='32' height='32' fill='white' />
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M8.61971 4.58507C12.3375 -0.62881 22.6745 0.096601 28.2511 5.12913C38.7695 14.6048 25.1228 37.9539 12.3375 28.6143C12.02 28.3876 11.7027 28.1609 11.3853 27.8889C7.35018 24.3978 4.0858 19.456 7.53153 6.85198C7.75821 5.99055 8.16624 5.26514 8.61971 4.58507Z'
				fill='#1AA0E8'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M8.61969 4.58508C19.3648 0.187286 32.8302 10.751 22.357 22.4936C19.9088 25.2139 16.1004 27.6168 12.3374 28.6143C9.61712 29.3397 6.89682 29.2943 4.76597 28.0702C-0.35725 25.2139 -1.62672 15.0582 2.3177 9.61761C4.13121 7.16934 6.30744 5.53717 8.61969 4.58508Z'
				fill='#0B63CE'
			/>
			<path
				d='M22.3571 22.4936C32.8302 10.751 19.3648 0.187286 8.61963 4.58508C8.16625 5.26515 7.75821 5.99056 7.53152 6.85198C4.08582 19.456 7.35016 24.3978 11.3853 27.8889C11.7026 28.1609 12.02 28.3876 12.3374 28.6143C16.1004 27.6168 19.9088 25.2139 22.3571 22.4936Z'
				fill='#134194'
			/>
		</g>
		<defs>
			<clipPath id='clip0'>
				<rect width='32' height='32' fill='white' />
			</clipPath>
		</defs>
	</svg>
);
