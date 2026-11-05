import { defineConfig } from '@playwright/test'
const baseURL=process.env.PORTFOLIO_BASE_URL||'http://127.0.0.1:5173'
export default defineConfig({testDir:'./tests',use:{baseURL,browserName:'chromium',launchOptions:{executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE||undefined}},webServer:process.env.PORTFOLIO_SERVER_EXTERNAL?undefined:{command:'npm run dev',url:baseURL,reuseExistingServer:true,timeout:120000},reporter:'list'})
