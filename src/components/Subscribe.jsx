import tg from '../img/tg.svg'
import Input from './UI/Input'

const Subscribe = () => {
    
  return (
    <section className="subscribe">
        <div className="container">
            <div className="subscribe_content">
                <div className="subscribe_about">
                    <img src={tg} alt="" className="subscribe_img"/>
                    <div className="subscribe_text">Subscribe to our newsletter<br/>& get <span>10% discount!</span></div>
                </div>
                <Input subAlert={'Thanks you for subscribing'}/>
            </div>
        </div>
    </section>
  )
}

export default Subscribe