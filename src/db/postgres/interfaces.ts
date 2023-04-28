import { TagColor } from "@/components/basic/tag";

export interface Post {
  id?: number;
  title: string;
  content: string;
  content_html: string;
  tag: string;
  date: Date;
  isdraft: boolean;
  pv?: number
}

export interface Tag {
  name: string
  color: TagColor
}