# Dr. Evelyn Nakamura — Novel 5-HT2A Agonist Design

**Agent:** `psy_pharm_001` — Dr. Evelyn Nakamura, PhD in Psychedelic Medicinal Chemistry
**Division:** psychedelic_specialist
**Backend:** CroweLM Supreme (Claude Opus via Azure AI Foundry)
**Date:** 2026-04-21

## Query

Propose three novel 5-HT2A agonist tryptamines designed for
treatment-resistant depression with the following target profile:

    5-HT2A Ki < 20 nM
    5-HT2C Ki > 500 nM (selectivity over 2C)
    5-HT2B Ki > 2000 nM (avoid cardiac valvulopathy risk)
    Half-life 2-4 hours (allows single-day clinical dosing)
    Synthetic accessibility score ≤ 4 (routinely accessible)

For each of your three proposals, provide:
  1. SMILES and a common-name-style shorthand
  2. Rationale for scaffold choice, grounded in receptor crystal
     structure or SAR literature
  3. Expected Ki estimates at 5-HT2A/2B/2C (cite the reference molecules
     your estimates interpolate from)
  4. Predicted ADMET concern + mitigation
  5. Freedom-to-operate commentary if known

Be rigorous. If you have to speculate, flag the speculation explicitly.

## Response



# Three Novel 5-HT2A-Selective Tryptamine Proposals for Treatment-Resistant Depression

## Preamble: Design Logic

The target profile demands three simultaneous SAR solutions:

1. **5-HT2A Ki < 20 nM** — requires optimal occupancy of the orthosteric pocket, including the key salt bridge to D3.32 and hydrogen bonding to S3.36/S5.43 in the 5-HT2A active-state structure [PMID:32699011, PDB 6WHA/6WGT]
2. **5-HT2C Ki > 500 nM (>25-fold selectivity)** — exploit the subtle differences in ECL2 and TM5 between 2A and 2C; the 2C receptor has a more constricted extracellular vestibule and W6.48 toggle differences
3. **5-HT2B Ki > 2000 nM (>100-fold selectivity)** — critical for cardiac safety; the 5-HT2B pocket (PDB 5TUD, 4IB4) tolerates the ergoline extended pose [PMID:28129538] but is notably **more accommodating** of planar, rigid scaffolds and **less tolerant** of bulky N,N-dialkyl substituents at the tryptamine nitrogen
4. **t½ 2–4 h** — rules out DMT-class ultrashort compounds (t½ ~15 min IV) and psilocin (t½ ~2.5 h is borderline acceptable); requires MAO-A resistance or controlled metabolic liability
5. **SA ≤ 4** — limits us to straightforward indole chemistry (Fischer indole, Leimgruber–Batcho, or Grandberg)

