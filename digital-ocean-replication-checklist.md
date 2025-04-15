# Digital Ocean Replication Checklist

## 1. Environment Setup ✅
- [x] Ensure Digital Ocean App Platform has Node.js 20.x runtime
- [x] Set up environment variables in Digital Ocean:
  - `NODE_ENV=production`
  - `NEXT_PUBLIC_SUPABASE_URL` (as secret)
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (as secret)
  - `PORT=3000`
  - `HOSTNAME=0.0.0.0`

## 2. Build Configuration ✅
- [x] Use the same build command as in Dockerfile:
  ```bash
  npm run build
  ```
- [x] Ensure build output includes:
  - `.next/standalone` directory
  - `.next/static` directory
  - `public` directory
  - `next.config.js`
  - `package.json`

## 3. Next.js Configuration ✅
- [x] Verify `next.config.js` has:
  ```javascript
  {
    output: 'standalone',
    experimental: {
      serverActions: true
    }
  }
  ```
- [x] No custom webpack configurations
- [x] No asset prefix settings

## 4. Directory Structure ✅
- [x] Ensure the following structure exists after build:
  ```
  .
  ├── .next/
  │   ├── standalone/
  │   │   └── server.js
  │   └── static/
  │       ├── chunks/
  │       └── css/
  ├── public/
  ├── next.config.js
  └── package.json
  ```

## 5. Run Command ✅
- [x] Use the same run command as in Dockerfile:
  ```bash
  node server.js
  ```

## 6. Static Asset Handling ✅
- [x] Verify static files are served from:
  - `/_next/static/*` for Next.js assets
  - `/public/*` for public assets

## 7. Build Cache Configuration ✅
- [x] Set up build cache paths in Digital Ocean:
  ```
  .next/cache
  node_modules
  ```

## 8. Health Check ✅
- [x] Configure health check endpoint:
  ```
  Path: /
  Port: 3000
  Initial Delay: 30
  Interval: 30
  Timeout: 10
  Success Threshold: 1
  Failure Threshold: 3
  ```

## 9. Deployment Verification Steps
1. [ ] Check build logs for any errors
2. [ ] Verify static assets are being served correctly
3. [ ] Confirm environment variables are properly set
4. [ ] Test API routes and server actions
5. [ ] Verify client-side navigation works
6. [ ] Check for any 404 errors in the browser console

## 10. Troubleshooting
If issues occur:
1. [ ] Check Digital Ocean build logs
2. [ ] Verify environment variables are correctly set
3. [ ] Ensure all required files are present in the build output
4. [ ] Check Next.js server logs for any errors
5. [ ] Verify static file serving configuration

## Notes
- ✅ The key to success is matching the exact configuration that works in our Docker setup
- ✅ Pay special attention to the build output structure and static file serving
- ✅ Environment variables must be set as secrets in Digital Ocean
- ✅ The standalone output mode is crucial for proper deployment
- ✅ Removed all custom path handling and subdomain configurations
- ✅ Simplified ingress rules to match Docker setup
- ✅ Added proper health check configuration 