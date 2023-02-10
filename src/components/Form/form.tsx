import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import "../commonStyles.scss";
import TextArea from "antd/es/input/TextArea";
import "./styles.scss";
import { type PostProps } from "./formTypes";
import Post from "./Post";

const FormData: React.FC = () => {
  const [form] = Form.useForm();
  const initialPosts: PostProps[] & [] = JSON.parse(
    localStorage.getItem("postData") ?? "[]"
  );
  const [posts, setPosts] = useState<PostProps[]>(initialPosts);
  const onFinishHandler = (post: any): void => {
    localStorage.setItem("postData", JSON.stringify([...posts, post]));
    setPosts((posts) => [...posts, post]);
    form.resetFields();
  };
  return (
    <div style={{ display: "flex" }}>
      <Form
        className="box_component formCustomStyles"
        layout="vertical"
        size={"middle"}
        style={{ maxWidth: 500 }}
        onFinish={onFinishHandler}
        initialValues={{}}
        form={form}
      >
        <h1 className="formHeader">Create Post</h1>
        <Form.Item
          label="Post Name"
          name="title"
          // required
          rules={[{ required: true, message: "" }]}
        >
          <Input name="title" />
        </Form.Item>

        <Form.Item label="Post Tag" name="tags">
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          // required
          name="Description"
          rules={[{ required: true, message: "" }]}
        >
          <TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {posts.map((post, i) => (
        <Post key={i} Post={post} />
      ))}
    </div>
  );
};
// login page in react?
export default FormData;
