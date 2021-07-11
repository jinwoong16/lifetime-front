const posts = (posts = [], action: any) => {
  switch (action.type) {
    case "UPDATE":
      return posts.map((post: any) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "DELETE":
      return posts.filter((post: any) => post._id !== action.payload);
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [action.payload, ...posts];
    default:
      return posts;
  }
};
export default posts;
