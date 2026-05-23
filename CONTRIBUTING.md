# Contributing

## Branches
- `main` → Production (auto-deploys to Vercel)
- `staging` → Staging (auto-deploys preview)
- `feature/*` → PR to staging
- `hotfix/*` → PR to main

## Workflow
1. `git checkout -b feature/your-feature staging`
2. Make changes, commit with conventional commits
3. Push and create PR to staging
4. CI runs lint + build
5. After QA on staging, PR staging → main

## Commits
- `feat:` new feature
- `fix:` bug fix
- `style:` styling
- `refactor:` refactor
- `docs:` documentation
- `chore:` maintenance