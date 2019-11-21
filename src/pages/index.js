import React from 'react';
import { Search } from 'components/molecules';
import { Card } from 'components/atoms';
import styles from './styles.module.scss'

const Index = ({ location }) =>  {    
    return (
        <div>
            <section className={`${styles.sectionOne} bg-primary-7 full-screen`}>
                <div className="max-width-full margin-horizontal-auto">
                    <h1 className="padding-top-3_5 padding-bottom-0_5 margin-vertical-0 text-center">Welcome to Liferay Marketing Docs</h1>
                    <p className="text-center color-neutral-4 margin-vertical-0 padding-bottom-2">All your marketing documentation needs in one place</p>

                    <Search location={location} className={`max-width-medium margin-horizontal-auto`} />
                </div>
            </section>
            <section className="padding-vertical-2_5">
                <h3 className="text-center">Browser by Marketing Function</h3>
                <div className="row">
                    <div className="col-md">
                        <Card
                            title='Site'
                            color='blue'
                            direction='horizontal'
                            href='#'
                            icon={<DxpIcon />}
                        />
                    </div>
                    <div className="col-md">
                        <Card
                            title='Portfolio'
                            color='blue'
                            direction='horizontal'
                            href='#'
                            icon={<DxpIcon />}
                        />
                    </div>
                    <div className="col-md">
                        <Card
                            title='Operations'
                            color='blue'
                            direction='horizontal'
                            href='#'
                            icon={<DxpIcon />}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <Card
                            title='Demand'
                            color='blue'
                            direction='horizontal'
                            href='#'
                            icon={<DxpIcon />}
                        />
                    </div>
                    <div className="col-md">
                        <Card
                            title='Field'
                            color='blue'
                            direction='horizontal'
                            href='#'
                            icon={<DxpIcon />}
                        />
                    </div>
                    <div className="col-md">
                        <Card
                            title='General'
                            color='blue'
                            direction='horizontal'
                            href='#'
                            icon={<DxpIcon />}
                        />
                    </div>
                </div>
            </section>
            <section className="padding-vertical-2_5">
                <h3 className="text-center">Browse by Topics</h3>
                <div className="row">
                    <div className="col-md">
                        <Card
                            title='General'
                            color='blue'
                            direction='vertical'
                            href='#'
                            icon={<DxpIcon />}
                        />
                    </div>
                    <div className="col-md">
                         <Card
                            title='General'
                            color='orange'
                            direction='vertical'
                            href='#'
                            icon={<DxpIcon />}
                        />
                    </div>
                    <div className="col-md">
                        <Card
                            title='General'
                            color='teal'
                            direction='vertical'
                            href='#'
                            icon={<DxpIcon />}
                        />
                    </div>
                    <div className="col-md">
                        <Card
                            title='General'
                            color='green'
                            direction='vertical'
                            href='#'
                            icon={<DxpIcon />}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <Card
                            title='General'
                            color='blue'
                            direction='vertical'
                            href='#'
                            icon={<DxpIcon />}
                        />
                    </div>
                    <div className="col-md">
                        <Card
                            title='orange'
                            color='orange'
                            direction='vertical'
                            href='#'
                            icon={<DxpIcon />}
                        />
                    </div>
                    <div className="col-md">
                        <Card
                            title='General'
                            color='teal'
                            direction='vertical'
                            href='#'
                            icon={<DxpIcon />}
                        />
                    </div>
                    <div className="col-md">
                        <Card
                            title='General'
                            color='green'
                            direction='vertical'
                            href='#'
                            icon={<DxpIcon />}
                        />
                    </div>
                </div>
            </section>
        </div>
    );  
};

export default Index

const DxpIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <rect width="32" height="32" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.61971 4.58507C12.3375 -0.62881 22.6745 0.096601 28.2511 5.12913C38.7695 14.6048 25.1228 37.9539 12.3375 28.6143C12.02 28.3876 11.7027 28.1609 11.3853 27.8889C7.35018 24.3978 4.0858 19.456 7.53153 6.85198C7.75821 5.99055 8.16624 5.26514 8.61971 4.58507Z" fill="#1AA0E8"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.61969 4.58508C19.3648 0.187286 32.8302 10.751 22.357 22.4936C19.9088 25.2139 16.1004 27.6168 12.3374 28.6143C9.61712 29.3397 6.89682 29.2943 4.76597 28.0702C-0.35725 25.2139 -1.62672 15.0582 2.3177 9.61761C4.13121 7.16934 6.30744 5.53717 8.61969 4.58508Z" fill="#0B63CE"/>
        <path d="M22.3571 22.4936C32.8302 10.751 19.3648 0.187286 8.61963 4.58508C8.16625 5.26515 7.75821 5.99056 7.53152 6.85198C4.08582 19.456 7.35016 24.3978 11.3853 27.8889C11.7026 28.1609 12.02 28.3876 12.3374 28.6143C16.1004 27.6168 19.9088 25.2139 22.3571 22.4936Z" fill="#134194"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="32" height="32" fill="white"/>
        </clipPath>
        </defs>
    </svg>
);
