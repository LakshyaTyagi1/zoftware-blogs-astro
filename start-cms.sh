#!/bin/bash

# TinaCMS + Astro Startup Script
# This script starts both TinaCMS and Astro dev servers

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting Zoftware Blog CMS...${NC}"

# Function to cleanup on exit
cleanup() {
    echo -e "\n${GREEN}Stopping all servers...${NC}"
    pkill -f "tinacms dev"
    pkill -f "astro dev"
    exit 0
}

# Trap cleanup on script exit
trap cleanup SIGINT SIGTERM

# Start TinaCMS on port 4001
echo -e "${BLUE}→ Starting TinaCMS on port 4001...${NC}"
npx tinacms dev --port 4001 > /tmp/tinacms.log 2>&1 &
TINA_PID=$!
echo -e "   TinaCMS PID: $TINA_PID"

# Wait for TinaCMS to start
sleep 5

# Check if TinaCMS is running
if curl -s -o /dev/null http://localhost:4001/admin; then
    echo -e "${GREEN}✓ TinaCMS is running${NC}"
else
    echo -e "\n${RED}✗ TinaCMS failed to start${NC}"
    cat /tmp/tinacms.log
    exit 1
fi

# Start Astro on port 4321 (default)
echo -e "${BLUE}→ Starting Astro dev server...${NC}"
npm run dev > /tmp/astro.log 2>&1 &
ASTRO_PID=$!
echo -e "   Astro PID: $ASTRO_PID"

echo -e "\n${GREEN}═══════════════════════════════════════════${NC}"
echo -e "${GREEN}🎉 Both servers are running!${NC}"
echo -e "${GREEN}═══════════════════════════════════════════${NC}"
echo ""
echo -e "TinaCMS Admin: ${BLUE}http://localhost:4001/admin${NC}"
echo -e "Blog Preview:   ${BLUE}http://localhost:4321${NC}"
echo ""
echo -e "Press ${BLUE}Ctrl+C${NC} to stop both servers"
echo -e "${GREEN}═══════════════════════════════════════════${NC}\n"

# Keep script running
wait
