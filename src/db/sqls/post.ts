const GET_ALL_POSTS_SQL = (tag?: string) => `
  select * from posts join tags
  where posts.isDraft = 0
  and posts.tag = tags.name
  ${tag && `and tag = ?`}
`

const GET_ALL_DRAFTS_SQL = `select * from posts join tags where posts.isDraft = 1 and posts.tag = tags.name`

const GET_POST_SQL = `select * from posts join tags where posts.id = ? and posts.tag = tags.name`

const ADD_POST_SQL = `
  INSERT INTO posts ( title, content, content_html, tag, date, isDraft )
  VALUES
  ( ?, ?, ?, ?, ?, ? );
`

const MOD_POST_SQL = `
  UPDATE posts SET title=?, content=?, content_html=?, tag=?, date=?, isDraft=?
  WHERE id=?
`

const DEL_POST_SQL = `
  DELETE FROM posts where id = ?
`



export {
  GET_ALL_POSTS_SQL,
  GET_ALL_DRAFTS_SQL,
  GET_POST_SQL,
  ADD_POST_SQL,
  MOD_POST_SQL,
  DEL_POST_SQL
}