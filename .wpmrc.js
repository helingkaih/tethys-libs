module.exports = {
    allowBranch: ['master', 'release-*'],
    bumpFiles: [
        'package.json',
        {
            filename: './packages/components/version.ts',
            type: 'code'
        }
    ],
    skip: {
        changelog: true
    },
    commitAll: true,
    hooks: {
        prepublish: 'yarn build && yarn pub-only',
        postreleaseBranch: 'lerna version {{version}} && git add .'
    }
};
