const menu = [
    {
        label: 'Home',
        location: 'home',
        icon: 'utility:home',
        position: 'top',
        show: 'private',
        visible: false
    },
    {
        label: 'About Me',
        location: 'about-me',
        icon: 'utility:user',
        position: 'top',
        show: 'private',
        visible: false
    },
    {
        label: 'Academics',
        location: 'academics',
        icon: 'utility:education',
        position: 'top',
        show: 'private',
        visible: false
    },
    {
        label: 'Careers',
        location: 'careers',
        icon: 'utility:case',
        position: 'top',
        show: 'private',
        visible: false
    },
    {
        label: 'ALU Pay',
        location: 'https://pay.example.com',
        icon: 'utility:currency',
        position: 'top',
        show: 'private',
        visible: false,
        external: true
    },
    {
        label: 'Support',
        location: 'support',
        icon: 'utility:info',
        position: 'control',
        show: 'always',
        visible: false
    },
    {
        label: 'Login',
        location: 'login',
        icon: 'utility:power',
        position: 'control',
        show: 'public',
        visible: false
    },
    {
        label: 'Logout',
        location: 'logout',
        icon: 'utility:logout',
        position: 'control',
        show: 'private',
        visible: false
    }
];

function getTopMenu(hasAccess, currentPage) {
    const _menu = [...menu].filter((item) => {
        return item.position == 'top'
            && ((item.show == 'always')
                ||((item.show == 'private') && hasAccess)
                ||((item.show == 'public') && !hasAccess))
    });
    return _menu.map((item) => {
        item.visible = (!item.external) && (currentPage == item.location);
        return Object.assign({},item);
    });
}

function getControlMenu(hasAccess) {
    return [...menu].filter((item) => {
        return item.position == 'control'
            && ((item.show == 'always')
                ||((item.show == 'private') && hasAccess)
                ||((item.show == 'public') && !hasAccess))
    });
}

function getSubMenuFor(path) {
    const submenus = {
        home: [
            { label: 'Console of Events', location: 'console-of-events' },
            { label: 'Message Board', location: 'message-board' },
            { label: 'Clubs Directory', location: 'clubs-directory' },
            { label: 'People Directory', location: 'people-directory' },
            { label: 'General Policies', location: 'general-policies' }
        ],
        'about-me': [
            {label: "My Profile", location: 'my-profile'},
            {label: "Emergency Contacts", location: 'emergency-contacts'},
            {label: "Travel Documents", location: 'travel-documents'},
            {label: "Immigration Support", location: 'immigration-support'},
            {label: "Medical Information", location: 'medical-information'}
        ],
        academics: [
            {label: "My Grades", location: 'my-grades'},
            {label: "Transcripts", location: 'transcripts'},
            {label: "Term Registration", location: 'term-registration'},
            {label: "Admission Office Queries", location: 'admission-office-queries'},
            {label: "Degree Program FAQs", location: 'degree-profram-faqs'}
        ],
        careers: [
            {label: "Opportunities", location: 'opportunities'},
            {label: "My Applications", location: 'my-applications'},
            {label: "Current Internship", location: 'current-internship'},
            {label: "Past Internships", location: 'past-internships'}
        ]
    };
    return submenus[path];
}


export default { getControlMenu, getTopMenu, getSubMenuFor };