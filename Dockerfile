FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy source code and env file
COPY . .

# Set environment variables for build
ENV NEXT_PUBLIC_SUPABASE_URL=https://ojhhzwqjngcjpnzwgefn.supabase.co
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qaGh6d3FqbmdjanBuendnZWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMDAzMDksImV4cCI6MjA1OTg3NjMwOX0.QJII-Ji7bdtWjhawbxDIEj8jDhU3THUTnEJxcelXdrI

# Build the app
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_PUBLIC_SUPABASE_URL=https://ojhhzwqjngcjpnzwgefn.supabase.co
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qaGh6d3FqbmdjanBuendnZWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMDAzMDksImV4cCI6MjA1OTg3NjMwOX0.QJII-Ji7bdtWjhawbxDIEj8jDhU3THUTnEJxcelXdrI

# Copy standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Ensure .next directory exists
RUN mkdir -p .next

# Copy additional necessary files
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./

# Set the correct permissions
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"] 