export type PostItem = {
  id: number;
  title: string;
  body: string;
};

export async function fetchPostBatch(postIds: number[]): Promise<PostItem[]> {
  const requests = postIds.map((id) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      res.json(),
    ),
  );

  const posts: PostItem[] = await Promise.all(requests);
  return posts;
}
