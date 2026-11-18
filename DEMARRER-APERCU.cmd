@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 22.12 ou superieur est requis. Installez Node.js puis relancez ce fichier.
  pause
  exit /b 1
)
echo Ouvrez http://127.0.0.1:4173/ dans votre navigateur.
node scripts/serve-dist.mjs
pause
