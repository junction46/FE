import authClient from "./client";

export const makeTopic = async ({ topic }: { topic: string }) => {
  await authClient.post("/common/gpt", { topic });
};
