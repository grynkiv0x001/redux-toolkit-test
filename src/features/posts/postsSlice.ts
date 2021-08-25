import { createSlice } from '@reduxjs/toolkit';

export interface PostState {
  id: string;
  title: string;
  content: string;
}

const initialState: PostState[] = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
  },
  {
    id: '2',
    title: 'Second Post!',
    content: 'Some text...',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
    updatePost(state, action) {
      const { id, title, content } = action.payload;
      const post = state.find((post: PostState) => post.id === id);

      if (post) {
        post.title = title;
        post.content = content;
      }
    },
  },
});

export const { addPost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;
