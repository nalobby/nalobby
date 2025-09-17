import { Title } from "@solidjs/meta";

// COMPONENTS
import HomeBanner from "../components/homeBanner";
import HrDivider from "../components/hrDivider";
import ContactButton from "../components/contactbutton";

// PICTURES
import testimonyBanner from "../assets/pictures/testimony-banner.png";

const homeSubtitle1 = "Norwood Associates is a boutique government relations firm built on decades of earned trust to consistently punch above our weight."

const cardOneTitle = "FULL-SCOPE";
const cardOneText = "Comprehensive services tailored to individual client needs.";
const cardTwoTitle = "DEDICATED";
const cardTwoText = "Our small team has learned to do more with less for all of our clients.";
const cardThreeTitle = "KEEN INSIGHT";
const cardThreeText = "Getting you the latest information on issues affecting your business.";
const contactPrompt = "Learn more how Norwood Associates can advocate for you in Sacramento.";

export default function Home() {
  return (
    <main>
      <Title>Norwood Associates</Title>
      <HomeBanner />
      <div class="separator-row"></div>

      <div class="container-fluid">
        <div class="row mt-md-5 pt-md-5 mb-5">
          <div class="col-md-7 ">
            <h2 class="home-descriptions left mb-5 pb-5">{homeSubtitle1}</h2>
            <hr />
          </div>
        </div>

        <div class="row mt-md-5 pt-md-5 mb-5 ">
          <div class="col-3 px-4">
            <div class="card homepage-card card-one" >
              <div class="p-4 ms-auto">
                <i class="bi bi-stack homepage-card-icon "/>
              </div>              
              <div class="card-body">
                <h5 class="card-title my-4">{cardOneTitle}</h5>
                <p class="card-text mt-0 mb-2">{cardOneText}</p>
              </div>
              <a class="card-page-link ms-auto" href="/services">Go to Services <i class="bi bi-arrow-up-right"/></a>
            </div>
          </div>
          <div class="col-3 px-4">
            <div class="card homepage-card card-two" >
              <div class="p-4 ms-auto">
                <i class="bi bi-bullseye homepage-card-icon "/>
              </div>
              <div class="card-body">
                <h5 class="card-title my-4">{cardTwoTitle}</h5>
                <p class="card-text mt-0 mb-2">{cardTwoText}</p>
              </div>
              <a class="card-page-link ms-auto" href="/team">Go to Team <i class="bi bi-arrow-up-right"/></a>
            </div>
          </div>
          <div class="col-3 px-4">
            <div class="card homepage-card card-three" >
              <div class="p-4 ms-auto">
                <i class="bi bi-compass homepage-card-icon "/>
              </div>
              <div class="card-body">
                <h5 class="card-title my-4">{cardThreeTitle}</h5>
                <p class="card-text mt-0 mb-2">{cardThreeText}</p>
              </div>
              <a class="card-page-link ms-auto" href="/news">Go to News & Reports <i class="bi bi-arrow-up-right"/></a>
            </div>
          </div>
          
        </div>
        
        <HrDivider />
        <ContactButton 
          prompt={contactPrompt}
        />
      </div>
      
      <div>
        <div class="separator-row"></div>
        <img src={testimonyBanner} class="d-block w-100 testimony-banner" alt="..."/>
      </div>


    </main>
  );
}
