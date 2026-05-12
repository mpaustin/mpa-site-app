// CRA exposes only REACT_APP_* variables, and they are read at build time.
const siteUrls = {
  uwEngineering: process.env.REACT_APP_UW_ENGINEERING_URL || 'https://www.engr.wisc.edu',
  linkedIn: process.env.REACT_APP_LINKEDIN_URL || 'https://www.linkedin.com/in/mattpaustin',
  github: process.env.REACT_APP_GITHUB_URL || 'https://www.github.com/mpaustin',
  instagram: process.env.REACT_APP_INSTAGRAM_URL || 'https://www.instagram.com/matt.p.austin',
};

export default siteUrls;
