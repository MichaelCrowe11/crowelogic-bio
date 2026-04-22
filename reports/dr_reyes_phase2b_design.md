# Dr. Jonathan Reyes, Phase 2b Design for a Novel Psilocybin Analog in TRD

**Agent:** `psy_clin_001`, Dr. Jonathan Reyes, PhD in Clinical Psychopharmacology
**Division:** psychedelic_specialist
**Backend:** CroweLM, Crowe Logic's domain-specialized language model
**Date:** 2026-04-22

## Query

Design the Phase 2b dose-finding trial for a novel single-dose
psilocybin analog intended for treatment-resistant depression (TRD). The
sponsor has IND clearance and Phase 1 safety data in 40 healthy volunteers.

Specifically address:
  1. Primary endpoint, timing, and minimum clinically important difference
  2. Dose arms and rationale for the dose-ranging choices
  3. Active-placebo strategy given known functional unblinding in
     psychedelic trials
  4. Therapist/facilitator training requirements and number of
     therapist-hours per participant
  5. Integration session structure (timing, content, measurement)
  6. Key safety signals to monitor and stopping rules
  7. How to quantify and report functional unblinding
  8. Statistical analysis plan for dropout and informative missingness
  9. Realistic timeline and sample size
  10. What to show FDA at the Phase 2/3 end-of-phase meeting to de-risk
      a pivotal Phase 3

Be specific. Reference MAPP1/MAPP2 and the COMPASS Pathways Phase 2b
learnings where relevant.

## Response



# Phase 2b Dose-Finding Trial Design: Novel Psilocybin Analog for Treatment-Resistant Depression

## PROTOCOL SYNOPSIS: A Randomized, Double-Blind, Active Placebo-Controlled, Multi-Site Phase 2b Dose-Finding Study

---

## 1. PRIMARY ENDPOINT, TIMING, AND MINIMUM CLINICALLY IMPORTANT DIFFERENCE

### Primary Endpoint
**Change from baseline in MADRS total score at Week 6 post-dosing.**

### Rationale for MADRS over alternatives
- MADRS is the regulatory gold standard for TRD depression trials and was the primary endpoint in the COMPASS Pathways Phase 2b [PMID:36342846], which gives us direct comparability and regulatory precedent.
- HAM-D-17 is acceptable but has more somatic items that conflate with acute psychedelic side effects (nausea, appetite changes), creating noise at early timepoints.
- QIDS-SR-16 is useful as a *key secondary* (self-report triangulation) but not sufficient as a primary because FDA will want clinician-rated severity for a TRD claim.

### Why Week 6 (not Week 3 or Day 1)
This is a critical design decision informed by lessons from COMPASS:

