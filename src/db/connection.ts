import {
  ADD_POST_SQL,
  ADD_TAG_SQL,
  GET_ALL_POSTS_SQL,
  GET_POST_SQL,
  GET_TAGS_SQL,
  MOD_POST_SQL,
  GET_POSTS_SUM_SQL,
} from "./sqls";
import connectMysql from "./connect";
import { ADD_POST_PV_SQL, DEL_POST_SQL, GET_ALL_DRAFTS_SQL } from "./sqls/post";

export interface Post {
  title: string;
  content: string;
  content_html: string;
  tag: string;
  date: number;
  isDraft: 0 | 1;
  id?: number;
}

type Res = { msg: "success" | "error" };

const ERROR_MSG: { msg: "error" } = { msg: "error" };
const SUCCESS_MSG: { msg: "success" } = { msg: "success" };

const connection = connectMysql();

class Mysql {
  // posts
  static getPosts = (tag?: string) => {
    return new Promise<{ result: any; errno: 0 | 1 }>((resolve, reject) => {
      try {
        connection.query(GET_ALL_POSTS_SQL(tag), [tag], function (err, result) {
          if (err) {
            console.error(err);
            reject({ result: err, errno: 1 });
          } else {
            resolve({ result: result, errno: 0 });
          }
        });
      } catch (e) {
        reject({ result: e, errno: 1 });
      }
    });
  };

  static getDrafts = () => {
    return new Promise<{ result: any; errno: 0 | 1 }>((resolve, reject) => {
      try {
        connection.query(GET_ALL_DRAFTS_SQL, function (err, result) {
          if (err) {
            console.error(err);
            reject({ result: err, errno: 1 });
          } else {
            resolve({ result: result, errno: 0 });
          }
        });
      } catch (e) {
        reject({ result: e, errno: 1 });
      }
    });
  };

  static getPost = (id: number) => {
    return new Promise<{ result: any }>((resolve, reject) => {
      connection.query(GET_POST_SQL, [id], function (err, result) {
        if (err) {
          console.error(err);
          reject({ result: null });
        } else {
          resolve({ result: result });
        }
      });
    });
  };

  static addPost = (values: Post) => {
    const { title, content, content_html, tag, date, isDraft } = values;
    return new Promise<Res>((resolve, reject) => {
      connection.execute(
        ADD_POST_SQL,
        [title, content, content_html, tag, date, isDraft],
        function (err, result) {
          if (err) {
            console.error(err);
            reject(ERROR_MSG);
          } else {
            resolve(SUCCESS_MSG);
          }
        }
      );
    });
  };

  static modPost = (values: Post) => {
    const { id, title, content, content_html, tag, date, isDraft } = values;
    return new Promise<Res>((resolve, reject) => {
      connection.execute(
        MOD_POST_SQL,
        [title, content, content_html, tag, date, isDraft, id],
        function (err, result) {
          if (err) {
            console.error(err);
            reject(ERROR_MSG);
          } else {
            resolve(SUCCESS_MSG);
          }
        }
      );
    });
  };

  static increasePV = (id: number) => {
    return new Promise<Res>((resolve, reject) => {
      connection.execute(ADD_POST_PV_SQL, [id], function (err, result) {
        if (err) {
          console.error(err);
          reject(ERROR_MSG);
        } else {
          resolve(SUCCESS_MSG);
        }
      });
    });
  };

  static delPost = (id: number) => {
    return new Promise<Res>((resolve, reject) => {
      connection.execute(DEL_POST_SQL, [id], function (err, result) {
        if (err) {
          console.error(err);
          reject(ERROR_MSG);
        } else {
          resolve(SUCCESS_MSG);
        }
      });
    });
  };

  // tags
  static getTags = () => {
    return new Promise<{ result: any }>((resolve, reject) => {
      connection.query(GET_TAGS_SQL, function (err, result) {
        if (err) {
          console.error(err);
          reject({ result: null });
        } else {
          resolve({ result: result });
        }
      });
    });
  };

  static addTag = (value: string) => {
    return new Promise<Res>((resolve, reject) => {
      connection.execute(ADD_TAG_SQL, [value], function (err, result) {
        if (err) {
          console.error(err);
          resolve(ERROR_MSG);
        } else {
          resolve(SUCCESS_MSG);
        }
      });
    });
  };

  static getPostsSum = () => {
    return new Promise<{ result: any }>((resolve, reject) => {
      connection.query(GET_POSTS_SUM_SQL, function (err, result) {
        if (err) {
          console.error(err);
          reject({ result: null });
        } else {
          resolve({ result: result });
        }
      });
    });
  };
}

export default Mysql;
