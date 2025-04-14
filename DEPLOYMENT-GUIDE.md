# Digital Ocean Deployment Guide

## Prerequisites
- [x] Digital Ocean account
- [x] Git repository (GitHub/GitLab) with your project code
- [x] Supabase project configured for production
- [x] Domain name (optional, but recommended for production)

## Step 1: Project Preparation

### 1.1 Environment Variables
Create a `.env.production` file with the following variables:
```env
NEXT_PUBLIC_SUPABASE_URL=https://ojhhzwqjngcjpnzwgefn.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_ENV=production
```

### 1.2 Supabase Configuration
1. Go to your Supabase project dashboard
2. Navigate to Authentication > URL Configuration
3. Add your production domain to:
   - Site URL
   - Redirect URLs
   - Additional Redirect URLs

### 1.3 Git Repository
1. Initialize git if not already done:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Push to your preferred Git platform (GitHub/GitLab)

### 1.4 Existing Digital Ocean Configuration
Your project already has a `.do/app.yaml` file with the following configuration:
```yaml
name: plus1-mvp
services:
  - name: web
    git:
      branch: main
      repo_clone_url: ${_REPO_URL}
    build_command: npm run build
    run_command: npm start
    envs:
      - key: NODE_ENV
        value: production
      - key: NEXT_PUBLIC_API_URL
        value: ${_API_URL}
    instance_count: 1
    instance_size_slug: basic-xxs
    http_port: 3000
    routes:
      - path: /
```

This configuration needs to be updated with:
1. Your actual GitHub repository URL
2. Your production API URL
3. Additional environment variables for Supabase

## Step 2: Digital Ocean Setup

### 2.1 Create New App
1. Log in to Digital Ocean
2. Navigate to App Platform
3. Click "Create App"
4. Choose "GitHub" or "GitLab" as source
5. Select your repository
6. Choose the branch to deploy (main/master)

### 2.2 Configure App
1. Select "Node.js" as the environment
2. The following settings are already configured in your `.do/app.yaml`:
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - HTTP Port: `3000`
   - Instance Size: basic-xxs
   - Instance Count: 1

### 2.3 Environment Variables
Add the following environment variables in Digital Ocean dashboard:
```env
NEXT_PUBLIC_SUPABASE_URL=https://ojhhzwqjngcjpnzwgefn.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_ENV=production
```

### 2.4 Resource Configuration
Your app is configured to use:
- Instance Size: basic-xxs (smallest tier)
- Instance Count: 1
- This is suitable for initial deployment and can be scaled up as needed

## Step 3: Domain Configuration (Optional)

### 3.1 Add Domain
1. In Digital Ocean App Platform:
   - Go to Settings > Domains
   - Add your domain
   - Follow the DNS configuration instructions

### 3.2 DNS Configuration
1. Add the following DNS records:
   ```
   Type: A
   Name: @
   Value: [Your App's IP Address]
   TTL: 3600
   ```
2. Add CNAME for www subdomain:
   ```
   Type: CNAME
   Name: www
   Value: your-domain.com
   TTL: 3600
   ```

## Step 4: Deployment

### 4.1 Initial Deployment
1. Click "Deploy" in Digital Ocean
2. Monitor the build logs for any errors
3. Wait for deployment to complete

### 4.2 Post-Deployment Checks
1. Verify the app is running:
   - Check the app URL
   - Test authentication flow
   - Verify Supabase connection
2. Check logs for any errors
3. Test all major features

## Step 5: Monitoring and Maintenance

### 5.1 Monitoring Setup
1. Set up monitoring in Digital Ocean:
   - Enable logging
   - Set up alerts
   - Monitor resource usage

### 5.2 Regular Maintenance
1. Keep dependencies updated
2. Monitor Supabase usage
3. Regular backups
4. Performance monitoring

## Troubleshooting

### Common Issues
1. Build Failures
   - Check build logs
   - Verify environment variables
   - Ensure all dependencies are in package.json

2. Connection Issues
   - Verify Supabase configuration
   - Check CORS settings
   - Verify environment variables

3. Performance Issues
   - Check resource usage
   - Optimize images
   - Review caching strategy

## Security Considerations

1. Environment Variables
   - Never commit .env files
   - Use secure environment variables in Digital Ocean
   - Rotate Supabase keys regularly

2. CORS Configuration
   - Configure Supabase CORS settings
   - Set up proper domain restrictions

3. Authentication
   - Enable secure session handling
   - Implement proper auth flows
   - Set up rate limiting

## Cost Optimization

1. Resource Usage
   - Monitor and adjust resource allocation
   - Use appropriate instance sizes
   - Implement caching strategies

2. Supabase Usage
   - Monitor database usage
   - Optimize queries
   - Implement proper indexing

## Next Steps

1. Set up CI/CD pipeline
2. Implement automated testing
3. Set up staging environment
4. Configure backup strategy
5. Implement monitoring and alerting

## References

- [Digital Ocean App Platform Documentation](https://docs.digitalocean.com/products/app-platform/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Supabase Production Checklist](https://supabase.com/docs/guides/platform/going-into-prod) 