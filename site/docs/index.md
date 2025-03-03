---
sidebar_position: 1
hide_table_of_contents: true
---

# What is OopsDB?

Hey there! We’re the developers behind [Coroot](https://coroot.com), an open-source observability platform designed to 
automate troubleshooting and turn telemetry data—metrics, logs, traces, and profiles into actionable insights.

At Coroot, we believe the only way to truly validate an observability tool is by testing it against real-world failure scenarios. 
This ensures we can quickly pinpoint root causes and resolve issues efficiently. 
To put this approach into practice, we created **OopsDB** — a collection of failure scenarios we've reproduced and analyzed.

After discussing this idea with engineers across the industry, we realized how valuable deep insights into failures are — 
not just for debugging, but for learning. So, we decided to share our findings with you.

The concept is simple:
* We reproduce a failure in a real cluster. 
* We act as if we don’t know the root cause. 
* We use Coroot to investigate and explain the issue.

## AI and Root Cause Analysis

Technically, what we’re building at Coroot falls under **AIOps**. 
But let’s be honest — this term has been overused by products that claimed to magically diagnose any issue with minimal telemetry data. 
As you’d expect, that didn’t work. Every engineer knows good data is key to understanding failures.

At first, we planned to rely on existing telemetry data from open-source exporters and commercial vendors. 
But when we got into automated root cause analysis, we realized that standard metrics weren’t detailed enough. 
That’s why we built our own [eBPF-based agent](https://github.com/coroot/coroot-node-agent) to gather the right data at the right level of granularity.

Now, with high-quality telemetry data in place, we’re actively experimenting with AI-driven root cause analysis. 
The results have been so impressive that we now rely on AI-generated explanations—because they’re often 
**better than what we’d write ourselves!** 😃

## Benchmarking Principles

We believe transparency is crucial when running benchmarks. 
A well-designed benchmark should be easy to reproduce, so we’ll provide clear instructions on how to recreate our test environments and failure scenarios.

Feel free to use our OopsDB cases to battle-test your own observability stack. 

Let’s learn from failures together!
