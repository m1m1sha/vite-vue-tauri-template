import App from '~/App.vue'
import { installModules } from '~/modules'
import '@unocss/reset/tailwind-compat.css'
import '~/styles/styles.css'
import 'uno.css'

installModules(createApp(App))
