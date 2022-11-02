import moment from "moment"

const aloha = () => {
  const currTime = moment().format('YYYY-MM-DD HH')
  const t = +(currTime.split(' ')[1])

  if (t >= 0 && t < 12) {
    return 'Good Morning'
  } else if (t >= 12 && t < 18) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
}

export {
  aloha
}