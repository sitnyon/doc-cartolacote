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
      {
        text: 'Historique des versions',
        collapsed: false,
        items: historiqueVersionsItems(),
      },
    ],
    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    },
    outline: {
      label: 'Sur cette page'
    },
    lastUpdated: {
      text: 'Mis à jour le'
    },
    darkModeSwitchLabel: 'Apparence',
    lightModeSwitchTitle: 'Passer au thème clair',
    darkModeSwitchTitle: 'Passer au thème sombre',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Retour en haut',
    langMenuLabel: 'Changer de langue',
    skipToContentLabel: 'Aller au contenu',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Rechercher',
            buttonAriaLabel: 'Rechercher'
          },
          modal: {
            noResultsText: 'Aucun résultat trouvé pour',
            resetButtonTitle: 'Effacer la recherche',
            displayDetails: 'Afficher les détails',
            footer: {
              selectText: 'pour sélectionner',
              navigateText: 'pour naviguer',
              closeText: 'pour fermer'
            }
          }
        }
      }
    },
    footer: {
      copyright: 'Copyright © 2026 Cartolacôte'
    }
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
        { text: 'Présentation générale', link: '/webservices/webservices' },
        { text: 'Adresse', link: '/webservices/webservices-adresse' },
        { text: 'Adresses', link: '/webservices/webservices-adresses' },
        { text: 'Chantiers et perturbations de trafic', link: '/webservices/webservices-chantiers' },
        { text: 'Catalogue', link: '/webservices/webservices-catalogue' },
        { text: 'Documents', link: '/webservices/webservices-documents' },
        { text: 'Enquêtes publiques', link: '/webservices/webservices-enquetes-publiques' },
        { text: 'Métadonnées', link: '/webservices/webservices-metadonnees' },
        { text: 'Nature en ville', link: '/webservices/webservices-nature-ville' },
        { text: 'Rues', link: '/webservices/webservices-rues' },
    ]
}

function commandeGeodonneesItems(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'Présentation générale', link: '/commande-geodonnees/01-commande-geodonnees' },
    ]
}

function historiqueVersionsItems(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'Toutes les versions', link: '/versions/01-versions' },
    ]
}