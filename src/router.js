import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'
import Contacto from './components/Contacto'
import SobreMi from './components/SobreMi'
import Post from './components/Post'
import Articulo from './components/Articulo'
import NotFound from './components/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [

        {
            path: '/',
            component: Index,
            name: 'index'
        },

        {
            path: '/contacto',
            component: Contacto,
            name: 'contacto'
        },
        {
            path: '/sobremi',
            component: SobreMi,
            name: 'sobremi'
        },
        {
            path: '/post/:id',
            component: Post,
            children:[
                {
                    path: 'articulo',
                    component: Articulo,
                    name: 'articulo'
        }],

            
        },
        {
            path: '*',
            component: NotFound
        }

    ]
})