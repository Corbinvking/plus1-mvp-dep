@echo off
echo Building the application...
call npm run build

echo Setting up standalone environment...
if exist standalone rmdir /s /q standalone
mkdir standalone
mkdir standalone\.next\static

echo Copying files...
xcopy /E /I /Y .next\standalone\* standalone\
xcopy /E /I /Y .next\static standalone\.next\static
xcopy /E /I /Y public standalone\public

echo Starting the server...
cd standalone
node server.js 