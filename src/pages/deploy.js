import React from 'react';

import {DeployButton} from 'components/molecules';

class Deploy extends React.Component {
	render() {
		return (
			<section>
				<ol>
					<li>
						<h4>
							Write your documentation{' '}
							<a
								className='link-outline link-outline-borderless link-outline-primary'
								href='https://drive.google.com/drive/u/1/folders/1M0L3J8z5MTjppfs7uJrahVTDti1TZewh'
								target='_blank'
							>
								here
							</a>
						</h4>
					</li>
					<li>
						<h4>
							Push this button to deploy changes to staging site:
							<DeployButton
								deployHook={`${process.env.GATSBY_UAT_DEPLOY_HOOK}`}
							>
								UAT
							</DeployButton>
						</h4>
					</li>
					<li>
						<h4>
							Preview your changes{' '}
							<a
								className='link-outline link-outline-borderless link-outline-primary'
								href='https://uat--lfrism-doc.netlify.com/'
								target='_blank'
							>
								here
							</a>
						</h4>
					</li>
					<li>
						<h4>
							Once you're happy with you're changes deploy to
							production by pushing this button:
							<DeployButton
								deployHook={`${process.env.GATSBY_PRD_DEPLOY_HOOK}`}
							>
								PROD
							</DeployButton>
							(it'll be there in a few minutes)
						</h4>
					</li>
				</ol>
				<div>
					<h3>
						Production Deploy Status:{' '}
						<a href='https://app.netlify.com/sites/lfrism-doc/deploys'>
							<img
								src='https://api.netlify.com/api/v1/badges/a37de724-defa-4a86-a2cc-3267dc619447/deploy-status'
								alt='Netlify Status'
							/>
						</a>
					</h3>
				</div>
			</section>
		);
	}
}

export default Deploy;
