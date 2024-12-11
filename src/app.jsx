import { useState } from 'preact/hooks'

import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'

import './app.scss'

import HeaderHomepage from './components/headerHomepage.jsx'
import MainHomepage from './components/mainHomepage.jsx'
import AsideHomepage from './components/asideHomepage.jsx'
import FooterHomepage from './components/footerHomepage.jsx'

export function App() {
  return (
    <>
      <HeaderHomepage />
      <MainHomepage />
      <AsideHomepage />
      <FooterHomepage />
    </>
  )
}
