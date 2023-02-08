const GET_TAGS_SQL = `select * from tags`

const ADD_TAG_SQL = `
  INSERT INTO tags (name) values (?)
`

export {
  GET_TAGS_SQL,
  ADD_TAG_SQL,
}