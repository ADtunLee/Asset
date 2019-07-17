import React from 'react';
import HomeContainer from './Containers/Home/HomeContainer'
import SearchResultLayout from './Containers/Layout/SearchResultLayout'
const routes = [
    {
        path: '/',
        exact: true,
        main: HomeContainer
    },
    {
        path: '/ket-qua',
        exact: false,
        main: SearchResultLayout
    }
]
export default routes