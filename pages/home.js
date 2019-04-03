import React, {} from 'react'
import { locale } from '../locales/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setLanguage } from '../store'

const home = (props) => {
    const setLanguage = (lang) => {
        props.setLanguage(lang)
    }
    return (
        <div>
            <h1>{locale.t('hello')}</h1>
            <h2>{locale.t('greeting')}</h2>
            <h2>{locale.t('name', {name: 'จอห์น'})}</h2>

            <label>language</label> 
            <button onClick={() => setLanguage('th')}>th</button> 
            <button onClick={() => setLanguage('en')}>en</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    lang: state.lang
})

const mapDispatchToProps = dispatch => ({
    setLanguage: bindActionCreators(setLanguage, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(home)