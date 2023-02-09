import { Button } from '@mui/material'
import Image from "next/image"
import styles from './style.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/react'
import GitHub from '@mui/icons-material/GitHub'

const Login = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const login = () => {
    signIn()
  }

  useEffect(() => {
    console.log('session after login:', session)
    if (session) {
      localStorage.setItem('USER_INFO', JSON.stringify(session))
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

        <Button
          startIcon={<GitHub />}
          variant='outlined'
          className={styles['btn']}
          onClick={login}
        >Sign in</Button>
      </div>
    </div>
  )
}

export default Login