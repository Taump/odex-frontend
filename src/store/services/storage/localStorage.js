// Bump on any config change that invalidates state users already have in their
// browsers (a renamed token, a different default pair). `tokens` and
// `tokenPairs` are derived from config and the backend and get dropped; `account`
// is the user's own session and is always carried over as is.
export const STATE_VERSION = 2

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }

    const { version, ...state } = JSON.parse(serializedState)

    if (version !== STATE_VERSION) {
      return state.account ? { account: state.account } : undefined
    }

    return state
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({ ...state, version: STATE_VERSION })
    localStorage.setItem('state', serializedState)
  } catch (err) {
    // to define
  }
}

export const loadValue = (key) => {
  try {
    const value = localStorage.getItem(key)

    return value
  } catch (err) {
    console.log(err)
  }
}

export const setValue = (key, value) => {
  try {
    localStorage.setItem(key, value)

  } catch (err) {
    console.log(err)
  }
}

export const setShowHelpModalSetting = (value) => {
  setValue('showHelpModal', value)
}

export const loadShowHelpModalSetting = () => {
  let value = loadValue('showHelpModal')

  if (value === null || value === "true") {
    return true
  } else {
    return false
  }
}
