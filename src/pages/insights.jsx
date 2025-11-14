import { Title } from "@solidjs/meta";

// COMPONENTS
import PageTitleBanner from "../components/pageTitleBanner";

// ASSETS
import newsImage from "../assets/pictures/news.jpeg";
import twisImage from "../assets/pictures/TWIS-sample.png";
import exampleTwis from "../assets/documents/TWIS-example.pdf";

const pageTitle = "Insights";
const pageSubtitle = "Stay informed with timely updates, in-depth reports, and trusted insights that highlight our work for you and the issues shaping today's policy landscape.";

export default function Insights() {
  return (
    <main>
      <Title>Norwood News</Title>
        <PageTitleBanner 
          bannerImage={newsImage}
          title={pageTitle}
          subtitle={pageSubtitle}
        />

      <div class="container-fluid">
        <div class="row pt-lg-5">
          <h1 class="services-title mb-0 mt-4 mx-0">This Week in Sacramento</h1>
        </div>
        <div class="row">
          <div class="col-lg-8 col-12 ">
              <h5 class="services-description">All clients enjoy subscription to This Week in Sacramento, our premier weekly newsletter of ongoing activities and current events in California's capital.</h5>
              <br/><br/>
              <a class="example-twis" href={exampleTwis} target="_blank">
                <img class="twis-picture" src={twisImage}/>
              </a>
          </div>             
        </div>
        <br/><br/>
      </div>
    </main>
  );
}
