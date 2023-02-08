import { Alert, Button, Input } from '@mui/material'
import Image from "next/image"
import styles from './style.module.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useSession, signIn } from 'next-auth/react'

const Login = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const [pwd, setPwd] = useState('')
  const [msg, setMsg] = useState('')

  const login = () => {
    // axios.post('/api/auth/login', { pwd })
    //   .then(res => {
    //     if (res.data.result === 'success') {
    //       router.replace('/backstage')
    //     } else {
    //       setMsg(res.data.result)
    //     }
    //   })
    signIn()
  }

  useEffect(() => {
    if (session) {
      router.replace('/backstage')
    }
  }, [session])

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
          <Alert
            severity='error'
            className={styles['alert-msg']}
            style={!!msg ? {} : { display: 'none' }}
          >{msg}</Alert>
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