export const ROLE_PERMISSIONS = {
  visitor: [
    "view_homepage",
    "view_about",
    "view_contact",
    "view_programs",
    "view_events",
    "register",
    "login",
  ],
  student: [
    "view_dashboard",
    "view_courses",
    "view_assignments",
    "view_grades",
    "view_attendance",
    "view_calendar",
    "view_messages",
    "view_profile",
  ],
  teacher: [
    "manage_classes",
    "manage_courses",
    "create_assignments",
    "grade_submissions",
    "manage_attendance",
    "send_announcements",
    "chat_with_students",
    "view_reports",
  ],
  parent: [
    "view_child_progress",
    "view_grades",
    "view_attendance",
    "view_events",
    "receive_announcements",
    "communicate_with_teachers",
    "view_fees",
  ],
  manager: [
    "manage_users",
    "manage_courses",
    "manage_events",
    "view_reports",
    "view_analytics",
    "manage_settings",
    "audit_activity",
  ],
};

export const canAccess = (role, permission) => {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
};
