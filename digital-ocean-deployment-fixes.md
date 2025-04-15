# Digital Ocean Deployment Fixes

## Current Status
- ✅ Working locally with `.\setup-standalone.bat`
- ✅ Working in Docker with `docker-compose up --build`
- ❌ Not working in Digital Ocean deployment

## Directory Structure Tasks
- [x] Remove nested `.next` directory in standalone
- [x] Simplify static file copying to match Docker setup
- [x] Ensure proper root-level directory structure:
  ```
  /
  ├── .next/
  │   └── static/      # All static assets
  ├── public/          # Public files
  ├── server.js        # Standalone server
  └── package.json
  ```

## Build Command Tasks
- [x] Update build command to match working Docker setup:
  ```yaml
  build_command: |
    npm run build
    mkdir -p standalone/.next
    cp -r .next/standalone/* standalone/
    cp -r .next/static standalone/.next/static
    cp -r public standalone/public
  ```
- [x] Remove redundant static file copying
- [x] Remove duplicate `_next/static` directory creation

## Run Command Tasks
- [x] Update run command to use correct directory structure
- [x] Ensure proper environment variable handling
- [x] Verify NODE_ENV setting

## Static Asset Handling Tasks
- [x] Simplify ingress rules in app.yaml
- [x] Remove custom static file routing
- [x] Let Next.js handle static file serving
- [x] Ensure proper asset prefix configuration

## Next.js Configuration Tasks
- [x] Verify next.config.js settings match working setup
- [x] Remove any custom webpack configurations
- [x] Ensure proper asset prefix settings
- [x] Verify output settings for standalone mode

## Environment Variable Tasks
- [x] Verify all required environment variables are set
- [x] Check environment variable scoping
- [x] Ensure build-time vs runtime variable handling

## Testing Checklist
- [ ] Verify static file loading
- [ ] Check course thumbnail loading
- [ ] Verify CSS loading
- [ ] Check JavaScript chunk loading
- [ ] Test dynamic routes
- [ ] Verify API endpoints
- [ ] Check authentication flow

## Deployment Verification
- [ ] Monitor build logs
- [ ] Check runtime logs
- [ ] Verify static asset paths in browser
- [ ] Test all major application features
- [ ] Verify proper caching behavior
- [ ] Check performance metrics

## Notes
- Each change should be tested in isolation
- Compare network requests with working Docker setup
- Monitor build and runtime logs for issues
- Document any additional issues discovered

## Additional Considerations
- [ ] Setup proper health checks
- [ ] Configure error logging
- [ ] Setup monitoring
- [ ] Document deployment process
- [ ] Create rollback procedure 