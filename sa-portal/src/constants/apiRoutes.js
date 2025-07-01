const ROUTES = {
  HOMEPAGE_ANNOUNCEMENTS: "/home-page-announcements", // DONE*
  HOMEPAGE_ACHIEVEMENTS: "/achievements?populate=*", // DONE*
  SA_TEAM: "/student-affairs-teams?populate[members][populate]=imageUrl",
  SA_SERVICES: "/services?populate=*", // DONE*
  SCHOLARSHIPS: "/scholarships?populate=*", // DONE*
  SA_COURSES: "/sa-courses", // DONE*
  NOTICES_ON_RULES: "/notices-on-rules?populate=*", // DONE*
  FORMS: "/forms?populate=*", // DONE*
  SAC_MEMBERS: "/sac-members?populate[member][populate]=imageUrl", // DONE*
  SAC_MINUTES: "/sac-minutes?populate=*", // DONE*
  SGC_TEAM: "/student-gymkhana-teams?populate[members][populate]=imageUrl", // DONE*
  CULTURAL_BOARD_ANNOUNCEMENTS: "/cultural-board-announcements", // DONE
  CULTURAL_BOARD_EVENTS: "/cultural-board-events?populate=*", // DONE
  CULTURAL_BOARD_CLUBS: "/cultural-board-clubs?populate[club][populate]=*", // DONE
  CULTURAL_BOARD_TEAM: "/cultural-board-teams?populate=*", // DONE
  HOSTEL_AFFAIRS_BOARD_ANNOUNCEMENTS: "/hostel-affairs-board-announcements", // DONE
  HOSTEL_AFFAIRS_BOARD_EVENTS: "/hostel-affairs-board-events?populate=*", // DONE
  HOSTEL_AFFAIRS_BOARD_TEAM: "/hostel-affairs-teams?populate[members][populate]=imageUrl", // DONE
  HMC_MEMBERS: "/hmc-members?populate=*", // DONE
  SPORTS_BOARD_COURSES: "/sports-board-courses?populate=*",
  SPORTS_BOARD_FACILITIES: "/sports-board-facilities?populate=*", // DONE
  SPORTS_BOARD_EVENTS: "/sports-board-events?populate=*", // DONE
  SPORTS_BOARD_CLUBS: "/sports-board-clubs?populate[club][populate]=*", // DONE
  SPORTS_BOARD_TEAM: "/sports-board-teams?populate=*", // DONE
  SPORTS_BOARD_RULES: "/sports-board-rules?populate=*", // DONE
  SPORTS_BOARD_FORMS: "/sports-board-forms?populate=*", // DONE
  TECHNICAL_BOARD_ANNOUNCEMENTS: "/technical-board-announcements", // DONE
  TECHNICAL_BOARD_EVENTS: "/technical-board-events?populate=*", // DONE
  TECHNICAL_BOARD_CLUBS: "/technical-board-clubs?populate[club][populate]=*", // DONE
  TECHNICAL_BOARD_TEAM: "/technical-board-teams?populate=*", // DONE
  WELFARE_BOARD_ANNOUNCEMENTS: "/welfare-board-club-announcements", // DONE*
  WELFARE_BOARD_EVENTS: "/welfare-board-events?populate=*", // DONE -- card responsiveness left
  WELFARE_BOARD_CLUBS: "/welfare-board-clubs?populate[club][populate]=*", // DONE*
  WELFARE_BOARD_TEAM: "/welfare-board-teams?populate[members][populate]=*", // DONE*
  WEB_COMMITTEE_ANNOUNCEMENTS: "/web-committee-announcements", // DONE*
  WEB_COMMITTEE_EVENTS: "/web-committee-events?populate=*", // DONE
  WEB_COMMITTEE_SERVICES: "/web-committee-services?populate=*", // DONE*
  WEB_COMMITTEE_TEAM: "/swc-teams?populate=*", // DONE*
};

export default ROUTES;
