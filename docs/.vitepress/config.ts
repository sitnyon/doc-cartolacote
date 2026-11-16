import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Docs Cartolacôte',
  /*titleTemplate: false,*/

  base: '/doc-cartolacote/',
  head: [
    ['link', { rel: 'icon', href: '/doc-cartolacote/favicon.png' }],
  ],
  themeConfig: {
    logo: { src: '/favicon.png', width: 24, height: 24 },
    sidebar: [
      {
        text: 'Géoportail',
        collapsed: false,
        items: geoportailItems(),
      },
      {
        text: 'Géoportail 3D',
        collapsed: false,
        items: geoportail3DItems(),
      },
      {
        text: 'Géoportail 3D LiDAR ',
        collapsed: false,
        items: geoportail3DLidarItems(),
      },
      {
        text: 'Webservices',
        collapsed: false,
        items: webservicesItems(),
      },
      {
        text: 'Commande de géodonnées',
        collapsed: false,
        items: commandeGeodonneesItems(),
      },
    ],

    search: {
      provider: 'local',
    },
  },
})

function geoportailItems(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'Présentation générale', link: '/geoportail/01-geoportail' },
    ]
}

function geoportail3DItems(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'Présentation générale', link: '/geoportail-3d/01-geoportail-3d' },
    ]
}

function geoportail3DLidarItems(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'Présentation générale', link: '/geoportail-3d-lidar/01-geoportail-3d-lidar' },
    ]
}

function webservicesItems(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'Présentation générale', link: '/webservices/01-webservices' },
    ]
}

function commandeGeodonneesItems(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'Présentation générale', link: '/commande-geodonnees/01-commande-geodonnees' },
    ]
}