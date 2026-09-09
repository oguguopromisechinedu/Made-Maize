export type MdanoChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type MdanoChatRequest = {
  messages: MdanoChatMessage[];
  routing?: "fast" | "balanced" | "quality";
  temperature?: number;
  maxTokens?: number;
};

export type MdanoChatResponse = {
  id: string;
  requestId: string;
  provider: string;
  model: string;
  message: MdanoChatMessage;
  usage?: {
    inputTokens?: number;
    outputTokens?: number;
  };
};

export async function mdanoChat(
  _request: MdanoChatRequest,
): Promise<MdanoChatResponse> {
  throw new Error(
    "Mdano integration is not connected yet. This service boundary is reserved for the Mademaize server/API layer.",
  );
}
