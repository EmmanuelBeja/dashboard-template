import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export const redirectUser = (url) => {
  history.push(url)
}
