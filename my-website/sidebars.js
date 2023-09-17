/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  myHtmlSidebar: [
    {
      type: 'html',
      value: '<img src="img/atom.svg" alt="Atom" />',
      defaultStyle: true,
    },
  ],
  mySidebar: [
    // Your regular sidebar items go here

    // Add an image next to the "Science" category
    {
      type: 'category',
      label: 'Science',
      items: ['science/science.md'], // Replace with your actual science section items
      collapsed: false, // Set to true if you want the Science category to be initially collapsed
      customProps: {
        image: '<img src="img/atom.svg" alt="Atom" />',
      },
    },
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};


module.exports = sidebars;
