import React from 'react';
import classNames from 'classnames';
import { Link, withPrefix } from 'gatsby';

class Navigation extends React.Component {
    _handleOnClick(index, depth, section, event) {
        event.stopPropagation();

        const { location } = this.props;
        const elementRef = this.refs[`navItem${index}${depth}`];
        const sameElement = location.pathname === section.link;

        if ((!elementRef.classList.contains('active')  && !sameElement) || !!section.children.length) {
            elementRef.classList.toggle('active');
        }
    }

    _isActive(section) {
        const { location } = this.props;

        if (!section.isFolder) {
            return location.pathname === section.link;
        }

        let sectionLocation = location.pathname;
        let sectionLink = section.link.split('/');
        let isActive = false;

        sectionLink.pop();
        sectionLink = sectionLink.join('/');

        for (let lastIndex = sectionLocation.split('/').length - 1; lastIndex > 0; lastIndex--) {
            sectionLocation = sectionLocation.split('/');
            sectionLocation.pop();
            sectionLocation = sectionLocation.join('/');

            if (sectionLocation === sectionLink || isActive){
                isActive = true;
            }
        }

        return isActive;
    }

    renderNavigationItems() {
        const { sectionList, location, depth = 0 } = this.props;

        return sectionList.map((section, index) => {
            let style = classNames({
                'active': this._isActive(section),
                'nav-heading': section.children
            });

            return(
                <li key={index} ref={`navItem${index}${depth}`} className={style} onClick={this._handleOnClick.bind(this, index, depth, section)}>
                    <Anchor page={section} />

                    {!!section.children.length && (
                        <Navigation sectionList={section.children} location={location} depth={depth + 1} />
                    )}
                </li>
            );
        });
    }

    render() {
        return(
            <ul className="nav nav-nested nav-pills nav-stacked">
                {this.renderNavigationItems()}
            </ul>
        );
    }
}

const Anchor = ({page}) => {
    const properName = page.name.toLowerCase().split('-').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');

    if (page.children.length > 0) {
        return(
            <Link
                to={`${page.link}`}
                className="align-middle"
            >
                <span>{properName}</span>
                <svg className="collapse-toggle clay-icon icon-monospaced">
                    <use xlinkHref={withPrefix("images/icons/icons.svg#caret-bottom")} />
                </svg>
            </Link>
        );
    }

    return (
        <Link
            to={`${page.link}`}
            className="align-middle"
        >
            <span>{properName}</span>
        </Link>
    );
};

export default Navigation;