import prisma from "@/lib/db";
import { inngest } from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import * as Sentry from "@sentry/nextjs";


const google = createGoogleGenerativeAI();

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    await step.sleep("pretend", "5s");

    Sentry.logger.info("User triggered test log", {
      log_source: 'sentry_test'
    })
    console.warn("Something is missing");
    console.error("This is an error i want to see");

    const { steps } = await step.ai.wrap("gemini-generate-text",
    generateText, {
      model: google("gemini-2.5-flash"),
      system: "You are a helpfull assistant.",
      prompt: "What is 2+2?",
      experimental_telemetry: {
        isEnabled: true,
        recordInputs: true,
        recordOutputs: true,
      },
      }
    );
  return step;
  },
);