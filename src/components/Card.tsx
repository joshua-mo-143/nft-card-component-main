import React from 'react'
import cardImg from '/image-equilibrium.jpg'
import ethIcon from '/icon-ethereum.svg'
import clockIcon from '/icon-clock.svg'
import avatar from '/image-avatar.png'
type Props = {}

const Card = (props: Props) => {
  return (
    <div className="cardContainer">
        <img src={cardImg} alt="Equilibrium image" className='cardImg'/>
        <div className="cardTextContainer">
        <h2 className='cardTitle active'>Equilibrium #3429</h2>
        <p className='cardDescription'>Our Equilibrium collection promotes balance and calm.</p>
        <div className="cardDataContainer">
            <div className="cardStoreDataContainer">
            <div className="cardPrice">
                <img src={ethIcon} alt="Ethereum icon" />
                <p>0.041 ETH</p>
            </div>
            <div className="cardExpire">
                <img src={clockIcon} alt="Clock icon" />
                <p>3 days left</p>
            </div>
            </div>
            <hr/>
            <div className="cardCreator">
                <img src={avatar} alt="Creator avatar" width="35"/>
                <p>Creation of <span>Jules Wyvern</span></p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card