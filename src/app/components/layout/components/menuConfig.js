const data = [
  {
    id: 'dashboards',
    icon: <span className="icon material-icons">dashboard</span>,
    label: 'Dashboard',
    borderBottom: false,
    floatBottom: false,
    to: `/home`,
  },
  {
    id: 'library',
    icon: <span class="icon material-icons">insert_drive_file</span>,
    label: 'Library',
    borderBottom: false,
    floatBottom: false,
    to: `/library`,
  },
  {
    id: 'course-builder',
    icon: <span class="icon material-icons">mode</span>,
    label: 'Course Builder',
    borderBottom: false,
    floatBottom: false,
    to: `/course/builder`,
  },
  {
    id: 'analytics',
    icon: <span class="icon material-icons">show_chart</span>,
    label: 'Analytics',
    borderBottom: false,
    floatBottom: false,
    to: `/analytics`,
  },
  {
    id: 'tasks',
    icon: <span class="icon material-icons">task</span>,
    label: 'Tasks',
    to: '/tasks',
    borderBottom: false,
    subs: [],
  },
  {
    id: 'feedback',
    icon: <i class="icon far fa-comment-alt"></i>,
    label: 'Feedback & Responses',
    to: '/feedback',
    borderBottom: true,
  },
  {
    id: 'my earnings',
    icon: <i class="icon fas fa-money-bill"></i>,
    label: 'My Earnings',
    to: '/earnings',
    borderBottom: false,
  },
  {
    id: 'support and chat',
    icon: <i class="icon far fa-comments"></i>,
    label: 'Support & Chat',
    to: '/support',
    borderBottom: false,
  },
  {
    id: 'settings',
    icon: <span class="icon material-icons">more_horiz</span>,
    label: 'Settings',
    to: '/settings',
    borderBottom: false,
  },
]
export default data
