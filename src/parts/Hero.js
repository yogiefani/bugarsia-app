import React from 'react'
import ImageHero from 'assets/images/img-hero.png'
import ImageHero_ from 'assets/images/img-hero-frame.png'
import IconAthlete from 'assets/images/icons/ic_athlete 1.svg'
import IconCities from 'assets/images/icons/ic_cities.svg'
import IconTrainer from 'assets/images/icons/ic_trainer.svg'
import Button from 'elements/Button'
import formatNumber from 'utils/formatNumber'

export default function Hero(props) {
    function showMostPicked(){
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }

  return (
    <section className='container pt-1'>
        <div className='row align-items-center'>
            <div className='col-auto pr-5' style={{ width : 550}}>
                <h1 className='font-weight-bold line-height-1 mb-3'>Forget your fatty food,<br/>And get your life fit everyday
                </h1>
                <p className='mb-4 font-weight-light text-gray-500 w-75' style={{lineHeight: "170%"}}>
                We provide what you need<br/>
                To stay healthy and fit anywhere<br/>
                your fitness with Bugarsia.
                </p>
                <Button className='btn px-5' hasShadow isPrimary onClick={showMostPicked}>
                    Show Me Now
                </Button>
                <div className='row mt-5 '>
                    <div className='col-auto ' style={{marginRight: 35}}>
                        <img width={36} height={36}
                        src={IconAthlete} 
                        alt={`${props.data.athlete} Athlete`} />
                        <h6 className='mt-3'>
                            {formatNumber(props.data.athletes)} 
                            <span className='text-gray-500 font-weight-light'> athletes</span>
                        </h6>
                    </div>
                    <div className='col-auto ' style={{marginRight: 35}}>
                        <img width={36} height={36}
                        src={IconCities} 
                        alt={`${props.data.cities} Cities`} />
                        <h6 className='mt-3'>
                            {formatNumber(props.data.cities)} 
                            <span className='text-gray-500 font-weight-light'> cities</span>
                        </h6>
                    </div>
                    <div className='col-auto ' style={{marginRight: 35}}>
                        <img width={36} height={36}
                        src={IconTrainer} 
                        alt={`${props.data.trainers} Trainers`} />
                        <h6 className='mt-3'>
                            {formatNumber(props.data.trainers)} 
                            <span className='text-gray-500 font-weight-light'> trainers</span>
                        </h6>
                    </div>
                </div>
            </div>
            <div className='col-6 pl-5'>
                <div style={{width:520, height:410}}>
                    <img src={ImageHero} alt='Room GYM' className='img-fluid position-absolute' style={{margin:'-30px 0 0 -30px', zIndex: 1}}/>
                    <img src={ImageHero_} alt='Room GYM Frame' className='img-fluid position-absolute' style={{margin:'25px -45px -45px 0'}}/>
                </div>
            </div>
        </div>
    </section>
  )
}
