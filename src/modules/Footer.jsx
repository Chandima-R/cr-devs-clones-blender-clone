import React from 'react'
import {CiYoutube} from 'react-icons/ci';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiTwitter, FiFacebook} from 'react-icons/fi';
import {FaMastodon } from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {LuLinkedin} from 'react-icons/lu';
import FooterLinkCard from './FooterLinkCard';
function Footer() {
    const downloadLinks = [
        {"title": "Latest Blender", "link": "https://www.blender.org/download/"},
        {"title": "Blender LTS", "link": "https://www.blender.org/download/lts/"},
        {"title": "Blender Benchmark", "link": "https://www.blender.org/download/benchmark/"},
        {"title": "Previous Versions", "link": "https://www.blender.org/download/previous-versions/"},
        {"title": "Experimental Builds", "link": "https://www.blender.org/download/experimental/"},
        {"title": "Source Code", "link": "https://www.blender.org/download/source-code/"},
        {"title": "Release Notes", "link": "https://www.blender.org/download/releases/"},
        {"title": "Requirements", "link": "https://www.blender.org/download/requirements/"},
    ]

    const aboutLinks = [
        {"title": "Blender Foundation", "link": "https://www.blender.org/about/foundation"},
        {"title": "Blender Institute", "link": "https://www.blender.org/institute/"},
        {"title": "Blender Studio", "link": "https://www.blendernetwork.org/about/studio"},
        {"title": "license", "link": "https://www.blender.org/about/license"},
        {"title": "Logo & Trademark", "link": "https://www.blender.org/about/logo/"},
        {"title": "Credits", "link": "https://www.blender.org/credits"},
        {"title": "privacy Policy", "link": "https://www.blender.org/privacy-policy/"},

    ]

    const getInvoledLinks = [
        {"title": "Dashboard", "link": "https://projects.blender.org/"},
        {"title": "Development", "link": "https://developer.blender.org/"},
        {"title": "Documentation", "link": "https://www.blender.org/get-involved/documentation/"},
        {"title": "Education", "link": "https://www.blender.org/get-involved/"},
        
    ]

    const developersLinks = [
        {"title": "Get Started", "link": "https://developer.blender.org/?utm_medium=www-footer"},
        {"title": "Projects", "link": "https://projects.blender.org/?utm_medium=www-footer"},
        {"title": "Docs", "link": "https://wiki.blender.org/wiki/Main_Page?utm_medium=www-footer"},
        {"title": "Blog", "link": "https://code.blender.org/?utm_medium=www-footer"},
        {"title": "Forum", "link": "https://devtalk.blender.org/?utm_medium=www-footer"},
        {"title": "Python API", "link": "https://docs.blender.org/api/current/?utm_medium=www-footer"},
    ]

    const organizationLinks = [
        {"title": "People", "link": "https://www.blender.org/about/people/"},
        {"title": "Jobs", "link": "https://www.blender.org/jobs/"},
    ]

    const articlesLinks = [
        {"title": "News", "link": "https://www.blender.org/category/news/"},
        {"title": "Press Releases", "link": "https://www.blender.org/category/press/"},
        {"title": "User Stories", "link": "https://www.blender.org/get-involved/user-stories/"},
    ]

    const donateLinks = [
        {"title": "Development Fund", "link": "https://fund.blender.org/?utm_medium=www-footer"},
        {"title": "One-time Donations", "link": "https://www.blender.org/about/donations/?utm_medium=www-footer"},
    ]

    const blenderStudioLinks = [
        {"title": "Films", "link": "https://studio.blender.org/films/?utm_medium=www-footer"},
        {"title": "Training", "link": "https://studio.blender.org/training/?utm_medium=www-footer"},
    ]

    const supportLinks = [
        {"title": "Manual", "link": "https://docs.blender.org/manual/en/latest/?utm_medium=www-footer"},
        {"title": "Community", "link": "https://www.blender.org/community/"},
        {"title": "FAQ", "link": "https://www.blender.org/support/faq/"},
    ]
  return (
    <div className='bg-zinc-800 pt-10 m-auto flex flex-col justify-center text-gray-300 mt-10 p-10 md:p-0'>
        <div className='flex flex-col md:flex-row items-start justify-center w-full md:w-8/12 mx-auto md:mt-10'>
            <div className='md:border-r-2 border-gray-500 w-full grid grid-cols-2 md:flex'>
                <div className="w-10/12">
                    <div>
                        <h1 className='mb-2 '><a className='hover:underline hover:text-gray-400 text-sm' href='https://www.blender.org/download/'>Download</a></h1>
                        {downloadLinks.map((link, index) => {
                            return (
                                <FooterLinkCard
                                    key={index}
                                    title={link.title}
                                    link={link.link}
                                />
                            )
                        })}
                    </div>

                    <div>
                            {organizationLinks.map((link, index) => {
                                return (
                                    <FooterLinkCard
                                        key={index}
                                        title={link.title}
                                        link={link.link}
                                    />
                                )
                            })}
                    </div>
                </div>
                <div className="w-10/12">
                    <div>
                        <h1 className='mb-2 '><a className='hover:underline hover:text-gray-400 text-sm' href='https://www.blender.org/about/'>About</a></h1>
                            {aboutLinks.map((link, index) => {
                                return (
                                    <FooterLinkCard
                                        key={index}
                                        title={link.title}
                                        link={link.link}
                                    />
                                )
                            })}
                    </div>
                    <div>
                        <h1 className='mb-2 '><a className='hover:underline hover:text-gray-400 text-sm' href='https://www.blender.org/news/'>Articles</a></h1>
                            {articlesLinks.map((link, index) => {
                                return (
                                    <FooterLinkCard
                                        key={index}
                                        title={link.title}
                                        link={link.link}
                                    />
                                )
                            })}
                    </div>
                </div>
                <div className="w-10/12">
                    <div>
                        <h1 className='mb-2 '><a className='hover:underline hover:text-gray-400 text-sm' href='https://www.blender.org/get-involved/'>Get Involved</a></h1>
                            {getInvoledLinks.map((link, index) => {
                                return (
                                    <FooterLinkCard
                                        key={index}
                                        title={link.title}
                                        link={link.link}
                                    />
                                )
                            })}
                    </div>
                    <div>
                        <h1 className='mb-2 '><a className='hover:underline hover:text-gray-400 text-sm' href='https://fund.blender.org/?utm_medium=www-footer'>Donate</a></h1>
                            {donateLinks.map((link, index) => {
                                return (
                                    <FooterLinkCard
                                        key={index}
                                        title={link.title}
                                        link={link.link}
                                    />
                                )
                            })}
                    </div>
                    <div>
                        <h1 className='mb-2 '><a className='hover:underline hover:text-gray-400 text-sm' href='https://studio.blender.org/welcome/'>Blender Studio</a></h1>
                            {blenderStudioLinks.map((link, index) => {
                                return (
                                    <FooterLinkCard
                                        key={index}
                                        title={link.title}
                                        link={link.link}
                                    />
                                )
                            })}
                    </div>
                </div>
                <div className="w-10/12">
                    <div>
                        <h1 className='mb-2 '><a className='hover:underline hover:text-gray-400 text-sm' href='https://developer.blender.org/?utm_medium=www-footer'>Developers</a></h1>
                            {developersLinks.map((link, index) => {
                                return (
                                    <FooterLinkCard
                                        key={index}
                                        title={link.title}
                                        link={link.link}
                                    />
                                )
                            })}
                    </div>
                    <div>
                        <h1 className='mb-2 '><a className='hover:underline hover:text-gray-400 text-sm' href='https://www.blender.org/support/'>Support</a></h1>
                            {supportLinks.map((link, index) => {
                                return (
                                    <FooterLinkCard
                                        key={index}
                                        title={link.title}
                                        link={link.link}
                                    />
                                )
                            })}
                    </div>
                    <div>
                        <h1 className='mb-2 '><a className='hover:underline hover:text-gray-400 text-sm' href='https://conference.blender.org/2022/'>Blender Conference</a></h1>
                    </div>
                </div>
            </div> 
                
            <div className='md:ml-4 w-1/5'>
                <h1 className='mb-2 text-sm'><a className='hover:underline hover:text-gray-400 text-sm' href='https://twitter.com/blender'>Follow Blender</a></h1>
                <div className='flex items-center duration-300 hover:text-red-500'>
                    <CiYoutube className='-mt-2 mr-4' />
                    <h1 className='text-xs text-gray-400 mb-1 duration-300 hover:text-red-500'>
                        <a href='https://www.youtube.com/BlenderFoundation'>YouTube</a>
                    </h1>
                </div>
                <div className='flex items-center duration-300 hover:text-sky-500'>
                    <FiTwitter className='-mt-2 mr-4' />
                    <h1 className='text-xs text-gray-400 mb-1 duration-300 hover:text-sky-500'>
                        <a href='https://twitter.com/blender'>Twitter</a>
                    </h1>
                </div>
                <div className='flex items-center duration-300 hover:text-purple-500'>
                    <AiOutlineInstagram className='-mt-2 mr-4' />
                    <h1 className='text-xs text-gray-400 mb-1 duration-300 hover:text-purple-500'>
                        <a href='https://www.instagram.com/blender.official/'>Instagram</a>
                    </h1>
                </div>
                <div className='flex items-center duration-300 hover:text-blue-500'>
                    <FiFacebook className='-mt-2 mr-4' />
                    <h1 className='text-xs text-gray-400 mb-1 duration-300 hover:text-blue-500'>
                        <a href='https://www.facebook.com/YourOwn3DSoftware/'>Facebook</a>
                    </h1>
                </div>
                <div className='flex items-center duration-300 hover:text-sky-600'>
                    <LuLinkedin className='-mt-2 mr-4' />
                    <h1 className='text-xs text-gray-400 mb-1 duration-300 hover:text-sky-600'>
                        <a href='https://www.linkedin.com/company/blender-org/'>LinkedIn</a>
                    </h1>
                </div>
                <div className='flex items-center duration-300 hover:text-purple-600'>
                    <FaMastodon className='-mt-2 mr-4' />
                    <h1 className='text-xs text-gray-400 mb-1 duration-300 hover:text-purple-600'>
                        <a href='https://mastodon.social/@blender'>Mastodon</a>
                    </h1>
                </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center text-slate-500 text-xs md:text-sm py-2'>
            <p className='flex'>Artistic freedom starts with Blender <AiOutlineHeart className='mx-2 md:mx-4'/></p>
            <p>The Free and Open Source 3D Creation Suite</p>
        </div>
    </div>
  )
}

export default Footer