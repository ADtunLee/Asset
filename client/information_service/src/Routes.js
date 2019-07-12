import React from 'react';
import HomeContainer from './Containers/Home/HomeContainer'
import InformationContainer from './Containers/Result/Information'
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomeContainer />
    },
    {
        path: '/ket-qua/tin-tuc',
        exact: true,
        main: () => <InformationContainer />
    }
]
export default routes