import Layout from '@/components/Layout/Layout'
import ListItemIcon from '@/components/ListItemIcon/ListItemIcon'
import Typography from '@/components/Typography/Typography'
import data from '@/utils/data'
import React from 'react'
import { MdOutlineAccessTime, MdOutlineMail, MdOutlinePhone, MdOutlinePinDrop } from 'react-icons/md'

export default function ContactPage() {
  return (
    <Layout 
      headTitle={'Contact'}
      contactUsJumbotron={false}
      footerMargin={false}
    >
      {/* BANNER */}
      <section className="section bg-slate-100">
        <div className='flex flex-col items-center justify-center text-center responsive '>
          <Typography variant={'h1'} className='mb-6 text-primary'>
            Contact
          </Typography>
        </div>
      </section>

      <section className="section">
        <div className="responsive">
          <div className="flex flex-col justify-between space-y-10 lg:space-x-10 lg:space-y-0 lg:flex-row">
            {data.contact.map((contact, contactIdx) => (
              <div key={contactIdx} className='flex flex-col lg:flex-shrink-0 space-y-3 lg:w-[29%]'>
                <Typography className='mb-1 font-bold' variant='h5' font={'secondary'}>
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
      <div className="aspect-video">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9813788626775!2d107.61024237493571!3d-6.892830393106276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7efadcb9ca9%3A0xd5da984fd4d1b827!2sPT%20Entrepreneur%20Trust%20Digital!5e0!3m2!1sen!2sid!4v1691380920956!5m2!1sen!2sid" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  
      </div>
    </Layout>
  )
}
