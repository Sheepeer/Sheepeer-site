const GET_POSTS_SQL = `select * from posts`

const ADD_POST_SQL = `
  INSERT INTO posts ( title, content, content_html, tag, date )
  VALUES
  ( '%title%', '%content%', '%content_html%', '%tag%', %date% );
`
//  const GET_TAGS_SQL = (tag?: string) => `
//   SELECT tag FROM posts ${tag && `WHERE tag = ${tag}`}
// `
const GET_TAGS_SQL = `select * from tags`

const ADD_TAG_SQL = `
  INSERT INTO tags (name) values ('%name%')
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
  return res.join('')
}

export {
  GET_POSTS_SQL,
  ADD_POST_SQL,
  GET_TAGS_SQL,
  ADD_TAG_SQL,
  sqlTemplate
}