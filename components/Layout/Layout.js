import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import IconButton from '../IconButton/IconButton'
import {MdClose, MdMenu, MdOutlineAccessTime, MdOutlineMail, MdOutlinePhone, MdOutlinePinDrop } from 'react-icons/md'
import Link from '../Link/Link'
import { useRouter } from 'next/router'
import List from '../List/List'
import ListItem from '../ListItem/ListItem'
import ListItemButton from '../ListItemButton/ListItemButton'
import ListItemText from '../ListItemText/ListItemText'
import Typography from '../Typography/Typography'
import data from '@/utils/data'
import ListItemIcon from '../ListItemIcon/ListItemIcon'
import { IoLogoLinkedin } from 'react-icons/io5'
import Button from '../Button/Button'
import Head from 'next/head'

export default function Layout({
  children,
  headTitle,
  contactUsJumbotron = true,
  footerMargin = true
}) {

  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)

  // HANDLER
  function toggleMenu(bool) {
    setShowMenu(current => typeof bool === 'boolean' ? bool : !current)
  }

  const links = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'About',
      path: '/about'
    },
    {
      label: 'Contact',
      path: '/contact'
    },
  ]

  return (
    <>
      <Head>
        <title>Entrust Digital {headTitle ? `- ${headTitle}` : ''}</title>
      </Head>
      <header className='fixed top-0 left-0 right-0 z-30 bg-white border-b'>
        <div className="flex items-center justify-between responsive h-14 md:h-16">
          {/* LOGO */}
          <Link href={'/'}>
            <Logo className='md:hidden'/>
            <Logo className='hidden md:block' multiplier={1.2}/>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <div className='-mr-2 md:hidden'>
            {showMenu ? (
              <IconButton className='' size={'lg'} onClick={() => toggleMenu(false)}>
                <MdClose/>
              </IconButton>
            ) : (
              <IconButton className='' size={'lg'} onClick={() => toggleMenu(true)}>
                <MdMenu/>
              </IconButton>
            )}
          </div>
          
          {/* DESKTOP LINKS */}
          <div className='items-center hidden space-x-6 font-medium md:flex'>
            {links.map((link, linkIdx) => (
              <Link key={linkIdx} href={link.path} active={link.path === router.pathname }>
                <ListItemText title={link.label}/>
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* NAV LINK */}
      <nav className={`fixed left-0 right-0 bottom-0 top-14 z-20 bg-white border-r transition-all duration-150 px-2 md:hidden flex flex-col  ${showMenu ? '' : '-translate-x-full'} shadow-xl`}>
        <List>
          {links.map((link, linkIdx) => (
            <ListItem key={linkIdx} variant={'noPadding'}>
              <Link href={link.path} onClick={toggleMenu} active={link.path === router.pathname }>
                <ListItemButton>
                  <ListItemText title={link.label}/>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </nav>
     
      <main className='mt-14 md:mt-16'>
        {children}

        {/* JUMBOTRON */}
        {contactUsJumbotron && (
          <section className="section responsive">
            <div className='flex flex-col items-center w-full p-8 text-center bg-secondary-50'>
              <Typography variant='h3' component={'h2'} className='mb-5'>
                Have an Idea or Project?
              </Typography>
              <Typography variant='body2' className='mb-8'>
                Call or send us an email to schedule an appointment. Our representative will reply you shortly.
              </Typography>
              <Button color={'secondary'} onClick={() => router.push('/contact')}>
                <Typography>
                  Contact Us Now
                </Typography>
              </Button>
            </div>
          </section>
        )}
      </main>

      <footer className={footerMargin ? 'mt-10 md:mt-20' : ''}>
        <div className="space-y-12 text-white section bg-primary">
          
          <section className="flex flex-col responsive">
            <div className="flex flex-col items-start space-y-12 lg:flex-row lg:space-y-0 lg:justify-between">
              
              <div className='lg:w-[28%]'>
                <Logo variant={'secondary'} size={'md'}/>
              </div>

              <div className='flex flex-col space-y-3  lg:w-[28%]'>
                <Typography className='mb-1 font-semibold' variant='subtitle5'>
                  LINKS
                </Typography>
                {links.map((link, linkIdx) => (
                  <Link key={linkIdx} href={link.path}>
                    <Typography>
                      {link.label}
                    </Typography>
                  </Link>
                ))}
              </div>

              <div className="flex flex-col space-y-10 lg:w-[28%]">
                {data.contact.map((contact, contactIdx) => (
                  <div key={contactIdx} className='flex flex-col space-y-3 '>
                    <Typography className='mb-1 font-semibold' variant='subtitle5'>
                      {contact.title}
                    </Typography>
                    {contact.list.map((item, itemIdx) => (
                      <div 
                        key={itemIdx} 
                        className='flex '
                      >
                        <ListItemIcon>
                          {item.type === 'phone' ? <MdOutlinePhone/> : item.type === 'address' ? <MdOutlinePinDrop/>: item.type === 'email' ? <MdOutlineMail/> : <MdOutlineAccessTime/>}
                        </ListItemIcon>
                        <Typography>
                          {item.item}
                        </Typography>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className='responsive'>
              <div className='flex flex-col items-start space-y-4'>
                <Link href={'https://www.linkedin.com/company/pt-entrepreneur-trust-digital/'} target={`_blank`} className='text-3xl'>
                  <IoLogoLinkedin/>
                </Link>
                <Typography>
                  © 2023 Entrust Digital
                </Typography>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  )
}
