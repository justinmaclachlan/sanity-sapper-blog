export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dbb2458115ed87189403c4e',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-t72dt36o',
                  apiId: 'e5b07497-d337-42b4-bfe3-6c08447d1940'
                },
                {
                  buildHookId: '5dbb2458f016e84c917a1f7f',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-mtbsm2np',
                  apiId: 'c46ec1d1-1e58-4689-b09c-25131a243a94'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justinmaclachlan/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-mtbsm2np.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
