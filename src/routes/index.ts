import { lazy, LazyExoticComponent, ComponentType } from 'react'

export interface Route {
  path: string // 路径
  name: string // 路由名称
  title: string // 标题
  component: LazyExoticComponent<ComponentType> // 组件
}

export const routes: Array<Route> = [
  {
    path: '/transfer', // 路径
    name: 'transfer', // 路由名称
    title: 'Transfer', // 标题
    component: lazy(() => import('@views/Transfer')), // 组件
  },
  {
    path: '/home', // 路径
    name: 'home', // 路由名称
    title: 'Home', // 标题
    component: lazy(() => import('@views/Home')), // 组件
  },
  {
    path: '/', // 路径
    name: 'index', // 路由名称
    title: 'index', // 标题
    component: lazy(() => import('@views/Index')), // 组件
  },
]