// Import Modules
import React from 'react'

// Import Components
import MenuItems from '../../presentational/MenuItems'
import Logo from '../../icons/Logo'
import ButtonBorder from '../ButtonBorder'
import CloseIcon from '../../icons/CloseIcon'
import HamburguerIcon from '../../icons/HamburguerICon'
import SearchIcon from '../../icons/SearchIcon'

// Import Styles
import './styles.scss'

export const HeaderDesktop = ({ filterMovies }) => (
  <div className='header-desktop'>
    <div className='first-section'>
      <a href='/' className='logo-wrapper'>
        <Logo />
      </a>
      <MenuItems />
    </div>
    <div className='second-section'>
      <div className='input-search'>
        <input placeholder='Buscar' onChange={(ev) => filterMovies(ev.target.value)} />
      </div>
      <div className='buttons-session'>
        <ButtonBorder>Ingresar</ButtonBorder>
        <ButtonBorder>Regístrate</ButtonBorder>
      </div>
    </div>
  </div>
)

export const HeaderMobile = ({
  mobileVisble,
  setMenuMobile,
  filterMovies,
  setInputMovile,
  isInputMovileVisible
}) => (
  <div className='header-mobile'>
    <div className='header-menu-mobile'>
      <a href='/' className='logo-wrapper'>
        <Logo />
      </a>
      <div
        onClick={() => setInputMovile(!isInputMovileVisible)}
        className='search-wrapper'
      >
        <SearchIcon />
      </div>
      <div
        onClick={() => setMenuMobile(!mobileVisble)}
        className='hamburger-wrapper'
      >
        <HamburguerIcon />
      </div>
    </div>
    {
      isInputMovileVisible && (
        <div className='input-search'>
          <input placeholder='Buscar' onChange={(ev) => filterMovies(ev.target.value)} />
        </div>
      )
    }
    <div className={`
      ${'menu-mobile'}
      ${mobileVisble ? 'visible' : ''}
    `}
    >
      <div
        className='background'
        onClick={() => setMenuMobile(!mobileVisble)}
      />
      <div className='menu-content'>
        <div className='first-section'>
          <a href='/' className='logo-wrapper'>
            <Logo />
          </a>
          <div
            className='close-wrapper'
            onClick={() => setMenuMobile(!mobileVisble)}
          >
            <CloseIcon />
          </div>
        </div>
        <div className='second-section'>
          <MenuItems />
        </div>
      </div>
    </div>
  </div>
)

const Header = ({
  mobileVisble,
  setMenuMobile,
  filterMovies,
  setInputMovile,
  isInputMovileVisible
}) => (
  <header>
    <div className='container'>
      <HeaderDesktop
        filterMovies={filterMovies}
      />
      <HeaderMobile
        mobileVisble={mobileVisble}
        setMenuMobile={setMenuMobile}
        filterMovies={filterMovies}
        setInputMovile={setInputMovile}
        isInputMovileVisible={isInputMovileVisible}
      />
    </div>
  </header>
)

export default Header
