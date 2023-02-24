import React from "react";
import facebook from '../assets/svgs/facebook.svg'
import google from '../assets/svgs/google.svg'
import check from '../assets/svgs/check.svg'
import Expenses from '../assets/svgs/Expenses.svg'
import Expenses_focus from '../assets/svgs/Expenses_focus.svg'
import Home from '../assets/svgs/Home.svg'
import Home_focus from '../assets/svgs/Home_focus.svg'
import Wallet from '../assets/svgs/Wallet.svg'
import Wallet_focus from '../assets/svgs/Wallet_focus.svg'
import Profile from '../assets/svgs/Profile.svg'
import Profile_focus from '../assets/svgs/Profile_focus.svg'
import plus from '../assets/svgs/plus.svg'
import add_card from '../assets/svgs/add_card.svg'
import arrow_up_green from '../assets/svgs/arrow_up_green.svg'
import arrow_down_red from '../assets/svgs/arrow_down_red.svg'
import plus_person from '../assets/svgs/plus_person.svg'
import edit from '../assets/svgs/Edit.svg'
import verified from '../assets/svgs/verified.svg'
import right from '../assets/svgs/right.svg'
import notification from '../assets/svgs/notification.svg'
import security from '../assets/svgs/security.svg'
import settings from '../assets/svgs/settings.svg'
import chart from '../assets/svgs/chart.svg'

const SVGs = {
    facebook,
    google,
    check,
    Expenses,
    Expenses_focus,
    Home,
    Home_focus,
    Wallet,
    Wallet_focus,
    Profile,
    Profile_focus,
    plus,
    add_card,
    arrow_up_green,
    arrow_down_red,
    plus_person,
    edit,
    verified,
    right,
    notification,
    security,
    settings,
    chart
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name={name} height={height} width={width} />
        } else {
            return null
        }
    }
}