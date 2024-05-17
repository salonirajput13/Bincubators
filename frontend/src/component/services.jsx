import React from 'react'
import { Link } from 'react-router-dom'
import plan from '../assets/planning.gif'
import manage from '../assets/management.mp4'
import launch from '../assets/launch2.gif'
const Services = () => {
  return (
    <div>
      <header className='head-img'>

      </header>
      <section className='mt-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className='text-center pt-3' style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'maroon' }}>PLANNING</h2>
              <p className='text-center'>Our planning services craft tailored business roadmaps through market research and financial modeling, guiding startups and pivoting businesses for sustainable growth. Partner with us to turn your ideas into a strategically sound plan.</p>
              <div className='text-center'>
                <Link to='/PlanningServices' className='btn btn-outline-danger'>know more</Link>
              </div>
            </div>
            <div className="col-md-5">
              <img src={plan} alt='plan' className='img-fluid ser-img' />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img src={launch} alt='plan' className='img-fluid' />
            </div>
            <div className="col-md-7">
              <h2 className='text-center pt-5' style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'maroon' }}>LAUNCHING</h2>
              <p className='text-center'>Our launching services propel your business forward, offering expert guidance on locations, marketing, and funding. Partner with us for a seamless and impactful launch, navigating the early stages of your business journey with confidence.</p>
              <div className="text-center">
                <Link to='/LaunchingServices' className='btn btn-outline-danger '>know more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className='text-center pt-5' style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'maroon' }}>MANAGING</h2>
              <p className='text-center'>Our managing services drive ongoing success for your business. From seamless operations to strategic growth planning, we provide comprehensive support. Partner with us for efficient management that ensures your business not only survives but thrives.</p>
              <div className="text-center">
                <Link to='/ManagingServices' className='btn btn-outline-danger'>know more</Link>
              </div>
            </div>
            <div className="col-md-5">
              <video src={manage} alt='plan' className='m-vid' loop autoPlay muted />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services