- **COMPASS Phase 2b** [PMID:36342846] used **Week 3** as the primary endpoint. The 25mg arm showed a -12.0 point MADRS reduction vs. -7.9 for 1mg control (p<0.001). However, the effect *attenuated* between Week 3 and Week 12, raising durability questions that complicated their Phase 3 planning.
- Measuring too early (Day 1, Week 1) captures acute afterglow confounded by residual pharmacological effects and expectancy euphoria — not durable antidepressant signal.
- Measuring at Week 6 balances capturing the therapeutic window (still within the plasticity-mediated mechanism's expected duration) against premature attenuation. It also aligns with what FDA expects for antidepressant durability in TRD populations.
- **Week 12** is a key secondary durability endpoint. **Week 24** (6-month) is an exploratory follow-up endpoint to generate the durability data we will need before Phase 3.

### Minimum Clinically Important Difference (MCID)
- **MCID on MADRS: ≥6-point separation** between the selected dose and active placebo at Week 6.
- For **response** (≥50% MADRS reduction from baseline): target NNT ≤ 5.
- For **remission** (MADRS ≤10): target NNT ≤ 7.
- The COMPASS 25mg arm achieved a response rate of 36.7% vs. 17.7% for 1mg (NNT ~5.3). We need to match or beat this, and critically, we need to show that the separation *holds* at Week 12, which COMPASS struggled with.

### Key Secondary Endpoints (Hierarchically Ordered)
1. MADRS change from baseline at **Week 3** (early signal)
2. MADRS change from baseline at **Week 12** (durability)
3. QIDS-SR-16 at Weeks 3, 6, 12 (self-report convergence)
4. SDS (Sheehan Disability Scale) at Week 6 (functional impairment — FDA increasingly values this)
5. Response rate (≥50% MADRS reduction) at Week 6
6. Remission rate (MADRS ≤10) at Week 6
7. CGI-S and CGI-I at Weeks 3, 6, 12

### Exploratory Endpoints
- MEQ-30 (administered 6-8 hours post-dose) — mediator analysis
- 5D-ASC (administered day after dosing) — subjective effect characterization
- CEQ (day after dosing) — challenging experience quantification
- PHQ-9 (patient-facing, every 2 weeks via digital capture)
- Columbia Suicide Severity Rating Scale (C-SSRS) at every visit
- Cognitive battery (DSST, TMT-A/B) at baseline, Week 1, Week 6

---

## 2. DOSE ARMS AND RATIONALE

### Four-Arm Design

| Arm | Dose | N | Rationale |
|-----|------|---|-----------|
| **Arm 1: Active Placebo** | Niacin 100mg + microcrystalline cellulose | 45 | Functional unblinding mitigation (see Section 3) |
| **Arm 2: Low Dose** | Analog equivalent of ~10mg psilocybin | 45 | Sub-perceptual/threshold dose; expected minimal psychedelic effect; tests whether pharmacology without full mystical experience produces benefit; also serves as a pseudo-active control |
| **Arm 3: Medium Dose** | Analog equivalent of ~25mg psilocybin | 60 | Expected therapeutic dose based on COMPASS 25mg results [PMID:36342846]; this is the arm we're powering for |
| **Arm 4: High Dose** | Analog equivalent of ~40mg psilocybin | 45 | Ceiling/tolerability exploration; COMPASS's 10mg arm was too low, their 25mg arm worked — we need to know if going higher adds efficacy or just adverse events |

**Total N = 195 randomized** (see Section 9 for sample size justification).

### Randomization
- 1:1:1.3:1 ratio (over-enrolling the medium dose arm for power at the expected therapeutic dose)
- Stratified by: site (critical given therapist effects), baseline MADRS severity (moderate 20-28 vs. severe 29-40), number of failed adequate antidepressant trials (2 vs. ≥3)
- Central randomization via IRT system

### Dose Selection Rationale — What Phase 1 Should Have Given Us
Before finalizing these doses, I'd need to see from the Phase 1 healthy volunteer data (N=40):
- **PK profiles** at 3-4 ascending doses: Cmax, Tmax, AUC, terminal half-life of both parent compound and active metabolite (if applicable). Dr. Nakamura (psy_pharm_001) should have established the PK/PD relationship — specifically, what plasma exposure corresponds to the onset, peak, and resolution of perceptual alterations.
- **5D-ASC dose-response curve** from Phase 1: at what dose does the "oceanic boundlessness" subscale plateau? This defines the ceiling of the high dose.
- **Cardiovascular dose-response**: BP and HR Emax — what dose produces ≥160/100 or HR ≥120? That's our upper boundary.
- **Duration of subjective effects**: This is a novel analog. If duration differs from psilocybin (4-6 hours), the entire dosing day protocol must be adjusted.

The three active doses are designed to span the dose-response curve from sub-threshold to supra-therapeutic, with the medium dose targeting the PK exposure that in Phase 1 produced MEQ-30 "complete mystical experience" scores in ≥60% of participants.

### Why Not Include a 1mg Psilocybin-Equivalent Arm (COMPASS Approach)?
COMPASS used 1mg psilocybin as a "control" [PMID:36342846]. This was criticized because:
- 1mg psilocybin produces *no* perceptible effect, making it functionally identical to placebo and solving nothing regarding unblinding
- FDA's 2023 guidance [FDA_GUIDANCE:FDA-2023-D-1987] explicitly acknowledges functional unblinding as a known limitation but expects sponsors to *try* — a 1mg dose doesn't constitute trying
- Our low dose (~10mg equivalent) produces *some* somatic and mild perceptual effects, providing better blinding while also generating dose-response pharmacology data

---

## 3. ACTIVE PLACEBO STRATEGY FOR FUNCTIONAL UNBLINDING

This is the single most important methodological challenge in psychedelic trials. I'll be blunt: **no existing strategy fully solves functional unblinding**. The goal is to *quantify it, mitigate it, and demonstrate to FDA that your effect size survives adjustment for it.*

### Active Placebo Composition (Arm 1)
**Niacin 100mg oral** administered under identical set/setting conditions.

**Rationale:**
- Niacin at 100mg produces flushing, warmth, mild tachycardia within 20-40 minutes — somatic sensations that partially mimic the onset phase of a psychedelic
- It does NOT produce perceptual changes, cognitive alterations, or emotional amplification
- This is a limitation we must acknowledge, but it is superior to inert placebo

**Enhancing the active placebo:**
- All participants in ALL arms receive identical preparation sessions, identical dosing environment (eyeshades, curated music playlist, two facilitators present), identical integration sessions
- The dosing room protocol is identical: participants lie supine, wear eyeshades, listen to the same music program, facilitators provide the same supportive presence regardless of arm
- Participants are told: "You may receive any dose from inactive to high. The experience varies greatly between individuals. Some people feel very little and still benefit. Do not try to determine your dose."

### Additional Unblinding Mitigation
- **Outcome assessors are independent and remote.** MADRS raters are centralized (via video), have no contact with the dosing team, and are blind to all aspects of the participant's dosing day experience. This is non-negotiable.
- **Facilitators who run the dosing session do NOT administer MADRS.** Ever. The therapist effect and the rater effect must be architecturally separated.
- **Facilitators are instructed not to discuss their guess of the participant's dose assignment** in supervision or documentation accessible to outcome assessors.

### What I Considered and Rejected
- **Low-dose d-amphetamine (5-10mg)** as active placebo: Produces arousal, mild euphoria, tachycardia. Better somatic mimicry than niacin. However, amphetamine has its own antidepressant pharmacology (dopaminergic), which confounds interpretation. Rejected.
- **Low-dose MDMA (25mg)** as active placebo: Even at sub-therapeutic doses, MDMA has serotonergic and noradrenergic activity that could have antidepressant effects. Not appropriate for a depression trial. Potentially useful in anxiety trials. Rejected.
- **Low-dose ketamine (0.1mg/kg IV)** as active placebo: Dissociative at even low doses; has known antidepressant properties. Rejected for obvious confounding.
- **Diphenhydramine 50mg**: Produces sedation and mild somatic effects. No antidepressant activity. Reasonable alternative to niacin if sedation-matching is desired. Under consideration as backup if niacin proves insufficient in interim unblinding analysis.

### Quantifying Unblinding — See Section 7

---

## 4. THERAPIST/FACILITATOR TRAINING REQUIREMENTS

### Training Program Structure
Modeled on the MAPS training framework (~100 hours) [referenced in FDA_GUIDANCE:FDA-2023-D-1987] and adapted with elements from the Usona and COMPASS protocols:

| Component | Hours | Content |
|-----------|-------|---------|
| Didactic training | 30 hrs | Pharmacology of the analog; phenomenology of psychedelic states; TRD as a clinical population; safety management; inner-directed approach vs. directive psychotherapy |
| Clinical skills practicum | 25 hrs | Simulated preparation sessions; simulated dosing-day scenarios (difficult emotions, somatic distress, dissociation, paranoia); de-escalation without benzodiazepine intervention |
| Observed practice sessions | 20 hrs | Supervised delivery of preparation and integration sessions with standardized patients |
| Supervised dosing sessions | 15 hrs | Co-facilitation of 2-3 actual dosing sessions under direct supervision of a certified trainer |
| Personal experiential component | 8 hrs | Participation in a non-drug holotropic breathwork or extended meditation session (personal psychedelic experience cannot be mandated under current regulatory/legal frameworks, but experiential exposure to non-ordinary states is essential) |
| Ongoing supervision | 2 hrs/month | Group peer supervision with clinical supervisor; fidelity review of recorded sessions |
| **Total** | **~100 hrs** | Plus ongoing supervision |

### Competency Assessment
- **Fidelity rating scale**: Each facilitator's dosing and integration sessions are audio-recorded. A random 20% sample is rated by independent fidelity assessors using a standardized adherence checklist (scored 0-4 per item across domains: supportive presence, non-directive stance, safety responsiveness, integration facilitation).
- **Minimum fidelity threshold**: Mean score ≥3.0/4.0 to continue as a study facilitator.
- **Facilitator pairs**: All dosing sessions use a dyad (one male, one female facilitator, or two facilitators of participant's preferred gender composition). This follows the MAPS model from MAPP1/MAPP2 [PMID:34711970; PMID:37813268].

### Therapist-Hours Per Participant

| Session Type | Number | Duration | Facilitator(s) | Total Therapist-Hours |
|--------------|--------|----------|-----------------|----------------------|
| Preparation sessions | 2 | 90 min each | 2 facilitators | 6.0 |
| Dosing day | 1 | 8 hours (monitoring) | 2 facilitators | 16.0 |
| Integration sessions | 3 | 60-90 min each | 1-2 facilitators | 4.5-9.0 |
| Safety check-ins (phone/video) | 4 | 20 min each | 1 facilitator | 1.3 |
| **Total per participant** | | | | **~28-32 hrs** |

This is expensive. I know. It's non-negotiable for Phase 2b. In Phase 3, we can explore whether 2 integration sessions (instead of 3) maintain efficacy — but we don't cut corners in dose-finding.

### Handling Therapist Effects Statistically
- Facilitator dyad is a **random effect** in the primary analysis model (see Section 8)
- We require a **minimum of 6 facilitator dyads across ≥4 sites** to have adequate variance estimation
- If therapist ICC > 0.10, this becomes a major finding that must be disclosed and addressed before Phase 3

---

## 5. INTEGRATION SESSION STRUCTURE

### Timing and Format

| Session | Timing | Duration | Format | Key Content |
|---------|--------|----------|--------|-------------|
| **Integration 1** | Day 2 (morning after dosing) | 90 min | In-person, both facilitators | Open-ended narrative of the experience; emotional processing; grounding; safety screen (C-SSRS, AE check) |
| **Integration 2** | Day 7 (±1 day) | 75 min | In-person or video, 1 facilitator | Meaning-making; connecting insights to daily life and depression narrative; identifying behavioral intentions; structured reflection using guided prompts |
| **Integration 3** | Day 21 (±3 days) | 60 min | In-person or video, 1 facilitator | Review of behavioral changes; challenges in sustaining insights; relapse prevention; assessment of whether insights are translating into functional improvement; SDS administered |

### Content Framework
The integration protocol follows an **inner-directed, non-interpretive model**:
- Facilitators ask open-ended questions ("What stands out from the experience?" "What felt most important?" "Has anything shifted in how you relate to [identified depressive cognition]?")
- Facilitators do NOT provide interpretations, psychodynamic formulations, or CBT-style cognitive restructuring
- Facilitators help participants create a written "integration intention" document at Session 2 that captures 2-3 concrete behavioral commitments

### Measurements During Integration
- **Integration Session 1**: CEQ (administered prior to session start), MEQ-30 (if not completed on dosing day), AE capture, C-SSRS, vitals
- **Integration Session 2**: QIDS-SR-16, Psychological Insight Questionnaire (PIQ), AE capture, C-SSRS
- **Integration Session 3**: QIDS-SR-16, SDS, AE capture, C-SSRS, therapeutic alliance measure (WAI-SR — this feeds into therapist-effect analysis)
- **All sessions are audio-recorded** for fidelity rating

### Critical Design Note
Integration sessions are identical in structure, timing, and number across ALL arms, including active placebo. This is essential. If the active placebo arm

---

> *Generated by Crowe Psychedelics. AI-drafted clinical trial design
> for scoping purposes only. All trial design decisions must be
> reviewed by a qualified clinical regulatory and biostatistics team
> before any FDA submission or IRB protocol filing.*
