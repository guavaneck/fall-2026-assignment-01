import fs from 'fs';

export type CommentSummary = {
  postId: number;
  id: number;
  commenterEmail: string;
};

type RawComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`,
  );
  const rawComments: RawComment[] = await response.json();

  const summaries: CommentSummary[] = rawComments.map((comment) => ({
    postId: comment.postId,
    id: comment.id,
    commenterEmail: comment.email.trim(),
  }));

  const filtered = summaries.filter(
    (summary) => !summary.commenterEmail.split('@')[1]?.endsWith('.org'),
  );

  await fs.promises.writeFile(outputPath, JSON.stringify(filtered), 'utf-8');

  return filtered.length;
}
