import {createStore} from 'vuex'

export default createStore({
    state() {
        const application = {
            menu: {
                aside: {
                    isNavCollapsed: false,
                }
            },
        }
        return {application}
    },
    mutations: {
        navCollapseStateChangeHandler(state: any, payload) {
            state.application.menu.aside.isNavCollapsed = !state.application.menu.aside.isNavCollapsed
        }
    },
})
