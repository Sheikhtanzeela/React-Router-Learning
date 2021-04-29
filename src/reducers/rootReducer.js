const initState = {
  posts: [
    { id: "1", title: "Squirrel laid an egg", body: "lorem ipsum 1" },
    { id: "2", title: "parrot laid an egg", body: "lorem ipsum 2" },
    { id: "3", title: "cock laid an egg", body: "lorem ipsum3" },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};

export default rootReducer;
