import { createVNode, render } from 'vue'

export default function renderComponent(data: ren) {
    let component = data.component, props = data.props, appContext = data.appContext, el = data.el
  let vnode = createVNode(component, props) as any
  vnode.appContext = { ...appContext }
  render(vnode, el)

  return () => {
    // destroy vnode
    render(null, el)
    
    vnode = undefined
  }
}
interface ren {
    el: any
    component: any
    props: any
    appContext: any
}