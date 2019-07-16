import React from 'react';
import LayoutNav from '../components/LayoutNav';
import Footer from '../components/Footer';
import DeployButton from '../components/DeployButton'
import Auth from '../components/Auth';

class Deploy extends React.Component {
    render() {
        return (
			<Auth needsAuth={false}>
				<div className="deploy-page">
					<main className="content">
						<header className="header">
							<LayoutNav effect={true} static={true} sidebarHamburguerIcon={true} />
						</header>

						<section className="container-fluid container-fluid-max-lg">
							<DeployButton />
						</section>

						<section>
							<Footer />
						</section>
					</main>
				</div>
			</Auth>
    )};
}

export default Deploy;
