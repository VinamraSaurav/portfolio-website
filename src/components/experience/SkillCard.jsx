import Image from 'next/image'
import React from 'react'
// import { Devicon } from 'react-devicons';

const EnumObj={
    'cplusplus':<i className="devicon-cplusplus-plain "></i>,
    'javascript':<i className="devicon-javascript-plain "></i>,
    'python':<i className="devicon-python-plain"></i>,
    'html5':<i className="devicon-html5-plain "></i>,
    'css3':<i className="devicon-css3-plain"></i>,
    'java':<i className="devicon-java-plain"></i>,
    'react':<i className="devicon-react-original"></i>,
    'reactrouter':<i className="devicon-reactrouter-plain"></i>,
    'tailwindcss':<i className="devicon-tailwindcss-original"></i>,
    'redux':<i className="devicon-redux-original"></i>,
    'nextjs':<i className="devicon-nextjs-original-wordmark"></i>,
    'vscode':<i class="devicon-vscode-plain"></i>,
    'github':<i class="devicon-github-original"></i>,
    'git':<i class="devicon-git-plain"></i>,
    'mysql':<i class="devicon-mysql-original"></i>,
    'figma':<i class="devicon-figma-plain"></i>,
}

const SkillCard = ({card}) => {
  return (
    <div>
        <div className='h-[180px] w-[200px] flex justify-center items-center border-[0.9px] rounded-md border-color-7 m-4 text-white text-7xl'>    
            <div>{EnumObj[card]}</div>
        </div>

    </div>
  )
}

export default SkillCard