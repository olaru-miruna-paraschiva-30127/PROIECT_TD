import { computed, reactive } from 'vue'
import * as Request from '@/requests'

const state = reactive({
  name: '',
  username: '',

  error: ''
})

const getters = reactive({
  isLoggedIn: computed(() => state.username !== '')
})

const actions = {

  async login(username: string, password: string) {
    const user = await Request.login(username, password)
    if (user == null) {
      state.error = 'Could not find user.'
      return false
    }


    state.username = username
    state.error = ''

    return true
  },
  async logout() {

    state.username = ''
  }
}

export default { state, getters, ...actions }