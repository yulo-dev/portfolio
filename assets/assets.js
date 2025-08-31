import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Xcelerate',
        description: 'Excel Copilot with AI-powered spreadsheet automation',
        bgImage: '/work-1.png',
        link: 'https://github.com/noellelo/Excel-AI-Processor'
    },
    {
        title: 'Pinception',
        description: 'A Chrome extension: Pin and reuse ChatGPT messages and prompts',
        bgImage: '/work-2.png',
        link: 'https://chromewebstore.google.com/detail/gegkjocbamflconbpcepdipelhlemdmj?utm_source=item-share-cb'
    },
    {
        title: 'Netflix Clone',
        description: 'Ｍovie app with Firebase backend',
        bgImage: '/work-3.png',
        link: 'https://github.com/yulo-dev'
    },

]

export const serviceData = [
    { icon: assets.web_icon, title: 'Programming Languages', description: (<>Python,Java,JavaScript</>), link: '' },
    { icon: assets.mobile_icon, title: 'Frameworks & Libraries', description: (<>Flask, RESTful APIs, API Design, React.js, HTML/CSS/Tailwind CSS, XML, XSL</>), link: '' },
    { icon: assets.ui_icon, title: 'DevOps & Cloud', description: (<> AWS (EC2, S3, Lambda), CI/CD pipelines, Observability & Debugging, Unix/Linux Environments</>), link: '' },
    { icon: assets.ui_icon, title: 'Databases & Other Technologies', description: (<>SQL (MySQL, ANSI SQL), ETL Pipelines, Data Processing, GitHub, Jira</>), link: '' },
]

export const infoList = [
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'Education',
        type: 'education',
        details: [
            {
                institution: 'University of Washington',
                degree: 'M.S. in Computer Engineering',
                time: 'Sept 2025 - June 2027',
                description: (
                    <>
                      - Relevant courses: Data Structures and Algorithms for ECE Applications, Machine Learning Operations (MLOPS),
                      Software Engineering for Embedded Applications
                    </>
                  ),
                // logo: assets.uw_logo
            },
            {
                institution: 'Northeastern University',
                degree: 'M.S. in Computer Science (transferred)',
                time: 'Jan 2025 - Aug 2025',
                description: (
                    <>
                      - GPA: 4.0 / 4.0<br /><br />
                      - Relevant courses: Intensive Foundations of Computer Science (Python), Discrete Structures<br /><br />
                      - Transferred to align with long-term goals in applied software engineering and AI-powered systems


                    </>
                  ),
                // logo: assets.ntu_logo
            }
        ]
    },
    {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: 'Experience',
        type: 'experience',
        details: [
            {
                company: 'PAREXEL',
                position: (
                    <>
                      Senior Statistical Programmer<br />
                      (Backend & Automation)
                    </>
                  ),
                time: 'Dec 2018 – Nov 2024',
                description: (
                    <>
                      - Specializing in backend automation for global clinical trials;
                        delivered standardized datasets across regulatory agencies (e.g., FDA, PMDA) to support approvals,
                        including Asia’s first FDA‑approved treatment for nasopharyngeal carcinoma<br /><br />
                      - Built scalable backend pipelines and automation workflows to transform global clinical trial data into
                        standardized, analysis‑ready formats, improving processing speed and reliability
                    </>
                  ),
            }
        ]
    }
];

export const toolsData = [

];