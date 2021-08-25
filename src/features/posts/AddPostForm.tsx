import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addPost } from './postsSlice';

import './styles.css';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const onTitleChanged = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  }

  const onContentChanged = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value);
  };

  const onSubmit = () => {
    if (title && content) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          content,
        }),
      )

      setTitle('');
      setContent('');
    }
  };

  return (
    <section>
      <h2>Add a new post</h2>
      <form className="form">
        <div className="formGroup">
          <label htmlFor="postTitle">Post Title:</label>
          <input
            id="postTitle"
            className="formField"
            name="postTitle"
            type="text"
            value={title}
            onChange={onTitleChanged}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            className="formField"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
        </div>
        <button className="formButton" type="button" onClick={onSubmit}>Save Post</button>
      </form>
    </section>
  );
};
