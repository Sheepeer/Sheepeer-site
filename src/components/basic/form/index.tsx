import { useState } from 'react'
import styles from './style.module.scss'

type FormItemType = 'input'

type FormListItem = {
  type: FormItemType,
  label: string
}

type Values = {
  [key: string]: any
}

interface Props {
  formList: Array<FormListItem>
}

const Form = ({ formList }: Props) => {
  const [values, setValues] = useState<Values>()

  return (
    <div className={styles['root']}>

    </div>
  )
}

const FormItem = () => {
  return (
    <div className={styles['root']}>

    </div>
  )
}

export default Form
export {
  FormItem,
}