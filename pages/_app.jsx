import React, {useEffect, useState} from 'react'
import type {AppProps} from 'next/app'
import 'tailwindcss/tailwind.css'

import '../styles/globals.scss'
import {Layout} from '../components'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>)
}

export default MyApp
