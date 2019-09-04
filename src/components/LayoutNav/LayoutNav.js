import { window, document } from 'browser-monads';
import React from 'react';
import NavList from './NavList';
import { Link, withPrefix } from 'gatsby';
import classnames from 'classnames';

class LayoutNav extends React.Component {
    constructor() {
        super();
        this._rootNode = window || document;
        this._addScroll = this._addScroll.bind(this);
    }

    _getScrollTop() {
        if (this._rootNode === window) {
            return this._rootNode.pageYOffset;
        }
        if (this._rootNode === document) {
            return this._rootNode.defaultView.pageYOffset;
        }
    }

    _addScroll() {
        if (this._getScrollTop() >= 50) {
            this.refs.navElement.classList.add('scroll');
        } else {
            this.refs.navElement.classList.remove('scroll');
        }
    }

    componentDidMount() {
        if (!this.props.static) {
            this._rootNode.addEventListener('scroll', this._addScroll, false);
        }
    }

    componentWillUnmount() {
        if (!this.props.static) {
            this._rootNode.removeEventListener('scroll', this._addScroll, false);
        }
    }

    expandToggler = () => {
		this.props.onNavbarToggleClick();
    }

    render() {
        const { fixed = true, opaque = false, effect = false, sidebarHamburguerIcon = false } = this.props;

        const styles = classnames('navbar navbar-clay-site navbar-expand-lg navbar-dark', {
            'fixed-top': fixed,
            'scroll': effect,
            'bg-primary': opaque
        });

        return (
            <nav ref="navElement" className={styles}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img className="logo mr-2" src={withPrefix("/images/home/liferay_logo.svg")} alt="Liferay Logo" />
                    </Link>

                    {sidebarHamburguerIcon &&
                        <button onClick={this.expandToggler} className="navbar-toggler p-2 order-md-1" type="button" data-toggle="collapse" data-target="#claySidebar" aria-controls="claySidebar" aria-expanded="false" aria-label="Toggle navigation">
                            <svg aria-hidden="true" className="lexicon-icon lexicon-icon-bars">
                                <use xlinkHref={withPrefix("images/icons/icons.svg#bars")} />
                            </svg>
                        </button>
                    }

                    <NavList />
                </div>
            </nav>
        );
    }
};

export default LayoutNav;