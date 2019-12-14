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
					<h1 className='font-size-display-large text-center'>
						Welcome to Liferay Marketing Docs
					</h1>
					<p className='text-center color-neutral-4 margin-vertical-0'>
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
				<h2 className='text-center margin-bottom-1'>
					Browse by Marketing Function
				</h2>
				<div className='row'>
					<div className='col-md'>
						<Card
							color='blue'
							direction='horizontal'
							href='/web/landing-page-builder/landing-page-fragment-templates'
							icon={<Icon name='dxpIcon' />}
							title='Web'
						/>
					</div>
					<div className='col-md'>
						<Card
							color='blue'
							direction='horizontal'
							href='/mar-comm/asset-types/content-types-and-workflows'
							icon={<Icon name='dxpIcon' />}
							title='MarComm'
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
							href='/operations/analytics-and-reporting/mktg-reporting-documentation'
							icon={<Icon name='dxpIcon' />}
							title='Analytics and Reporting'
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
				<h2 className='text-center margin-bottom-1'>
					Browse by Topics
				</h2>
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
