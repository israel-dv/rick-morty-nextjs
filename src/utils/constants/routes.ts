interface RoutesProperties {
  name: string
  path: string
  label: string
}

interface Routes {
  characters: RoutesProperties
  episodes: RoutesProperties
  locations: RoutesProperties
}

const ROUTES: Routes = {
  characters: {
    label: 'Characters',
    name: 'characters',
    path: '/characters',
  },
  locations: {
    label: 'Locations',
    name: 'locations',
    path: '/locations',
  },
  episodes: {
    label: 'Episodes',
    name: 'episodes',
    path: '/episodes',
  },
}

export default ROUTES
