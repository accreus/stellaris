import { z } from "zod";

export const OptionSchema = z.object({ id: z.string(), text: z.string() });
export const CodeSnippetSchema = z.object({
  language: z.string(),
  code: z.string(),
});
