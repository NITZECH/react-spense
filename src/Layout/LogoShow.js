import React from 'react'
import facebook from '../Assets/Facebook Logo.png'
import dribble from '../Assets/Dribbble Logo.png'
import youtube from '../Assets/Youtube Logo.png'
import pinterest from '../Assets/Pinterest Logo.png'
import twitter from '../Assets/Twitter Logo.png'
import reddit from '../Assets/Reddit Logo.png'
import google from '../Assets/Google Logo.png'
import slack from '../Assets/Slack Logo.png'


const LogoShow = () => {
    return (
        <section className='logoshow'>

<div className="logoshow__container">
<img className='logoshow__container-img' src={facebook} alt="facebook" />
<img className='logoshow__container-img' src={dribble} alt="facebook" />
<img className='logoshow__container-img' src={youtube} alt="facebook" />
<img className='logoshow__container-img' src={pinterest} alt="facebook" />
<img className='logoshow__container-img' src={twitter} alt="facebook" />
<img className='logoshow__container-img' src={reddit} alt="facebook" />
<img className='logoshow__container-img' src={google} alt="facebook" />
<img className='logoshow__container-img' src={slack} alt="facebook" />

</div>

        </section>
    )
}

export default LogoShow
