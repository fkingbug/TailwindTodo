import React, { FC } from 'react'
import { LayOutProps } from '../../features/LayOutProps'

const Layout: FC<LayOutProps> = ({ children }) => {
  return <div className='py-10 bg-gray-900 h-screen'>{children}</div>
}

export default Layout
