export const profileRoutesConfig = {
  base: {
    path: 'profile',
    url: '/profile',
    label: 'Profile',
  },
  children: {
    myProfile: {
      path: 'me',
      url: '/profile/me',
      label: 'My profile',
    },
    editProfile: {
      path: 'edit',
      url: '/profile/me/edit',
      label: 'Edit profile',
    },
    changePassword: {
      path: 'change-password',
      url: '/profile/me/change-password',
      label: 'Change password',
    },
    changeEmail: {
      path: 'change-email',
      url: '/profile/me/change-email',
      label: 'Change email',
    },
    changePasswordConfirm: {
      path: 'change-password-confirm',
      url: '/profile/me/change-password-confirm',
      label: 'Change password confirm',
    },
    changeEmailConfirm: {
      path: 'change-email-confirm',
      url: '/profile/me/change-email-confirm',
      label: 'Change email confirm',
    },
  },
};
