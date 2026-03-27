import { z } from "zod";

export const OptionSchema = z.object({ id: z.string(), text: z.string() });
export const CodeSnippetSchema = z.object({
  language: z.string(),
  code: z.string(),
});

export const QuestionSchema = z.object({
  id: z.string(),
  text: z.string(),
  imageUrl: z.string().nullable().optional(),
  codeSnippet: CodeSnippetSchema.nullable().optional(),
  options: z.array(OptionSchema).length(4),
  correctOptionId: z.string(),
  explanation: z.string().nullable().optional(),
});

export const TestSchema = z.object({
  testId: z.string(),
  title: z.string(),
  description: z.string(),
  settings: z.object({
    timeLimitMinutes: z.number(),
    preventTabSwitching: z.boolean(),
  }),
  questions: z.array(QuestionSchema),
});
