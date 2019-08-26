import netlifyIdentity from "netlify-identity-widget"

export const isBrowser = () => typeof window !== "undefined"

if (isBrowser()) {
    netlifyIdentity.init()
    window.netlifyIdentity = netlifyIdentity
}

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("netlifyUser")
    ? JSON.parse(window.localStorage.getItem("netlifyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("netlifyUser", JSON.stringify(user))

export const handleLogin = () => {
  if (!isLoggedIn()) {
    netlifyIdentity.open()
    netlifyIdentity.on("login", user => {
      setUser(user)
    })
  }
}

export const isLoggedIn = () => {
  if (!isBrowser()) return false
  const user = netlifyIdentity.currentUser()
  return !!user
}

export const handleLogout = () => {
  netlifyIdentity.logout()
  netlifyIdentity.on("logout", () => {
    setUser({})
  })
}

export const getUserAuthentication = () => {
    if(isLoggedIn()) {
        const authenticatedUsers = ['liferay.com', 'triblio.com', 'kyrodigital.com'];
        const userEmail = netlifyIdentity.currentUser().email;

        return authenticatedUsers.some(user => {
            return userEmail.includes(user);
        });
    } else {
        return false
    }
}