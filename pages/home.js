import React from 'react'
import { locale } from '../locales/index'

const home = () => {
    return (
        <div>
            <h1>{locale.t('hello')}</h1>
            <h2>{locale.t('greeting')}</h2>
        </div>
    )
}

export default home