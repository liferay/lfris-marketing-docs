import React from 'react';

import {Card, Icon} from 'components/atoms';
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
							icon={<Icon name='dxpIcon' />}
							title='Web'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='blue'
							direction='horizontal'
							href='/portfolio/portfolio-marketing-intro'
							icon={<Icon name='dxpIcon' />}
							title='Portfolio'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='blue'
							direction='horizontal'
							href='/operations/mark-ops-only/funnel-stages-detailed-doc'
							icon={<Icon name='dxpIcon' />}
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
							icon={<Icon name='dxpIcon' />}
							title='Demand'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='blue'
							direction='horizontal'
							href='/field/field-marketing-intro'
							icon={<Icon name='dxpIcon' />}
							title='Field'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='blue'
							direction='horizontal'
							href='/general/marketing-documentation-template'
							icon={<Icon name='dxpIcon' />}
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
							icon={<Icon name='homeIcon' />}
							title='Hubspot'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='orange'
							direction='vertical'
							href='/search?keywords=events'
							icon={<Icon name='heartIcon' />}
							title='Events'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='teal'
							direction='vertical'
							href='/search?keywords=landing+pages'
							icon={<Icon name='messageIcon' />}
							title='Landing Pages'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='green'
							direction='vertical'
							href='/search?keywords=tickets'
							icon={<Icon name='starIcon' />}
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
							icon={<Icon name='homeIcon' />}
							title='Design'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='orange'
							direction='vertical'
							href='/search?keywords=tableau'
							icon={<Icon name='heartIcon' />}
							title='Tableau'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='teal'
							direction='vertical'
							href='/search?keywords=resource'
							icon={<Icon name='messageIcon' />}
							title='Resources'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='green'
							direction='vertical'
							href='/search?keywords=campaign'
							icon={<Icon name='starIcon' />}
							title='Campaigns'
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Index;
