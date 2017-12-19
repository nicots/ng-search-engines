export const navigation = [
    {
      name: 'Dashboard',
      url: '/',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'UI elements'
    },
    {
      name: 'Listing',
      url: '/listing',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Dashlist',
          icon: 'icon-puzzle',
          url: '/listing',
        },
        {
          name: 'Buttons',
          url: '/listing/buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Social Buttons',
          url: '/listing/social-buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cards',
          url: '/listing/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Forms',
          url: '/listing/forms',
          icon: 'icon-puzzle'
        },
        {
          name: 'Modals',
          url: '/listing/modals',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/listing/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/listing/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabs',
          url: '/listing/tabs',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/extern',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/extern/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/extern/register',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Download CoreUI',
      url: 'http://coreui.io/angular/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success'
    },
    {
      name: 'Try CoreUI PRO',
      url: 'http://coreui.io/pro/angular/',
      icon: 'icon-layers',
      variant: 'danger'
    }
  ];
