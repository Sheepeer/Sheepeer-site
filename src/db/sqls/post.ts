const GET_ALL_POSTS_SQL = (tag?: string) => `
  select * from posts 
  where isDraft = 0
  ${tag && `and tag = ?`}
`

const GET_ALL_DRAFTS_SQL = `select * from posts where isDraft = 1`

const GET_POST_SQL = `select * from posts where id = ?`

const ADD_POST_SQL = `
  INSERT INTO posts ( title, content, content_html, tag, date, isDraft )
  VALUES
  ( ?, ?, ?, ?, ?, ? );
`

const MOD_POST_SQL = `
  UPDATE posts SET title=?, content=?, content_html=?, tag=?, date=?, isDraft=?
  WHERE id=?
`



export {
  GET_ALL_POSTS_SQL,
  GET_ALL_DRAFTS_SQL,
  GET_POST_SQL,
  ADD_POST_SQL,
  MOD_POST_SQL,
}