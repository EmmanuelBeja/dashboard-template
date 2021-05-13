import React from 'react'
import './PreLoader.scss'
import Loader from 'react-loader-spinner'

const PreLoader = ({ color }) => (
  <Loader type="Oval" color={color || '#00BFFF'} height={20} width={20} />
)

export default PreLoader
