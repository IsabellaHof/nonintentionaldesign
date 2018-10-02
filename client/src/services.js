export function save(app, data) {
  localStorage.setItem(app, JSON.stringify(data))
}

export function load(app) {
  const dataString = localStorage.getItem(app)
  try {
    return JSON.parse(dataString)
  } catch (error) {
    return { error }
  }
}
