export default {
    items: [
        {
            id: 'pages',
            title: 'Pages',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'sample-page',
                    title: 'Sample Page',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'signin-1',
                    title: 'Sign in',
                    type: 'item',
                    url: '/auth/signin-1',
                    icon: 'feather icon-lock',
                    badge: {
                        title: 'New',
                        type: 'label-danger'
                    },
                    target: true,
                    breadcrumbs: false
                },
                {
                    id: 'menu-level',
                    title: 'Menu Levels',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                        {
                            id: 'menu-level-1.1',
                            title: 'Menu Level 1.1',
                            type: 'item',
                            url: '#!',
                        },
                        {
                            id: 'menu-level-1.2',
                            title: 'Menu Level 2.2',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-2.1',
                                    title: 'Menu Level 2.1',
                                    type: 'item',
                                    url: '#',
                                },
                                {
                                    id: 'menu-level-2.2',
                                    title: 'Menu Level 2.2',
                                    type: 'collapse',
                                    children: [
                                        {
                                            id: 'menu-level-3.1',
                                            title: 'Menu Level 3.1',
                                            type: 'item',
                                            url: '#',
                                        },
                                        {
                                            id: 'menu-level-3.2',
                                            title: 'Menu Level 3.2',
                                            type: 'item',
                                            url: '#',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}



//one way to do role-based routes

/*

    export const IDs = {
        headAdmin: "head-admin",
        eventAdmin: "event-admin",
        treasurerAdmin: "treasurer-admin",
        membershipAdmin: "membership-admin",
        staffAdmin: "staff-admin",
        member: "member",
    }
    const membershipAdminChildren = [
        {
            id: `${IDs.membershipAdmin}-profile`,
            title: 'Profile',
            type: 'item',
            url: `/${IDs.membershipAdmin}/profile`,
            classes: 'nav-item',
            icon: 'feather icon-home',
            breadcrumbs: false
        },
        {
            id: `${IDs.membershipAdmin}-members`,
            title: 'Members',
            type: 'item',
            url: `/${IDs.membershipAdmin}/members`,
            classes: 'nav-item',
            icon: 'feather icon-home',
            breadcrumbs: false
        },
    ]

    const menu_items = {
        [`${IDs.membershipAdmin}`]: {
            items: [
                {
                    id: `${IDs.membershipAdmin}-pages`,
                    role: IDs.membershipAdmin,
                    title: '',
                    type: 'group',
                    icon: 'feather icon-menu',
                    children: membershipAdminChildren
                }
            ]
        },
    }


    export default menu_items
*/

// example1-how to use 
/*
  import navigation from 'menu-items';


  navigation['role'];

*/