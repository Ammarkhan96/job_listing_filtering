import React from 'react'
const images = require.context("../images")

const Posts = (props) => {
  return (
    <div className={props.featured? "post-box featured-border":"post-box"}>
        <div className='content-frame'>
            <img className='company-logo' src={images(props.companyLogo)} alt='logo-img'/>
            <div className='text-frame'>
                <h4 className='text company-name'>{props.compnayName} {props.new && <span className='new-tag'>new!</span>} {props.featured && <span className='featured-tag'>featured</span>}</h4>
                <h3 className='text job-title'>{props.jobTitle}</h3>

            </div>
            <hr className={!props.showLine ? "not-visible" : '"'}></hr>
            <div className='skill-frame'>
                <ul className='skill-list'>
                    {props.skills.map((skill, i) => 
                    <li onClick={props.onClick} className='skills' key={i}>{skill}</li>
                    )}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Posts