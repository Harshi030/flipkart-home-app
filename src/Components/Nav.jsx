import React from 'react'
import style from "./nav.module.css"
import Logo from './Logo'
import Search from './Search'
import Cart from './Cart'
import Dot from './Dot'
const Nav = () => {
  return (
    <div>
    <section id={style.nav}>
      <article>
      <div id={style.Logo}> <Logo/> </div>
      <div id={style.Search}> <Search/> </div>
      <p id={style.Dot}><Dot/></p>
      <div  id={style.Cart}> <Cart/> </div>
      </article>
    </section>
    <div id={style.main}>
      <div id={style.items}>
        <div id={style.topoffers}>
          <img src="	https://rukminim1.flixcart.com/fk-p-flap/80/80/image/085406bae47866d5.png?q=100" alt="" />
          <p>Top Offers</p>
        </div>
        <div id={style.mobiles}>
          <img src="	https://rukminim1.flixcart.com/fk-p-flap/80/80/image/64f1cc66052c66ef.png?q=100" alt="" />
          <p>Mobiles&Tablets</p>
        </div>
        <div id={style.electronics}>
          <img src="	https://rukminim1.flixcart.com/fk-p-flap/80/80/image/1fd83847b32a09d1.png?q=100" alt="" />
          <div id={style.dropdown}>
            <button id={style.dropbtn}>Electronics</button>
            <div id={style.dropcontent}>
              <a href="#">Laptops</a>
              <a href="#">Watches</a>
              <a href="#">Tablets</a>
            </div>
          </div>
        </div>
        <div id={style.tv}>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/6c0716819ac55121.png?q=100	" alt="" />
          <p>Tv&Appliances</p>
        </div>
        <div id={style.fashion}>
          <img src="	https://rukminim1.flixcart.com/fk-p-flap/80/80/image/6dbed7ba5417672f.jpg?q=100	" alt="" />
          <div id={style.dropdown}>
            <button id={style.dropbtn}>Fashion</button>
            <div id={style.dropcontent}>
              <a href="#">Men</a>
              <a href="#">Women</a>
            </div>
          </div>
        </div>
        <div id={style.beauty}>
          <img src="	https://rukminim1.flixcart.com/fk-p-flap/80/80/image/c444de48eb75d450.png?q=100" alt="" />
          <div id={style.dropdown}>
            <button id={style.dropbtn}>Beauty</button>
            <div id={style.dropcontent}>
              <a href="#">Baby Care</a>
              <a href="#">Women Beauty Care</a>
            </div>
          </div>
        </div>
        <div id={style.home}>
          <img src="	https://rukminim1.flixcart.com/fk-p-flap/80/80/image/f9c7aaa5f5455ae7.png?q=100	" alt="" />
          <p>Home & Kitchen</p>
        </div>
        <div id={style.grocery}>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/022cf9a62e8bd22c.png?q=100	" alt="" />
          <p>Grocery</p>
        </div>
      </div>
    </div>
    <div>
      <marquee behavior="slide" direction="right">
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2c7142dcb842dc4b.jpeg?q=20" alt="" />
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/09158220c9cec620.jpeg?q=20" alt="" />
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/09158220c9cec620.jpeg?q=20" alt="" />
        <img src="	https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1d106026d4daf695.jpg?q=20" alt="" />
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b8e07ff39439d998.jpg?q=20" alt="" />
      </marquee>
    </div>
    <div id={style.best}>
      <p>Best Of Electronics</p>
      <button>VIEW ALL</button>
    </div>
    <div id={style.EIMG}>
      <img src="https://rukminim2.flixcart.com/image/200/200/xif0q/tablet/p/b/j/-original-imagrhgmuhecqhyy.jpeg?q=70" alt="" />
      <img src="https://rukminim2.flixcart.com/image/200/200/xif0q/tablet/v/w/t/-original-imagu2mdexmnb7bw.jpeg?q=70" alt="" />
      <img src="https://rukminim2.flixcart.com/image/150/150/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70" alt="" />
      <img src="https://rukminim2.flixcart.com/image/200/200/kc0u7bk0/body-fat-analyzer/8/h/z/omron-hbf-214-original-imaft85ddzmbzxzh.jpeg?q=70" alt="" />
      <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/screen-guard/screen-guard/4/b/d/asg-14715-saco-original-imaghqbah9jycshw.jpeg?q=70" alt="" />
      <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/5/c/5/-original-imagtrj27kprghgz.jpeg?q=70" alt="" />
    </div>
    </div>
  )
}

export default Nav