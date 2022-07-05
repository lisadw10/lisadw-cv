

export default function Home({websiteData}) {
  
  return (
    <>
 
 <div>
<div className="site-wrap">
  <a href="#" className="offcanvas-toggle js-offcanvas-toggle">Menu</a>
  <div className="offcanvas_menu" id="offcanvas_menu">
    <ul className="mb-5">
      <li className="active"><a href="index.html">Bio</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
      <li><a href="resume.html">Resume</a></li>
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
  <aside style={{backgroundImage: `url(${websiteData.dbWeb[0].img})`}} />
  <main>
    <h1 className="mb-0">{websiteData.dbWeb[0].title}</h1>
    <div className="mb-5">
      <p className="lead mb-3">{websiteData.dbWeb[0].desc}</p>
      <p>{websiteData.dbWeb[0].items[0].value}</p>
      <p>{websiteData.dbWeb[0].items[1].value}</p>
    </div>
    <p>
      <a href={websiteData.dbWeb[1].social[0].url} className="mr-2 mb-2">Twitter</a>
      <a href={websiteData.dbWeb[1].social[1].url} className="mr-2 mb-2">Facebook</a>
      <a href={websiteData.dbWeb[1].social[2].url} className="mr-2 mb-2">Instagram</a> 
    </p>
    
  </main></div>
{/* loader */}
<div id="loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#f4b214" /></svg></div>
</div>
    </>
  )
}

export async function getServerSideProps(context) {
  const localUrl = "https://cv-lisadw.herokuapp.com/";
  const dataResponse = await fetch(localUrl);
  const JsonData = await dataResponse.json();

  return {
    props: {
      websiteData: JsonData,
    },
  };
}
