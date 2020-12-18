import axios from 'axios'

export const getSurbay = () => {
  return axios.get(`${process.env.SERVER_URL}/get_surbay`)
}