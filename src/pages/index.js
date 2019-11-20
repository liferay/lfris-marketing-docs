import React from 'react';
import { MainLayout } from 'components/layouts';
import { checkPropTypes } from 'prop-types';

const Index = ({ location }) =>  {    
    return (
        <MainLayout className='home' location={location}>
            test
        </MainLayout>
    );  
};

export default Index;
