export default phone => {
  if (phone.length >= 3) {
    const r = /^[0-9-+*#]+$/
    return r.test(phone)
  }
}
