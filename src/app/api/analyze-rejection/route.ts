import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session || !session.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { rejection_type, description, anxiety_before, anxiety_after } = body;

        // TODO: In a real system, you would save the log to Supabase here first.
        // e.g., const { data } = await supabase.from('rejections').insert({...})

        // This is where you would call the AI API
        // const aiResponse = await fetch('https://api.example.com/v1/analyze', { ... })

        // For the hackathon, we simulate the AI response payload based on the prompt requirements
        // This allows the front-end to develop without waiting for the actual AI integration hookup.

        const mockAnalysis = {
            emotional_analysis: `The operative experienced anticipatory anxiety of ${anxiety_before}/10 which dropped to ${anxiety_after}/10 post-action. This indicates successful exposure.`,
            what_went_well: `Took decisive action regarding a ${rejection_type} situation.`,
            courage_score: Math.floor(Math.random() * 15) + 5, // Range 5-20 pts
            growth_reframe: `Rejection is data. The outcome does not reflect your inherent value regarding ${description.substring(0, 30)}... You successfully gathered data.`,
            suggested_next_action: "Attempt a similar request tomorrow but aim for a slightly more ambitious target.",
            confidence_trend_prediction: "positive",
            original_description: description,
            original_type: rejection_type,
            original_anxiety_before: anxiety_before,
            original_anxiety_after: anxiety_after,
            timestamp: new Date().toISOString()
        };

        // TODO: Save the insights to Supabase bridging `rejection_id`.

        return NextResponse.json({ success: true, analysis: mockAnalysis });
    } catch (error: unknown) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Internal Server Error" }, { status: 500 });
    }
}
