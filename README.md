# Crowe Psychedelics site

Static landing page for `crowelogic.bio/psychedelics`. Pure HTML + CSS, no
JavaScript, no build step.

## Local preview

```bash
cd site
python3 -m http.server 8765
# open http://localhost:8765/
```

## Structure

```
site/
├── index.html                          # Landing page
├── assets/style.css                    # ~11 KB of CSS
└── reports/
    ├── dr_nakamura_analog_design.md    # Live agent report (CroweLM Supreme)
    ├── dr_mullen_schedule_i_guidance.md
    └── sample_regpack/                 # Full reg-pack output (9 artifacts)
        ├── 00_README.md
        ├── 01_cover_letter.md
        └── ... (07 more)
```

## Deploy

The simplest production path:

1. Put this directory behind Cloudflare Pages or Netlify, pointing at
   `crowelogic.bio`.
2. Or commit to a `site/` subdirectory of a GitHub repo and enable
   GitHub Pages.
3. Or push to an S3 bucket with static hosting on.

No framework, no build. Every file is serveable as-is.

## Refreshing the sample reports

The agent reports and reg-pack output are canonical examples, not
real submitted work. Regenerate any time:

```bash
# From repo root
cd logic-foundry-psy

# Agent reports (live Claude call; requires Azure Anthropic creds)
python3 -m lfpsy.cli agents invoke psy_pharm_001 \
    --query "Propose three novel 5-HT2A agonist tryptamines..." \
    > ../site/reports/dr_nakamura_analog_design.md

# Reg-pack
python3 -m lfpsy.cli reg-pack \
    --intake ../examples/intake_example.yaml \
    --output-dir ../site/reports/sample_regpack
```

## Brand rules

- Single accent color: `--accent: #1a4b8a` (deep lab-blue). No psychedelic purples.
- Single complementary accent: `--gold: #b28434`. Use sparingly.
- Serif for headlines (Iowan Old Style / Palatino fallback), sans-serif for
  body. Monospace reserved for code blocks and compound IDs.
- Copy tone: biotech-serious, evidence-cited. Not spiritual, not trippy,
  not "exciting journey" language. The product is regulatory drafting
  and SAR reasoning.
