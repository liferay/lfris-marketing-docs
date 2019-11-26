import React from 'react';
import { DeployButton } from 'components/molecules'

class Deploy extends React.Component {
    render() {
        return (
			<ol>
				<li>
					<h2>Write your documentation <a href="https://drive.google.com/drive/u/1/folders/1M0L3J8z5MTjppfs7uJrahVTDti1TZewh">here</a>
					</h2>
				</li>
				<li>
					<h2>Push this button to deploy changes to staging site:
						<DeployButton deployHook={`${process.env.GATSBY_UAT_DEPLOY_HOOK}`}>
							UAT
						</DeployButton>
					</h2>
				</li>
				<li>
					<h2>Preview your changes <a href="https://uat--lfrism-doc.netlify.com/">here</a>
					</h2>
				</li>
				<li>
					<h2>Once you're happy with you're changes deploy to production by pushing this button:
						<DeployButton deployHook={`${process.env.GATSBY_PRD_DEPLOY_HOOK}`}>
							PROD
						</DeployButton>
					(it'll be there in a few minutes)
					</h2>
				</li>
			</ol>
		)
	};
}

export default Deploy;
