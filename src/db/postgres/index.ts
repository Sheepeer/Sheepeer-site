import { PrismaClient } from "@prisma/client";
import { Post } from "./interfaces";

const prisma = new PrismaClient();

const getAllPosts = async (isDraft: boolean, tag?: string) => {
  try {
    const res = await prisma.posts.findMany({
      where: tag
        ? {
            isdraft: isDraft,
            tag,
          }
        : {
            isdraft: isDraft,
          },
    });
    return { res };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

const getPost = async (id: any) => {
  try {
    const res = await prisma.posts.findUnique({
      where: { id },
    });
    console.log("res:", res);
    return { res };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

const addPost = async (values: Post) => {
  try {
    const res = await prisma.posts.create({
      data: {
        ...values,
        pv: 0,
      },
    });
    return { res };
  } catch (error) {
    console.error(error)
    return { error };
  }
};

const updatePost = async (values: Post) => {
  const { id, ...rst } = values;
  try {
    const res = await prisma.posts.update({
      where: { id: Number(id) },
      data: {
        ...rst,
      },
    });
    return { res };
  } catch (error) {
    console.error(error)
    return { error };
  }
};

export { getAllPosts, getPost, addPost, updatePost };
