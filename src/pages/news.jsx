import { Title } from "@solidjs/meta";

// COMPONENTS
import PageTitleBanner from "../components/pageTitleBanner";

// PICTURES
import newsImage from "../assets/pictures/news.jpeg";

const pageTitle = "News";
const pageSubtitle = "Stay informed with timely updates, in-depth reports, and trusted insights that highlight our work for you and the issues shaping today's policy landscape.";

export default function News() {
  return (
    <main>
      <Title>Norwood News</Title>
        <PageTitleBanner 
          bannerImage={newsImage}
          title={pageTitle}
          subtitle={pageSubtitle}
        />
    </main>
  );
}
