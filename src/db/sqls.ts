export const GET_POSTS_SQL = `select * from posts`

export const ADD_POST = `
INSERT INTO posts ( title, content, content_html, tag, date )
  VALUES
  ( '%title%', '%content%', '%content_html%', '%tag%', %date% );
`
export const GET_TAGS_SQL = (tag?: string) => `
  SELECT tag FROM posts ${tag && `WHERE tag = ${tag}`}
`

const sqlTemplate = (sql: string, ...values: any[]) => {
  const _sql = sql.split('%')
  if (_sql.length === 1) {
    return sql
  }

  const res: Array<string> = []
  for (let i = 0; i < _sql.length; i++) {
    if (i % 2 === 0) {
      res.push(_sql[i])
    } else {
      res.push(values[(i - 1) / 2])
    }
  }
  console.log(res.join(''))
  return res.join('')
}

export {
  sqlTemplate
}