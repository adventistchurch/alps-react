import React from "react";

import LoadScript from "./helpers/LoadScript";

import ArticleHeader from "./organisms/sections/ArticleHeader";
import BasicPage from "./templates/BasicPage";
import Footer from "./organisms/global/Footer";
// import Grid2upContent from './organisms/content/Grid2upContent'
import Header from "./organisms/global/Header";
import MediaBlock from "./molecules/blocks/MediaBlock";
import Microsite from "./templates/Microsite";
import Pagination from "./organisms/navigation/Pagination";
import Text from "./molecules/text/Text";

const menus = {
  primary: [
    {
      label: "Home",
      url: "/",
      subpages: [
        {
          label: "Hallo",
          url: "/hallo"
        },
        {
          label: "Wie gehts?",
          url: "/wie-geths",
          active: true
        },
        {
          label: "Alles gut?",
          url: "/alles-gut"
        }
      ]
    },
    {
      label: "News",
      url: "/news"
    },
    {
      label: "Test",
      url: "/test"
    }
  ],
  secondary: [
    {
      label: "English",
      icon: "world",
      url: "#",
      subpages: [
        {
          label: "English",
          url: "/en",
          active: true
        },
        {
          label: "Español",
          url: "/es"
        },
        {
          label: "Portugese",
          url: "/pt"
        },
        {
          label: "Deutsch",
          url: "/de"
        }
      ]
    },
    {
      label: "Press",
      url: "/press"
    }
  ]
};

const logo = {
  path: "//cdn.adventist.org/alps/2/latest/images/logo/",
  square: "adventist-logo--sq.svg",
  horizontal: "adventist-logo--en--horiz.svg",
  //text: "logo-text--inter-european-division.svg",
  title: "Adventist Church"
};

const page = {
  header: {
    kicker: "Ut expedita ipsum",
    title: "Possimus mollitia nobis off",
    heading: "Adventist News Network®",
    subhead:
      "The official news service of the Seventh-day Adventist world church",
    imageSrc:
      "https://news.adventist.org/fileadmin/news.adventist.org/files/layout/Logo.png"
  },
  basicContent: (
    <div>
      <ArticleHeader
        heading="Dolores, nisi asperiores totam dolor sit hic tempore"
        subheading="Ratione commodi perspiciatis tempora placeat asperiores impedit omnis illo id magnam expedita."
        meta={{
          name: "John Doe",
          date: "2017/05/16 14:20",
          dateFormat: "date",
          region: "Alsbach-Hähnlein, Germany"
        }}
      />
      <Text className="spacing">
        <h1>Content!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quod
          rerum soluta repellat odit vel, molestiae dolor provident magnam
          ratione, dignissimos autem, iusto pariatur iure omnis. Illum, dolorum
          odio deleniti!
        </p>

        <h3>Error aperiam pariatur unde iure</h3>
        <p>
          Est ea eius, laudantium eaque voluptatibus laborum unde doloribus
          nesciunt praesentium ipsam, dolorem sapiente. Magni, dolorum?
          Repudiandae nam facere dolores eaque perferendis.
        </p>

        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>

        <h4>Alias rem excepturi corrupti</h4>
        <p>
          Debitis aspernatur harum aut, deleniti architecto eius fugit provident
          earum nulla reprehenderit animi impedit ab repellat quibusdam hic
          explicabo suscipit nihil soluta. Expedita sed amet ipsum iure magnam
          esse velit vero, cumque, officia, molestiae corrupti.
        </p>

        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ol>
      </Text>
    </div>
  ),
  microsite: (
    <div>
      <div>
        <MediaBlock
          // heading={{
          // 	title: "Amet assumenda excepturi quam dolorem sit recusandae reiciendis quia, aliquam.",
          // 	icon: 'world'
          // }}
          // kicker="Quos quis placeat ut quam."
          title="Consectetur adipisicing elit"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo obcaecati ut ea expedita dolor, ex libero dolore consequatur, deserunt error tempora earum dignissimos!"
          imageSrcSet={{
            default: "//placehold.it/700x400",
            700: "//placehold.it/900x500",
            900: "//placehold.it/800x400"
          }}
          imageAlt="Accusantium officia dolor"
          url="http://news.adventist.org"
          cta="Read more!"
        />
      </div>
      <Pagination
        totalPages={214}
        currentPage={128}
        currentOffset={2}
        extremesOffset={1}
        onPageClick={({ page }) => console.log(`Go to page #${page}`)}
        onPrevClick={({ page }) => console.log(`Go to prev page #${page}`)}
        onNextClick={({ page }) => console.log(`Go to next page #${page}`)}
      />
    </div>
  ),
  micrositeNav: [
    {
      name: "News",
      url: "#",
      subitems: [
        { name: "Life Hope Centers", url: "#" },
        { name: "Global Mission", url: "#" },
        { name: "Life Hope Centers", url: "#" },
        { name: "Church Mission Offerings", url: "#" }
      ]
    },
    { name: "ANN Videos", url: "#" },
    { name: "Photos", url: "#" },
    { name: "Church Business Meetings", url: "#" }
  ],
  aside: {
    content: (
      <div className="text spacing">
        <h3>Aside title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
          tempore, pariatur? Suscipit placeat sed quia tempora laudantium
          facilis quasi quo in eveniet ratione laboriosam at earum nisi
          pariatur, reprehenderit inventore!
        </p>
      </div>
    ),
    nav: {
      category: [
        { name: "Submit a News Story", url: "#" },
        { name: "Reproduction Requirements", url: "#" },
        { name: "Styleguide", url: "#" },
        { name: "Feeds", url: "#" },
        { name: "Training", url: "#" },
        { name: "News Contact Information", url: "#" },
        { name: "Overview, Mission and Method", url: "#" }
      ],
      social: [
        { name: "Twitter", url: "#", icon: "world" },
        { name: "Facebook", url: "#", icon: "vitality" },
        { name: "Flicker", url: "#", icon: "spirituality" },
        { name: "Youtube", url: "#", icon: "magnify" },
        { name: "Vimeo", url: "#", icon: "service" },
        { name: "Email", url: "#", icon: "share" }
      ]
    }
  }
};

const App = () => (
  <div className="content cf has-aside" role="document">
    <Header
      primaryMenu={menus.primary}
      secondaryMenu={menus.secondary}
      logo={logo}
    />
    <BasicPage
      title={page.header.title}
      kicker={page.header.kicker}
      content={page.basicContent}
      aside={page.aside.content}
    />
    <Microsite
      title={page.header.title}
      kicker={page.header.kicker}
      heading={page.header.heading}
      subhead={page.header.subhead}
      headingLogoSrc={page.header.imageSrc}
      navigation={page.micrositeNav}
      content={page.microsite}
      asideContent={page.aside.content}
      asideNav={page.aside.nav}
    />
    <Footer />
    <LoadScript url="//code.jquery.com/jquery-2.2.4.min.js" />
    <LoadScript url="//cdn.adventist.org/alps/3/latest/js/script.min.js" />
  </div>
);

export default App;