The key pharmacophore anchor across all three proposals: **4-oxy substituted tryptamine** (mimicking psilocin's 4-OH) which is the single most validated position for 5-HT2A affinity in the tryptamine class [PMID:27816818, Nichols 2016]. I will then modulate the N,N-dialkyl group and 4-O-substituent to achieve selectivity and PK targets.

---

## Proposal 1: 4-MeO-N-methyl-N-isopropyltryptamine ("MiPMeOT")

### 1. Structure

```
SMILES: COc1cccc2[nH]cc(CCN(C)C(C)C)c12
Shorthand: 4-MeO-MiPT (methyl-isopropyl variant at 4-OMe)
```

**MW:** 260.4 | **cLogP:** 2.3 | **HBD:** 1 (NH) | **HBA:** 2 (OMe O, amine N) | **LE (est.):** ~0.45 kcal/mol/heavy atom (at Ki 15 nM)

### 2. Rationale

**Scaffold choice — 4-methoxy tryptamine core:**
- 4-OMe tryptamines are well-validated 5-HT2A agonists. The methoxy group occupies the same hydrogen-bonding zone as psilocin's 4-OH but with **reduced 5-HT2C affinity** because the 2C receptor S5.43 residue forms a stronger H-bond with 4-OH than 4-OMe donors [PMID:27816818]. This is a known SAR principle: 4-OMe reduces 2C affinity relative to 4-OH by roughly 5–15-fold in the Nichols tryptamine series.

**N,N-methyl-isopropyl (MiPT) substitution pattern:**
- The **asymmetric N,N-dialkyl** pattern is critical. From the Shulgin/Nichols literature, N-isopropyl introduces steric bulk that is **well-tolerated by 5-HT2A** (the receptor has a capacious vestibule above D3.32 in the Kim et al. active state structure [PMID:32699011]) but **poorly tolerated by 5-HT2B**, where the more constricted TM3-ECL2 interface clashes with branched alkyl groups [PMID:28129538, cf. ergotamine vs. DMT binding modes in 5-HT2B].
- The N-methyl group is retained to maintain basicity (pKa ~9.5) and the critical salt bridge to D3.32.
- Precedent: 5-MeO-MiPT (known compound) has Ki ~3 nM at 5-HT2A but poor 2A/2C selectivity because the **5-methoxy** position enhances 2C binding. Moving the methoxy to the **4-position** is predicted to restore 2A selectivity.

**Crystal structure pose rationale (PDB 6WHA, 5-HT2A active state):**
- The 4-OMe group points toward S5.46 and the extracellular face of TM5, forming a weak H-bond acceptor interaction. In 5-HT2A, this region has a glycine at 5.42 (G5.42) that creates space; in 5-HT2C, the corresponding residue is slightly bulkier, penalizing 4-OMe.
- The N-isopropyl group extends toward TM6/ECL2, where 5-HT2A has L6.58 (accommodating) vs. 5-HT2B's more restrictive W6.58-adjacent residue environment.

**MAO resistance and half-life:**
- N,N-dialkyl tryptamines with at least one branched chain (iPr) are **poor MAO-A substrates** because the branched alkyl sterically hinders the MAO-A active site [Nichols 2016, PMID:27816818]. Predicted t½: 2.5–3.5 h (interpolated from 5-MeO-MiPT human PK reports, which show ~3 h duration of subjective effects suggesting comparable metabolic clearance).

### 3. Predicted Ki Values

| Receptor | Predicted Ki | Basis of Interpolation |
|----------|-------------|----------------------|
| **5-HT2A** | **~12–18 nM** | 4-HO-MiPT (miprocin) Ki ~15 nM at 2A [Nichols]; 4-OMe expected within 0.7–1.3× of 4-OH at 2A |
| **5-HT2C** | **~600–1200 nM** | 4-OMe reduces 2C affinity ~10-fold vs 4-OH; 4-HO-MiPT Ki ~80–120 nM at 2C → 4-OMe-MiPT ~800–1200 nM. **⚠️ SPECULATIVE** — this is the weakest part of the prediction; 2C selectivity may be only 30–50-fold |
| **5-HT2B** | **~3000–8000 nM** | iPr branching strongly penalizes 2B binding; DMT Ki ~200 nM at 2B, but N-iPr analogs show >50-fold drop [inferred from Shulgin series]; 4-OMe further disfavors 2B |

**Confidence:** Medium-high for 2A, medium for 2C (need empirical confirmation), high for 2B.

### 4. ADMET Concerns

| Concern | Risk Level | Mitigation |
|---------|-----------|------------|
| **CYP2D6 O-demethylation** → 4-OH metabolite (psilocin-like) | Moderate | Active metabolite would have higher 2C affinity; could deuterate OMe (CD₃O-) — flag for Dr. Volkova (md_014) collaboration on deuteration |
| **hERG** | Low | MW < 300, low cLogP, no planar aromatic extension |
| **BBB penetration** | Good | cLogP 2.3, MW 260, 1 HBD, PSA ~33 Å² — CNS MPO score ~5.2 (favorable) |
| **Phospholipidosis** | Low | Not di-cationic, low Vd expected |
| **Ames/Genetic tox** | Low-Mod | Indole core is generally clean, but N-iPr metabolic N-dealkylation to primary amine should be monitored |

### 5. Freedom-to-Operate

- **4-OMe-MiPT** itself may be described in Shulgin's TiHKAL (1997) — need to confirm if specific compound is disclosed. If so, it would be prior art, which is actually **favorable** for FTO (not patentable by others) but **unfavorable** for composition-of-matter claims.
- **Compass Pathways** (WO2020/212948) claims certain 4-substituted tryptamines but focuses on psilocybin/psilocin prodrugs. The N-iPr,N-Me combination at 4-OMe may be outside their claims. **Needs formal FTO search.**
- **Usona Institute** patents focus on psilocybin polymorph forms, unlikely to cover this compound.
- **⚠️ Flag:** Several broad tryptamine patent families (e.g., WO2021/137149, Gilgamesh Pharmaceuticals) claim N,N-disubstituted-4-substituted tryptamines generically. Could be problematic — recommend detailed claim charting.

---

## Proposal 2: 4-Fluoro-N,N-diethyltryptamine ("4-F-DET")

### 1. Structure

```
SMILES: Fc1cccc2[nH]cc(CCN(CC)CC)c12
Shorthand: 4-F-DET
```

**MW:** 234.3 | **cLogP:** 2.1 | **HBD:** 1 (NH) | **HBA:** 1 (amine N) | **LE (est.):** ~0.50 kcal/mol/heavy atom (at Ki 10 nM)

### 2. Rationale

**The 4-fluoro strategy — a divergent approach from 4-oxy tryptamines:**

This is the most novel and arguably most interesting proposal. Rather than using the canonical 4-OH/4-OMe pharmacophore, I exploit the **4-fluoro bioisostere** concept:

- In the 5-HT2A active state [PMID:32699011], the 4-position substituent interacts with S5.46 via H-bonding. Fluorine is a weak H-bond acceptor (C-F···H-O) with bond energy ~2–3 kcal/mol — sufficient to partially satisfy S5.46 but **dramatically weaker** than 4-OH (which donates and accepts H-bonds with both S5.43 and S5.46).
- **Key SAR insight:** 4-F-DMT has been reported to retain substantial 5-HT2A activity (Blair et al., PMID:10647730, J Med Chem 2000) with Ki ~25–40 nM at 5-HT2A. The penalty vs. 4-OH (~8 nM for psilocin) is modest because the fluorine maintains the **electron-withdrawing effect** on the indole ring that modulates pKa of the indole NH (strengthening the H-bond from indole NH to TM5 backbone).
- **5-HT2C selectivity mechanism:** The 5-HT2C receptor relies more heavily on **H-bond donation from the 4-substituent** to achieve high-affinity binding (as demonstrated by the 4-OH >> 4-OMe >> 4-H affinity series at 2C, which is steeper than the same series at 2A [PMID:27816818]). Fluorine cannot donate H-bonds, so **2C affinity drops precipitously** (~50–100-fold vs 4-OH).
- **5-HT2B selectivity mechanism:** The 5-HT2B pocket, based on the ergotamine-bound structure (PDB 4IB4 [PMID:19897083]) and LSD-bound structure (5TUD [PMID:28129538]), shows that tryptamine-class ligands depend on a **water-mediated H-bond network** at the 4-position for 2B binding. Fluorine disrupts this network due to its low H-bond acceptor strength relative to OH, predicting poor 2B affinity.

**N,N-diethyl (DET) choice:**
- N,N-DET provides moderate MAO-A resistance (ethyl groups are cleaved more slowly than methyl by MAO-A), yielding t½ ~2–3 h by analogy with DET's reported duration of action (~3–4 h, Shulgin TiHKAL).
- Diethyl is less bulky than diisopropyl, maintaining good 5-HT2A affinity (DET Ki ~50 nM at 2A; adding 4-F is predicted to substantially improve this).
- The **symmetrical N,N-diethyl** simplifies synthesis (no stereochemistry concerns) and improves SA score.

**Crystal structure pose (PDB 6WGT/6WHA):**
- Docking into the 5-HT2A active state: the 4-F sits in the S5.46 pocket, with the C-F bond oriented toward S5.46 OH (distance ~3.1–3.3 Å, consistent with a weak C-F···H-O interaction). The indole NH donates to the S3.36 backbone carbonyl. The protonated amine forms the canonical salt bridge to D3.32 (2.8 Å). The two ethyl groups pack against L3.29 and the TM6 hydrophobic wall.
- **⚠️ SPECULATIVE:** This docking analysis is based on my in-silico reasoning from the published structures, not an actual docking calculation. Needs computational validation — flag for Dr. Yamamoto (md_022).

### 3. Predicted Ki Values

| Receptor | Predicted Ki | Basis of Interpolation |
|----------|-------------|----------------------|
| **5-HT2A** | **~10–25 nM** | 4-F-DMT Ki ~25–40 nM [Blair et al.]; N,N-DET vs N,N-DMT typically improves 2A by ~1.5-fold in 4-substituted series (longer chains improve hydrophobic contact with vestibule); predicted ~15–25 nM. **If we hit 10 nM, LE = 0.53, excellent.** |
| **5-HT2C** | **~1000–3000 nM** | 4-F eliminates H-bond donation critical for 2C; DET pattern has inherently low 2C affinity (DET Ki ~500 nM at 2C); combining both effects → >1000 nM predicted |
| **5-HT2B** | **~3000–10,000 nM** | 4-F disrupts water-mediated H-bond at 2B; DET bulkier than DMT at 2B; DMT Ki ~200 nM at 2B → DET penalty ~5-fold → 4-F penalty ~5-fold → ~5000 nM |

**Confidence:** Medium for all. The 4-F tryptamine SAR is less exhaustively characterized than 4-OH/4-OMe. The Blair et al. data anchor the 2A estimate, but 2B/2C predictions are substantially speculative.

### 4. ADMET Concerns

| Concern | Risk Level | Mitigation |
|---------|-----------|------------|
| **Metabolic defluorination** | Low-Moderate | Aryl C-F at C4 of indole is relatively stable (not activated by adjacent electron-donating groups); however, CYP2E1-mediated defluorination is possible → generates 4-OH metabolite (psilocin analog with different N-alkyl). Monitor for fluoride release in microsomal stability assay. |
| **MAO-A clearance** | Moderate | N,N-DET provides partial MAO resistance but not complete. If t½ too short, could add α-methyl to tryptamine sidechain (→ α-Me-4-F-DET, "psyched

---

> *Generated by Crowe Psychedelics `lfpsy agents invoke`.
> This is an AI-generated proposal for research-team review,
> not an independently validated design. All predicted Ki values
> must be confirmed experimentally before any in vivo work.*
