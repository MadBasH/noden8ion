import type { NodeExecutor } from "@/features/executions/types";

type ManuelTriggerData = Record<string, unknown>;

export const manualTriggerExecutor: NodeExecutor<ManuelTriggerData> = async({
    nodeId,
    context,
    step,
}) => {

    const result = await step.run("manual-trigger", async () => context);
    
    return result;
};