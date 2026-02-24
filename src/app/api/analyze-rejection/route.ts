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

        // This is where you would call the ADAL API
        // const adalResponse = await fetch('https://api.adal.ai/v1/analyze', { ... })

        // For the hackathon, we simulate the ADAL response payload based on the prompt requirements
        // This allows the front-end to develop without waiting for the actual ADAL integration hookup.

        const mockAdalAnalysis = {
            emotional_analysis: "The operative experienced high anticipatory anxiety which was moderately reduced post-action. This indicates successful exposure.",
            what_went_well: "Took decisive action despite a fear level of " + anxiety_before + ".",
            courage_score: Math.floor(Math.random() * 15) + 5, // Range 5-20 pts
            growth_reframe: "Rejection is data. The outcome does not reflect your inherent value. You successfully gathered data.",
            suggested_next_action: "Attempt a similar request tomorrow but aim for a slightly more ambitious target.",
            confidence_trend_prediction: "positive"
        };

        // TODO: Save the insights to Supabase bridging `rejection_id`.

        return NextResponse.json({ success: true, analysis: mockAdalAnalysis });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
    }
}
