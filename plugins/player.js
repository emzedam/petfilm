
export default defineNuxtPlugin(() => {
    return {
        provide: {
            player: (stream = '') => {
                jwplayer.key = "uoW6qHjBL3KNudxKVnwa3rt5LlTakbko9e6aQ6VUyKQ=";
                var playerInstance = jwplayer("jwplayer");


                playerInstance.setAllowFullscreen(true)
                playerInstance.setup({
                    stretching: "uniform",
                    mute: "false",
                    menu: "true",
                    allowscriptaccess: "always",
                    wmode: "opaque",
                    sources: [{
                        file: stream.url,
                        type: stream.type,
                        label: "360p",
                        default: true,
                    }],
                    image: '',
                    width: "100vw",
                    height: "100vh",
                    autostart: true,
                    primary: "html5",
                    aspectratio: "16:9",
                    file: stream.url,
                    abouttext: "",
                    aboutlink: "http://localhost:3000/",
                    tracks: [
                      {
                        file: "",
                        label: "فارسی",
                        kind: "captions",
                        default: "true",
                      }, 
                    ],
                    captions: {
                        color: "#ffb800",
                        fontSize: 30,
                        backgroundOpacity: 0,
                    },
                    bufferLength: 360,  // افزایش طول بافر به ثانیه
                    preload: "auto"  // بافرینگ بیشتر به صورت خودکار
                });

                return playerInstance

                
            }
        }
    }
})