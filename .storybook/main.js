module.exports = {
    stories: ['../src/stories/**/*.stories.js'],
    addons: ['@dump247/storybook-state/register', '@storybook/addon-actions/register'],
    features: {
        postcss: false,
    },
    core: {
        builder: 'webpack5',
    },
};
