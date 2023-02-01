import { Button, Input } from '@mui/material'
import Image from "next/image"
import styles from './style.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()

  const [pwd, setPwd] = useState('')

  const login = () => {
    console.log(pwd)
    router.replace('/backstage')
  }

  return (
    <div className={styles['root']}>
      <div className={styles['login-card']}>
        <div className={styles['header']}>
          <Image
            className={styles['logo']}
            src={'/logo-1.png'}
            width={40}
            height={40}
            alt='LOGIN'
          />
          <div className={styles['tip']}>Only I can enter the space</div>
        </div>
        <div className={styles['form']}>
          <Input
            placeholder='请输入密码'
            type='password'
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <Button
            className={styles['btn']}
            variant='contained'
            onClick={login}
          >登录</Button>
        </div>
      </div>
    </div>
  )
}

export default Login