# Contributing guide
Note: you might want to read the [readme file](./README.md) first.
 
## Code conventions
Please try to follow Airbnb naming conventions and other style guidelines for [JavaScript](https://github.com/airbnb/javascript) and [React](https://github.com/airbnb/javascript/tree/master/react). 

## CSS
We use [CSS modules](https://github.com/css-modules/css-modules) for styling. Stylesheet file should be named as the corresponding component. All presets are already set in webpack configuration file.

## Storybook
We use [storybook](https://github.com/storybookjs/storybook) to see some components in action before inserting them into actual pages. To run the storybook execute `npm run sb`. Story files are stored inside [src/stories](./src/stories) folder

## Folder structure
* **src\components**. React components source code (no surprises :smiley:). Subfolders:
  * **\base**. Top level website layout related components 
  * **\common**. General purpose utility components 
  * **\contract**. Everything related to smart contract's parts display
  * **\info**. Information 'static text' components, like in About page. **To be removed!** 
  * **\settings**. Components for displaying website settings
* **src\scripts**. This contains non-React Javascript files. 
* **src\stories**. Story files for storybook.
* **src\stubs**. Data that was used to test some parts of website during development.

## Reporting bugs & suggesting features
Please use [Issues](https://github.com/olekon/justsmartcontracts/issues) section of the repository to report issues or suggest new features and improvements.


 ## Questions
 If you have **any** questions regarding the contributing process, please feel free to write directly to [contact@justsmartcontracts.dev](mailto:contact@justsmartcontracts.dev).