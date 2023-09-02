'use client'
// need to create a redux provider as separate because by default nextjs is SSR where redux is not accessible
import { Provider } from 'react-redux'
import store from './store'

export default function ReduxProvider({children}) {
    return (
        <Provider store={store}>{children}</Provider>
    )
}