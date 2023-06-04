import React from 'react'

function FooterLinkCard({header, title, link}) {
  return (
    <ul>
        <li className='text-xs text-gray-400 mb-1'>
            <a className='hover:underline' href={link}>{title}</a>
        </li>
    </ul>
  )
}

export default FooterLinkCard