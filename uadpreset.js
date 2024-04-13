
sf.app.launch({
    path: "/Applications/Universal Audio/Console.app",
});

sf.ui.app("com.uaudio.ua_mixer_engine").children.whoseRole.is("AXWindow").first.elementWaitFor();

/* sf.ui.app('com.uaudio.console2').appWaitForActive(); */

sf.ui.app("com.uaudio.ua_mixer_engine").mainWindow.mouseClickElement({
    relativePosition: {"x":150,"y":112},
});

sf.keyboard.press({
    keys: "cmd+s",
});

sf.keyboard.press({
    keys: "cmd+o",
});

/* sf.ui.app("com.uaudio.ua_mixer_engine").windows.whoseTitle.is("Choose a session file to open:").first.splitGroups.first.splitGroups.first.elementWaitFor(); */

sf.wait({
    intervalMs: 600,
});

sf.keyboard.type({
    text: "DRY",
});

sf.keyboard.press({
    keys: "return",
});

sf.wait({
    intervalMs: 200,
});

sf.ui.app("com.uaudio.ua_mixer_engine").mainWindow.mouseClickElement({
    relativePosition: {"x":-50,"y":-260},
    anchor: "BottomRight",
});

sf.wait({
    intervalMs: 200,
});

sf.ui.app("com.uaudio.ua_mixer_engine").mainWindow.mouseClickElement({
    relativePosition: {"x":-170,"y":-190},
    anchor: "BottomRight",
});

sf.wait({
    intervalMs: 100,
});

sf.ui.app("com.uaudio.ua_mixer_engine").mainWindow.mouseClickElement({
    relativePosition: {"x":-50,"y":-15},
    anchor: "BottomRight",
});

