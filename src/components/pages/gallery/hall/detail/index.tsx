import { TagColor } from "@/components/basic/tag";
import React from "react";
import styles from './style.module.scss'
import Paint from "../paint";
import { Close } from '@mui/icons-material'

interface Props {
  bgColor: TagColor
  style: object
  onClose: () => void
}

const Detail = ({ bgColor, style, onClose }: Props) => {
  return (
    <div className={styles['root']} style={style}>
      <div
        className={styles['close']}
        onClick={onClose}
      ><Close /></div>
      <div className={styles['paint-wrapper']}>
        <div className={styles['paint']}></div>
        <div className={styles['card']}>

        </div>
      </div>

    </div>
  )
}

export default Detail