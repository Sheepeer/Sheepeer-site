const GET_ALL_POSTS_SQL = `select * from posts`

const GET_POST_SQL = `select * from posts where id = ?`

const ADD_POST_SQL = `
  INSERT INTO posts ( title, content, content_html, tag, date )
  VALUES
  ( ?, ?, ?, ?, ? );
`

const GET_TAGS_SQL = `select * from tags`

const ADD_TAG_SQL = `
  INSERT INTO tags (name) values (?)
`

export {
  GET_ALL_POSTS_SQL,
  GET_POST_SQL,
  ADD_POST_SQL,
  GET_TAGS_SQL,
  ADD_TAG_SQL,
}