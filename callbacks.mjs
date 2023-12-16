import('./script1.mjs')
  .then((module) => {
    console.log("module",module.hi)
})
  .catch((error) => {
    console.error('An error occurred while importing the module:', error);
  });