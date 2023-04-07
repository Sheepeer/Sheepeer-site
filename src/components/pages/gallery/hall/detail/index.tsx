import { TagColor } from "@/components/basic/tag";
import React from "react";
import styles from './style.module.scss'

interface Props {
  bgColor: TagColor
}

const Detail = ({ bgColor }: Props) => {
  return (
    <div className={styles['root']}>
      <div className={styles['paint-wrapper']}>

      </div>
      <div className={styles['card']}>
        
      </div>
    </div>
  )
}

export default Detail