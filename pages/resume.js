export default function resume() {
    return (
        <>
        <div>
        <div>
  <div className="site-wrap">
    <a href="#" className="offcanvas-toggle js-offcanvas-toggle">Menu</a>
    <div className="offcanvas_menu" id="offcanvas_menu">
      <ul className="mb-5">
        <li><a href="index.html">Bio</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li className="active"><a href="resume.html">Resume</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <ul className="social">
        <li><a href="#" className="fa fa-twitter" /></li>
        <li><a href="#" className="fa fa-facebook" /></li>
        <li><a href="#" className="fa fa-instagram" /></li>
      </ul>
      <br />{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
      Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
    </div>
    <aside style={{backgroundImage: 'url(img/profile_big.jpg)'}} />
    <main>
      <a href="index.html" className="home-button"><span className="fa fa-home" /></a>
      <h1 className="mb-5">Experience</h1>
      <div className="mb-5">
        <ul className="resume-list">
          <li>
            <h3>Product Designer, Google</h3>
            <p className="date">Sep 2017 - Present</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolorum dolore culpa libero delectus excepturi! Repellat dolore, sapiente officia quod.</p>
          </li>
          <li>
            <h3>User Experience Director, Facebook</h3>
            <p className="date">Jan 2016 - Sep 2017</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolorum dolore culpa libero delectus excepturi! Repellat dolore, sapiente officia quod.</p>
          </li>
          <li>
            <h3>Mobile Application Designer, Yahoo</h3>
            <p className="date">Nov 2015 - Jan 2016</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolorum dolore culpa libero delectus excepturi! Repellat dolore, sapiente officia quod.</p>
          </li>
          <li>
            <h3>Product Designer, Medium</h3>
            <p className="date">Feb 2013 - Nov 2015</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolorum dolore culpa libero delectus excepturi! Repellat dolore, sapiente officia quod.</p>
          </li>
        </ul>
      </div>
      <h1 className="mb-5">Education</h1>
      <div className="mb-5">
        <ul className="resume-list">
          <li>
            <h3>Harvard University</h3>
            <p className="date">2010 - 2014</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolorum dolore culpa libero delectus excepturi! Repellat dolore, sapiente officia quod.</p>
          </li>
        </ul>
      </div>
    </main>
  </div>
  {/* loader */}
  <div id="loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#f4b214" /></svg></div>
</div>

        </div>
        </>
    )
}