https://qavalidation.com/2016/05/appium-setup-on-windows.html/
1. Install JAVA and ANDROID Studio
2. Download the desired version of Android you want to test. E.g. Android 10
    a. Create Pixel 3 emulator
3. Set ANDROID_HOME and JAVA_HOME
4. Install Appium GUI and Appium Inspector
5. Make Appium Inspector work with Appium GUI

https://qavalidation.com/2022/09/guide-to-appium-2-x-server-installation-and-changes.html/
6. Install Appium using npm
    a. npm install -g appium
    b. npm install -D appium
    c. appium -v
    d. appium driver install xcuitest
    e. appium driver install uiautomator2
    f. Type 'appium' in terminal to run
7. Install Appium doctor (To check if all required setup is properly installed in your machine)
    a. npm install -g appium-doctor
    b. appium-doctor --version
    c. appium-doctor —-android
    d. appium-doctor —-ios

Android Chrome version setup ()
https://appium.readthedocs.io/en/stable/en/writing-running-appium/web/chromedriver/
9.  Install the chrome version of your Android Emulator
    a. npm install appium --chromedriver_version=“74.0.3729”

// This command will automatically download the needed version of Chromedriver.
10. appium --allow-insecure chromedriver_autodownload

11. Run emulator using command line 
    a. adb devices
    b. cd c:\users\jazxz\AppData\Local\Android\sdk\emulator
    c. .\emulator -list-avds
    d. .\emulator -avd Pixel_3_Android_10


WEB Capabilities
capabilities = [{
    "appium:platformName": "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "Pixel_3_Android_10",
    "appium:platformVersion": "10",
    "appium:browserName": "Chrome",
    "appium:noReset": true
}]


NATIVE Capabilities
capabilities = [{
    "appium:platformName": "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "Pixel_3_Android_10",
    "appium:platformVersion": "10",
    "appium:appPackage": "com.android.chrome",    
    "appium:appActivity": "com.google.android.apps.chrome.Main"
    "appium:noReset": true
}]