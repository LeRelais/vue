import { createApp } from 'vue';

import App from './App.vue';
import FriendDetail from './components/FriendDetail.vue'
const app = createApp(App)

app.component('friend-detail', FriendDetail)

app.mount('#app')
