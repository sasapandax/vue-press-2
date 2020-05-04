module.exports = {
    title: "Sasapanda",
    themeConfig: {
      nav: [
        { text: 'About', link: '/' },
        { text: 'Blog', link: '/blog/'},
        { text:'Products',link: '/product/'},
        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items:[
                { text: '日本語', link : '/'}
            ]
        }
        
      ],
      sidebar : 'auto',
      lastUpdated: true
    },
    locales: {
        '/': {
            lang: 'ja'
        }            
    },
    dest: 'docs/',
    base: '/vue-press-2/'
  }