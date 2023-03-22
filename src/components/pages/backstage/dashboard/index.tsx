import Grid2 from '@mui/material/Unstable_Grid2'
import styles from './style.module.scss'
import AnalysisCard from './analysis-card'
import Card from '@/components/basic/card'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import { useSession } from 'next-auth/react'
import NoAuth from '@/components/layout/no-auth'

const DashBoard = () => {
  const { data, error } = useSWR({
    url: '/api/analysis'
  }, fetcher)
  const { result } = data ?? {}

  const { data: session } = useSession()
  console.log(session)


  return (
    !!session && session.user?.email === process.env.GITHUB_EMAIL
      ? (
        <div className={styles['root']}>
          <Grid2 container spacing={2}>
            <Grid2 xs={4}>
              <AnalysisCard
                title='网站访问量'
                account={9}
                loading={!data && !error}
              />
            </Grid2>
            <Grid2 xs={4}>
              <AnalysisCard
                title='文章总浏览量'
                account={12}
                loading={!data && !error}
              />
            </Grid2>
            <Grid2 xs={4}>
              <AnalysisCard
                title='文章总数'
                account={result?.posts_sum ?? 0}
                loading={!data && !error}
              />
            </Grid2>

            <Grid2 xs={12}>
              <Card>

              </Card>
            </Grid2>
          </Grid2>
        </div>
      )
      : <NoAuth />
  )
}

export default DashBoard