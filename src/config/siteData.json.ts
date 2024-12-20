export interface SiteDataProps {
  name: String;
  title: string;
  description: string;
  useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
  author: {
    name: string;
    email: string;
    // twitter: string; // used for twitter cards when sharing a blog post on twitter
  };
  defaultImage: {
    src: string;
    alt: string;
  };
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Guloklopo",
  // Your website's title and description (meta fields)
  title:
    "Guloklopo - Hunian kost nyaman dan asri",
  description:
    "Kostan menyediakan hunian kost nyaman dengan fasilitas lengkap di tengah kota Semarang.",
  useViewTransitions: true,
  // Your information!
  author: {
    name: "Guloklopo House",
    email: "tanya@hguloklopo.com",
    // twitter: "Cosmic_Themes",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/icon-gulo.png",
    alt: "Guloklopo logo",
  },
};

export default siteData;
